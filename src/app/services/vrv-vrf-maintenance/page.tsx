import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import PricingCards from "@/components/PricingCards";
import SampleReportCTA from "@/components/SampleReportCTA";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: { absolute: "VRF Maintenance Plans, Orange County CA | Aximus HVAC" },
  description:
    "VRF maintenance plans for commercial buildings in Orange County. Quarterly PMs, refrigerant checks, documented reports. Protect your warranty and cut downtime.",
  alternates: { canonical: "/services/vrv-vrf-maintenance" },
  openGraph: {
    title: "VRF Maintenance Plans, Orange County CA | Aximus HVAC",
    description:
      "VRF preventive maintenance agreements for commercial buildings in Orange County. Three tiers, documented visits, 4-hour emergency response on Premium.",
    url: `${SITE_URL}/services/vrv-vrf-maintenance`,
    type: "website",
  },
};

const whyMaintenance = [
  {
    title: "Reduce unplanned downtime",
    body: "Most VRF emergencies we get paged on would have been caught on a routine PM — a dirty filter, a slow refrigerant leak, a drifting sensor. Quarterly visits find the failures before tenants do.",
  },
  {
    title: "Extend equipment life",
    body: "A Daikin VRV or Mitsubishi City Multi is a 15–20 year asset when maintained. Run it without PMs and you're looking at compressor replacement in year 8. The math is not subtle.",
  },
  {
    title: "Keep your warranty intact",
    body: "Daikin and Mitsubishi warranties require documented preventive maintenance by a qualified contractor. Miss a year of PMs and a denied warranty claim becomes your problem, not theirs.",
  },
  {
    title: "Control operating cost",
    body: "Clean coils, correct charge, and calibrated controls lower kWh. We measure and document performance each visit so you can show ownership the system is running to spec — not drifting.",
  },
];

const visitIncludes = [
  {
    title: "Refrigerant check",
    body: "Superheat, subcooling, and pressure readings at every outdoor unit. Electronic leak detection on flare joints and coil connections. Documented charge status — not a shrug and a gauge reading.",
  },
  {
    title: "Filter service",
    body: "Indoor unit filter inspection and replacement on the schedule your building actually needs. We log every filter size and SKU so reorders are painless next quarter.",
  },
  {
    title: "Electrical inspection",
    body: "Terminal torque checks, contactor condition, capacitor values, and amp draw under load. Loose neutrals and aging contactors are the cheap fix that prevents the expensive failure.",
  },
  {
    title: "Controls verification",
    body: "BMS points, setpoints, schedules, and zone communication verified against design. We catch drifted EEV commands and miscommunicated zones before they turn into complaint tickets.",
  },
  {
    title: "Performance report",
    body: "Written report after every visit: readings, findings, photos, recommendations, and priority. Warranty-compliant format you can hand to ownership or insurance without edits.",
  },
  {
    title: "Priority dispatch",
    body: "Contract clients jump the queue on emergency calls. Essential gets next business day, Professional gets 8-hour, Premium gets a 4-hour guarantee across Orange County.",
  },
];

const faqs = [
  {
    q: "What does a VRF maintenance contract in Orange County typically cost?",
    a: "Pricing depends on tonnage, number of indoor units, and site access. A small office on a 10-ton VRV runs a few thousand a year; a multi-tenant building with 40+ indoor units runs into five figures. The tiers above are ranges — we quote the exact number after a site walk.",
  },
  {
    q: "How often should a VRF system be serviced?",
    a: "Twice a year is the minimum most OEMs require to keep the warranty valid. Four visits per year — once per season — is what we recommend and what Professional plans include. Buildings with critical cooling loads or heavy occupancy benefit from six or more visits annually.",
  },
  {
    q: "Will a PMA void if we also use another HVAC vendor?",
    a: "No, but we recommend against splitting VRF service between vendors. Documentation gaps and conflicting service records are the number one reason manufacturer warranty claims get denied. If you need package unit or boiler service elsewhere, that's fine — VRF should stay with one specialist.",
  },
  {
    q: "What happens between scheduled visits?",
    a: "You call us. Contract clients get priority dispatch and a discounted time-and-materials rate on any repair between PMs. Premium includes a 4-hour emergency response guarantee. We also monitor BMS alarms on request for buildings connected to a remote portal.",
  },
  {
    q: "Do you include refrigerant top-offs?",
    a: "Professional and Premium plans include reasonable refrigerant top-offs as part of the contract. If we detect a leak, we repair it under separate scope — topping off a leaking system is not maintenance, it's an EPA violation waiting to happen.",
  },
  {
    q: "Can I upgrade or downgrade tiers mid-contract?",
    a: "Yes. If a tier is wrong for your building, we adjust — no penalty. The contract is annual, but the service cadence can shift quarterly if your needs change. We'd rather get the plan right than hold you to a bad fit.",
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
  serviceType: "VRV/VRF Preventive Maintenance",
  name: "VRF Maintenance Contract in Orange County",
  description:
    "VRF/VRV preventive maintenance agreements for commercial buildings in Orange County. Quarterly visits, refrigerant checks, filter service, electrical inspection, controls verification, and documented performance reports.",
  url: `${SITE_URL}/services/vrv-vrf-maintenance`,
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
    name: "VRF Maintenance Plans",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Essential PMA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Professional PMA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Premium PMA" } },
    ],
  },
};

export default function VrfMaintenancePage() {
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
              VRV/VRF Maintenance
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              VRF Maintenance Plans for Commercial Buildings
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Preventive maintenance contracts built for Daikin VRV and Mitsubishi City Multi
              systems in Orange County. Quarterly visits, documented reports, and priority dispatch
              when something goes wrong between PMs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Get a PMA Quote
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
              src="/images/services/maintenance.webp"
              alt="Technician performing scheduled preventive maintenance on a commercial VRF outdoor unit"
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

      {/* 3. WHY PREVENTIVE MAINTENANCE */}
      <section className="py-16 sm:py-20" aria-labelledby="why-maint-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="why-maint-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Why Preventive Maintenance Matters on VRF
            </h2>
            <p className="mt-3 text-text-secondary">
              Variable refrigerant flow systems are tightly tuned. Small drifts in charge, airflow,
              or controls compound fast. Maintenance is the difference between a 20-year asset and
              a 7-year write-off.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyMaintenance.map((w) => (
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

      {/* 4. PRICING */}
      <PricingCards />

      {/* 5. WHAT EACH VISIT INCLUDES */}
      <section className="py-16 sm:py-20" aria-labelledby="visit-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="visit-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              What Each Scheduled Visit Includes
            </h2>
            <p className="mt-3 text-text-secondary">
              Every visit follows the same checklist so your documentation stays consistent across
              the year. Consistent data is how you spot a trend before it becomes a failure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visitIncludes.map((i) => (
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

      {/* 6. SAMPLE REPORT CTA */}
      <SampleReportCTA />

      {/* 7. INTERNAL LINKS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="related-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-3xl sm:text-4xl font-bold text-navy">
            Related Services
          </h2>
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Already dealing with a fault code or an outage? Start with{" "}
              <Link
                href="/services/vrv-vrf-repair"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF repair
              </Link>
              . A PMA makes the most sense once the system is stable and documented.
            </p>
            <p>
              New construction or a system replacement? See{" "}
              <Link
                href="/services/vrv-vrf-installation"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF installation
              </Link>
              , then roll straight into a maintenance contract at commissioning.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-16 sm:py-20" aria-labelledby="faq-heading">
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
                Ready for a Maintenance Plan That Actually Documents the Work?
              </h2>
              <p className="mt-3 text-text-secondary">
                Tell us your system and we&apos;ll send a fixed annual quote with visit cadence,
                response SLA, and included labor — no generic price sheet.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Get a PMA Quote
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
