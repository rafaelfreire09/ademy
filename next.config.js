/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    API_BASE_URL: 'http://localhost:5000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kbimages1-a.akamaihd.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
