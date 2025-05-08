/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
  },
  swcMinify: true,
}

module.exports = nextConfig 