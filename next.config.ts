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
        hostname: 'disk.yandex.ru',
        port: '',
        pathname: '/d/OWOnQLB3EZH14g/full/**',
      },
    ],
  },
};

export default nextConfig;
