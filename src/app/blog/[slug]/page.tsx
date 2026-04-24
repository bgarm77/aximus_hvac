import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug, formatDate } from "@/lib/blog";
import { safeJsonLd } from "@/lib/safeJsonLd";

const SITE_URL = "https://aximushvac.com";
const PHONE_DISPLAY = "(000) 000-0000";
const PHONE_HREF = "tel:+10000000000";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: { absolute: `${post.title} | Aximus HVAC` },
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.ogImage ? [{ url: post.ogImage }] : undefined,
    },
  };
}

const mdxComponents = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="text-3xl sm:text-4xl font-bold text-navy mt-10 mb-4" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-2xl sm:text-3xl font-bold text-navy mt-10 mb-4" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-xl font-semibold text-navy mt-8 mb-3" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-text-secondary leading-relaxed my-4" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-blue font-semibold hover:text-navy underline underline-offset-2" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 my-4 space-y-2 text-text-secondary" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 my-4 space-y-2 text-text-secondary" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote className="border-l-4 border-sky bg-surface px-5 py-3 my-6 text-navy italic" {...props} />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono text-navy" {...props} />
  ),
  pre: (props: React.ComponentProps<"pre">) => (
    <pre className="rounded-xl bg-navy text-white p-4 my-6 overflow-x-auto text-sm" {...props} />
  ),
  hr: () => <hr className="my-10 border-border-subtle" />,
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author ?? "Aximus HVAC",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Aximus HVAC",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: post.ogImage ? [post.ogImage] : undefined,
    keywords: post.keywords?.join(", "),
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
      )}

      {/* HEADER */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-text-secondary mb-6">
            <Link href="/blog" className="hover:text-blue">
              ← Back to Resources
            </Link>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-[1.1]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary">
            <span className="font-medium text-navy">{post.author}</span>
            <span aria-hidden>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>•</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-base">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Related services */}
          <aside className="mt-14 rounded-2xl bg-surface border border-card-border p-6">
            <h2 className="text-lg font-semibold text-navy">Related services</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/services/vrv-vrf-maintenance" className="text-blue font-semibold hover:text-navy">
                  VRV/VRF Preventive Maintenance →
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-vrf-repair" className="text-blue font-semibold hover:text-navy">
                  24/7 Emergency VRF Repair →
                </Link>
              </li>
              <li>
                <Link href="/services/daikin-vrv-service" className="text-blue font-semibold hover:text-navy">
                  Daikin VRV Service →
                </Link>
              </li>
            </ul>
          </aside>

          {/* FAQ */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-14" aria-labelledby="post-faq">
              <h2 id="post-faq" className="text-2xl sm:text-3xl font-bold text-navy mb-6">
                Frequently Asked Questions
              </h2>
              <dl className="space-y-4">
                {post.faqs.map((f) => (
                  <div key={f.q} className="bg-white border border-card-border rounded-2xl p-6">
                    <dt>
                      <h3 className="text-lg font-semibold text-navy">{f.q}</h3>
                    </dt>
                    <dd className="mt-3 text-sm text-text-secondary leading-relaxed">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="border-t border-border-subtle" aria-labelledby="post-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="post-cta" className="text-3xl sm:text-4xl font-bold text-navy">
                Need help with your VRF system?
              </h2>
              <p className="mt-3 text-text-secondary">
                Schedule a free assessment. We&apos;ll walk your equipment,
                review your service history, and give you a written scope before
                any work starts.
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
