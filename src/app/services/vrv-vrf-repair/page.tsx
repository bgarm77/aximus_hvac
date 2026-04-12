import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: "VRF Repair Orange County | Daikin & Mitsubishi Fix | Aximus",
  description:
    "VRF/VRV system repair in Orange County. Factory-certified diagnostics, OEM parts, 4-hour emergency response. We fix communication errors, leaks, inverter boards.",
  alternates: { canonical: "/services/vrv-vrf-repair" },
  openGraph: {
    title: "VRF Repair Orange County | Daikin & Mitsubishi Fix | Aximus",
    description:
      "VRF/VRV repair for commercial buildings in Orange County. 4-hour emergency response, factory-certified diagnostics, OEM parts, documented service reports.",
    url: `${SITE_URL}/services/vrv-vrf-repair`,
    type: "website",
  },
};

interface RepairStep {
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

const repairSteps: RepairStep[] = [
  {
    number: 1,
    title: "Dispatch",
    description:
      "Call us and we're on the way. Emergency calls get a technician on site within 4 hours across Orange County.",
    icon: (
      <svg {...stepIcon}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Diagnosis",
    description:
      "Factory-certified diagnostics with VRF-specific tools. We read fault history, check refrigerant, and verify inverter and sensor data.",
    icon: (
      <svg {...stepIcon}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Written Estimate",
    description:
      "You get a clear written scope before we touch a part. Labor, OEM parts, and timeline — no surprise invoices at the end.",
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
    title: "Repair",
    description:
      "OEM parts installed per manufacturer procedure. Refrigerant recovery, evacuation, and recharge done to spec — not to save 30 minutes.",
    icon: (
      <svg {...stepIcon}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.6-.3-.3-2.6 2.5-2.7Z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Documentation",
    description:
      "You get a full service report with fault codes, parts replaced, refrigerant charge, and test results. Warranty-compliant every time.",
    icon: (
      <svg {...stepIcon}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    ),
  },
];

const commonIssues = [
  {
    title: "Communication errors",
    body: "Indoor and outdoor units losing sync. F-series, U-series, or P-series fault codes that a generalist tech can't interpret without calling the OEM.",
  },
  {
    title: "Refrigerant leaks",
    body: "Flare joints, brazed connections, or coil leaks. We locate with electronic detection and nitrogen pressure test — not dye guesses.",
  },
  {
    title: "Inverter board failures",
    body: "Compressor inverter or fan inverter boards failing under heat. We diagnose, source OEM replacements, and verify with load testing.",
  },
  {
    title: "Sensor faults",
    body: "Thermistors, pressure sensors, and discharge temp sensors drifting or failing. Cheap fix when caught early, expensive when ignored.",
  },
  {
    title: "Compressor issues",
    body: "Compressor lockouts, short cycling, or hard failures. We verify root cause — voltage, oil, refrigerant charge — before replacing the compressor.",
  },
  {
    title: "Expansion valve and EEV problems",
    body: "Stuck or miscommanded electronic expansion valves causing liquid floodback or poor zone performance. We verify with superheat data.",
  },
];

const whyAximus = [
  {
    title: "Factory-certified diagnostics",
    body: "Our techs are factory-trained on Daikin VRV and Mitsubishi City Multi. We read OEM fault histories, not generic codes, so we fix the actual problem — not the symptom.",
  },
  {
    title: "OEM parts, not substitutions",
    body: "We stock and source OEM parts direct from Daikin and Mitsubishi. Aftermarket boards void your warranty and often fail within a season. We don't play that game.",
  },
  {
    title: "Fixed right the first time",
    body: "Because VRF is all we do, we don't guess. Most repairs are diagnosed and resolved in one visit. Fewer callbacks. Less downtime. Clean documentation every time.",
  },
];

const afterRepair = [
  {
    title: "Documented service report",
    body: "Every repair ends with a written report: fault codes found, parts replaced, refrigerant added or recovered, and test results after the fix.",
  },
  {
    title: "Warranty-compliant records",
    body: "We document per Daikin and Mitsubishi warranty requirements. If you ever need to file a warranty claim, your records are already in order.",
  },
  {
    title: "Photo evidence",
    body: "Before-and-after photos of the failed component, part numbers, and serial data. Useful for your own records and for insurance or ownership reporting.",
  },
  {
    title: "Transparent invoice",
    body: "Line-item billing: labor hours, parts with OEM part numbers, refrigerant by the pound, and any trip fees stated up front. No hidden markups.",
  },
  {
    title: "Follow-up recommendations",
    body: "If the root cause points to a maintenance gap or a failing sister component, we tell you. You decide what to do with that information.",
  },
  {
    title: "Manufacturer warranty preserved",
    body: "OEM parts, factory-documented procedures, and registered work keep your equipment warranty intact. That's not a bonus — it's the job.",
  },
];

const faqs = [
  {
    q: "How fast can you respond to a VRF emergency in Orange County?",
    a: "We guarantee a 4-hour response on emergency repair calls across Orange County. Most of our techs are within 45 minutes of Irvine, Anaheim, Costa Mesa, and Newport Beach during business hours. After-hours calls roll to an on-call tech — not a voicemail.",
  },
  {
    q: "Why does my Daikin VRV keep throwing the same fault code?",
    a: "Because the original tech fixed the symptom, not the root cause. Repeated U0, U4, or L-series codes usually point to a communication wiring issue, a failing inverter board, or a refrigerant charge problem. We read the full fault history, trace it to the source, and document the fix so it doesn't come back.",
  },
  {
    q: "Do you repair Mitsubishi City Multi as well as Daikin?",
    a: "Yes. Our techs are factory-trained on both Daikin VRV and Mitsubishi Electric City Multi platforms. We carry the diagnostic tools and OEM parts access for both. LG Multi V and Samsung DVM repairs on request — call us with your model and error code.",
  },
  {
    q: "Will repairs affect my manufacturer warranty?",
    a: "No — done correctly. We use OEM parts, follow Daikin and Mitsubishi service procedures, and document every repair per warranty requirements. Warranty is only voided when a generalist uses aftermarket parts or skips documentation. We don't do either.",
  },
  {
    q: "Do you give a written estimate before starting repairs?",
    a: "Always. After diagnosis, you get a written estimate with labor, OEM parts, and timeline before we proceed. No open-ended work orders. No surprise invoices. You approve the scope, then we fix it.",
  },
  {
    q: "What does a typical VRF repair cost?",
    a: "Diagnostic visits are flat-rate. Repairs vary with the part. A sensor swap runs a few hundred dollars; an inverter board replacement can run a few thousand; compressor replacements are the most expensive because of refrigerant recovery and labor. You'll see the full breakdown before any work starts.",
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
  serviceType: "VRV/VRF System Repair",
  name: "VRF/VRV System Repair in Orange County",
  description:
    "VRF/VRV system repair in Orange County. Factory-certified diagnostics, OEM parts, 4-hour emergency response. Communication errors, refrigerant leaks, inverter boards, sensors, and compressors.",
  url: `${SITE_URL}/services/vrv-vrf-repair`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Orange County, California",
  },
  provider: {
    "@type": "HVACBusiness",
    name: "Aximus HVAC",
    url: SITE_URL,
    telephone: "+1-800-555-1234",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "VRF Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency VRF Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daikin VRV Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mitsubishi VRF Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refrigerant Leak Repair" } },
    ],
  },
};

export default function VrfRepairPage() {
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              VRV/VRF Repair
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              VRF/VRV System Repair in Orange County
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              When your VRF system goes down, you don&apos;t have time for a generalist to guess at
              fault codes. We diagnose the actual problem, fix it with OEM parts, and document
              every visit. 4-hour emergency response across Orange County.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Call for Emergency Repair
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
              src="/images/services/diagnosis.webp"
              alt="Factory-certified technician running VRF diagnostics on a Daikin outdoor unit with a manifold gauge set"
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

      {/* 3. COMMON ISSUES */}
      <section className="py-16 sm:py-20" aria-labelledby="issues-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="issues-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Common VRF Problems We Fix
            </h2>
            <p className="mt-3 text-text-secondary">
              If you&apos;ve seen any of these on a Daikin VRV or Mitsubishi City Multi, we&apos;ve
              diagnosed and repaired it hundreds of times.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((i) => (
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

      {/* 4. EMERGENCY RESPONSE CALLOUT */}
      <section className="py-16 sm:py-20 bg-navy" aria-labelledby="emergency-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-light">
                Emergency Response
              </span>
              <h2
                id="emergency-heading"
                className="mt-4 text-3xl sm:text-4xl font-bold text-white"
              >
                4-Hour On-Site Response, Guaranteed
              </h2>
              <p className="mt-4 text-light leading-relaxed">
                A VRF failure in August isn&apos;t a scheduling problem — it&apos;s a tenant
                problem. When you call us for emergency repair, we commit to a technician on site
                within 4 hours across Orange County. After-hours calls reach an on-call tech, not a
                voicemail.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-white text-navy text-sm font-semibold hover:bg-light transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
                <Link
                  href="/service-areas"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  See Service Areas
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-bold text-white font-display">4 hrs</div>
                <div className="mt-2 text-sm text-light">Emergency on-site response</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-bold text-white font-display">24/7</div>
                <div className="mt-2 text-sm text-light">On-call dispatch</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-bold text-white font-display">OEM</div>
                <div className="mt-2 text-sm text-light">Parts only — no substitutions</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-bold text-white font-display">1st</div>
                <div className="mt-2 text-sm text-light">Visit fix rate we track</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              How a Repair Works
            </h2>
            <p className="mt-3 text-text-secondary">
              Five steps from dispatch to documented handover. No guesswork, no surprise invoices.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {repairSteps.map((s) => (
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
      <section className="py-16 sm:py-20" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Our Approach to VRF Repair
            </h2>
            <p className="mt-3 text-text-secondary">
              Three things a VRF specialist does that a generalist HVAC vendor can&apos;t.
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

      {/* 7. WHAT YOU GET AFTER REPAIR */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="after-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="after-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              What You Get After the Repair
            </h2>
            <p className="mt-3 text-text-secondary">
              Documentation is not optional. It&apos;s how you protect your equipment warranty and
              show ownership that your HVAC is being properly serviced.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {afterRepair.map((i) => (
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

      {/* 8. INTERNAL LINKS */}
      <section className="py-16 sm:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-3xl sm:text-4xl font-bold text-navy">
            Related Services
          </h2>
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Prevent the next breakdown with a scheduled{" "}
              <Link
                href="/services/vrv-vrf-maintenance"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF maintenance agreement
              </Link>
              . Most of the repairs we handle would have been caught early with quarterly PMs.
            </p>
            <p>
              Replacing a system instead of repairing it? See our{" "}
              <Link
                href="/services/vrv-vrf-installation"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF installation service
              </Link>
              , or read more about{" "}
              <Link
                href="/services/daikin-vrv-service"
                className="text-blue font-semibold hover:text-navy"
              >
                Daikin VRV service
              </Link>{" "}
              if you&apos;re on a Daikin platform.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
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

      {/* 10. FINAL CTA */}
      <section className="border-t border-border-subtle" aria-labelledby="final-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="final-cta" className="text-3xl sm:text-4xl font-bold text-navy">
                VRF System Down? Call Now.
              </h2>
              <p className="mt-3 text-text-secondary">
                4-hour emergency response across Orange County. Factory-certified techs, OEM
                parts, and a documented service report after every visit.
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
