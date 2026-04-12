import Link from "next/link";
import { getNavPages, isPageEnabled } from "@/config/navigation";

const SERVICE_SLUGS = [
  "/services/vrv-vrf-installation",
  "/services/vrv-vrf-repair",
  "/services/vrv-vrf-maintenance",
  "/services/vrv-vrf-commissioning",
  "/services/daikin-vrv-service",
  "/services/emergency-vrf-repair",
  "/services/mitsubishi-vrf-service",
];

const COMPANY_SLUGS = [
  "/about",
  "/property-managers",
  "/service-areas",
  "/blog",
  "/contact",
];

export default function Footer() {
  const allEnabled = getNavPages();
  const services = SERVICE_SLUGS
    .filter(isPageEnabled)
    .map((slug) => allEnabled.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const company = COMPANY_SLUGS
    .filter(isPageEnabled)
    .map((slug) => allEnabled.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[color:var(--color-brand-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-xl font-bold">AXIMUS HVAC</div>
          <p className="mt-3 text-sm text-white/80">
            VRV/VRF service specialists for commercial buildings across California. 4-hour response, transparent documentation.
          </p>
          <div className="mt-5 space-y-1 text-sm text-white/80">
            <a href="tel:+18005551234" className="block hover:text-white">
              (800) 555-1234
            </a>
            <a href="mailto:service@aximushvac.com" className="block hover:text-white">
              service@aximushvac.com
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-brand-light)]">
            Services
          </h2>
          <ul className="mt-4 space-y-2">
            {services.map((p) => (
              <li key={p.slug}>
                <Link href={p.slug} className="text-sm text-white/80 hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-brand-light)]">
            Company
          </h2>
          <ul className="mt-4 space-y-2">
            {company.map((p) => (
              <li key={p.slug}>
                <Link href={p.slug} className="text-sm text-white/80 hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-brand-light)]">
            Coverage
          </h2>
          <p className="mt-4 text-sm text-white/80">
            Serving Los Angeles, Orange County, San Diego, the Bay Area, and the Central Valley.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[color:var(--color-brand-blue)] text-white text-sm font-semibold hover:bg-[color:var(--color-brand-sky)] transition-colors"
          >
            Request service
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/60">
          <p>&copy; {year} Aximus HVAC. All rights reserved. California C-20 licensed.</p>
          {isPageEnabled("/privacy-policy") && (
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
