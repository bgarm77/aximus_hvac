import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TrustStrip from "@/components/TrustStrip";
import { getActiveServiceAreas, getServiceArea } from "@/config/service-areas";
import { getServiceAreaDetails } from "@/config/service-area-details";
import { safeJsonLd } from "@/lib/safeJsonLd";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getActiveServiceAreas().map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const area = getServiceArea(slug);
  if (!area || !area.enabled) return {};

  const title = `VRF/VRV Service in ${area.city}, CA | Aximus HVAC`;
  const description = `Commercial VRF and VRV service in ${area.city}, CA. Factory-trained Daikin and Mitsubishi techs, same-week scheduling, 4-hour emergency response for Premium MSA clients.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/service-areas/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/service-areas/${slug}`,
      type: "website",
    },
  };
}

const RELATED_SERVICES = [
  {
    title: "VRV/VRF Installation",
    href: "/services/vrv-vrf-installation",
    body: "New VRF systems and full replacements, with commissioning documentation.",
  },
  {
    title: "VRV/VRF Repair",
    href: "/services/vrv-vrf-repair",
    body: "Diagnosis and repair for communication faults, EEVs, and refrigerant issues.",
  },
  {
    title: "VRV/VRF Maintenance (PMA)",
    href: "/services/vrv-vrf-maintenance",
    body: "Essential and Premium Preventive Maintenance Agreements.",
  },
  {
    title: "VRV/VRF Commissioning",
    href: "/services/vrv-vrf-commissioning",
    body: "Third-party commissioning and pre-handover verification.",
  },
  {
    title: "Daikin VRV Service",
    href: "/services/daikin-vrv-service",
    body: "Factory-trained Daikin VRV III, IV, and 5 service.",
  },
  {
    title: "Mitsubishi VRF Service",
    href: "/services/mitsubishi-vrf-service",
    body: "CITY MULTI and Mitsubishi VRF diagnostics and repair.",
  },
  {
    title: "Emergency VRF Repair",
    href: "/services/emergency-vrf-repair",
    body: "4-hour emergency response for Premium MSA clients.",
  },
];

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const area = getServiceArea(slug);
  if (!area || !area.enabled) notFound();

  const details = getServiceAreaDetails(slug);
  const zips = details?.zips ?? (Array.isArray(area.zip) ? area.zip : [area.zip]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `VRF/VRV HVAC Service in ${area.city}, CA`,
    provider: {
      "@type": "HVACBusiness",
      name: "Aximus HVAC",
      url: SITE_URL,
      telephone: "+1-800-555-1234",
      address: {
        "@type": "PostalAddress",
        addressLocality: area.city,
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: area.city,
      containedInPlace: { "@type": "AdministrativeArea", name: `${area.county} County, California` },
    },
    description: `Commercial VRF and VRV installation, repair, and maintenance in ${area.city}, California.`,
    url: `${SITE_URL}/service-areas/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${area.city}, CA`,
        item: `${SITE_URL}/service-areas/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      {/* 1. HERO */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-text-secondary">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-blue">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/service-areas" className="hover:text-blue">
                  Service Areas
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-navy font-semibold">{area.city}</li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              {area.county} County Coverage
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              VRF/VRV Service in {area.city}, California
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Factory-trained VRF specialists for commercial buildings in {area.city}. Same-week
              scheduling and 4-hour emergency response for Premium MSA clients.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Request Service in {area.city}
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

      {/* 3. INTRO + ZIPS */}
      <section className="py-16 sm:py-20" aria-labelledby="intro-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 id="intro-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Commercial VRF Service for {area.city}
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              {details?.intro ??
                `We service commercial VRF and VRV systems for offices, medical buildings, and mixed-use properties across ${area.city}. Same-week scheduling under standard work and a 4-hour response window for Premium MSA clients anywhere in ${area.county} County.`}
            </p>

            {details?.localNotes && (
              <>
                <h3 className="mt-8 text-xl font-semibold text-navy">
                  What We See in {area.city}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">{details.localNotes}</p>
              </>
            )}
          </div>

          <aside className="rounded-2xl bg-white border border-card-border p-6 h-fit">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue">
              ZIP Codes We Cover
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {zips.map((z) => (
                <li
                  key={z}
                  className="inline-flex items-center justify-center rounded-lg bg-surface border border-card-border px-3 py-2 text-sm font-semibold text-navy"
                >
                  {z}
                </li>
              ))}
            </ul>
            {details?.neighborhoods && details.neighborhoods.length > 0 && (
              <>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue">
                  Neighborhoods
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-text-secondary">
                  {details.neighborhoods.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span aria-hidden className="text-blue">
                        •
                      </span>
                      {n}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        </div>
      </section>

      {/* 4. BUILDING TYPES */}
      {details?.buildingTypes && details.buildingTypes.length > 0 && (
        <section className="py-16 sm:py-20 bg-surface" aria-labelledby="building-types-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2
                id="building-types-heading"
                className="text-3xl sm:text-4xl font-bold text-navy"
              >
                Building Types We Service in {area.city}
              </h2>
              <p className="mt-3 text-text-secondary">
                The commercial VRF and VRV equipment we see most often in this ZIP.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.buildingTypes.map((b) => (
                <li
                  key={b}
                  className="bg-white border border-card-border rounded-2xl p-5 flex gap-3"
                >
                  <span
                    aria-hidden
                    className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue text-white text-xs font-bold"
                  >
                    ✓
                  </span>
                  <span className="text-sm text-navy font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 5. SERVICES AVAILABLE */}
      <section className="py-16 sm:py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Services Available in {area.city}
            </h2>
            <p className="mt-3 text-text-secondary">
              Every Aximus service offering is available across our {area.county} County coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELATED_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block rounded-2xl bg-white border border-card-border p-6 hover:-translate-y-0.5 transition-transform"
              >
                <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.body}</p>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-text-secondary">
            Managing multiple buildings in {area.county} County? See our{" "}
            <Link
              href="/property-managers"
              className="text-blue font-semibold hover:text-navy"
            >
              property management portfolio program
            </Link>{" "}
            for consolidated billing and portfolio discounts, or browse{" "}
            <Link
              href="/service-areas"
              className="text-blue font-semibold hover:text-navy"
            >
              every city we service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="border-t border-border-subtle" aria-labelledby="final-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="final-cta" className="text-3xl sm:text-4xl font-bold text-navy">
                Request VRF Service in {area.city}
              </h2>
              <p className="mt-3 text-text-secondary">
                Tell us the building address, equipment type, and what&apos;s happening. We&apos;ll
                confirm scheduling within the same business day.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Request Service
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
