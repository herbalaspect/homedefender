import { pageMetadata } from "@/lib/seo";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { DefenderShieldUpsell } from "@/components/sections/DefenderShieldUpsell";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getDistinctTestimonials } from "../../content/testimonials";

export const metadata = pageMetadata({
  title: "Madison Roofing Contractor | Home Defender Remodeling",
  description:
    "Roofing, gutters, and windows for Madison, Dane County, and southern Wisconsin. Free estimates, written warranties, no high-pressure sales — call today.",
  path: "/",
});

export default function HomePage() {
  // One testimonial each: roofing, gutters, windows. Never duplicate quote
  // text across the page (CLAUDE.md SEO rule).
  const testimonialTrio = getDistinctTestimonials([
    "roofing",
    "gutter",
    "windows",
  ]);

  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Process />
      <Testimonials items={testimonialTrio} />
      <DefenderShieldUpsell />
      <ServiceArea />
      <FinalCTA />
    </main>
  );
}
