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


### 必要なパッケージ
- gulp-sass
- gulp-autoprefixer
- gulp-plumber
- gulp-notify
- gulp-sourcemaps
- gulp-postcss
- css-mqpacker
- gulp-watch
- gulp-changed
- del
- gulp-rename
- browser-sync
- gulp-clean-css
- gulp-imagemin
- imagemin-pngquant
- imagemin-mozjpeg
- gulp-connect-php


### タスク実行

```
npx gulp
```
