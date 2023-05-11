/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN:
      '9faf40dac427e3a5a944b1517c6761772d92a7a946674534f1ae2aa837568569206ad4651fc083337c68a5ec2689e818885614cbfc0d91270fe6a42f6d89a70c3d691cb1f4ff75abe76045026adb55016fb86291c95987a2b01b1eb51dd0631abdfd6658f1cb30c5f89be048821ea00724acdb2e5f51855c99b680cbaa9be7fc',
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
