/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wsrv.nl",
      },
    ],
  },
  async redirects() {
    return [
      // Redirect all jeremy0x.dev traffic to www.jeremy0x.dev
      {
        source: "/:path*",
        has: [{ type: "host", value: "jeremy0x.dev" }],
        destination: "https://www.jeremy0x.dev/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
