# Gulp

## gulp_html_php
PHP、静的ページ混合使用向け  
静的ページはブラウザシンク、同期する  
PHPはブラウザ表示はするが、保存で自動リロードはしないため、都度手動でリロードする必要あり  


### 制作用フォルダ
```
gulp_html
 ┣ public
 ┣ source
 ┃  ┗ directoryName
 ┃      ┣ index.php
 ┃      ┗ scss
 ┃          ┣ style.scss
 ┃          ┣ _breadcrumb.scss
 ┃          ┣ _font.scss
 ┃          ┣ _footer.scss
 ┃          ┣ _header.scss
 ┃          ┣ _main.scss
 ┃          ┣ _mixin.scss
 ┃          ┣ _reset.scss
 ┃          ┣ _responsive.scss
 ┃          ┣ _sitebase.scss
 ┃          ┣ _utility.scss
 ┃          ┣ _variable.scss
 ┃          ┗ _widget.scss
 ┗ gulpfile.js
```


### 制作用タスク

- SCSSコンパイル
- image圧縮
- 静的ページ localserver起動、ウォッチ
- PHPブラウザ表示
- PHP localserver起動 (**※ウォッチによるブラウザ同期はできない**)


#### 必要なパッケージと作成時のバージョン
バージョンによっては仕様が変更されgulpfile.jsの更新が必要になる場合あり  

- gulp : 3.9.1
- gulp-sass : 4.0.1
- gulp-autoprefixer : 6.0.0
- gulp-plumber : 1.2.0
- gulp-notify : 3.2.0
- gulp-sourcemaps : 2.6.4
- gulp-postcss : 8.0.0
- css-mqpacker : 7.0.0
- gulp-watch : 5.0.1
- gulp-changed : 3.2.0
- del : 3.0.0
- gulp-rename : 1.4.0
- browser-sync : 2.24.7
- gulp-clean-css : 3.10.0
- gulp-imagemin : 5.0.3
- imagemin-pngquant : 7.0.0
- imagemin-mozjpeg : 8.0.0
- gulp-connect-php : 1.0.3


### タスク実行

```
npx gulp
```
