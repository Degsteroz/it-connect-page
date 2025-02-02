import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dtecpsig5/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'it-conect.notion.site',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'img.notionusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
