// プラグイン
const gulp = require('gulp');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob'); //パーシャルをまとめ読み込むこめる
const autoprefixer = require("gulp-autoprefixer"); //オートプレフィックス
const plumber = require('gulp-plumber'); //エラーによる強制停止を防止
const notify  = require('gulp-notify'); //エラーを通知
const sourcemaps = require('gulp-sourcemaps'); //ソースマップ

const postcss = require( 'gulp-postcss' ); //mqpicker用
const cssdeclsort = require('css-declaration-sorter'); //css記載順調整
const mqpacker = require("css-mqpacker"); //media queryまとめる

const watch = require('gulp-watch');  //監視
const changed = require('gulp-changed'); //変更のあったファイルのみ
const del = require('del'); //削除
const rename = require("gulp-rename");  //ファイル名リネーム

const browser = require("browser-sync"); //localサーバー
const connect = require('gulp-connect-php');//PHP用

const cleanCSS = require('gulp-clean-css'); //CSS圧縮
const imagemin = require("gulp-imagemin"); //画像圧縮
const pngquant = require("imagemin-pngquant"); //png圧縮
const mozjpeg  = require('imagemin-mozjpeg'); //jpg圧縮


// 作業用ディレクトリ
let srcDir      = './source';
let srcPageDir  = srcDir + '/directoryName';
let srcScssDir  = srcPageDir + '/scss';
let srcImgDir   = srcPageDir + '/images';

// 出力用ディレクトリ
let destDir     = './public';
let destPageDir = destDir + '/directoryName';
let destCssDir  = destPageDir + '/css';
let destImgDir  = destPageDir + '/images';

// 納品用フォルダ
let compDir     = './complete';
let compPageDir = compDir + '/directoryName';
let compCssDir  = compPageDir + '/css';

// プレフィックス用対象世代
let generations = ['last 2 versions', 'ie >= 10','iOS >= 8', 'Android >= 4.4']; //'last 2 versions', 'ie >= 10', 'iOS >= 8', 'Android >= 4.1'


// ----------------------------------------------------------------------------------------


// sassの実行
gulp.task('sass', function () {
  gulp.src([srcScssDir+'/**/*.scss'])  // scss ファイル全部対象
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")})) //エラーによる強制停止しない 通知表示
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))  // コンパイル スタイル エラーがあっても止めない
    .pipe(autoprefixer({browsers: generations, cascade: false})) //オートプレフィックス 世代指定
    .pipe( postcss([ cssdeclsort({ order: 'smacss' }) ]) )  //css記載順  alphabetical, smacss, concentric-css
    .pipe(postcss([mqpacker()])) //media queryまとめる
    .pipe(sourcemaps.write({includeContent: false})) //ソースマップ
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(changed(destCssDir))  //importファイル内までは感知しない
    .pipe(gulp.dest(destCssDir))// コンパイル後のcssファイルの格納先
    .pipe(browser.reload({stream:true}));  //ブラウザストリーム
});

// sass マップ不要
gulp.task('sassnomap', function () {
  del([destCssDir]);
  gulp.src([srcScssDir+'/**/*.scss'])  // scss ファイル全部対象
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")})) //エラーによる強制停止しない 通知表示
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))  // コンパイル スタイル エラーがあっても止めない
    .pipe(autoprefixer({browsers: generations, cascade: false})) //オートプレフィックス 世代指定
    .pipe( postcss([ cssdeclsort({ order: 'smacss' }) ]) )  //css記載順  alphabetical, smacss, concentric-css
    .pipe(postcss([mqpacker()])) //media queryまとめる
    // .pipe(sourcemaps.write({includeContent: false})) //ソースマップ
    // .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(sourcemaps.write())
    // .pipe(changed(destCssDir))  //importファイル内までは感知しない
    .pipe(gulp.dest(destCssDir))// コンパイル後のcssファイルの格納先
    .pipe(browser.reload({stream:true}));  //ブラウザストリーム
});


//browser-sync (PHP用)
gulp.task('server', function () {
	connect.server({
		port: 8080,
		// base: 'source'
		base: destDir
	}, function () {
		browser({
			proxy: 'localhost:8080'
			// proxy: '127.0.0.1:8080'
		});
	});
});



//「作業用ディレクトリ」から「出力用ディレクトリ」にファイルをコピー
gulp.task('copy', function() {
    gulp.src([
        srcDir+'/**/*.*', '!'+srcDir+'/**/*.scss', '!'+srcImgDir+'/**/*.*' // 「.scss」、画像ファイル以外
    ], {
        base: srcDir // コピー元ディレクトリ
    })
      .pipe(changed(destDir))
      .pipe(gulp.dest(destDir))
      .pipe(browser.reload({stream:true}));
});



// 画像圧縮
gulp.task('imgmin', function(){
  gulp.src([srcImgDir+'/**/*.+(jpg|jpeg|png|gif|svg)'])
    .pipe(plumber())
    .pipe(imagemin([
       pngquant({ quality: [0.70, 0.85], speed: 1, floyd:0 }),  //png圧縮
       mozjpeg({ quality:75, progressive: true }), //jpg圧縮
       imagemin.svgo(),  //svg圧縮
       imagemin.optipng(),
       imagemin.gifsicle()  //gif圧縮
     ]))
    .pipe(imagemin()) // 余計なガンマ情報を付加されたのを削除するためもう一度
    .pipe(changed(destImgDir))
    .pipe(gulp.dest(destImgDir))
    .pipe(browser.reload({stream:true}));
});


//watch
gulp.task('watch', function() {
    gulp.watch([srcDir+'/**/*.*'], ['copy']);
    gulp.watch([srcScssDir+'/**/*.scss'],['sass']);
    return watch([srcImgDir+'/**/*.*'], function() {  //img圧縮はgulp-watch使わないと監視できない
        return gulp.start(['imgmin']);
    });
});



// デフォルト起動
gulp.task('default', ['imgmin','copy', 'sass', 'server', 'watch']);



// 出力用ディレクトリ内全削除
gulp.task('clean', function () {
  del([destDir+'/**','!'+destDir]);
});


//納品時
//CSS JS圧縮   「出力用ディレクトリ」から「納品用ディレクトリ」にファイルをコピー
gulp.task('complete', function () {
  gulp.src([destCssDir+'/**/*.css','!'+destCssDir+'/**/*.min.css'])  // min以外のcssファイル対象
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(compCssDir));

  //元からminのものはそのまま複製
  gulp.src([ destCssDir+'/**/*.min.css'], { base: destCssDir }) // コピー元ディレクトリ
    .pipe(gulp.dest(compCssDir));

  //css以外はそのまま複製
  gulp.src([ destDir+'/**/*.*', '!'+destCssDir+'/**/*.css*' ], { base: destDir }) // コピー元ディレクトリ
    .pipe(gulp.dest(compDir));

});
