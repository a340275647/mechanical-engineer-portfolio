import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mechanical-engineer-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
