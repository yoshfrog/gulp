# Gulp

## gulp_all

### 実行タスク
- PHP、静的ページ混合使用可
- SCSSコンパイル
- image圧縮
- Local Server起動、ウォッチ
- 複数プロジェクトを一つのnode_modulesで管理


### 設定方法
### 1. npm initialize
ターミナルにてhtdocs直下に移動後、npmを初期化
```
npm init -y
```
-> package.jsonが生成される

### 2. Gulpインストール
htdocs直下に「node_modules」をインストール  
```
npm install -D gulp
```
-> node_modulesフォルダにデフォルトパッケージが生成される  
　package-lock.jsonが生成される

### 3. パッケージインストール
必要なパッケージをインストール  
複数ある場合は、半角スペースを挟んで続けて記述する
```
npm install -D gulp-xxx gulp-xxx
```
-> node_modulesフォルダに各パッケージがインストールされる  


#### 必要なパッケージ
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



### 4. プロジェクト用ディレクトリ作成
htdocs直下に各プロジェクト用のディレクトリを作成  
「source」フォルダを作成し、制作ファイルを格納する

### 5. gulpfile.jsファイル作成
各プロジェクト作成用フォルダに「gulpfile.js」ファイルを新規作成し、処理を記述する

### 6. node_modules配置
各プロジェクト用のディレクトリ内で、「htdocs」直下にインストールした「node_modules」フォルダのショートカットを配置する


### 7. タスク実行
ターミナルにて各プロジェクトフォルダに移動後、gulp実行  
各プロジェクト単位で実行する

```
npx gulp
```




### 制作用フォルダ

```
htdocs
 ┣ package.json
 ┣ package-lock.json
 ┣ node_modules
 ┃  ┗ gulp-sass etc...
 ┃
 ┣ project01
 ┃  ┣ gulpfile.js
 ┃  ┣ node_modules - ショートカット.lnk
 ┃  ┗ source
 ┃      ┗ directoryName
 ┃          ┣ index.html
 ┃          ┗ scss
 ┃              ┣ style.scss
 ┃              ┣ _breadcrumb.scss
 ┃              ┣ _font.scss
 ┃              ┣ _footer.scss
 ┃              ┣ _header.scss
 ┃              ┣ _main.scss
 ┃              ┣ _mixin.scss
 ┃              ┣ _reset.scss
 ┃              ┣ _responsive.scss
 ┃              ┣ _sitebase.scss
 ┃              ┣ _utility.scss
 ┃              ┣ _variable.scss
 ┃              ┗ _widget.scss
 ┃
 ┣ project02
 ┃  ┣ gulpfile.js
 ┃  ┣ node_modules - ショートカット.lnk
 ┃  ┗ source
 ┃      ┗ directoryName
 ┃          ┣ index.html
 ┃          ┗ scss
 ┃              ┣ style.scss
 ┃              ┣ _breadcrumb.scss
 ┃              ┣ _font.scss
 ┃              ┣ _footer.scss
 ┃              ┣ _header.scss
 ┃              ┣ _main.scss
 ┃              ┣ _mixin.scss
 ┃              ┣ _reset.scss
 ┃              ┣ _responsive.scss
 ┃              ┣ _sitebase.scss
 ┃              ┣ _utility.scss
 ┃              ┣ _variable.scss
 ┃              ┗ _widget.scss
 ┃
 ┗ project03
     ┗ 同上
```


