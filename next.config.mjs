/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cloudflare Workers には Next.js の画像最適化サーバーが無いため無効化
    unoptimized: true,
  },
  async headers() {
    // テストサイト: 全ページを検索エンジンの対象外にする
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet, noimageindex" }],
      },
    ];
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
