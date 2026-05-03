import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Brief Prompt 7: /testimonial → /testimonials. The full redirect set
      // (service-archive/* etc) lands in Prompt 9.
      { source: "/testimonial", destination: "/testimonials", permanent: true },
    ];
  },
};

export default nextConfig;
