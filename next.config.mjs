/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVICE_URL: process.env.SERVICE_URL,
  }
};

export default nextConfig;
