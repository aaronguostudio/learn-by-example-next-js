/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/examples",
        destination: "/examples/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
