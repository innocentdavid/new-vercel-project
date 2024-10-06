/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/demo",
  //       destination: "/demo/katharinefoster",
  //       permanent: false, // Permanent redirect (308 status code)
  //     },
  //   ];
  // },
};

export default nextConfig;
