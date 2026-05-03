import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getAllPosts } from "../../../content/blog";

export const metadata = pageMetadata({
  title: "Roofing & Home Improvement Blog | Madison, WI",
  description:
    "Honest guides to roof replacement, hail damage, gutter protection, and choosing a contractor in Madison and Dane County. Plain-language advice from a local crew.",
  path: "/blog",
});

const CATEGORY_LABELS: Record<string, string> = {
  roofing: "Roofing",
  gutters: "Gutters",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <section
        className="py-20 sm:py-28"
        style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
      >
        <Container>
          <p className="text-sm uppercase tracking-wider opacity-80">Blog</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-medium leading-tight">
            Honest advice for Madison-area homeowners
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg opacity-90">
            Roofing, gutters, storm damage, and how to choose a contractor — written by
            a local crew, with no marketing fluff. Catch problems before they get
            expensive.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-img border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex h-full flex-col"
                >
                  {post.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: BRAND.colors.green }}
                    >
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </p>
                    <h2 className="mt-2 text-xl font-medium leading-snug text-gray-900 line-clamp-3">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-4 flex-1">
                      {post.description}
                    </p>
                    <p className="mt-4 text-xs text-gray-500">
                      {formatDate(post.datePublished)}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
