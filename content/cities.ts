/**
 * City + neighborhood pages — generated from this single data file by the
 * dynamic route at src/app/services/roofing/roof-replacement-[city]/page.tsx
 *
 * Populated in Prompt 4 (cities) and Prompt 4.5 (neighborhoods). The schema
 * here is the union of both — a "city" entry sets isNeighborhood: false, a
 * "neighborhood" entry sets isNeighborhood: true and fills neighborhoodOnly
 * fields.
 *
 * Source copy:
 *   - 11 cities:        docs/HomeDefender_Website_Content_Library.txt §3
 *   - 6 neighborhoods:  docs/HomeDefender_Neighborhood_Strategy.txt §4
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface CityPage {
  /** URL slug — full path becomes /services/roofing/roof-replacement-{slug} */
  slug: string;
  cityName: string;
  cityState: string; // "WI"
  /** True for the 6 neighborhood pages; false for the 11 city pages. */
  isNeighborhood: boolean;
  /** For neighborhoods only — the city this neighborhood belongs to. */
  parentCity?: string;
  /** SEO meta */
  title: string;
  metaDescription: string;
  h1: string;
  /** Hero opener paragraph — 150–200 words for neighborhoods. */
  hero: string;
  /** Local context paragraph — architecture, climate, real-world detail. */
  localContext: string;
  /**
   * Permitting + jurisdiction section. Required for neighborhoods to clear
   * thin-content bar; optional for cities (template falls back to generic).
   */
  permittingSection?: string;
  /** Roofing considerations specific to this place. Required for neighborhoods. */
  roofingConsiderations?: string;
  /** 5 FAQs per page — substantively distinct between pages. */
  faqs: FAQ[];
  testimonial: {
    quote: string;
    author: string; // "[Customer Name]" until verified
    location: string;
  };
  /** Slugs of neighboring city or neighborhood pages to cross-link. */
  neighbors: string[];
}

export const cities: CityPage[] = [
  // Populated in Prompt 4 + 4.5.
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
