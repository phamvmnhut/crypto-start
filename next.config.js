/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/phamvmnhut/crypto-start-blog-data/main/images/**',
      },
    ],
  },
}

module.exports = nextConfig
