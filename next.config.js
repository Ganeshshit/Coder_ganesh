/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn-images-1.medium.com',
      'miro.medium.com',
      'medium.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
