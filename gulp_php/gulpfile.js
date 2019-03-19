var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	connect = require('gulp-connect-php');

// 作業用ディレクトリ
var srcDir = './source';


gulp.task('server', function () {
	connect.server({
		port: 8080,
		base: srcDir
	}, function () {
		browserSync({
			proxy: 'localhost:8080'
			// proxy: '127.0.0.1:8080'
		});
	});
});
