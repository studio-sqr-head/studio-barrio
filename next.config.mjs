/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/portfolio",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      // Allow images from Sanity
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },

  experimental: {
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true,
  },
  logging: {
    fetches: { fullUrl: false },
  },
};

export default nextConfig;
