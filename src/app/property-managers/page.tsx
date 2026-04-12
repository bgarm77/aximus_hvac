import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import PricingCards from "@/components/PricingCards";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: "HVAC Vendor for Commercial Property Management | Aximus",
  description:
    "One VRF service vendor for your entire portfolio. Standardized reporting, portfolio pricing, and 4-hour response across California commercial property portfolios.",
  alternates: { canonical: "/property-managers" },
  openGraph: {
    title: "HVAC Vendor for Commercial Property Management | Aximus",
    description:
      "Consolidate VRF service across every building you manage. Portfolio discounts, quarterly performance reviews, and one point of contact.",
    url: `${SITE_URL}/property-managers`,
    type: "website",
  },
};

interface Pain {
  title: string;
  body: string;
}

const pains: Pain[] = [
  {
    title: "Inconsistent service quality across sites",
    body: "One tech knows your Irvine tower. Another misdiagnoses a communication fault in Anaheim. Service reports come back in three different formats — or don't come back at all.",
  },
  {
    title: "Managing five vendors instead of one",
    body: "Each property has its own HVAC contractor, its own callout rates, its own warranty paperwork, and its own invoice cadence. Your AP team spends more time coding invoices than your engineers spend on the equipment.",
  },
  {
    title: "No portfolio-wide visibility",
    body: "Ownership asks how VRF spend trends across the portfolio. You can't answer. Each vendor reports differently, and nobody tracks asset age, refrigerant usage, or repeat-callback rates across buildings.",
  },
];

interface Benefit {
  title: string;
  body: string;
}

const benefits: Benefit[] = [
  {
    title: "One vendor, every VRF building",
    body: "Aximus becomes the single HVAC vendor for every VRF and VRV system in your portfolio — Daikin, Mitsubishi, LG, Toshiba. One MSA, one call, one invoice format.",
  },
  {
    title: "Consistent technician quality",
    body: "Every site gets a factory-trained VRF specialist. Not a call-center dispatch. We assign a lead technician to your portfolio so the same people know your buildings.",
  },
  {
    title: "Standardized service reports",
    body: "Every visit ends with the same report template: system status, refrigerant charge, error history, parts replaced, and recommended next actions. Portable across your asset management system.",
  },
  {
    title: "Centralized billing",
    body: "Consolidated monthly invoicing with line items per property, or per-property billing if your AP system needs it that way. We match your workflow, not the other way around.",
  },
  {
    title: "Quarterly portfolio performance reviews",
    body: "Every 90 days we sit down with your team and walk the numbers: uptime by property, callbacks, refrigerant trends, capital recommendations. Data you can show ownership.",
  },
  {
    title: "4-hour emergency response",
    body: "Premium MSA clients get a 4-hour emergency response window anywhere in Orange County. A factory-trained VRF tech on-site — not whoever the dispatcher can reach first.",
  },
];

interface Step {
  n: string;
  title: string;
  body: string;
}

const steps: Step[] = [
  {
    n: "1",
    title: "Capability statement",
    body: "We send a one-page capability statement with certifications, insurance, licensing, and references from other property management firms. Forward it to ownership or procurement with zero friction.",
  },
  {
    n: "2",
    title: "Pilot assessment on one property",
    body: "Pick one building. We walk the equipment, pull the service history, and deliver a written assessment — no trip fee. You see our documentation before signing anything portfolio-wide.",
  },
  {
    n: "3",
    title: "Portfolio MSA",
    body: "If the pilot lands, we move to a portfolio Master Service Agreement. Standardized PMA pricing, portfolio discount of 10–15% for 5+ properties, and one onboarding call to align billing and reporting.",
  },
];

const faqs = [
  {
    q: "What does the portfolio discount actually cover?",
    a: "10–15% off Preventive Maintenance Agreement pricing for property management firms with 5+ VRF buildings under a single MSA. The discount applies to PMA fees, not emergency service or project work — though T&M rates are also reduced under the same agreement.",
  },
  {
    q: "Can you work with our existing property management software?",
    a: "Yes. We deliver service reports as PDFs and structured data exports compatible with Yardi, MRI, AppFolio, and Building Engines. If your team uses a different system, send us a sample work order and we'll match the format.",
  },
  {
    q: "Do you handle warranty coordination with the OEM?",
    a: "Yes. As a Daikin factory-trained contractor, we file warranty claims directly with Daikin for VRV equipment under warranty. For Mitsubishi, LG, and Toshiba systems we coordinate through the regional distributor. Warranty paperwork lives in your portfolio report so it's portable if ownership changes.",
  },
  {
    q: "How do you handle billing across multiple LLCs or ownership entities?",
    a: "Per-property invoicing is standard. We bill each LLC or ownership entity separately using the property code and GL line items your AP team provides. Consolidated monthly summary available on request for your internal reporting.",
  },
  {
    q: "What happens if a tenant complains about an indoor unit outside scheduled maintenance?",
    a: "Property management clients get a dedicated dispatch line. Tenant complaints route directly to us, we coordinate access with the property manager, and close the ticket with documentation sent to both you and the tenant contact on file.",
  },
  {
    q: "Can you take over mid-year from our current HVAC vendor?",
    a: "Yes, and we do it often. We pull service history from the outgoing vendor where possible, walk each building for a baseline condition report, and update the asset register before the first scheduled visit. No gap in coverage.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "HVAC Vendor for Commercial Property Management",
  provider: {
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
  },
  areaServed: { "@type": "State", name: "California" },
  description:
    "Single-vendor VRF/VRV service for commercial property management portfolios. Standardized reporting, portfolio pricing, and quarterly performance reviews.",
  url: `${SITE_URL}/property-managers`,
};

export default function PropertyManagersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-navy">
              For Property Management Firms
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1]">
              One VRF Service Vendor for Your Entire Portfolio
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Standardized reporting, portfolio pricing, and a factory-trained VRF specialist on
              every call — across every building you manage in California.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
              >
                Request a Portfolio Assessment
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-brand-blue text-brand-blue text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. PAIN POINTS */}
      <section className="py-16 sm:py-20" aria-labelledby="pains-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="pains-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              What Property Managers Tell Us
            </h2>
            <p className="mt-3 text-text-secondary">
              Three patterns we hear on every intake call with a multi-property firm.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map((p) => (
              <article
                key={p.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-brand-navy">{p.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PORTFOLIO BENEFITS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              What You Get With a Portfolio MSA
            </h2>
            <p className="mt-3 text-text-secondary">
              Built for the way property management firms actually run HVAC service — not retrofitted
              from a single-building model.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <article
                key={b.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-brand-navy">{b.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING */}
      <PricingCards />

      {/* 5b. PORTFOLIO PRICING NOTE */}
      <section aria-labelledby="portfolio-pricing-note" className="bg-surface pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-blue/30 bg-white p-6 sm:p-8">
            <h3
              id="portfolio-pricing-note"
              className="text-xl font-semibold text-brand-navy"
            >
              Portfolio Discount
            </h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Portfolio discounts of{" "}
              <strong className="text-brand-navy">10–15% off PMA pricing</strong> apply to property
              management firms with 5+ VRF properties under a single Master Service Agreement. Mix
              and match tiers across buildings — some Essential, some Premium — and the discount
              still applies.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOW TO GET STARTED */}
      <section className="py-16 sm:py-20" aria-labelledby="start-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="start-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              How to Get Started
            </h2>
            <p className="mt-3 text-text-secondary">
              Three steps, and none of them require a signature until you&apos;ve seen our work.
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <li
                key={s.n}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue text-white font-bold font-display">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-navy">{s.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-text-secondary max-w-3xl">
            Already manage buildings in our{" "}
            <Link
              href="/service-areas"
              className="text-brand-blue font-semibold hover:text-brand-navy"
            >
              Southern California service area
            </Link>
            ? Review our{" "}
            <Link
              href="/services/vrv-vrf-maintenance"
              className="text-brand-blue font-semibold hover:text-brand-navy"
            >
              VRV/VRF maintenance program
            </Link>{" "}
            for the single-property version of what we deliver portfolio-wide.
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy mb-10">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <dt>
                  <h3 className="text-lg font-semibold text-brand-navy">{f.q}</h3>
                </dt>
                <dd className="mt-3 text-sm text-text-secondary leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="border-t border-border-subtle" aria-labelledby="final-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="final-cta" className="text-3xl sm:text-4xl font-bold text-brand-navy">
                Request a Portfolio Assessment
              </h2>
              <p className="mt-3 text-text-secondary">
                Send us your property list. We&apos;ll come back with a capability statement,
                pilot-property recommendation, and sample portfolio report — no trip fee, no
                pressure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
              >
                Request Assessment
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-brand-blue text-brand-blue text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors"
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
