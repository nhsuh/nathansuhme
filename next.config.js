/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    mdxRs: true,
  },
  images: {
    domains: ['i.scdn.co'], // spotify album art
  },
};
module.exports = nextConfig; 