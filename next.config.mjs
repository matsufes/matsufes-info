/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cloudflare Workers には Next.js の画像最適化サーバーが無いため無効化
    unoptimized: true,
  },
  async redirects() {
    return [
    {
        "source": "/navigation",
        "destination": "https://map.matsufes.info/",
        "statusCode": 301
    },
    {
        "source": "/booth",
        "destination": "/search",
        "statusCode": 301
    },
    {
        "source": "/search/:slug",
        "destination": "/booth/:slug",
        "statusCode": 301
    }
];
  },
};

export default nextConfig;
