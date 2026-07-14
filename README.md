# My Site

サイトエディタから書き出された Next.js プロジェクトです。
Cloudflare Workers（OpenNext）でそのままデプロイできます。

## 開発

```bash
npm install
npm run dev
```

## Cloudflareへのデプロイ

```bash
npm run deploy
```

（初回は `npx wrangler login` でログインしてください）

### GitHub連携で自動デプロイする場合（Workers Builds）

Cloudflareダッシュボード → Workers & Pages → Create →
このリポジトリを接続し、以下を設定します。

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx opennextjs-cloudflare deploy`

以後、エディタの「公開」（= このリポジトリへのpush）のたびに自動で
ビルド・公開されます。
