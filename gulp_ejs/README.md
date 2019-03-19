# Gulp
## gulp_ejs
### 制作フォルダ
```
ejs
 ┣ dist
 ┣ pages.json
 ┗ template.ejs
```

### 複製タスク
- jsonデータを元にhtmlファイルを複製する

### 必要なパッケージ
- gulp-ejs
- gulp-convert
- gulp-rename



## EJS
EJSにてhtmlファイルを複製する  
jsonファイルにデータ直接入力してhtml複製する方法



### 1. テンプレートファイル作成
「template.ejs」内にマークアップのテンプレートを用意  
データを挿入するタグ箇所に```<%= data.xxxxx %>```を挿入する  
```<%= data.id %>```は複製後のファイル名になるため変更しない

### 2. 複製データを入力
「pages.json」に複製箇所のデータを入力する  
1.にて作成したdata.xxxxxに対応したデータを入力する

### 3. タスク実行
```
npx gulp ejs
```
/dist/に複製されたファイルが出力される



## EJS (csv)
### 制作フォルダ
```
csv
 ┣ dist
 ┣ json
 ┗ template.ejs
```

### 複製タスク
CSVデータをJSONファイルに変換し、出力されたJSONを利用して複製する方法  

#### CSVファイル のエンコード
CSVファイルは**UTF-8**で出力する必要があるため、**Googleスプレッドシート**でデータ作成し、CSV形式でダウンロードしたCSVファイルを使用する
WindowsのExcelからCSV形式で保存したものだとタスクエラーになり使用できない。


### 1. テンプレートファイル作成

「template.ejs」内にマークアップのテンプレートを用意  
データを挿入するタグ箇所に```<%= jsonEjs.xxxxx %>```を挿入する  
```<%= data.id %>```は複製後のファイル名になるため変更しない

### 2. スプレッドシートに複製データを入力
A1から隙間なしで表を作成する  
1行目に```<%= jsonEjs.xxxxx %>```の**xxxxx**部分を並べる  
```<%= data.id %>```は複製後のファイル名になるため変更しない  
それぞれの行に必要なデータを入力する(各行ごとに1ファイル)

id|xxxxx1|xxxxx2|xxxxx3|xxxxx4|xxxxx5
:---:|:---:|:---:|:---:|:---:|:---:
ファイル名|タイトル|ディスクリプション|キーワード|リード|テキスト
ファイル名|タイトル|ディスクリプション|キーワード|リード|テキスト
ファイル名|タイトル|ディスクリプション|キーワード|リード|テキスト


### 3. CSVファイル用意
スプレッドシートをCSV形式でローカルにダウンロード  
ファイル名は「data.csv」とし、/csv/に格納する

```
csv
 ┣ dist
 ┣ json
 ┣ data.csv
 ┗ template.ejs
```

### 4. CSVからJsonに変換
タスク実行
```
npx gulp csv
```
-> /json/の中に「data.json」が出力される
```
csv
 ┣ dist
 ┣ json
 ┃　┗data.json
 ┣ data.csv
 ┗ template.ejs
```

### 5. Jsonからhtml複製
タスク実行
```
npx gulp csvejs
```
-> /dist/の中に複製されたhtmlファイルが出力される
```
csv
 ┣ dist
 ┃　┣xxxx.html
 ┃　┗xxxx.html
 ┣ json
 ┃　┗data.json
 ┣ data.csv
 ┗ template.ejs
```
