var fs =require('fs'), //Node.jsの標準搭載機能 引き渡したファイルパスの内容を返す
    gulp = require('gulp'),
    ejs = require('gulp-ejs'),
    convert = require('gulp-convert'), // csvをjsonに変換
    rename = require('gulp-rename'); //ファイル名リネーム

gulp.task('ejs', function() {
  var jsonFile = './ejs/pages.json', //可変項目記載用
      tempFile = './ejs/template.ejs', //複製用テンプレート
      json = JSON.parse(fs.readFileSync(jsonFile, 'utf8')), //文字列を JSON として解析する
      pages = json.pages,
      id;

  //json内の配列分ループする
  for (var i = 0; i < pages.length; i++) {
    id = pages[i].id;

    gulp.src(tempFile)
      .pipe(ejs({
          jsonData: pages[i] // JSONのデータをejsに渡す
      }))
      .pipe(rename(id + '.html')) //idをhtml名に変換
      .pipe(gulp.dest('./ejs/dist/')); //出力
  }
});



//csv->json->ejs
gulp.task('csv', function(){
    //csvの読み込み・変換
    gulp.src('./csv/*.csv')
        .pipe(convert({ from: 'csv', to:'json'}))
        .pipe(rename({extname: '.json'}))
        .pipe(gulp.dest('./csv/json/'));
});

gulp.task('csvejs', function(){
    var jsonFile = './csv/json/data.json',  //csv吐き出し用
        tempFile = './csv/template.ejs', //複製用テンプレート
        jsonData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

    //jsonの読み込みとejsからHTMLの出力
    for(var i = 0; i < jsonData.length; i++) {
        var fileName = jsonData[i].id;

        gulp.src(tempFile)
            .pipe(ejs({
                jsonEjs: jsonData[i]
            }))
            .pipe(rename(fileName + '.html')) //id=ファイル名の場合
            // .pipe(rename(fileName + '/index.html')) //id=フォルダ名の場合（ファイル名はindex.html統一）
            .pipe(gulp.dest('./csv/dist/'));
    }


});




// デフォルト起動
// gulp.task('default', ['ejs']);


//<%= data.変数名 %> 文字列
//<%- data.変数名 %> タグ用（マークアップフォーマットのインデントは入れられない 左寄せになる）
