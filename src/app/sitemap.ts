import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";
import { cities } from "../../content/cities";
import { getAllPosts } from "../../content/blog";

const BASE = BUSINESS.url;

type Entry = MetadataRoute.Sitemap[number];

const STATIC_ROUTES: ReadonlyArray<{
  path: string;
  priority: number;
  changeFrequency: Entry["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" },
  { path: "/defender-shield", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/how-much-does-roof-replacement-cost-madison",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service/roofing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service/gutter-protection", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service/windows", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/services/roofing/roof-replacement",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/services/roofing/roof-repair", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/services/roofing/emergency-roof-repair",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/roofing/asphalt-shingle-roofing",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/roofing/metal-roofing",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/roofing/storm-damage-roof-repair-madison-wi",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/roofing/roof-inspection-madison-wi",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/gutter/gutter-installation",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/gutter/gutter-replacement",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/gutter/gutter-repair",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/gutter/gutter-cleaning",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: Entry[] = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const cityEntries: Entry[] = cities.map((c) => ({
    url: `${BASE}/services/roofing/roof-replacement-${c.slug}-wi`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: c.isNeighborhood ? 0.7 : 0.9,
  }));

  const blogEntries: Entry[] = getAllPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified ?? p.datePublished),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...cityEntries, ...blogEntries];
}
