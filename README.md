# <img src="src/site/images/icon-transparent.png" height=26> RSSまとめ（自分用）

作成したフィード：https://furunov.github.io/rss-feed/

制作者様のフィード：https://yamadashy.github.io/tech-blog-rss-feed/

独自のフィードを作って公開したい場合は自由にフォークしてください。

## サイトの追加方法
[src/resources/feed-info-list.ts](https://github.com/yamadashy/tech-blog-rss-feed/blob/main/src/resources/feed-info-list.ts) で管理しており、その一覧にない場合 issue を作っていただければ対応します。

## 仕組み
GitHub Actions で定期的に更新されており、サイトの生成は [Eleventy](https://www.11ty.dev/) を使用しています。

更新は多少遅延ありますが以下のタイミングで行います。
- 平日8時~22時の2時間おき
- 休日8時~20時の4時間おき

## ライセンス
MIT
