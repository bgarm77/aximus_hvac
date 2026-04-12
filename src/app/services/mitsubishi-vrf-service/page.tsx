import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: "Mitsubishi VRF Repair California | City Multi Specialist | Aximus",
  description:
    "Mitsubishi VRF repair in California. Factory-trained on City Multi PUMY and PUHY. AE-200A, M-NET, and BACnet integration. OEM parts and warranty-compliant reports.",
  alternates: { canonical: "/services/mitsubishi-vrf-service" },
  openGraph: {
    title: "Mitsubishi VRF Repair California | City Multi Specialist | Aximus",
    description:
      "Mitsubishi VRF service for commercial properties in California. City Multi PUMY and PUHY, AE-200A controls, M-NET diagnostics, and BACnet integration.",
    url: `${SITE_URL}/services/mitsubishi-vrf-service`,
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
      "A factory-trained tech arrives on site, identifies your City Multi series (PUMY, PUHY, PURY), and pulls the fault history from the AE-200A or on-board controller.",
    icon: (
      <svg {...stepIcon}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "M-NET diagnostics",
    description:
      "We run Mitsubishi Maintenance Tool diagnostics over M-NET, review AE-200A operation logs, and verify refrigerant, subcooling, and INV data against Mitsubishi service bulletins.",
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
      "You get a written scope with labor, OEM Mitsubishi part numbers, and timeline before we touch a component. Approve the scope, then we proceed.",
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
      "OEM Mitsubishi parts installed per Mitsubishi service procedures. Refrigerant recovery, evacuation, and recharge to nameplate spec — never shortcut.",
    icon: (
      <svg {...stepIcon}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.6-.3-.3-2.6 2.5-2.7Z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Performance reporting",
    description:
      "You get a service report formatted per Mitsubishi warranty requirements: M-NET fault codes, OEM part numbers, refrigerant charge, and post-repair performance data.",
    icon: (
      <svg {...stepIcon}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    ),
  },
];

const mitsubishiPlatforms = [
  {
    title: "City Multi PUMY (S-Series)",
    body: "Smaller-tonnage City Multi outdoor units for low-rise offices, medical suites, and retail. We service PUMY-P and PUMY-SP models on heat pump and branch controller configurations.",
  },
  {
    title: "City Multi PUHY (Y-Series)",
    body: "Heat pump City Multi for mid-size commercial. PUHY-P, PUHY-EP, and PUHY-HP variants. We handle extended piping lengths and larger combination ratios common in Class A retrofits.",
  },
  {
    title: "City Multi PURY (R2-Series)",
    body: "Two-pipe heat recovery City Multi for simultaneous cooling and heating. We diagnose BC controller solenoid faults, cross-circulation, and zone imbalance issues generalists miss.",
  },
  {
    title: "Hybrid VRF (HVRF)",
    body: "Water-based hybrid City Multi for buildings where full refrigerant piping is restricted. We service the HBC controller, water circuit, and refrigerant side as one system.",
  },
  {
    title: "AE-200A and AE-50A controls",
    body: "Centralized controller setup, schedule programming, tenant billing integration, and M-NET address management. We configure and document, not guess-and-reboot.",
  },
  {
    title: "BACnet and building automation",
    body: "BACnet/IP integration through the BAC-HD150 gateway and Modbus through PAC-YG60MCA. Point list documentation your BAS contractor can actually use.",
  },
];

const errorCodes = [
  {
    code: "6607",
    title: "No ACK error (M-NET communication)",
    body: "No acknowledgment on the M-NET bus between indoor and outdoor units or centralized controller. We trace bus wiring, verify termination, and check address conflicts before swapping boards.",
  },
  {
    code: "5101",
    title: "Inlet air thermistor fault",
    body: "Open or shorted TH1 thermistor on an indoor unit. We verify resistance at temperature against the Mitsubishi spec table — not a blind thermistor swap.",
  },
  {
    code: "P8",
    title: "Pipe temperature abnormality",
    body: "Liquid or gas pipe temperature out of range during operation. Usually a charge, EEV, or sensor issue. We run Maintenance Tool trends before calling it a compressor fault.",
  },
  {
    code: "4230 / 4220",
    title: "Inverter heatsink or DC bus fault",
    body: "Inverter overheating or DC bus voltage abnormality. We verify outdoor fan operation, heatsink cleanliness, and inverter output before ordering an INV board.",
  },
  {
    code: "1302",
    title: "High pressure abnormality",
    body: "HP switch trip on the outdoor unit. We check condenser airflow, refrigerant charge, subcooling, and EEV position — many of these are recoverable without parts.",
  },
  {
    code: "7102",
    title: "Connection count / address mismatch",
    body: "Indoor unit count or M-NET addressing doesn't match what the outdoor unit expects. Common after partial renovations. We re-address on the Maintenance Tool and document the map.",
  },
];

const whyAximus = [
  {
    title: "Factory-trained on City Multi",
    body: "Our techs complete Mitsubishi Electric service training and track each series update. We use Mitsubishi Maintenance Tool over M-NET — not generic HVAC gauges and guesswork.",
  },
  {
    title: "OEM parts through Mitsubishi distribution",
    body: "We source OEM Mitsubishi parts through the Mitsubishi Electric distributor network. Correct part number, correct firmware. Aftermarket boards void your warranty — we don't use them.",
  },
  {
    title: "Preventive maintenance with real data",
    body: "Quarterly PMs include M-NET log pulls, refrigerant subcooling verification, and filter and coil condition reporting. You get trend data, not a checklist with a signature.",
  },
  {
    title: "AE-200A and BACnet integration expertise",
    body: "AE-200A and AE-50A setup, tenant billing, and BACnet/IP integration through BAC-HD150. We configure and document the building automation side so your BAS contractor has a clean handoff.",
  },
];

const faqs = [
  {
    q: "Which Mitsubishi City Multi series do you service?",
    a: "We service Mitsubishi City Multi PUMY (S-Series), PUHY (Y-Series heat pump), PURY (R2-Series heat recovery), and Hybrid VRF (HVRF). That covers the full commercial City Multi lineup deployed in California, including BC controller and branch controller configurations.",
  },
  {
    q: "Are you a Mitsubishi Diamond Contractor or authorized service provider?",
    a: "Our techs are factory-trained on Mitsubishi Electric City Multi platforms and we source OEM parts through the Mitsubishi distributor network. We follow Mitsubishi service bulletins on every repair. Ask us about specific authorization status for your model when you call.",
  },
  {
    q: "What Mitsubishi VRF fault codes do you resolve most often?",
    a: "The common ones in California commercial buildings are 6607 (M-NET no-ACK), 5101 (thermistor), P8 (pipe temperature), 4230 (inverter heatsink), 1302 (high pressure), and 7102 (address mismatch). Many of these are recoverable without replacing parts — we verify with the Maintenance Tool before ordering.",
  },
  {
    q: "Can you integrate City Multi with our BACnet building automation?",
    a: "Yes. We configure and troubleshoot AE-200A and AE-50A centralized controllers and BACnet/IP integration through the BAC-HD150 gateway. We also handle Modbus through PAC-YG60MCA. We document the point list so your BAS contractor has exactly what they need.",
  },
  {
    q: "Do you provide preventive maintenance reports for Mitsubishi VRF?",
    a: "Yes. Every PM visit includes M-NET operation logs, refrigerant subcooling and superheat verification, coil and filter condition, and EEV and sensor trend data. You get a written report after every visit — formatted per Mitsubishi warranty requirements so claims go through clean.",
  },
  {
    q: "We have both Mitsubishi and Daikin buildings. Can you cover both?",
    a: "Yes. Our techs are factory-trained on Mitsubishi Electric City Multi and Daikin VRV. If you manage a portfolio with mixed platforms, you get one vendor, consistent reporting, and no handoffs between brand specialists.",
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
  serviceType: "Mitsubishi VRF Service",
  name: "Mitsubishi VRF Service in California",
  description:
    "Factory-trained Mitsubishi City Multi service in California. PUMY, PUHY, and PURY series. AE-200A controls, M-NET diagnostics, and BACnet integration. OEM parts and warranty-compliant documentation.",
  url: `${SITE_URL}/services/mitsubishi-vrf-service`,
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
    name: "Mitsubishi VRF Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mitsubishi VRF Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mitsubishi VRF Preventive Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AE-200A Controls Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "City Multi BACnet Integration" } },
    ],
  },
};

export default function MitsubishiVrfServicePage() {
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
              Mitsubishi City Multi Specialist
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1]">
              Mitsubishi VRF Service for Commercial Properties
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Factory-trained on Mitsubishi City Multi PUMY, PUHY, and PURY. We troubleshoot over
              M-NET, install OEM parts through Mitsubishi distribution, and document every service
              call per Mitsubishi warranty requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
              >
                Call for Mitsubishi Service
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-brand-blue text-brand-blue text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors"
              >
                Schedule a Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. MITSUBISHI PLATFORMS */}
      <section className="py-16 sm:py-20" aria-labelledby="platforms-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="platforms-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              Mitsubishi City Multi Platforms We Service
            </h2>
            <p className="mt-3 text-text-secondary">
              From smaller PUMY heat pumps to PURY heat recovery and Hybrid VRF, we service the
              full City Multi commercial lineup — including AE-200A controls and BACnet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mitsubishiPlatforms.map((p) => (
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

      {/* 4. MITSUBISHI ERROR CODES */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="codes-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="codes-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              Mitsubishi VRF Fault Codes We Resolve
            </h2>
            <p className="mt-3 text-text-secondary">
              If your AE-200A or remote controller is showing any of these, we&apos;ve diagnosed
              and resolved them on California commercial buildings many times.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {errorCodes.map((e) => (
              <article
                key={e.code}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-brand-navy text-white text-sm font-semibold font-display">
                  {e.code}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-navy">{e.title}</h3>
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
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              How Mitsubishi Service Works
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

      {/* 6. WHY AXIMUS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
              Why a Mitsubishi Specialist, Not a Generalist
            </h2>
            <p className="mt-3 text-text-secondary">
              Four things a factory-trained City Multi tech does that a general HVAC vendor
              can&apos;t.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* 7. INTERNAL LINKS */}
      <section className="py-16 sm:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
            Related Services
          </h2>
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
            <p>
              If your City Multi is currently down, start with{" "}
              <Link
                href="/services/vrv-vrf-repair"
                className="text-brand-blue font-semibold hover:text-brand-navy"
              >
                VRF repair
              </Link>
              . Emergency calls get a factory-trained tech on site within 4 hours across
              California.
            </p>
            <p>
              For long-term reliability, add a{" "}
              <Link
                href="/services/vrv-vrf-maintenance"
                className="text-brand-blue font-semibold hover:text-brand-navy"
              >
                VRF maintenance agreement
              </Link>{" "}
              with scheduled PMs and performance reporting. Manage a mixed portfolio? See{" "}
              <Link
                href="/services/daikin-vrv-service"
                className="text-brand-blue font-semibold hover:text-brand-navy"
              >
                Daikin VRV service
              </Link>{" "}
              — one vendor for both Mitsubishi and Daikin buildings.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
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

      {/* 9. FINAL CTA */}
      <section className="border-t border-border-subtle" aria-labelledby="final-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="final-cta" className="text-3xl sm:text-4xl font-bold text-brand-navy">
                Mitsubishi City Multi Problem? Get a Specialist On Site.
              </h2>
              <p className="mt-3 text-text-secondary">
                Factory-trained Mitsubishi techs, OEM parts through Mitsubishi distribution, and
                warranty-compliant service reports. 4-hour emergency response across California.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-brand-blue text-brand-blue text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors"
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
