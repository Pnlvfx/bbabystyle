/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'pbs.twimg.com',
      'www.paypal.com',
      'images.pexels.com',
      'localhost',
      'api.bbabystyle.com',
      '192.168.1.22',
      '192.168.1.21',
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
