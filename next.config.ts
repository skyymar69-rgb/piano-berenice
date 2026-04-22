import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), autoplay=(self), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/audio/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800" },
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index.htm", destination: "/", permanent: true },
      { source: "/professeur-piano-nice.htm", destination: "/professeur", permanent: true },
      { source: "/cours-piano-nice.htm", destination: "/cours/piano", permanent: true },
      { source: "/cours-solfege-nice.htm", destination: "/cours/solfege", permanent: true },
      { source: "/eveil-musical-nice.htm", destination: "/cours/eveil-musical", permanent: true },
      { source: "/ecole-piano-plan-acces.htm", destination: "/plan-acces", permanent: true },
      { source: "/mentions-legales.htm", destination: "/mentions-legales", permanent: true },
    ];
  },
};

export default nextConfig;
