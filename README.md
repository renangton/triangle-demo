# このプロジェクトについて

# Web からアクセス

このアプリケーションは Firebase Hosting を利用して Web 上に公開しています。

https://triangle-demo-20e1d.web.app

からアクセスできます。

# アプリケーションの仕様

三角形の種類を判別する Web アプリケーションです。

三角形の各辺の長さを入力して計算するボタンを押すと三角形の種類をアラートに表示します。

三角形を作れる場合の判定条件は以下として、それぞれ三角形の判定結果を表示する。

1. 3 つの辺の長さが等しい場合、正三角形と表示する。
2. 2 つの辺の長さが等しい場合、二等辺三角形と表示する。
3. 3 つの辺の長さがどれも異なる場合、不等辺三角形と表示する。

入力項目は以下の制約があります。

- 正の整数のみ
- 半角数字のみ
- 1~99 まで

入力規則に違反する場合、違反した項目の下部に「1 から 99 の整数を半角数字で入力してください。」というメッセージを表示します。
入力がない場合、違反した項目の下部に「入力してください。」というメッセージを表示します。

対応ブラウザは最新版の Chrome です。
