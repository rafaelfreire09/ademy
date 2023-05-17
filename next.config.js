/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    API_BASE_URL: 'http://localhost:5000',
  },
}

module.exports = nextConfig
