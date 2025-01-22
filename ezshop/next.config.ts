/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coffee.alexflipnote.dev',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  }
}

module.exports = nextConfig;