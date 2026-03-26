import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.epaviste-idf-pro.fr",
          },
        ],
        destination: "https://epaviste-idf-pro.fr/:path*",
        permanent: true,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/blog/enlevement-epave-weekend-versailles",
        destination: "/blog/epave-weekend-78",
        permanent: true,
      },
      {
        source: "/blog/epave-sans-cle-villejuif",
        destination: "/blog/epave-sans-cle-94",
        permanent: true,
      },
      {
        source: "/blog/epave-sous-sol-creteil",
        destination: "/blog/epave-sous-sol-94",
        permanent: true,
      },
      {
        source: "/blog/epave-sans-batterie-sarcelles",
        destination: "/blog/epave-sans-batterie-95",
        permanent: true,
      },
      {
        source: "/blog/epave-sans-carte-grise-78",
        destination: "/blog/epave-carte-grise-perdue-78",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
