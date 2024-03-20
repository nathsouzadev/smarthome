/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: process.env.URL,
  }
};

export default nextConfig;
