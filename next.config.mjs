/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cloudflare Workers には Next.js の画像最適化サーバーが無いため無効化
    unoptimized: true,
  },
};

export default nextConfig;
