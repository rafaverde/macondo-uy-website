import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "macondouy",
        port: "8890",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
