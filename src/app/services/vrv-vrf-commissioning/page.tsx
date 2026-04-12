import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: "VRF Commissioning California | Daikin & Mitsubishi | Aximus",
  description:
    "VRF commissioning in California for GCs and MEP firms. CSLB C-20, $1M GL, Daikin factory trained. Startup, testing, controls integration, documentation, owner training.",
  alternates: { canonical: "/services/vrv-vrf-commissioning" },
  openGraph: {
    title: "VRF Commissioning California | Daikin & Mitsubishi | Aximus",
    description:
      "Specialty VRF commissioning subcontractor for California GCs and MEP firms. Factory-trained on Daikin VRV IV/V and Mitsubishi City Multi.",
    url: `${SITE_URL}/services/vrv-vrf-commissioning`,
    type: "website",
  },
};

interface ProcessStep {
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

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Pre-Commissioning Review",
    description:
      "We review the approved submittals, piping isometrics, controls drawings, and installer punch list before we show up on site.",
    icon: (
      <svg {...stepIcon}>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
        <path d="M14 3v6h6" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "System Startup",
    description:
      "Pressure test verification, triple evacuation check, refrigerant charge confirmation, addressing, and first power-up of every indoor and outdoor unit.",
    icon: (
      <svg {...stepIcon}>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Performance Verification",
    description:
      "Functional testing on every zone, superheat and subcooling checks, controls integration with BACnet or Modbus BMS, and documented performance data.",
    icon: (
      <svg {...stepIcon}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Documentation",
    description:
      "Startup report, Title 24 acceptance forms, warranty registration, as-built updates, and a full commissioning package the GC can hand to the owner.",
    icon: (
      <svg {...stepIcon}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Owner Training",
    description:
      "On-site training for the facility team: controller operation, alarm response, filter access, and what to call us about versus what they can handle.",
    icon: (
      <svg {...stepIcon}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const included = [
  {
    title: "Refrigerant charge verification",
    body: "We confirm line set lengths, elevation, and actual charge against the manufacturer's charge table. No hand-wave approvals.",
  },
  {
    title: "Controls integration",
    body: "Central controllers, BACnet and Modbus gateways, and BMS points mapped, tested, and documented with your controls contractor.",
  },
  {
    title: "Functional performance testing",
    body: "Every indoor unit runs through heating, cooling, and fan-only modes. Zone-level data logged for the commissioning report.",
  },
  {
    title: "Title 24 acceptance testing",
    body: "California Title 24 Part 6 forms completed on site and signed. No follow-up calls from the building department.",
  },
  {
    title: "Warranty registration",
    body: "Daikin and Mitsubishi warranty paperwork filed correctly so the owner's coverage is intact on day one.",
  },
  {
    title: "Owner training session",
    body: "A 60–90 minute session with the facility team, plus a written operations cheat sheet they can post in the mech room.",
  },
];

const whyAximus = [
  {
    title: "Licensed, insured, and bondable",
    body: "CSLB C-20 license, $1M general liability, commercial auto, and workers' comp. We send certificates and additional insured endorsements before mobilization so your risk manager isn't chasing paper.",
  },
  {
    title: "Factory-trained on Daikin and Mitsubishi",
    body: "Daikin factory training and EPA 608 certification across the crew. We know the VRV IV and V control logic and the City Multi M-NET addressing scheme — not just the generic VRF playbook.",
  },
  {
    title: "Commissioning-only scope",
    body: "We don't bid the install. You keep your mechanical sub and bring us in for startup and verification. No friction, no competing scopes, and a clean handoff back to the GC at closeout.",
  },
];

const faqs = [
  {
    q: "Do you work as a commissioning subcontractor for general contractors?",
    a: "Yes. Commissioning-only scopes for GCs and MEP firms are a core part of our business. You keep your mechanical installer and bring us in for startup, verification, and documentation. We carry CSLB C-20, $1M general liability, commercial auto, and workers' comp — certificates and additional insured endorsements sent before mobilization.",
  },
  {
    q: "Which VRF platforms are you factory-trained on?",
    a: "Daikin VRV IV and VRV V (including heat recovery, heat pump, and VRV LIFE configurations) and Mitsubishi Electric City Multi (R2, Y-Series, and WR2). Our technicians hold Daikin factory training and EPA 608 Universal certification. We also commission LG Multi V and Samsung DVM on request.",
  },
  {
    q: "Do you handle Title 24 acceptance testing as part of commissioning?",
    a: "Yes. California Title 24 Part 6 acceptance testing is included in every commissioning scope. We run the tests, complete the forms, and deliver the signed Part 6 package with the commissioning report. You don't need a separate HERS rater or third-party acceptance test technician.",
  },
  {
    q: "What's the turnaround on a commissioning report?",
    a: "Draft report within 5 business days of site work completion. Final signed package — startup data, functional test results, Title 24 forms, warranty registration confirmation, and as-built markups — within 10 business days. Faster turnaround is available on request for schedule-critical closeouts.",
  },
  {
    q: "What insurance certificates can you provide?",
    a: "Standard package: $1M general liability per occurrence, $2M aggregate, commercial auto, and workers' compensation. We add your firm and the owner as additional insured on request, issue waivers of subrogation, and provide certificates through your vendor management system if required.",
  },
  {
    q: "Do you commission systems you didn't install?",
    a: "That's most of what we do. We commission VRF systems installed by other mechanical contractors across California. We review the installer's work against OEM requirements, flag any deficiencies in writing, and verify the system is ready for owner acceptance before we sign off.",
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
  serviceType: "VRV/VRF System Commissioning",
  name: "VRF/VRV System Commissioning in California",
  description:
    "Specialty VRF commissioning for California GCs and MEP firms. Startup, performance verification, controls integration, Title 24 acceptance testing, documentation, and owner training on Daikin VRV IV/V and Mitsubishi Electric City Multi.",
  url: `${SITE_URL}/services/vrv-vrf-commissioning`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "California",
  },
  provider: {
    "@type": "HVACBusiness",
    name: "Aximus HVAC",
    url: SITE_URL,
    telephone: "+1-800-555-1234",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "VRF Commissioning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daikin VRV Commissioning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mitsubishi City Multi Commissioning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Title 24 Acceptance Testing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "VRF Controls Integration and BMS Verification" } },
    ],
  },
};

export default function VrfCommissioningPage() {
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
              VRF/VRV Commissioning
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1]">
              VRF/VRV System Commissioning in California
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              A specialty commissioning subcontractor for general contractors and MEP firms.
              Factory-trained on Daikin VRV IV/V and Mitsubishi City Multi. Licensed, insured, and
              ready to sign off on your project with documentation the owner will actually use.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
              >
                Request a Commissioning Quote
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

      {/* 3. WHAT WE DO */}
      <section className="py-16 sm:py-20" aria-labelledby="what-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="what-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              What We Do on a Commissioning Job
            </h2>
            <p className="mt-3 text-text-secondary">
              Startup, testing, controls integration, documentation, and training — the scope GCs
              and MEP firms actually need to close out a VRF project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Daikin VRV IV &amp; V</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Full startup and verification on Daikin VRV IV and VRV V platforms. Heat pump, heat
                recovery, and VRV LIFE configurations. Factory-trained and current on the VRV V
                control logic.
              </p>
            </article>
            <article className="bg-white border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Mitsubishi City Multi</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                R2, Y-Series, and WR2 platforms. M-NET addressing, branch controller verification,
                and AE-200 central controller setup tested against the project sequence of
                operations.
              </p>
            </article>
            <article className="bg-white border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Controls &amp; BMS</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                BACnet and Modbus gateway configuration, point mapping with your controls sub, and
                documented integration with the building automation system before we sign off.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              Our Commissioning Process
            </h2>
            <p className="mt-3 text-text-secondary">
              Five phases from submittal review to owner training. Each one documented in the final
              commissioning report.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((s) => (
              <li
                key={s.number}
                className="bg-white border border-card-border rounded-2xl p-6 transition-transform hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,33,71,0.08)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface text-brand-blue">
                    {s.icon}
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-blue text-white text-sm font-semibold font-display">
                    {s.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-navy">{s.title}</h3>
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
            <h2 id="included-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              What&apos;s Included in Every Commissioning Scope
            </h2>
            <p className="mt-3 text-text-secondary">
              One fixed scope, one number, one signed report. No line-item upsells after
              mobilization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((i) => (
              <article
                key={i.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-brand-navy">{i.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CREDENTIALS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="creds-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="creds-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              Credentials &amp; Insurance
            </h2>
            <p className="mt-3 text-text-secondary">
              The paperwork your risk manager wants before we step on the jobsite.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Licenses &amp; Certifications</h3>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary leading-relaxed">
                <li>CSLB C-20 Warm-Air Heating, Ventilating and Air-Conditioning</li>
                <li>EPA 608 Universal refrigerant certification</li>
                <li>Daikin factory trained on VRV IV and VRV V</li>
                <li>Mitsubishi Electric City Multi service certified</li>
              </ul>
            </article>
            <article className="bg-white border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-brand-navy">Insurance Coverage</h3>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary leading-relaxed">
                <li>$1M general liability per occurrence, $2M aggregate</li>
                <li>Commercial auto coverage on every service vehicle</li>
                <li>Workers&apos; compensation for all field technicians</li>
                <li>Additional insured endorsements and waivers of subrogation on request</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 7. WHY AXIMUS */}
      <section className="py-16 sm:py-20" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              Why GCs and MEP Firms Use Aximus
            </h2>
            <p className="mt-3 text-text-secondary">
              Three reasons we keep getting called back for the next project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyAximus.map((w) => (
              <article
                key={w.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-brand-navy">{w.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERNAL LINKS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="related-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
            Related Services
          </h2>
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Need the full mechanical scope, not just commissioning? Our{" "}
              <Link
                href="/services/vrv-vrf-installation"
                className="text-brand-blue font-semibold hover:text-brand-navy"
              >
                VRF installation service
              </Link>{" "}
              delivers a turnkey install with commissioning included.
            </p>
            <p>
              Already commissioned and thinking about ongoing coverage for the owner? Point them to
              our{" "}
              <Link
                href="/services/vrv-vrf-maintenance"
                className="text-brand-blue font-semibold hover:text-brand-navy"
              >
                VRF maintenance agreements
              </Link>
              , or call us directly for{" "}
              <Link
                href="/services/vrv-vrf-repair"
                className="text-brand-blue font-semibold hover:text-brand-navy"
              >
                VRF repair
              </Link>{" "}
              during the warranty period.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 sm:py-20" aria-labelledby="faq-heading">
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

      {/* 10. FINAL CTA */}
      <section className="border-t border-border-subtle bg-surface" aria-labelledby="final-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="final-cta" className="text-3xl sm:text-4xl font-bold text-brand-navy">
                Ready to Close Out Your VRF Project?
              </h2>
              <p className="mt-3 text-text-secondary">
                Send us the submittal package and project schedule. You&apos;ll get a fixed-price
                commissioning quote, COI, and mobilization window within two business days.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
              >
                Request a Commissioning Quote
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
