import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import { getActiveServiceAreas, type ServiceArea } from "@/config/service-areas";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const SITE_URL = "https://aximushvac.com";

export const metadata: Metadata = {
  title: { absolute: "VRF/VRV Service Areas in California | Aximus HVAC" },
  description:
    "Commercial VRF/VRV service across Orange County and Southern California. Same-week scheduling, 4-hour emergency response, factory-trained Daikin and Mitsubishi techs.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "VRF/VRV Service Areas in California | Aximus HVAC",
    description:
      "Where we service commercial VRF and VRV systems. Orange County coverage with planned expansion into Los Angeles and San Diego counties.",
    url: `${SITE_URL}/service-areas`,
    type: "website",
  },
};

const COUNTY_ORDER = ["Orange", "Los Angeles", "San Diego"];

function groupByCounty(areas: ServiceArea[]): Map<string, ServiceArea[]> {
  const map = new Map<string, ServiceArea[]>();
  for (const c of COUNTY_ORDER) map.set(c, []);
  for (const area of areas) {
    const list = map.get(area.county) ?? [];
    list.push(area);
    map.set(area.county, list);
  }
  for (const [k, v] of map) if (v.length === 0) map.delete(k);
  return map;
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Commercial VRF/VRV HVAC Service",
  provider: {
    "@type": "HVACBusiness",
    name: "Aximus HVAC",
    url: SITE_URL,
    telephone: "+1-800-555-1234",
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "California" },
  description:
    "VRF/VRV installation, repair, maintenance, and commissioning across Orange County and Southern California.",
  url: `${SITE_URL}/service-areas`,
};

export default function ServiceAreasPage() {
  const areas = getActiveServiceAreas();
  const grouped = groupByCounty(areas);
  const totalCities = areas.length;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. HERO */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              Southern California Coverage
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1]">
              VRF/VRV Service Areas in Southern California
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl">
              Same-week scheduling and 4-hour emergency response across {totalCities} Orange County
              cities — with planned expansion into Los Angeles and San Diego counties.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Check Your Address
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

      {/* 3. COVERAGE OVERVIEW */}
      <section className="py-16 sm:py-20" aria-labelledby="coverage-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="coverage-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Where We Service VRF and VRV Systems
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Our primary service area is Orange County, California. Technicians dispatch from a
              central Orange County base, which is how we hold a 4-hour emergency response window
              for Premium MSA clients anywhere from Huntington Beach to Anaheim Hills. Los Angeles
              County and San Diego County coverage is planned for the next phase — contact us if
              you manage VRF equipment outside our current map and we&apos;ll tell you honestly
              whether we can help today or only refer.
            </p>
          </div>
        </div>
      </section>

      {/* 4. VISUAL MAP / REGION BANDS */}
      <section
        className="pb-4 sm:pb-8"
        aria-labelledby="map-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="map-heading" className="sr-only">
            Service Area Map
          </h2>
          <div className="relative rounded-2xl border border-card-border bg-white overflow-hidden">
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src="/images/services/service-areas-banner.webp"
                alt="Southern California coastline and commercial corridors Aximus services across Orange County"
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,33,71,0.72)_0%,rgba(10,33,71,0.45)_55%,rgba(10,33,71,0.15)_100%)]"
              />
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 sm:px-10 max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky">
                    Primary Service Zone
                  </p>
                  <p className="mt-2 text-2xl sm:text-3xl font-bold text-white font-display">
                    Orange County, California
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    From the coast at Huntington Beach and Newport Beach inland through Irvine,
                    Tustin, Orange, Santa Ana, Costa Mesa, and Anaheim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CITIES BY COUNTY */}
      <section className="py-16 sm:py-20" aria-labelledby="cities-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 id="cities-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              Cities We Service
            </h2>
            <p className="mt-3 text-text-secondary">
              Click any city for ZIP-level coverage, common building types, and locally relevant
              service notes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from(grouped.entries()).map(([county, cities]) => (
              <div
                key={county}
                className="rounded-2xl bg-white border border-card-border p-6"
              >
                <h3 className="text-lg font-semibold text-navy">{county} County</h3>
                <p className="mt-1 text-xs text-text-secondary">
                  {cities.length} {cities.length === 1 ? "city" : "cities"}
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {cities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/service-areas/${c.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-blue hover:text-navy hover:underline"
                      >
                        <span aria-hidden>→</span>
                        {c.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATED SERVICES */}
      <section className="py-16 sm:py-20 bg-surface" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 id="related-heading" className="text-3xl sm:text-4xl font-bold text-navy">
              What We Deliver in Every Service Area
            </h2>
            <p className="mt-3 text-text-secondary">
              The same factory-trained VRF specialists across every city we cover.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/services/vrv-vrf-installation"
              className="block rounded-2xl bg-white border border-card-border p-6 hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="text-lg font-semibold text-navy">VRV/VRF Installation</h3>
              <p className="mt-2 text-sm text-text-secondary">
                New systems and replacements, commissioned and documented.
              </p>
            </Link>
            <Link
              href="/services/vrv-vrf-repair"
              className="block rounded-2xl bg-white border border-card-border p-6 hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="text-lg font-semibold text-navy">VRV/VRF Repair</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Diagnosis, board replacements, refrigerant and communication faults.
              </p>
            </Link>
            <Link
              href="/services/vrv-vrf-maintenance"
              className="block rounded-2xl bg-white border border-card-border p-6 hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="text-lg font-semibold text-navy">VRV/VRF Maintenance (PMA)</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Essential and Premium Preventive Maintenance Agreements.
              </p>
            </Link>
            <Link
              href="/services/emergency-vrf-repair"
              className="block rounded-2xl bg-white border border-card-border p-6 hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="text-lg font-semibold text-navy">Emergency VRF Repair</h3>
              <p className="mt-2 text-sm text-text-secondary">
                4-hour emergency response for Premium MSA clients across Orange County.
              </p>
            </Link>
            <Link
              href="/services/daikin-vrv-service"
              className="block rounded-2xl bg-white border border-card-border p-6 hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="text-lg font-semibold text-navy">Daikin VRV Service</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Factory-trained Daikin VRV III, IV, and 5 service.
              </p>
            </Link>
            <Link
              href="/property-managers"
              className="block rounded-2xl bg-white border border-card-border p-6 hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="text-lg font-semibold text-navy">Property Managers</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Portfolio MSAs with consolidated billing and standardized reporting.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. OUT-OF-AREA CTA */}
      <section className="border-t border-border-subtle" aria-labelledby="out-of-area-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-card-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="out-of-area-cta" className="text-3xl sm:text-4xl font-bold text-navy">
                Don&apos;t See Your Area?
              </h2>
              <p className="mt-3 text-text-secondary">
                If you manage commercial VRF or VRV equipment outside Orange County, send us the
                address. We&apos;ll tell you honestly whether we can dispatch today, schedule for
                the expansion phase, or refer you to a contractor we trust.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
              >
                Check Your Address
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
