// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // optional: specific path pattern
        // pathname: '/photo-*/**',
      },
    ],
  },
}

module.exports = nextConfig;
