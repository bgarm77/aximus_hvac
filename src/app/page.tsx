import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import ProcessSteps from "@/components/ProcessSteps";
import PricingCards from "@/components/PricingCards";
import SampleReportCTA from "@/components/SampleReportCTA";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import ContactForm from "@/components/ContactForm";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: "VRF Service Orange County | Dedicated VRV/VRF Specialist",
  description:
    "Factory-certified VRF service in Orange County. Daikin VRV and Mitsubishi Electric specialists, 4-hour emergency response, transparent pricing.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VRF Service Orange County | Aximus HVAC",
    description:
      "Orange County's dedicated VRV/VRF service specialist. 4-hour emergency response. Factory-certified Daikin and Mitsubishi Electric technicians.",
    url: SITE_URL,
    type: "website",
  },
};

interface ServiceCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    title: "VRV/VRF Installation",
    description:
      "Turnkey installation for new builds and retrofits. Correct line sizing, commissioning, and Title 24 documentation.",
    href: "/services/vrv-vrf-installation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 10h18M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
        <path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
        <path d="M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    title: "VRV/VRF Repair",
    description:
      "Communication errors, refrigerant leaks, inverter faults. We diagnose the root cause and fix it on the first visit.",
    href: "/services/vrv-vrf-repair",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.6-.3-.3-2.6 2.5-2.7Z" />
      </svg>
    ),
  },
  {
    title: "VRV/VRF Maintenance",
    description:
      "Preventive maintenance agreements with scheduled visits, priority response, and warranty-compliant reporting.",
    href: "/services/vrv-vrf-maintenance",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "VRV/VRF Commissioning",
    description:
      "Third-party commissioning for GCs and MEP firms. Startup, verification, and documented handover packages.",
    href: "/services/vrv-vrf-commissioning",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 11H4v10h5V11ZM20 3h-5v18h5V3ZM15 8h-5v13h5V8Z" />
      </svg>
    ),
  },
  {
    title: "Daikin VRV Service",
    description:
      "Factory-trained on Daikin VRV IV, VRV Aurora, and VRV LIFE. We speak Daikin error codes and carry OEM parts.",
    href: "/services/daikin-vrv-service",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
      </svg>
    ),
  },
  {
    title: "Emergency VRF Repair",
    description:
      "4-hour emergency response across Orange County. We dispatch a factory-trained tech, not a generalist.",
    href: "/services/emergency-vrf-repair",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Our prior vendor spent two months chasing a communication error on our Daikin VRV IV. Aximus found the wiring fault on the first visit and documented everything for warranty. Haven't had a callback since.",
    name: "Daniel R.",
    role: "Director of Facilities, Class A Office (Irvine)",
  },
  {
    quote:
      "We manage 14 commercial buildings across Orange County. Aximus consolidated our VRF service under one contract with portfolio reporting. Our maintenance spend is down and our uptime is up.",
    name: "Monica S.",
    role: "VP of Operations, Property Management Firm",
  },
  {
    quote:
      "An indoor unit went down in our medical office on a Friday in August. They had a tech on site within three hours and the system was back by end of day. That's why we signed a PMA.",
    name: "James T.",
    role: "Building Engineer, Medical Office (Newport Beach)",
  },
];

const faqs = [
  {
    q: "What makes Aximus different from other HVAC companies?",
    a: "Most HVAC contractors treat VRF like an oversized split system. We don't. VRF service is all we do. Our technicians are factory-trained on Daikin VRV and Mitsubishi Electric platforms, we carry VRF-specific diagnostic tools, and every visit ends with a documented service report.",
  },
  {
    q: "Do you service all VRF brands?",
    a: "We specialize in Daikin VRV and Mitsubishi Electric City Multi systems. We also service LG Multi V, Samsung DVM, and Toshiba Carrier VRF on request. If your system is in our service area, call us and we'll confirm coverage before we dispatch.",
  },
  {
    q: "How fast can you respond to emergencies?",
    a: "Our Premium maintenance agreement guarantees a 4-hour emergency response anywhere in Orange County. Professional clients get 8-hour response. For non-contract clients we target same-day or next-business-day depending on dispatch load.",
  },
  {
    q: "What's included in your maintenance plans?",
    a: "Scheduled visits, priority emergency response, discounts on time and materials, and a written service report after every visit. Professional and Premium tiers also include refrigerant top-offs and quarterly or monthly performance reports. Full details on our maintenance page.",
  },
  {
    q: "Do you provide documentation for warranty compliance?",
    a: "Yes. Every service visit generates a written report with tech ID, equipment tags, measurements, parts used, and photos. That's the record manufacturers need if you ever file a warranty claim. We keep a copy on file and send you a PDF.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Orange County, including Irvine, Anaheim, Costa Mesa, Newport Beach, Santa Ana, Tustin, Orange, and Huntington Beach. We're expanding into Los Angeles and San Diego counties — call us if your site is nearby.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Aximus HVAC",
  url: SITE_URL,
  telephone: "+1-800-555-1234",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Orange County, California" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  description:
    "Dedicated VRV/VRF service specialist serving Orange County, California. Factory-certified Daikin and Mitsubishi Electric technicians with 4-hour emergency response.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 min-h-[560px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              VRF Service Orange County
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              Orange County&apos;s Only Dedicated VRF/VRV Service Specialist
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Factory-Certified Daikin VRV &amp; Mitsubishi Electric Service. 4-Hour Emergency
              Response. Transparent Pricing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Schedule Your Free VRF System Assessment
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-blue text-blue text-sm font-semibold hover:bg-blue hover:text-white transition-colors"
              >
                Call for Emergency Repair: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_28px_rgba(10,33,71,0.12)] border border-card-border">
              <Image
                src="/images/home/hero.webp"
                alt="Commercial VRF outdoor unit on building rooftop in Orange County California"
                width={1200}
                height={900}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="relative rounded-xl overflow-hidden border border-card-border">
                <Image
                  src="/images/home/hero-1.webp"
                  alt="Factory-trained technician servicing a Daikin VRV outdoor unit"
                  width={600}
                  height={450}
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden border border-card-border">
                <Image
                  src="/images/home/hero-2.webp"
                  alt="Mitsubishi Electric VRF indoor cassette unit installed in a commercial ceiling"
                  width={600}
                  height={450}
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden border border-card-border">
                <Image
                  src="/images/home/hero-3.webp"
                  alt="VRF refrigerant piping and branch controllers in a commercial mechanical room"
                  width={600}
                  height={450}
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
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
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              What We Do
            </h2>
            <p className="mt-3 text-text-secondary">
              Every service we offer is built around one platform: commercial VRF/VRV. No general
              HVAC work, no side jobs, no generalist techs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white border border-card-border rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,33,71,0.08)] hover:border-sky"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface text-blue mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:text-navy">
                  Learn more
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <ProcessSteps />

      {/* 5. PMA TEASER */}
      <section aria-labelledby="pma-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 -mb-8">
          <div className="max-w-2xl">
            <h2 id="pma-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Preventive Maintenance Plans That Protect Your Investment
            </h2>
            <p className="mt-3 text-text-secondary">
              Scheduled visits, priority response, and written reports. Pick the tier that matches
              your uptime requirements.
            </p>
          </div>
        </div>
        <PricingCards />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4 -mt-6 text-center">
          <Link
            href="/services/vrv-vrf-maintenance"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue hover:text-navy"
          >
            See full maintenance plan details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 6. SAMPLE REPORT */}
      <SampleReportCTA />

      {/* 7. TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              What Facility Managers Say
            </h2>
            <p className="mt-3 text-sm text-text-secondary italic">
              Example quotes representative of client feedback.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col bg-white border border-card-border rounded-2xl p-6"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="text-sky mb-3"
                >
                  <path d="M7 7h4v4H8c0 2 1 3 3 3v2c-3 0-5-2-5-5V7Zm8 0h4v4h-3c0 2 1 3 3 3v2c-3 0-5-2-5-5V7Z" />
                </svg>
                <blockquote className="text-sm text-navy leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-text-secondary">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SERVICE AREAS */}
      <section aria-labelledby="service-areas-intro">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 -mb-8">
          <h2
            id="service-areas-intro"
            className="text-3xl sm:text-4xl font-bold text-navy max-w-3xl"
          >
            Serving Irvine, Anaheim, Costa Mesa, Newport Beach &amp; All of Orange County
          </h2>
        </div>
        <ServiceAreaMap />
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
      <section className="bg-surface border-t border-border-subtle" aria-labelledby="final-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 id="final-cta" className="text-3xl sm:text-4xl font-bold text-navy">
              Request a Free VRF System Assessment
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Tell us about your system and we&apos;ll reply within one business day. A VRF
              specialist reviews every request — no call centers, no generalist dispatch.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy">
              <li className="flex gap-3">
                <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-sky shrink-0" />
                4-hour emergency response across Orange County
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-sky shrink-0" />
                Factory-trained on Daikin VRV and Mitsubishi Electric
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-sky shrink-0" />
                Written service report after every visit
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-card-border bg-white p-5">
              <p className="text-sm text-text-secondary">System down right now?</p>
              <a
                href={PHONE_HREF}
                className="mt-1 inline-flex items-center gap-2 text-lg font-bold text-blue hover:text-navy"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
