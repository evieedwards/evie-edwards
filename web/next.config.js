/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
    loaderFile: "./lib/cloudinary.ts",
  },
};

module.exports = nextConfig;
