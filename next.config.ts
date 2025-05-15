import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/youseftaheri',
  images: { unoptimized: true }, // Required for static export
  trailingSlash: true, // Recommended for GitHub Pages
};

export default nextConfig;
