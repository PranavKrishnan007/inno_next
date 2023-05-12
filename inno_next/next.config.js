/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN:
      '1ef3884129ed0ef2c67f4d08af5af5f5c2cc574dcf345f6e34d00ee92f6d15f9cc4a6903d2a96f547c52a84007e96be4ac00cdf35deba802437351f961919ce68d37d5e0ee4cd70de8dd2bdea23de1f2304a839a7638d7bc1b731eb8d3f4d0f7b739cea3cf6d9ae8b7f88868f86e676c3ff351b680e8377ff788ee6119447d6b',
    SERVER_URL: 'http://13.234.142.76'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

module.exports = nextConfig
