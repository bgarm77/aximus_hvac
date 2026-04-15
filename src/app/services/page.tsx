import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import { isPageEnabled } from "@/config/navigation";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: { absolute: "Commercial VRF Services, Orange County | Aximus HVAC" },
  description:
    "Commercial VRF services in Orange County: installation, repair, maintenance, commissioning, 4-hour emergency response. Daikin and Mitsubishi factory-trained.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Commercial VRF Services Orange County | Aximus HVAC",
    description:
      "Installation, repair, maintenance, commissioning, and emergency VRF service for commercial buildings in Orange County.",
    url: `${SITE_URL}/services`,
    type: "website",
  },
};

interface ServiceCard {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const iconClass = "w-7 h-7";
const iconProps = {
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

const allServices: ServiceCard[] = [
  {
    slug: "/services/vrv-vrf-installation",
    title: "VRV/VRF Installation",
    description:
      "Turnkey installation for new builds and retrofits. Correct line sizing, proper commissioning, and Title 24 documentation from day one.",
    icon: (
      <svg {...iconProps} className={iconClass}>
        <path d="M3 10h18M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
        <path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
        <path d="M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    slug: "/services/vrv-vrf-repair",
    title: "VRV/VRF Repair",
    description:
      "Communication errors, refrigerant leaks, inverter faults. We diagnose the root cause and fix it on the first visit — then document the repair.",
    icon: (
      <svg {...iconProps} className={iconClass}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.6-.3-.3-2.6 2.5-2.7Z" />
      </svg>
    ),
  },
  {
    slug: "/services/vrv-vrf-maintenance",
    title: "VRV/VRF Maintenance",
    description:
      "Preventive maintenance agreements with scheduled visits, priority response, and warranty-compliant reporting on every call.",
    icon: (
      <svg {...iconProps} className={iconClass}>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    slug: "/services/vrv-vrf-commissioning",
    title: "VRV/VRF Commissioning",
    description:
      "Third-party commissioning for GCs and MEP firms. Startup, verification, and a documented handover package your owner will actually accept.",
    icon: (
      <svg {...iconProps} className={iconClass}>
        <path d="M9 11H4v10h5V11ZM20 3h-5v18h5V3ZM15 8h-5v13h5V8Z" />
      </svg>
    ),
  },
  {
    slug: "/services/daikin-vrv-service",
    title: "Daikin VRV Service",
    description:
      "Factory-trained on Daikin VRV IV, VRV Aurora, and VRV LIFE. We read Daikin error codes fluently and keep OEM parts access for warranty-compliant repairs.",
    icon: (
      <svg {...iconProps} className={iconClass}>
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
      </svg>
    ),
  },
  {
    slug: "/services/mitsubishi-vrf-service",
    title: "Mitsubishi VRF Service",
    description:
      "Trained on Mitsubishi Electric City Multi platforms. Diamond Contractor-level diagnostics on R2, Y-Series, and WR2 systems.",
    icon: (
      <svg {...iconProps} className={iconClass}>
        <path d="M12 2 2 22h20L12 2Z" />
        <path d="M12 10v6" />
      </svg>
    ),
  },
  {
    slug: "/services/emergency-vrf-repair",
    title: "Emergency VRF Repair",
    description:
      "4-hour emergency response across Orange County. We dispatch a factory-trained tech — not whoever the call center can reach first.",
    icon: (
      <svg {...iconProps} className={iconClass}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const services = allServices.filter((s) => isPageEnabled(s.slug));

const faqs = [
  {
    q: "What commercial VRF services does Aximus offer in Orange County?",
    a: "Installation, repair, preventive maintenance, commissioning, brand-specific service for Daikin VRV and Mitsubishi Electric, and 4-hour emergency response. Every service is commercial VRF/VRV only — no residential splits, no general HVAC, no side jobs.",
  },
  {
    q: "Do I need to know what service I need before calling?",
    a: "No. If you're not sure whether you need a repair, a retrofit, or a maintenance plan, schedule a free assessment. We walk the equipment, review your service history, and give you a written scope before any work starts.",
  },
  {
    q: "Which VRF brands do you service?",
    a: "We specialize in Daikin VRV and Mitsubishi Electric City Multi. We also service LG Multi V, Samsung DVM, and Toshiba Carrier VRF on request. Call us with your model number and we'll confirm coverage before dispatch.",
  },
  {
    q: "Do you offer service contracts for property portfolios?",
    a: "Yes. We consolidate VRF service across multi-site commercial portfolios under one agreement with standardized reporting. See our property managers page for portfolio terms.",
  },
  {
    q: "How fast can you respond to a VRF emergency?",
    a: "Premium maintenance clients get a 4-hour emergency response anywhere in Orange County. Professional clients get 8-hour response. Non-contract emergencies are dispatched same-day or next-business-day depending on load.",
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

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${SITE_URL}/services`,
  name: "Commercial VRF Services in Orange County",
  description:
    "Aximus commercial VRF/VRV services: installation, repair, maintenance, commissioning, Daikin VRV service, and emergency response across Orange County, California.",
  about: {
    "@type": "HVACBusiness",
    name: "Aximus HVAC",
    url: SITE_URL,
    telephone: "+1-800-555-1234",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Orange County, California",
    },
  },
  hasPart: services.map((s) => ({
    "@type": "Service",
    name: s.title,
    url: `${SITE_URL}${s.slug}`,
    description: s.description,
    provider: { "@type": "HVACBusiness", name: "Aximus HVAC" },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Orange County, California",
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              Services
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              Commercial VRF/VRV Services in Orange County
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Installation, repair, maintenance, commissioning, and emergency response — every
              service built around one platform. No residential splits. No generalist techs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Schedule a Free Assessment
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

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. SERVICES GRID */}
      <section className="py-16 sm:py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-navy"
            >
              What We Offer
            </h2>
            <p className="mt-3 text-text-secondary">
              Pick the service that matches your situation. Not sure? Every service leads to the
              same free assessment — we&apos;ll tell you what you actually need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.slug}
                className="group flex flex-col bg-white border border-card-border rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,33,71,0.08)] hover:border-sky"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface text-blue mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
                  {s.description}
                </p>
                <Link
                  href={s.slug}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:text-navy"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERNAL LINK BLOCK */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="related-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="related-heading"
            className="text-3xl sm:text-4xl font-bold text-navy"
          >
            Managing Multiple Buildings?
          </h2>
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
            <p>
              If you run a commercial portfolio, we consolidate VRF service under one agreement
              with standardized reporting. See our{" "}
              <Link
                href="/property-managers"
                className="text-blue font-semibold hover:text-navy"
              >
                property managers page
              </Link>{" "}
              for portfolio terms.
            </p>
            <p>
              Not sure who we cover? Check the{" "}
              <Link
                href="/service-areas"
                className="text-blue font-semibold hover:text-navy"
              >
                service areas page
              </Link>{" "}
              for every Orange County city on our dispatch map, or read{" "}
              <Link
                href="/about"
                className="text-blue font-semibold hover:text-navy"
              >
                why we built Aximus
              </Link>{" "}
              as a VRF-only specialist.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-navy mb-10"
          >
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

      {/* 6. FINAL CTA */}
      <section
        className="bg-surface border-t border-border-subtle"
        aria-labelledby="final-cta"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2
                id="final-cta"
                className="text-3xl sm:text-4xl font-bold text-navy"
              >
                Not Sure What You Need? Schedule a Free Assessment.
              </h2>
              <p className="mt-3 text-text-secondary">
                We&apos;ll walk your equipment, review service history, and give you a written
                scope before any work starts. No trip fee, no pressure.
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
