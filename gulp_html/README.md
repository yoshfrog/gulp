# Gulp


## gulp_html

### 制作用フォルダ
```
gulp_html
 ┣ public
 ┣ source
 ┃  ┗ directoryName
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
- localserver起動、ウォッチ


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

### タスク実行

```
npx gulp
```
