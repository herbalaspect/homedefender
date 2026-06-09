/**
 * Customer testimonials. Sourced from reference-site/pages/testimonial.html
 * (existing live site copy), rewritten for the canonical brand name and the
 * non-superlative tone.
 *
 * Customer names that aren't verified MUST stay as "[Customer Name]" with
 * isPlaceholder: true. The CLAUDE.md rule is non-negotiable.
 *
 * Verified real reviews are listed first within each service so they win the
 * "first match" lookup used by getDistinctTestimonials/getTestimonialsByService.
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
      "Bobby from Home Defender was so nice to work with and it was refreshing to have someone with experience and knowledge walk me through the process. I would highly recommend this company to anyone looking for gutter protection. The entire process from start to finish was professional and they all did an amazing job.",
    author: "Sam Mueller",
    location: "Madison, WI",
    service: "gutter",
    isPlaceholder: false,
  },
  {
    id: "gutter-2",
    quote:
      "I am very happy with my gutters. Makes my house look great. The installers did a very good job.",
    author: "Lorene Irmen",
    location: "Madison, WI",
    service: "gutter",
    isPlaceholder: false,
  },
  {
    id: "gutter-3",
    quote:
      "Just had gutters and gutter guards installed. Only 4 hours and they are seamless and beautiful. The guards are extruded aluminum and are light but very strong. And I doubt they will corrode ever! Very happy with the price and process! Thanks Bobby n crew!",
    author: "Rory Olsen",
    location: "Madison, WI",
    service: "gutter",
    isPlaceholder: false,
  },
  {
    id: "gutter-4",
    quote:
      "Bobby Goglio was very knowledgeable about roofs and had excellent communication skills. The crew putting in gutter protection screens and repairs were conscientious and hard working. Has our top recommendation.",
    author: "Mary Klam",
    location: "Madison, WI",
    service: "gutter",
    isPlaceholder: false,
  },
  {
    id: "gutter-5",
    quote:
      "Home Defender Remodeling's gutter protection system has been a relief. No more climbing ladders or worrying about clogs during storms. The team was professional, efficient, and left everything spotless.",
    author: "[Customer Name]",
    location: "Madison, WI",
    service: "gutter",
    isPlaceholder: true,
  },
  {
    id: "roofing-1",
    quote:
      "Bobby from Home Defender was extremely knowledgeable about roofing and demonstrated excellent communication throughout the process. He quickly secured a great financing option for us. While there was a minor issue during installation, it was promptly resolved through clear and effective communication. The finished roof looks great, and we highly recommend their services.",
    author: "Shallon Musiimenta",
    location: "Madison, WI",
    service: "roofing",
    isPlaceholder: false,
  },
  {
    id: "roofing-2",
    quote:
      "Our roof was damaged in a storm, and Home Defender Remodeling replaced it quickly and professionally. The quality is excellent and we feel safer knowing the home is protected.",
    author: "[Customer Name]",
    location: "Madison, WI",
    service: "roofing",
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
