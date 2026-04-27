import { BUSINESS } from "@/lib/constants";

/**
 * Site-wide LocalBusiness JSON-LD. Drop into `<head>` (via `app/layout.tsx`)
 * or any page that needs a tighter cityServed scope (via the optional prop).
 *
 * Prompt 2 will expand this with: full openingHoursSpecification, Service
 * sub-types, and per-page enrichment (priceRange, sameAs links, aggregateRating
 * once reviews are real).
 */
export function LocalBusinessSchema({
  cityServed,
}: {
  /** Scope schema to a specific city for city/neighborhood pages. */
  cityServed?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: cityServed
      ? [{ "@type": "City", name: cityServed }]
      : BUSINESS.serviceAreas.map((c) => ({ "@type": "City", name: c })),
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.google].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
