/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  // Correction de l'assetPrefix
  assetPrefix: '/',
  trailingSlash: true,
  // Optimisation pour la production
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
};

module.exports = nextConfig;