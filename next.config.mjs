/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/Toronto',
        destination: 'https://breakawaycamps.ca/2-day-jan-2026',
        permanent: true,
      },
      {
        source: '/toronto',
        destination: '/2-day-jan-2026',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
