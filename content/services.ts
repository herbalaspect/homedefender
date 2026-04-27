/**
 * Service category + sub-service descriptions. Populated in Prompt 6.
 */

export type ServiceCategory = "roofing" | "gutter" | "windows";

export interface Service {
  slug: string;
  category: ServiceCategory;
  /** Whether this is geo-targeted (city in slug). */
  isGeoTargeted: boolean;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
}

export const services: Service[] = [
  // Populated in Prompt 6.
];
