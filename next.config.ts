import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
