/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
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
    enableUndici: false,
    appDir: true,
  },
}

module.exports = nextConfig
