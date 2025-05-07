/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.rybbit.io; connect-src 'self' https://app.rybbit.io;"
          }
        ]
      }
    ];
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
