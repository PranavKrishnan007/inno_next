/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN:
      'ed88fb9d33a6b90be4258113def0212f27991887a5fa3597011d08100bd1af86f8abf0413677cfa0eaeeb06d94934cf582471f43d5da6b6550decc158e1c2b052e5d38dfbd089ccd06b4b6bfed9b75b92f7f5e2a1b30c6e39b685a7b433a57cce626e65029fa3bd717b5b7f0e5c990ed7798df26bebf53fd0a639e0cd6698027',
    SERVER_URL: 'http://localhost:1337'
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
