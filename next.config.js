/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      type: 'asset/resource', // This tells Webpack to treat HTML files as resources
    });

    // Add fallbacks for server-side modules
    config.resolve.fallback = {
      fs: false,
      child_process: false,
      net: false,
      tls: false,
    };

    return config;
  },
};

module.exports = nextConfig;
