import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/yousef-portfolio' : '',
  images: { unoptimized: true }, // Required for static export
};

export default nextConfig;
