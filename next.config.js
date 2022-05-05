/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
}

module.exports = nextConfig
