/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN:
      'f371715c6cb0caa8b3b1db450a93284da1469835b80c50612df52e655cb81783887ee9251848b5826f0c3433318316ce8f35db0c1b3a9f592c98df959ac0515001534976aa96107997a59b73a231d8c01d8308cd6f268e95ad44d46d2eeaf631b77e7df4a2db744a8dafd662992a444ce506fbddebfb9f13b745ff5f0d6694e3'
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
