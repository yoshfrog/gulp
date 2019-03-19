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


### 3. gulpfile.jsファイル作成
ローカルの「package.json」のある階層に「gulpfile.js」ファイルを新規作成し、処理を記述する



### 4. パッケージインストール
必要なパッケージをインストールする  
複数ある場合は、半角スペースを挟んで続けて記述する
```
npm install -D gulp-xxx gulp-xxx
```
