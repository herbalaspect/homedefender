import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical host is the bare domain (homedefenderusa.com — see
      // src/lib/constants.ts BUSINESS.url). Force all www traffic to non-www so
      // relative internal links can never strand a visitor on www while the
      // canonical tag points at non-www.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.homedefenderusa.com" }],
        destination: "https://homedefenderusa.com/:path*",
        permanent: true,
      },
      { source: "/testimonial", destination: "/testimonials", permanent: true },
      {
        source: "/service-archive/gutter-protection",
        destination: "/service/gutter-protection",
        permanent: true,
      },
      {
        source: "/service-archive/windows",
        destination: "/service/windows",
        permanent: true,
      },
      {
        source: "/service-archive/roofing",
        destination: "/service/roofing",
        permanent: true,
      },
      {
        source: "/services/roofing/roof-inspection",
        destination: "/services/roofing/roof-inspection-madison-wi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
