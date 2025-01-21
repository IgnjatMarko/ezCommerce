import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coffee.alexflipnote.dev',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;
