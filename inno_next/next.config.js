/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN:
      '5d4e00209e92ca1a73d4acd1d4a83e5faf0c9f41fe0cce30ca713b86ca4c2064ffefcb0bdf2aafbf9c95a46b04ca2ac96173726d088e9373165974338409782ea176774ecc29dc6b5ca66dbd77e60d583be10b86eef58338b8a17bc434082f65c4b716d0dbc7f7a91a3fb17e9a67ea92be1d1525c0a13342371c980e4d8aeaa3',
    SERVER_URL: 'http://65.0.125.87:1337'
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
