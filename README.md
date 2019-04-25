# Gulp

## 初期設定
Gulpインストール方法

### 1. npm initialize
ターミナルにてインストールするフォルダに移動後、npmを初期化
```
npm init -y
```
-> package.jsonが生成される

### 2. Gulpインストール

```
npm install -D gulp
```
-> node_modulesフォルダがにデフォルトパッケージが生成される  
　package-lock.jsonが生成される

#### バージョンを指定してインストールする場合
「gulp」の後に「@バージョン」としインストール  

```
npm install -D gulp@x.x.x
```



### 3. gulpfile.jsファイル作成
ローカルの「package.json」のある階層に「gulpfile.js」ファイルを新規作成し、処理を記述する



### 4. パッケージインストール
必要なパッケージをインストールする  
複数ある場合は、半角スペースを挟んで続けて記述する
```
npm install -D gulp-xxx gulp-xxx
```
#### バージョンを指定してインストールする場合
「gulp-パッケージ名」の後に「@バージョン」としインストール  

```
npm install -D gulp-xxx@x.x.x
```
