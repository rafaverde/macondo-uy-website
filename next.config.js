/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "macondouy",
        port: "8890",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "macondopropaganda.com",
        port: "",
        pathname: "/clientes/macondouy/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
