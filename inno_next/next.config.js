/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN:
      'f83855de485a8aa3d1282e41f66bf683d57922b3d009ca9205c4d9bb3d5a1a374dd61dcc4674624714405acb6dd3e92eb0de2ff4d4688afc4024872c5c5553f7551fde530911186db907bfd8870a8c5e29c57c3abb64268527e8ceb8c7b1c429f3dbd520d1685d74b7edc442c3c5a8883f70939d55f906b26a32dd296d8af131'
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
