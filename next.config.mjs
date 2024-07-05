/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mui/x-charts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
