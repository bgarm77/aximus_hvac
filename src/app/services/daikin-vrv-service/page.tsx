import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import { safeJsonLd } from "@/lib/safeJsonLd";

const PHONE_DISPLAY = "(000) 000-0000";
const PHONE_HREF = "tel:+10000000000";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: { absolute: "Daikin VRV Service, Orange County CA | Aximus HVAC" },
  description:
    "Daikin VRV service in Orange County. Factory-trained on VRV IV, V, and IV+. We resolve U4, E7, L3 errors with OEM parts and warranty-compliant documentation.",
  alternates: { canonical: "/services/daikin-vrv-service" },
  openGraph: {
    title: "Daikin VRV Service, Orange County CA | Aximus HVAC",
    description:
      "Daikin VRV service for commercial buildings in Orange County. Factory-trained technicians, OEM parts, and warranty-compliant documentation per Daikin service bulletins.",
    url: `${SITE_URL}/services/daikin-vrv-service`,
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
    title: "Site visit",
    description:
      "A factory-trained tech arrives on site, identifies your VRV generation (IV, IV+, or V), and reads the current fault history from the outdoor unit PCB.",
    icon: (
      <svg {...stepIcon}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "OEM diagnostics",
    description:
      "We run Daikin Service Checker diagnostics, review Intelligent Touch Controller logs, and verify refrigerant, subcooling, and compressor data against Daikin service bulletins.",
    icon: (
      <svg {...stepIcon}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Written scope",
    description:
      "You get a written scope with labor, OEM Daikin part numbers, and timeline before we touch a component. Approve the scope, then we proceed.",
    icon: (
      <svg {...stepIcon}>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
        <path d="M14 3v6h6" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Repair or service",
    description:
      "OEM Daikin parts installed per Daikin service procedures. Refrigerant recovery, evacuation, and recharge to spec — never shortcut.",
    icon: (
      <svg {...stepIcon}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.6-.3-.3-2.6 2.5-2.7Z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Warranty documentation",
    description:
      "You get a service report formatted per Daikin warranty requirements: fault codes, parts with OEM numbers, refrigerant charge, and post-repair test results.",
    icon: (
      <svg {...stepIcon}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    ),
  },
];

const daikinPlatforms = [
  {
    title: "Daikin VRV IV",
    body: "Heat recovery and heat pump configurations. Variable refrigerant temperature control, continuous heating during defrost. Common in offices and medical suites built 2012-2019.",
  },
  {
    title: "Daikin VRV IV+",
    body: "Enhanced efficiency version with improved part-load performance. We service the extended piping lengths and larger combination ratios common in Class A office retrofits.",
  },
  {
    title: "Daikin VRV V",
    body: "Current-generation platform with R-32 refrigerant and improved IEER. We support factory-specified installation, commissioning, and service procedures for new deployments.",
  },
  {
    title: "Heat recovery systems",
    body: "VRV with heat recovery (BS boxes) is where generalists get lost. We diagnose simultaneous cooling and heating zones, BS box solenoid issues, and cross-circulation faults.",
  },
  {
    title: "Heat pump systems",
    body: "Straight heat pump VRV for Orange County cooling-dominant loads. Defrost cycle tuning, low-ambient heating performance, and refrigerant charge verification.",
  },
  {
    title: "Daikin controls",
    body: "Intelligent Touch Controller, Daikin Cloud Service, and BACnet integration through DMS502 and DIII-NET gateways. We configure, troubleshoot, and document.",
  },
];

const errorCodes = [
  {
    code: "U4",
    title: "Communication error (indoor to outdoor)",
    body: "F1/F2 transmission wiring fault between indoor units and the outdoor unit, or between outdoor units in a multi-module setup. We trace wiring, check termination, and verify PCB output.",
  },
  {
    code: "E7",
    title: "Outdoor fan motor fault",
    body: "Fan motor lock, overcurrent, or Hall sensor failure. We test the inverter output, motor resistance, and bearing condition before replacing the motor assembly.",
  },
  {
    code: "L3",
    title: "Electrical box temperature rise",
    body: "Inverter heatsink or electrical box overheating. Usually a fan issue, clogged heatsink, or failed thermistor. We verify airflow and thermistor resistance before swapping boards.",
  },
  {
    code: "U0",
    title: "Low refrigerant / insufficient gas",
    body: "Low-pressure trip or undercharge. We pressure test, locate the leak, and recharge to Daikin nameplate spec — not a guess based on suction pressure.",
  },
  {
    code: "L5",
    title: "Inverter compressor startup fault",
    body: "Compressor fails to start or lock-rotor condition. We check inverter output waveform, DC bus voltage, and compressor windings before calling it a compressor failure.",
  },
  {
    code: "A0 / A1",
    title: "Indoor unit board errors",
    body: "Indoor PCB fault or EEPROM mismatch. Often a firmware or address setting issue we resolve without replacing the board.",
  },
];

const whyAximus = [
  {
    title: "Factory-trained on Daikin",
    body: "Our techs complete Daikin VRV service training and track each new generation release. We use Daikin Service Checker and Daikin Cloud diagnostics — not generic HVAC gauges and guesswork.",
  },
  {
    title: "OEM parts through authorized distribution",
    body: "We source OEM Daikin parts through the authorized distributor network. Correct part number, correct revision, correct firmware. Aftermarket boards void your warranty — we don't use them.",
  },
  {
    title: "Warranty-compliant documentation",
    body: "Every service report is formatted per current Daikin service bulletins. If you ever file a warranty claim, your records are already in the format Daikin expects.",
  },
  {
    title: "Controls and BACnet expertise",
    body: "Intelligent Touch Controller setup, Daikin Cloud Service provisioning, and BACnet integration through DMS502. We configure and document the building automation side too.",
  },
];

const faqs = [
  {
    q: "Which Daikin VRV generations do you service?",
    a: "We service Daikin VRV III (where still supported), VRV IV, VRV IV+, and VRV V. That covers most commercial Daikin installations in Orange County from the last 15 years, including heat recovery (REYQ/REMQ) and heat pump (RXYQ) configurations.",
  },
  {
    q: "Are you a Daikin authorized service provider?",
    a: "Our techs are factory-trained on Daikin VRV platforms and we source OEM parts through the authorized Daikin distributor network. We follow Daikin service bulletins on every repair. Ask us about specific authorization status for your model when you call.",
  },
  {
    q: "What Daikin error codes do you resolve most often?",
    a: "The common ones in Orange County commercial buildings are U4 (communication errors between indoor and outdoor units), E7 (outdoor fan motor faults), L3 (electrical box overheating), U0 (low refrigerant), and L5 (inverter compressor startup faults). We also resolve A0, A1, and F-series indoor board errors without always replacing the PCB.",
  },
  {
    q: "Can you integrate a Daikin VRV with our BACnet building automation?",
    a: "Yes. We configure and troubleshoot Daikin Intelligent Touch Controller, Daikin Cloud Service, and BACnet integration through DMS502 and DIII-NET gateways. We document the point list so your BAS contractor has exactly what they need.",
  },
  {
    q: "Will my Daikin equipment warranty stay intact if you service it?",
    a: "Yes. We use OEM Daikin parts, follow Daikin service procedures, and document every repair per Daikin warranty requirements. Warranty issues typically come from aftermarket parts, undocumented work, or incorrect commissioning — none of which we do.",
  },
  {
    q: "We have both Daikin and Mitsubishi buildings. Can you cover both?",
    a: "Yes. Our techs are factory-trained on Daikin VRV and Mitsubishi Electric City Multi. If you manage a portfolio with mixed platforms, you get one vendor, consistent reporting, and no handoffs between brand specialists.",
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
  serviceType: "Daikin VRV Service",
  name: "Daikin VRV Service in Orange County",
  description:
    "Factory-trained Daikin VRV service in Orange County. VRV IV, IV+, and V. Heat recovery and heat pump systems. OEM parts and warranty-compliant documentation per Daikin service bulletins.",
  url: `${SITE_URL}/services/daikin-vrv-service`,
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
    name: "Daikin VRV Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daikin VRV Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daikin VRV Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daikin VRV Commissioning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daikin BACnet Integration" } },
    ],
  },
};

export default function DaikinVrvServicePage() {
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
              Daikin VRV Specialist
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              Daikin VRV Service in Orange County
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Factory-trained on Daikin VRV IV, IV+, and V. We resolve Daikin-specific fault
              codes the first visit, install OEM parts through the authorized distributor
              network, and document every service call per Daikin warranty requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Call for Daikin Service
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-blue text-blue text-sm font-semibold hover:bg-blue hover:text-white transition-colors"
              >
                Schedule a Diagnostic
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_28px_rgba(10,33,71,0.12)] border border-card-border">
            <Image
              src="/images/services/daikin-vrv-units.webp"
              alt="Bank of Daikin VRV outdoor condensing units installed on a commercial rooftop in Orange County"
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

      {/* 3. DAIKIN PLATFORMS */}
      <section className="py-16 sm:py-20" aria-labelledby="platforms-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="platforms-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Daikin VRV Platforms We Service
            </h2>
            <p className="mt-3 text-text-secondary">
              From older VRV IV heat recovery to current VRV V heat pumps, we service the full
              Daikin commercial lineup — including the controls and BACnet side.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {daikinPlatforms.map((p) => (
              <article
                key={p.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DAIKIN ERROR CODES */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="codes-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="codes-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Daikin Error Codes We Resolve
            </h2>
            <p className="mt-3 text-text-secondary">
              If your Intelligent Touch Controller is showing any of these, we&apos;ve diagnosed
              and resolved them on Orange County commercial buildings many times.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {errorCodes.map((e) => (
              <article
                key={e.code}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-navy text-white text-sm font-semibold font-display">
                  {e.code}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{e.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="py-16 sm:py-20" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              How Daikin Service Works
            </h2>
            <p className="mt-3 text-text-secondary">
              Five steps from site visit to warranty-compliant handover. Nothing skipped, nothing
              undocumented.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((s) => (
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

      {/* 6. WHY AXIMUS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Why a Daikin Specialist, Not a Generalist
            </h2>
            <p className="mt-3 text-text-secondary">
              Four things a factory-trained Daikin tech does that a general HVAC vendor
              can&apos;t.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              If your Daikin VRV is currently down, start with{" "}
              <Link
                href="/services/vrv-vrf-repair"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF repair
              </Link>
              . Emergency calls get a factory-trained tech on site within 4 hours across Orange
              County.
            </p>
            <p>
              For long-term reliability, add a{" "}
              <Link
                href="/services/vrv-vrf-maintenance"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF maintenance agreement
              </Link>{" "}
              with scheduled PMs. New deployment or retrofit? See{" "}
              <Link
                href="/services/vrv-vrf-commissioning"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF commissioning
              </Link>{" "}
              for factory-documented startup on new Daikin systems.
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
                Daikin VRV Problem? Get a Specialist On Site.
              </h2>
              <p className="mt-3 text-text-secondary">
                Factory-trained Daikin techs, OEM parts through authorized distribution, and
                warranty-compliant service reports. 4-hour emergency response across Orange
                County.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-blue text-blue text-sm font-semibold hover:bg-blue hover:text-white transition-colors"
              >
                Schedule a Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
