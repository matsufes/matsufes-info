# 第56回松ヶ崎祭

オープンソースのビジュアルWebサイトビルダー [Tsumu](https://github.com/matsufes/site-editor) から書き出された Next.js プロジェクトです。
エディタに依存しない普通の Next.js アプリなので、Next.js が動く場所ならどこでも公開できます。

## 開発

```bash
npm install
npm run dev
```

## 公開先

| 公開先 | 方法 | 備考 |
|---|---|---|
| Vercel | このリポジトリをインポート | 設定不要。本番以外のブランチにはプレビューURLが付きます |
| Netlify | このリポジトリをインポート | プレビューにはブランチデプロイを有効にします |
| Node.js | `npm run build && npm start` | 任意のサーバー・コンテナ |
| Cloudflare Workers | 下の Workers Builds か `npm run deploy` | OpenNext 経由で動きます |

JSONを取得するページは **ISR**（更新間隔ごとに裏でページを作り直す）で配信します。Cloudflare Workers で ISR を動かすには追加の設定（R2 のキャッシュとキュー）が要るため、Cloudflare で公開するときはエディタのサイト設定で公開先を「Cloudflare Workers」にしてください。

### Cloudflare Workers Builds

Cloudflare ダッシュボード → Workers & Pages → Create でこのリポジトリを接続し、次のように設定します。

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx opennextjs-cloudflare deploy`
- Non-production branch deploy command: `npx opennextjs-cloudflare upload`（プレビュー用ブランチにプレビューURLが付きます）

以後、エディタの「公開」（= このリポジトリへの push）のたびに自動でビルド・公開されます。
