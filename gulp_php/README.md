# Gulp

## gulp_php

PHP単独での使用の場合に利用  
Public用複製機能等は設けていない  
sourceフォルダ内で完結のシンプル仕様

### 制作用フォルダ
```
gulp_php
 ┣ source
 ┃  ┗ index.php
 ┗ gulpfile.js
```


### 制作用タスク

- PHPブラウザ表示
- Local Server起動  
**※ウォッチによるブラウザ同期はできない**

### 必要なパッケージ
- gulp
- browser-sync
- gulp-connect-php

### タスク実行
```
npx gulp server
```
