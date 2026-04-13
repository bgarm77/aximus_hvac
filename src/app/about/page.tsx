import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: "About Aximus | VRF Specialist HVAC Orange County",
  description:
    "Aximus is Orange County's dedicated VRF specialist. EPA 608 Universal, Daikin VRV factory trained, NATE certified. Schedule your free VRF system assessment.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Aximus | VRF Specialist HVAC Orange County",
    description:
      "Why we built Aximus: a VRF specialist for Orange County facility managers, not a generalist who googles error codes on-site.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

interface Value {
  title: string;
  body: string;
  icon: React.ReactNode;
}

const values: Value[] = [
  {
    title: "Expertise",
    body: "VRF service is all we do. Our technicians are factory-trained on Daikin VRV and Mitsubishi Electric platforms, carry VRF-specific diagnostic tools, and fix communication errors on the first visit.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Speed",
    body: "4-hour emergency response anywhere in Orange County on our Premium maintenance agreement. We dispatch a factory-trained tech, not whoever the call center can reach first.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    body: "Flat-rate diagnostics, written scopes before work starts, and a documented service report after every visit. You always know what we did, what it cost, and what we recommend next.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
        <path d="M14 3v6h6" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
];

interface Credential {
  title: string;
  body: string;
}

const credentials: Credential[] = [
  {
    title: "EPA 608 Universal",
    body: "Every technician is EPA 608 Universal certified, authorized to service all refrigerant types — including R-410A, R-32, and the R-454B transition on current VRF equipment.",
  },
  {
    title: "Daikin VRV Factory Trained",
    body: "Hands-on training on Daikin VRV IV, VRV Aurora, and VRV LIFE platforms. We read Daikin error codes fluently and keep OEM parts access for warranty-compliant repairs.",
  },
  {
    title: "NATE Certified",
    body: "North American Technician Excellence certification on commercial HVAC. The national standard facility managers and insurers look for on service records.",
  },
];

const faqs = [
  {
    q: "Why did you start Aximus?",
    a: "Our founder spent 15 years in commercial HVAC and MEP and kept seeing the same pattern: generalist contractors treating VRF systems like oversized split units, misdiagnosing communication errors, and burning through customer goodwill on repeat callbacks. Facility managers deserve a specialist. Aximus exists to be that specialist.",
  },
  {
    q: "Why VRF only? Don't most HVAC companies cover everything?",
    a: "Most do, and that's the problem. VRF is a different platform — inverter-driven compressors, refrigerant branch controllers, multi-unit communication networks, brand-specific diagnostic protocols. A generalist who services split systems on Monday and boilers on Tuesday can't carry the depth a Daikin VRV IV or Mitsubishi City Multi system needs. We chose to specialize so we're the best at one thing.",
  },
  {
    q: "Where are you based and where do you serve?",
    a: "We're based in Orange County and serve all of it — Irvine, Anaheim, Costa Mesa, Newport Beach, Santa Ana, Tustin, Orange, Huntington Beach, and beyond. We're actively expanding into Los Angeles and San Diego counties. If your site is nearby, call us and we'll confirm coverage.",
  },
  {
    q: "What certifications does Aximus hold?",
    a: "Our technicians hold EPA 608 Universal certification, Daikin VRV factory training, and NATE certification. We carry CSLB C-20 licensing and $1M+ general liability insurance. Certifications and proof of insurance are available on request for GCs and property managers.",
  },
  {
    q: "What kinds of buildings do you typically serve?",
    a: "Class A and B office towers, medical office buildings, mixed-use properties, and commercial portfolios ranging from 20,000 to 150,000 square feet per site. We also partner with general contractors and MEP firms as a VRF commissioning subcontractor.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  name: "About Aximus HVAC",
  description:
    "Aximus is Orange County's dedicated VRF/VRV service specialist. Factory-trained on Daikin VRV and Mitsubishi Electric platforms.",
  mainEntity: {
    "@type": "HVACBusiness",
    name: "Aximus HVAC",
    url: SITE_URL,
    telephone: "+1-800-555-1234",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Orange County, California" },
      { "@type": "AdministrativeArea", name: "Los Angeles County, California" },
      { "@type": "AdministrativeArea", name: "San Diego County, California" },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    hasCredential: [
      "EPA 608 Universal Certification",
      "Daikin VRV Factory Training",
      "NATE Certification",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              About Aximus
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              Why Aximus — Orange County&apos;s VRF/VRV Specialist
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              We started Aximus because facility managers deserve a VRF specialist HVAC
              contractor in Orange County — not a generalist who googles error codes on-site.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_28px_rgba(10,33,71,0.12)] border border-card-border">
            <Image
              src="/images/services/about-skyline.webp"
              alt="Orange County commercial skyline — the Class A and B office buildings Aximus services with VRV and VRF systems"
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. FOUNDER STORY */}
      <section className="py-16 sm:py-20" aria-labelledby="story-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="text-3xl sm:text-4xl font-bold text-navy">
            How Aximus Started
          </h2>
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Aximus was founded by a commercial HVAC and MEP engineer with 15 years in the
              field — most of them spent on large Daikin VRV and Mitsubishi City Multi systems
              across Southern California office towers, medical buildings, and mixed-use
              properties.
            </p>
            <p>
              The same story played out on almost every call. A facility manager had been
              through two or three general HVAC contractors. Each one ran basic diagnostics,
              chased a symptom, swapped a part, and left. The communication error came back
              within a month. Warranty paperwork was incomplete. Nobody knew the building&apos;s
              specific VRV model well enough to fix it on the first visit.
            </p>
            <p>
              Aximus was built to end that cycle. We don&apos;t service residential splits. We
              don&apos;t run boiler calls on the side. We work exclusively on commercial VRF
              and VRV systems, and every technician who rolls to your site has been
              factory-trained on the platform they&apos;re diagnosing.
            </p>
            <p>
              If you&apos;re a facility manager or property management firm tired of repeat
              callbacks and missing documentation, that&apos;s exactly why we exist.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MISSION PULL QUOTE */}
      <section className="bg-surface border-y border-border-subtle" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 id="mission-heading" className="sr-only">
            Our Mission
          </h2>
          <figure>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              className="text-sky mb-4"
            >
              <path d="M7 7h4v4H8c0 2 1 3 3 3v2c-3 0-5-2-5-5V7Zm8 0h4v4h-3c0 2 1 3 3 3v2c-3 0-5-2-5-5V7Z" />
            </svg>
            <blockquote className="text-2xl sm:text-3xl font-semibold text-navy leading-snug">
              We started Aximus because facility managers deserve a VRF specialist, not a
              generalist who googles error codes on-site.
            </blockquote>
            <figcaption className="mt-6 text-sm font-medium text-text-secondary">
              — Our mission, and the first thing we tell every new client.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. CREDENTIALS */}
      <section className="py-16 sm:py-20" aria-labelledby="credentials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="credentials-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Credentials That Protect Your Warranty
            </h2>
            <p className="mt-3 text-text-secondary">
              The certifications manufacturers, insurers, and ownership groups want to see on
              your service records.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((c) => (
              <article
                key={c.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-navy">{c.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VALUES */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              What We Stand For
            </h2>
            <p className="mt-3 text-text-secondary">
              Three promises we make to every facility manager and property management firm we
              work with.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <article
                key={v.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface text-blue mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SERVICE AREA */}
      <section className="py-16 sm:py-20" aria-labelledby="area-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="area-heading" className="text-3xl sm:text-4xl font-bold text-navy">
            Based in Orange County, Expanding Across Southern California
          </h2>
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Our home base is Orange County. We cover Irvine, Anaheim, Costa Mesa, Newport
              Beach, Santa Ana, Tustin, Orange, Huntington Beach, and every commercial corridor
              in between. See the full list on our{" "}
              <Link
                href="/service-areas"
                className="text-blue font-semibold hover:text-navy"
              >
                service areas page
              </Link>
              .
            </p>
            <p>
              We&apos;re actively expanding into Los Angeles and San Diego counties for
              multi-site property portfolios. If you manage buildings across Southern
              California and want one VRF vendor with standardized reporting, talk to our{" "}
              <Link
                href="/property-managers"
                className="text-blue font-semibold hover:text-navy"
              >
                property management team
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-navy mb-10">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <dt>
                  <h3 className="text-lg font-semibold text-navy">{f.q}</h3>
                </dt>
                <dd className="mt-3 text-sm text-text-secondary leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="border-t border-border-subtle" aria-labelledby="final-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="final-cta" className="text-3xl sm:text-4xl font-bold text-navy">
                Schedule Your Free VRF System Assessment
              </h2>
              <p className="mt-3 text-text-secondary">
                We&apos;ll walk your equipment, review your service history, and give you a
                written scope before any work starts. No trip fee, no pressure.
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
