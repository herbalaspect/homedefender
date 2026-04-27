import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { pageMetadata } from "@/lib/seo";
import { cities, getCityBySlug } from "../../../../../content/cities";

/**
 * Dynamic route for the geo-targeted roof-replacement landing pages.
 *
 * URL pattern: /services/roofing/roof-replacement-{city|neighborhood}-wi
 *
 * Static routes under the same folder (e.g. /services/roofing/roof-repair,
 * built in Prompt 6) take precedence over this dynamic segment, so the broad
 * service-level pages and the geo-targeted pages coexist cleanly.
 */

const SLUG_PREFIX = "roof-replacement-";
const SLUG_SUFFIX = "-wi";

function citySlugFromRouteSlug(routeSlug: string): string | null {
  if (!routeSlug.startsWith(SLUG_PREFIX) || !routeSlug.endsWith(SLUG_SUFFIX)) {
    return null;
  }
  return routeSlug.slice(SLUG_PREFIX.length, -SLUG_SUFFIX.length);
}

function routeSlugFromCity(citySlug: string): string {
  return `${SLUG_PREFIX}${citySlug}${SLUG_SUFFIX}`;
}

export function generateStaticParams() {
  return cities.map((c) => ({ slug: routeSlugFromCity(c.slug) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const citySlug = citySlugFromRouteSlug(slug);
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  if (!city) return {};
  return pageMetadata({
    title: city.title,
    description: city.metaDescription,
    path: `/services/roofing/${slug}`,
  });
}

export default async function CityRoofReplacementPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const citySlug = citySlugFromRouteSlug(slug);
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  if (!city) notFound();
  return <CityPageTemplate city={city} />;
}
