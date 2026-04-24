import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import { safeJsonLd } from "@/lib/safeJsonLd";

const PHONE_DISPLAY = "(000) 000-0000";
const PHONE_HREF = "tel:+10000000000";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: { absolute: "VRF Installation, Orange County CA | Aximus HVAC" },
  description:
    "VRV/VRF system installation in Orange County. Factory-certified Daikin VRV and Mitsubishi Electric installers. Title 24 compliant, full commissioning included.",
  alternates: { canonical: "/services/vrv-vrf-installation" },
  openGraph: {
    title: "VRF Installation, Orange County CA | Aximus HVAC",
    description:
      "Turnkey VRV/VRF installation for commercial buildings in Orange County. Factory-certified, Title 24 compliant, full commissioning and documentation.",
    url: `${SITE_URL}/services/vrv-vrf-installation`,
    type: "website",
  },
};

interface InstallStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stepIcon = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const installSteps: InstallStep[] = [
  {
    number: 1,
    title: "Consultation",
    description:
      "Site walk, scope review, and a candid conversation about whether VRF is the right platform for your building.",
    icon: (
      <svg {...stepIcon}>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "System Design",
    description:
      "Manual N load calculations, equipment selection, refrigerant piping layout, and controls architecture — all documented before we order parts.",
    icon: (
      <svg {...stepIcon}>
        <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Installation",
    description:
      "Factory-certified installers handle condensers, branch controllers, fan coils, refrigerant piping, condensate, and controls wiring.",
    icon: (
      <svg {...stepIcon}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.6-.3-.3-2.6 2.5-2.7Z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Commissioning",
    description:
      "Refrigerant charge verification, vacuum and pressure tests, addressing, zone balancing, and functional performance testing on every indoor unit.",
    icon: (
      <svg {...stepIcon}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Documentation",
    description:
      "Title 24 compliance package, as-built drawings, startup report, warranty registration, and owner training before we hand over the keys.",
    icon: (
      <svg {...stepIcon}>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
        <path d="M14 3v6h6" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
  },
];

const included = [
  {
    title: "Equipment selection",
    body: "Right-sized Daikin VRV or Mitsubishi City Multi equipment matched to your loads, layout, and efficiency targets.",
  },
  {
    title: "Load calculations",
    body: "ACCA Manual N block and zone-level load calcs. No rule-of-thumb sizing, no oversized condensers eating your budget.",
  },
  {
    title: "Refrigerant piping design",
    body: "Branch controller layout, line set sizing, and piping routes engineered to OEM long-length and height-difference limits.",
  },
  {
    title: "Controls setup",
    body: "Central controllers, BACnet or Modbus gateways, and BMS integration configured and tested before handover.",
  },
  {
    title: "Startup and testing",
    body: "Pressure testing, triple evacuation, refrigerant charge verification, and functional testing on every indoor unit.",
  },
  {
    title: "Warranty documentation",
    body: "Manufacturer warranty registration, Title 24 acceptance test forms, and a complete as-built package in your hands.",
  },
];

const whyAximus = [
  {
    title: "Factory-certified installers",
    body: "Our techs are factory-trained on Daikin VRV IV, VRV Aurora, VRV LIFE, and Mitsubishi Electric City Multi. We follow OEM installation manuals to the letter — which is what protects your warranty.",
  },
  {
    title: "Title 24 compliant from day one",
    body: "California Title 24 acceptance testing is built into every installation scope. You get the signed forms with the closeout package. No scrambling for documentation at certificate of occupancy.",
  },
  {
    title: "Full commissioning included",
    body: "Commissioning isn't a line item we upsell later. Every Aximus installation includes startup, verification, addressing, balancing, and a documented handover — the same work we charge third-party GCs for.",
  },
];

const faqs = [
  {
    q: "How long does a commercial VRF installation take?",
    a: "A typical 40,000–80,000 sq ft office or medical building runs 6–10 weeks from mobilization to commissioning. Smaller retrofits finish in 3–4 weeks. We give you a phased schedule before mobilization so the property stays operational through the work.",
  },
  {
    q: "Can you install VRF in an occupied building?",
    a: "Yes. Most of our retrofits are in occupied Class A and B buildings. We phase the work by floor or zone, run noisy and refrigerant-charged tasks after hours, and coordinate with property management on tenant notifications.",
  },
  {
    q: "Which VRF brands do you install?",
    a: "We're factory-certified on Daikin VRV (VRV IV, VRV Aurora, VRV LIFE) and Mitsubishi Electric City Multi (R2, Y-Series, WR2). We also install LG Multi V and Samsung DVM on request. Call us with your specifier's basis of design and we'll confirm.",
  },
  {
    q: "Do you handle Title 24 acceptance testing?",
    a: "Yes. Title 24 acceptance testing is included on every Aximus install. We complete the forms, run the tests, and hand you a signed Part 6 package with the closeout documents. No extra coordination with a separate HERS rater required.",
  },
  {
    q: "Do you work with general contractors and MEP firms?",
    a: "Regularly. We install as a specialty subcontractor on larger projects and as the prime on direct owner deals. GCs get our C-20 license, $1M+ liability certificates, and submittals on request. See our commissioning page if you only need startup and verification.",
  },
  {
    q: "What warranty do I get on a new VRF installation?",
    a: "Full manufacturer warranty — typically 10 years on compressors and 5 years on parts for Daikin VRV, with similar coverage from Mitsubishi. Our workmanship warranty is 2 years on the installation itself. Both are documented in your closeout package.",
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
  serviceType: "VRV/VRF System Installation",
  name: "VRV/VRF System Installation in Orange County",
  description:
    "Turnkey commercial VRV/VRF installation in Orange County. Factory-certified Daikin VRV and Mitsubishi Electric City Multi installers. Title 24 compliant with full commissioning included.",
  url: `${SITE_URL}/services/vrv-vrf-installation`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Orange County, California",
  },
  provider: {
    "@type": "HVACBusiness",
    name: "Aximus HVAC",
    url: SITE_URL,
    telephone: "+1-000-000-0000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "VRF Installation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daikin VRV Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mitsubishi Electric VRF Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Zone VRF System Installation" } },
    ],
  },
};

export default function VrfInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      {/* 1. HERO */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              VRV/VRF Installation
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              VRV/VRF System Installation in Orange County
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Turnkey Daikin VRV and Mitsubishi Electric installations for commercial buildings.
              Factory-certified crews, Title 24 compliant, full commissioning included — no
              surprises at closeout.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Request a Design Consultation
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-blue text-blue text-sm font-semibold hover:bg-blue hover:text-white transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_28px_rgba(10,33,71,0.12)] border border-card-border">
            <Image
              src="/images/services/installation.webp"
              alt="Aximus crew installing a commercial Daikin VRV outdoor unit on a rooftop in Orange County"
              width={1200}
              height={900}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. WHAT WE INSTALL */}
      <section className="py-16 sm:py-20" aria-labelledby="install-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="install-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              What We Install
            </h2>
            <p className="mt-3 text-text-secondary">
              Factory-certified on the two platforms that cover most commercial specs in Southern
              California.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-navy">Daikin VRV</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                VRV IV, VRV Aurora (cold-climate), and VRV LIFE (residential-adjacent mixed-use).
                We maintain OEM parts access and handle Daikin warranty registration on every
                install.
              </p>
            </article>
            <article className="bg-white border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-navy">Mitsubishi Electric VRF</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                City Multi R2, Y-Series, and WR2 heat recovery and heat pump platforms. Diamond
                Contractor-level installation standards on every project.
              </p>
            </article>
            <article className="bg-white border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-navy">Multi-Zone Systems</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Heat pump, heat recovery, and hybrid configurations from 6-ton single-condenser
                suites up to 40-ton multi-module towers with BACnet integration.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Our Installation Process
            </h2>
            <p className="mt-3 text-text-secondary">
              Five steps from first site walk to signed closeout. Every one documented.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {installSteps.map((s) => (
              <li
                key={s.number}
                className="bg-white border border-card-border rounded-2xl p-6 transition-transform hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,33,71,0.08)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface text-blue">
                    {s.icon}
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue text-white text-sm font-semibold font-display">
                    {s.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. WHAT'S INCLUDED */}
      <section className="py-16 sm:py-20" aria-labelledby="included-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="included-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              What&apos;s Included in Every Install
            </h2>
            <p className="mt-3 text-text-secondary">
              One scope, one number, one crew. No change orders for work that should have been in
              the original proposal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((i) => (
              <article
                key={i.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-navy">{i.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY AXIMUS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Why Aximus for VRF Installation
            </h2>
            <p className="mt-3 text-text-secondary">
              Three things we do differently from the generalist down the street.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyAximus.map((w) => (
              <article
                key={w.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-navy">{w.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERNAL LINKS */}
      <section className="py-16 sm:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-3xl sm:text-4xl font-bold text-navy">
            Related Services
          </h2>
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Need startup and verification only? Our{" "}
              <Link
                href="/services/vrv-vrf-commissioning"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF commissioning service
              </Link>{" "}
              handles third-party commissioning for GCs and MEP firms.
            </p>
            <p>
              Already installed and looking for ongoing coverage? See our{" "}
              <Link
                href="/services/vrv-vrf-maintenance"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF maintenance agreements
              </Link>
              , or read more about{" "}
              <Link
                href="/services/daikin-vrv-service"
                className="text-blue font-semibold hover:text-navy"
              >
                Daikin VRV service
              </Link>{" "}
              if you&apos;re replacing a Daikin-specific platform.
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
                Ready to Design Your VRF Installation?
              </h2>
              <p className="mt-3 text-text-secondary">
                Send us your plans or walk us through the site. You&apos;ll get a written scope,
                equipment schedule, and phased schedule before any commitments.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Request Consultation
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
