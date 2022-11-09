const withPWA = require("next-pwa")({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = withPWA({
  // reactStrictMode: true,
  pwa: {
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
  }
})