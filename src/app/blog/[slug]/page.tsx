import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { BUSINESS, BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "../../../../content/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return pageMetadata({ title: "Not found", description: "Page not found", path: "/blog", noindex: true });

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.imageUrl ?? undefined,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  });
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const CATEGORY_LABELS: Record<string, string> = {
  roofing: "Roofing",
  gutters: "Gutters",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <LocalBusinessSchema />

      <ArticleSchema
        title={post.title}
        description={post.description}
        url={`/blog/${post.slug}`}
        imageUrl={post.imageUrl ?? undefined}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        authorName={post.author ?? BUSINESS.name}
      />

      <article>
        <header
          className="py-16 sm:py-24"
          style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}
        >
          <Container>
            <nav className="mb-4 text-sm opacity-80">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span>{CATEGORY_LABELS[post.category] ?? post.category}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm opacity-90">
              <span>By {post.author ?? BUSINESS.name}</span>
              <span aria-hidden="true">•</span>
              <time dateTime={post.datePublished}>
                {formatDate(post.datePublished)}
              </time>
              {post.dateModified && post.dateModified !== post.datePublished && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>Updated {formatDate(post.dateModified)}</span>
                </>
              )}
            </div>
          </Container>
        </header>

        <Container className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            {post.imageUrl && (
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={1200}
                height={675}
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="mb-8 aspect-[16/9] w-full rounded-img object-cover"
              />
            )}
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
            />
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-gray-200 py-20 sm:py-28 bg-gray-50">
          <Container>
            <h2
              className="text-3xl tracking-[-0.0125em] sm:text-4xl lg:text-5xl"
              style={{ color: BRAND.colors.navy }}
            >
              Related posts
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block rounded-img border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: BRAND.colors.green }}
                  >
                    {CATEGORY_LABELS[p.category] ?? p.category}
                  </p>
                  <h3 className="mt-2 text-base font-medium leading-snug text-gray-900 line-clamp-3">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500">
                    {formatDate(p.datePublished)}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
