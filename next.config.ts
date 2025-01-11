import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.prod.website-files.com",
      "assets.aceternity.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ], // Add the external domain here
  },
};

export default nextConfig;
