/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/framer/index.html',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

