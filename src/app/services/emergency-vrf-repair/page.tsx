import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: "Emergency HVAC Repair Orange County | 4-Hour VRF Response",
  description:
    "Emergency VRF repair in Orange County with a 4-hour response guarantee. Certified techs, written estimate before work starts, after-hours and weekend service.",
  alternates: { canonical: "/services/emergency-vrf-repair" },
  openGraph: {
    title: "Emergency HVAC Repair Orange County | 4-Hour VRF Response",
    description:
      "Emergency VRF repair in Orange County. 4-hour on-site response, factory-certified technicians, written estimate before work begins, 24/7 dispatch.",
    url: `${SITE_URL}/services/emergency-vrf-repair`,
    type: "website",
  },
};

const qualifiesAsEmergency = [
  {
    title: "Complete system failure",
    body: "Entire VRF system down. Multiple indoor units offline, outdoor units tripped, or a full communication fault across the network. Tenants without cooling on all floors.",
  },
  {
    title: "No cooling during business hours",
    body: "Active business day, occupied space, and the system can't hold setpoint. Server rooms, medical facilities, and retail floors can't wait for next-week scheduling.",
  },
  {
    title: "Refrigerant leak",
    body: "Audible hiss, oil staining on line sets, or rapid pressure loss. Refrigerant leaks are a safety and compliance issue — not a call-us-Monday problem.",
  },
  {
    title: "Safety concern",
    body: "Electrical smell, burning insulation, tripped breakers that won't reset, or any sign of damage from water intrusion. Shut it down and call us immediately.",
  },
];

const guarantee = [
  {
    title: "4-hour on-site response",
    body: "Call before 4pm, we're on site within 4 hours across Orange County. After-hours calls reach an on-call technician — not a voicemail or answering service.",
  },
  {
    title: "Factory-certified technician",
    body: "Daikin VRV and Mitsubishi City Multi factory-trained. We read OEM fault histories, carry the diagnostic tools, and bring OEM parts — not a generalist with a guess.",
  },
  {
    title: "Written estimate before work begins",
    body: "Once we've diagnosed the problem, you get a written scope with labor, parts, and timeline. No open-ended work orders. You approve, then we fix.",
  },
];

const pricing = [
  {
    label: "Emergency labor rate",
    value: "$350–$425/hr",
    body: "After-hours, weekend, and holiday emergency dispatch. Billed portal-to-portal with a 2-hour minimum.",
  },
  {
    label: "Standard diagnostic",
    value: "Flat-rate",
    body: "Business-hours diagnostic with written fault analysis and repair estimate. Credited toward the repair if you proceed.",
  },
  {
    label: "Parts & refrigerant",
    value: "Line-item",
    body: "OEM parts at published pricing with part numbers on the invoice. Refrigerant billed by the pound — no hidden markups.",
  },
];

const afterHours = [
  {
    title: "24/7 on-call dispatch",
    body: "Nights, weekends, and holidays reach a live technician. No answering service telling you someone will call back in the morning.",
  },
  {
    title: "Weekend service",
    body: "Saturday and Sunday emergency calls are handled the same as weekdays — 4-hour response, certified tech, written estimate.",
  },
  {
    title: "Holiday coverage",
    body: "Our on-call rotation covers every major US holiday. You don't pick the day your compressor fails — we plan for it.",
  },
];

const faqs = [
  {
    q: "How fast can you respond to an emergency HVAC call in Orange County?",
    a: "We guarantee a 4-hour on-site response for emergency VRF repair across Orange County. Most dispatches from Irvine, Anaheim, Costa Mesa, and Newport Beach arrive in under 90 minutes during business hours. After-hours calls roll to an on-call technician who is actively dispatched — not a voicemail.",
  },
  {
    q: "What counts as an HVAC emergency?",
    a: "Complete system failure, no cooling during occupied business hours, a refrigerant leak, or any safety concern (electrical smell, burning insulation, water damage). If you're unsure, call us — we'll tell you honestly whether it's an emergency or can wait until tomorrow without making it worse.",
  },
  {
    q: "What does emergency VRF repair cost?",
    a: "Emergency labor runs $350–$425 per hour depending on time of day, with a 2-hour minimum. Parts are billed at published OEM pricing with part numbers on the invoice. Refrigerant is billed by the pound. You'll see the full breakdown in writing before any work begins.",
  },
  {
    q: "Do you service nights, weekends, and holidays?",
    a: "Yes. Our on-call rotation covers 24/7, 365 days a year. Saturday, Sunday, and holiday calls get the same 4-hour response and factory-certified technicians as weekday calls — at emergency rates.",
  },
  {
    q: "Will you give me an estimate before starting emergency work?",
    a: "Always. After the initial diagnostic, you get a written scope with labor, OEM parts, and timeline before we proceed. We won't open-ended bill you during an emergency. You approve the work, then we fix it.",
  },
  {
    q: "Can you repair any VRF system or only certain brands?",
    a: "We're factory-trained on Daikin VRV and Mitsubishi Electric City Multi. We also handle LG Multi V and Samsung DVM emergency calls on request. Call us with your model number and fault code — if we can't fix it in one visit, we'll tell you up front.",
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
  serviceType: "Emergency VRF Repair",
  name: "Emergency VRF Repair in Orange County",
  description:
    "Emergency VRF/VRV repair in Orange County with a 4-hour on-site response guarantee. 24/7 dispatch, factory-certified technicians, OEM parts, written estimate before work begins.",
  url: `${SITE_URL}/services/emergency-vrf-repair`,
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
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function EmergencyVrfRepairPage() {
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

      {/* 1. HERO — urgent but calm, phone prominent */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              24/7 Emergency Dispatch
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              Emergency VRF Repair — 4-Hour Response in Orange County
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              System down? Tenants without cooling? Call now. A factory-certified technician will
              be on site within 4 hours, with a written estimate before any work begins.
            </p>

            <div className="mt-8 rounded-2xl border border-card-border bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                Call Now for Emergency VRF Repair
              </p>
              <a
                href={PHONE_HREF}
                className="mt-2 block text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-navy hover:text-blue transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="mt-3 text-sm text-text-secondary">
                Live dispatch 24/7 — nights, weekends, and holidays. No answering service.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-blue text-blue text-sm font-semibold hover:bg-blue hover:text-white transition-colors"
                >
                  Non-Emergency Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. WHAT QUALIFIES AS EMERGENCY */}
      <section className="py-16 sm:py-20" aria-labelledby="qualifies-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="qualifies-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              What Qualifies as an Emergency
            </h2>
            <p className="mt-3 text-text-secondary">
              Not every fault needs an emergency dispatch. These do. If you see any of these, call
              now — don&apos;t wait for the next business day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifiesAsEmergency.map((i) => (
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

      {/* 4. OUR GUARANTEE */}
      <section className="py-16 sm:py-20 bg-navy" aria-labelledby="guarantee-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-light">
              Our Guarantee
            </span>
            <h2
              id="guarantee-heading"
              className="mt-4 text-3xl sm:text-4xl font-bold text-white"
            >
              What You Get When You Call
            </h2>
            <p className="mt-3 text-light leading-relaxed">
              A VRF failure is stressful enough. Our job is to make the response predictable —
              response time, technician, and pricing all committed up front.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantee.map((g) => (
              <article
                key={g.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white">{g.title}</h3>
                <p className="mt-3 text-sm text-light leading-relaxed">{g.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-white text-navy text-sm font-semibold hover:bg-light transition-colors"
            >
              Call Now: {PHONE_DISPLAY}
            </a>
            <Link
              href="/service-areas"
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              See Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* 5. AFTER-HOURS & WEEKEND */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="afterhours-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="afterhours-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              After-Hours and Weekend Service
            </h2>
            <p className="mt-3 text-text-secondary">
              Equipment doesn&apos;t fail on a schedule. Our dispatch doesn&apos;t keep one either.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {afterHours.map((a) => (
              <article
                key={a.title}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-navy">{a.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT PRICING */}
      <section className="py-16 sm:py-20" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Transparent Emergency Pricing
            </h2>
            <p className="mt-3 text-text-secondary">
              No bait-and-switch. No hidden trip fees. Published rates so you know the number
              before we roll a truck.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <article
                key={p.label}
                className="bg-white border border-card-border rounded-2xl p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-blue">
                  {p.label}
                </p>
                <p className="mt-2 text-3xl font-bold font-display text-navy">{p.value}</p>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-text-secondary max-w-3xl">
            Every emergency invoice is line-item: labor hours, OEM parts with part numbers,
            refrigerant by the pound, and dispatch fees stated up front. If we can&apos;t fix it in
            one visit, we tell you before we start.
          </p>
        </div>
      </section>

      {/* 7. INTERNAL LINKS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="related-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-3xl sm:text-4xl font-bold text-navy">
            Related Services
          </h2>
          <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Most emergency calls we handle would have been caught months earlier with a proper{" "}
              <Link
                href="/services/vrv-vrf-maintenance"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF maintenance agreement
              </Link>
              . Quarterly PMs find the leaking flare joint before it dumps the charge on a Friday
              afternoon.
            </p>
            <p>
              For non-emergency repairs, see our standard{" "}
              <Link
                href="/services/vrv-vrf-repair"
                className="text-blue font-semibold hover:text-navy"
              >
                VRF repair service
              </Link>
              . If you&apos;re on a Daikin platform, read more about{" "}
              <Link
                href="/services/daikin-vrv-service"
                className="text-blue font-semibold hover:text-navy"
              >
                Daikin VRV service
              </Link>
              , or{" "}
              <Link
                href="/services/mitsubishi-vrf-service"
                className="text-blue font-semibold hover:text-navy"
              >
                Mitsubishi VRF service
              </Link>{" "}
              for City Multi systems.
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
      <section className="border-t border-border-subtle bg-surface" aria-labelledby="final-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="final-cta" className="text-3xl sm:text-4xl font-bold text-navy">
                VRF System Down Right Now? Call.
              </h2>
              <p className="mt-3 text-text-secondary">
                4-hour on-site response across Orange County. Factory-certified tech, written
                estimate before work begins, OEM parts only.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Call Now: {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-blue text-blue text-sm font-semibold hover:bg-blue hover:text-white transition-colors"
              >
                Non-Emergency Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
