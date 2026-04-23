import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate, type BlogPostMeta } from "@/lib/blog";
import { safeJsonLd } from "@/lib/safeJsonLd";

const SITE_URL = "https://aximushvac.com";
const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: { absolute: "VRF/VRV Resources & Insights | Aximus HVAC California" },
  description:
    "Practical VRF/VRV maintenance tips, Daikin and Mitsubishi error code guides, and industry updates for Orange County facility and property managers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "VRF/VRV Resources & Insights | Aximus HVAC",
    description:
      "Field-tested guides on VRF maintenance, error codes, Title 24, and R-454B from Orange County's VRF specialist.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

interface BlogListPageProps {
  searchParams: Promise<{ page?: string }>;
}

function paginate<T>(items: T[], page: number, perPage: number) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    current,
    totalPages,
    total,
  };
}

function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group bg-white border border-card-border rounded-2xl p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="flex items-center gap-3 text-xs font-medium text-text-secondary">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>•</span>
        <span>{post.readingMinutes} min read</span>
      </div>
      <h2 className="mt-3 text-xl font-semibold text-navy leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:text-blue">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
        {post.description}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-navy"
      >
        Read more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="bg-white border border-card-border rounded-2xl p-10 sm:p-14 text-center">
      <div className="mx-auto w-14 h-14 rounded-xl bg-surface text-blue inline-flex items-center justify-center mb-5">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4Z" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-navy">
        Articles coming soon
      </h2>
      <p className="mt-3 text-text-secondary max-w-xl mx-auto">
        Check back for VRF/VRV maintenance tips, industry updates, and expert
        guides. In the meantime, explore our{" "}
        <Link href="/services" className="text-blue font-semibold hover:text-navy">
          service pages
        </Link>{" "}
        or request a{" "}
        <Link href="/contact" className="text-blue font-semibold hover:text-navy">
          free VRF assessment
        </Link>
        .
      </p>
    </div>
  );
}

function Pagination({ current, totalPages }: { current: number; totalPages: number }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex items-center justify-center gap-2"
    >
      {current > 1 && (
        <Link
          href={current - 1 === 1 ? "/blog" : `/blog?page=${current - 1}`}
          className="inline-flex h-10 px-4 items-center rounded-lg border border-border-control text-sm font-medium text-navy hover:bg-surface"
        >
          Previous
        </Link>
      )}
      {pages.map((p) => (
        <Link
          key={p}
          href={p === 1 ? "/blog" : `/blog?page=${p}`}
          aria-current={p === current ? "page" : undefined}
          className={
            p === current
              ? "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue text-white text-sm font-semibold"
              : "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-control text-sm font-medium text-navy hover:bg-surface"
          }
        >
          {p}
        </Link>
      ))}
      {current < totalPages && (
        <Link
          href={`/blog?page=${current + 1}`}
          className="inline-flex h-10 px-4 items-center rounded-lg border border-border-control text-sm font-medium text-navy hover:bg-surface"
        >
          Next
        </Link>
      )}
    </nav>
  );
}

export default async function BlogIndexPage({ searchParams }: BlogListPageProps) {
  const { page: pageParam } = await searchParams;
  const pageNum = Number.parseInt(pageParam ?? "1", 10) || 1;
  const all = getAllPosts();
  const { items, current, totalPages } = paginate(all, pageNum, POSTS_PER_PAGE);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${SITE_URL}/blog`,
    name: "Aximus HVAC — VRF/VRV Resources & Insights",
    description:
      "Field notes on VRF/VRV maintenance, error codes, and commercial HVAC from Orange County's VRF specialist.",
    publisher: {
      "@type": "Organization",
      name: "Aximus HVAC",
      url: SITE_URL,
    },
    blogPost: items.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `${SITE_URL}/blog/${p.slug}`,
      description: p.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(blogSchema) }}
      />

      {/* HERO */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              Resources
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              VRF/VRV Resources &amp; Insights
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Field-tested guides on VRF maintenance, Daikin and Mitsubishi error
              codes, Title 24, and the R-454B refrigerant transition — written for
              Orange County facility and property managers.
            </p>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-16 sm:py-20" aria-labelledby="posts-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="posts-heading" className="sr-only">
            Blog posts
          </h2>
          {items.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
              <Pagination current={current} totalPages={totalPages} />
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-subtle" aria-labelledby="blog-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="blog-cta" className="text-3xl sm:text-4xl font-bold text-navy">
                Need help with your VRF system?
              </h2>
              <p className="mt-3 text-text-secondary">
                Schedule a free assessment. We&apos;ll walk your equipment, review
                your service history, and give you a written scope before any
                work starts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Request Assessment
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-blue text-blue text-sm font-semibold hover:bg-blue hover:text-white transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
