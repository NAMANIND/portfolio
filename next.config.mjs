/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/evolve",
        destination: "http://13.235.78.233:3000",
      },
    ];
  },
};

export default nextConfig;
