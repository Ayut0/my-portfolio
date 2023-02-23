/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: { appDir: true },
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
