/**
 * Single source of truth for NAP (name/address/phone), brand details, and
 * service area. Used by Footer, schema components, contact page, etc.
 *
 * Edit values here, not inline in components.
 */

export const BUSINESS = {
  name: "Home Defender Remodeling",
  legalName: "Home Defender Remodeling",
  domain: "homedefenderusa.com",
  url: "https://homedefenderusa.com",
  phone: "(608) 925-3576",
  phoneTel: "+16089253576",
  email: "info@homedefenderusa.com",
  address: {
    streetAddress: "3342 Ridgeway Ave",
    addressLocality: "Madison",
    addressRegion: "WI",
    postalCode: "53704",
    addressCountry: "US",
  },
  geo: {
    // Approximate Madison, WI coordinates — refine if needed for GBP geo match.
    latitude: 43.0731,
    longitude: -89.4012,
  },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "08:00",
    closes: "18:00",
  },
  /**
   * Cities served by city-page coverage. The 11 city pages and 6 neighborhood
   * pages are generated from this data plus content/cities.ts.
   */
  serviceAreas: [
    "Madison",
    "Sun Prairie",
    "Verona",
    "Fitchburg",
    "Middleton",
    "Waunakee",
    "Cottage Grove",
    "McFarland",
    "Stoughton",
    "Oregon",
    "DeForest",
    "Monona",
  ] as const,
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61570822227803",
    google: "https://maps.app.goo.gl/PqGYGV7MYZofukGC9",
    // linkedin: not active yet — do NOT add until profile exists
    // instagram: not active yet — do NOT add until profile exists
  },
} as const;

export const BRAND = {
  colors: {
    navy: "#1A2E3B",
    green: "#3A7D5C",
  },
  font: "Arial, sans-serif",
} as const;

export const TRACKING = {
  gaMeasurementId: "G-527SS464GW",
} as const;

/**
 * Defender Shield program details. Lead-only positioning — never expose
 * payment UI. CTAs point at /contact?service=defender-shield.
 */
export const DEFENDER_SHIELD = {
  name: "The Defender Shield",
  pricePerYear: 295,
  primaryCta: "Schedule a Free Consultation",
  primaryCtaHref: "/contact?service=defender-shield",
  secondaryLine: `Or call (608) 925-3576 to enroll over the phone`,
} as const;
