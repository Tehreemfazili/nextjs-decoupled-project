/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs-decouple-project.ddev.site",
        pathname: "//sites/default/files/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
