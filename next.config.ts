import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/server",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
