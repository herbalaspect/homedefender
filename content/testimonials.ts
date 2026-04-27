/**
 * Customer testimonials. Populated in Prompt 3 from
 * reference-site/pages/testimonial.html.
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
  // Populated in Prompt 3.
];

export function getTestimonialsByService(service: ServiceType, limit = 3) {
  return testimonials.filter((t) => t.service === service).slice(0, limit);
}
