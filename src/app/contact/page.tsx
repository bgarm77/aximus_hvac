import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import TrustStrip from "@/components/TrustStrip";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const EMAIL_DISPLAY = "service@aximushvac.com";
const EMAIL_HREF = "mailto:service@aximushvac.com";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: { absolute: "Contact Aximus HVAC | Free VRF Quote, California" },
  description:
    "Get a free HVAC quote in Orange County from Aximus VRF specialists. 4-hour emergency response, transparent pricing, factory-trained Daikin and Mitsubishi techs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Aximus HVAC | Free VRF Quote, California",
    description:
      "Request a free VRF system assessment. Aximus serves Orange County commercial buildings with 4-hour emergency response and transparent documentation.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

const faqs = [
  {
    q: "How fast will I hear back after I submit this form?",
    a: "Within one business day, usually the same day. If your VRF system is down right now, call (800) 555-1234 — that's the fastest route to a 4-hour emergency dispatch.",
  },
  {
    q: "Do you charge for the initial quote or assessment?",
    a: "No. The first site assessment is free. We walk your equipment, review your service history, and give you a written scope before any work starts. No trip fee, no pressure.",
  },
  {
    q: "What areas do you cover for an HVAC quote in Orange County?",
    a: "All of Orange County — Irvine, Anaheim, Costa Mesa, Newport Beach, Santa Ana, Tustin, Orange, Huntington Beach, and the rest. We also quote multi-site portfolios across Los Angeles and San Diego counties.",
  },
  {
    q: "What should I have ready when I contact you?",
    a: "Your system brand and model if you know it (Daikin VRV IV, Mitsubishi City Multi, etc.), approximate building size, and a short description of what's happening. If you don't know the model, that's fine — we'll identify it on-site.",
  },
  {
    q: "Can you work as a subcontractor for our GC or MEP firm?",
    a: "Yes. We partner with general contractors and MEP firms on VRF commissioning and startup. CSLB C-20 licensed and $1M+ liability insured — certificates of insurance available on request.",
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

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact Aximus HVAC",
  description:
    "Contact Aximus HVAC for a free VRF system assessment and HVAC quote in Orange County, California.",
  mainEntity: {
    "@type": "HVACBusiness",
    name: "Aximus HVAC",
    url: SITE_URL,
    telephone: "+1-800-555-1234",
    email: EMAIL_DISPLAY,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-800-555-1234",
        contactType: "customer service",
        areaServed: "US-CA",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-800-555-1234",
        contactType: "emergency",
        areaServed: "US-CA",
        hoursAvailable: "Mo-Su 00:00-23:59",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
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
              Contact Aximus
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              Get a Free VRF System Assessment
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Need an HVAC quote in Orange County? Send a few details and a VRF
              specialist will get back to you within one business day. Emergency
              calls get a 4-hour response, day or night.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-blue text-blue text-sm font-semibold hover:bg-blue hover:text-white transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. FORM + CONTACT DETAILS */}
      <section
        className="py-16 sm:py-20"
        aria-labelledby="contact-form"
        id="contact-form"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2
                id="contact-form"
                className="text-3xl sm:text-4xl font-bold text-navy"
              >
                Tell Us About Your System
              </h2>
              <p className="mt-3 text-text-secondary max-w-xl">
                Share a few details and we&apos;ll follow up with next steps — usually
                a short scoping call, then a free on-site assessment.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Aside — phone, email, hours, area */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-card-border bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Call a VRF Specialist
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-2 block text-3xl sm:text-4xl font-bold text-navy hover:text-blue transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="mt-2 text-sm text-text-secondary">
                  4-hour emergency response anywhere in Orange County on our Premium
                  maintenance agreement.
                </p>
              </div>

              <div className="rounded-2xl border border-card-border bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Email
                </p>
                <a
                  href={EMAIL_HREF}
                  className="mt-2 block text-lg font-semibold text-blue hover:text-navy break-all"
                >
                  {EMAIL_DISPLAY}
                </a>
                <p className="mt-2 text-sm text-text-secondary">
                  Best for RFPs, COI requests, and portfolio inquiries from property
                  management firms and GCs.
                </p>
              </div>

              <div className="rounded-2xl border border-card-border bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Business Hours
                </p>
                <dl className="mt-3 space-y-2 text-sm text-navy">
                  <div className="flex justify-between">
                    <dt className="font-medium">Monday – Friday</dt>
                    <dd className="text-text-secondary">7:00 AM – 6:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium">Saturday</dt>
                    <dd className="text-text-secondary">8:00 AM – 2:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium">Sunday</dt>
                    <dd className="text-text-secondary">Emergency only</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-text-secondary leading-relaxed">
                  Emergency dispatch is available 24/7 for clients on an active
                  maintenance agreement.
                </p>
              </div>

              <div className="rounded-2xl border border-card-border bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Service Area
                </p>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  Based in Orange County. We serve Irvine, Anaheim, Costa Mesa,
                  Newport Beach, Santa Ana, Tustin, Orange, Huntington Beach, and the
                  rest of OC. Multi-site portfolios across Los Angeles and San Diego
                  counties on request.
                </p>
                <Link
                  href="/service-areas"
                  className="mt-4 inline-flex text-sm font-semibold text-blue hover:text-navy"
                >
                  See all service areas →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. MAP / ADDRESS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="map-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2
                id="map-heading"
                className="text-3xl sm:text-4xl font-bold text-navy"
              >
                Based in Orange County, On Your Site Fast
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Our dispatch office is in central Orange County, which keeps our
                  techs under an hour from Irvine, Anaheim, Costa Mesa, and Newport
                  Beach on a normal commute — and under four hours on emergency
                  dispatch anywhere in the county.
                </p>
                <p>
                  Want an on-site walkthrough instead of a phone call? Tell us in the
                  form and we&apos;ll schedule a visit. Bring your service history if
                  you have it — we&apos;ll flag warranty gaps before writing a scope.
                </p>
              </div>
              <address className="mt-6 not-italic text-sm text-navy">
                <p className="font-semibold">Aximus HVAC Solutions</p>
                <p className="text-text-secondary">Orange County, California</p>
                <p className="text-text-secondary">
                  Mailing address available on request for COI and W-9 purposes.
                </p>
              </address>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl border border-card-border bg-white overflow-hidden">
              <iframe
                title="Map of Aximus HVAC service area — Irvine, Orange County, California"
                src="https://www.google.com/maps?q=2855+Michelle+Drive+Suite+150,+Irvine,+CA+92606&z=10&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
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
                <dd className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section
        className="border-t border-border-subtle bg-surface"
        aria-labelledby="final-cta"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2
                id="final-cta"
                className="text-3xl sm:text-4xl font-bold text-navy"
              >
                Ready for an HVAC Quote in Orange County?
              </h2>
              <p className="mt-3 text-text-secondary">
                Pick the path that fits. Call for emergency dispatch, or send a short
                message for a free assessment and written scope.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-blue text-blue text-sm font-semibold hover:bg-blue hover:text-white transition-colors"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
