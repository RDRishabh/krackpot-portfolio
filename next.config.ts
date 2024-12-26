import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.prod.website-files.com",
      "assets.aceternity.com",
    ], // Add the external domain here
  },
};

export default nextConfig;
