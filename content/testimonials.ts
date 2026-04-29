/**
 * Customer testimonials. Sourced from reference-site/pages/testimonial.html
 * (existing live site copy), rewritten for the canonical brand name and the
 * non-superlative tone.
 *
 * Customer names that aren't verified MUST stay as "[Customer Name]" with
 * isPlaceholder: true. The CLAUDE.md rule is non-negotiable.
 */

export type ServiceType = "roofing" | "gutter" | "windows" | "general";

export interface Testimonial {
  id: string;
  quote: string;
  author: string; // "[Customer Name]" until verified
  location: string;
  service: ServiceType;
  isPlaceholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "gutter-1",
    quote:
      "Home Defender Remodeling's gutter protection system has been a relief. No more climbing ladders or worrying about clogs during storms. The team was professional, efficient, and left everything spotless.",
    author: "[Customer Name]",
    location: "Madison, WI",
    service: "gutter",
    isPlaceholder: true,
  },
  {
    id: "windows-1",
    quote:
      "The new windows have completely changed how the house feels. They look great, and we've already noticed lower energy bills. The Home Defender Remodeling team made the process stress-free.",
    author: "[Customer Name]",
    location: "Sun Prairie, WI",
    service: "windows",
    isPlaceholder: true,
  },
  {
    id: "roofing-1",
    quote:
      "Our roof was damaged in a storm, and Home Defender Remodeling replaced it quickly and professionally. The quality is excellent and we feel safer knowing the home is protected.",
    author: "[Customer Name]",
    location: "Madison, WI",
    service: "roofing",
    isPlaceholder: true,
  },
  {
    id: "general-1",
    quote:
      "From the first consultation to the final installation, the Home Defender Remodeling team was thorough. They answered every question and the workmanship matched what they promised.",
    author: "[Customer Name]",
    location: "Verona, WI",
    service: "general",
    isPlaceholder: true,
  },
];

export function getTestimonialsByService(service: ServiceType, limit = 3) {
  return testimonials.filter((t) => t.service === service).slice(0, limit);
}

/**
 * Pull one testimonial per requested service, useful for the homepage's
 * three-card section (one roofing, one gutter, one windows).
 */
export function getDistinctTestimonials(services: ServiceType[]): Testimonial[] {
  return services
    .map((s) => testimonials.find((t) => t.service === s))
    .filter((t): t is Testimonial => Boolean(t));
}
