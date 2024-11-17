/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
  },
  // Correction de l'assetPrefix
  assetPrefix: '/',
  trailingSlash: true,
};

module.exports = nextConfig;
