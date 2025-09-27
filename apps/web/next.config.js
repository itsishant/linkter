import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack configuration
  webpack: (config) => {
    // Add support for resolving @repo packages
    config.resolve.alias = {
      ...config.resolve.alias,
      '@repo': path.resolve(__dirname, '../../packages'),
    };
    return config;
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure build output
  output: 'standalone',
  
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
  
  // Configure images
  images: {
    domains: [],
  },
  
  // Transpile packages
  transpilePackages: ['@repo/*'],
};

export default nextConfig;
