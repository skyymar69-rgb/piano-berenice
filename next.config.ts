import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index.htm", destination: "/", permanent: true },
      {
        source: "/professeur-piano-nice.htm",
        destination: "/professeur",
        permanent: true,
      },
      {
        source: "/cours-piano-nice.htm",
        destination: "/cours/piano",
        permanent: true,
      },
      {
        source: "/cours-solfege-nice.htm",
        destination: "/cours/solfege",
        permanent: true,
      },
      {
        source: "/eveil-musical-nice.htm",
        destination: "/cours/eveil-musical",
        permanent: true,
      },
      {
        source: "/ecole-piano-plan-acces.htm",
        destination: "/plan-acces",
        permanent: true,
      },
      {
        source: "/mentions-legales.htm",
        destination: "/mentions-legales",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
