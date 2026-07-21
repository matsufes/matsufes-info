/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cloudflare Workers には Next.js の画像最適化サーバーが無いため無効化
    unoptimized: true,
  },
  async redirects() {
    return [
    {
        "source": "/page-5",
        "destination": "https://matsufes.info/",
        "statusCode": 301
    }
];
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
