import Link from "next/link";
import Image from "next/image";
import { getNavPages, isPageEnabled, pages } from "@/config/navigation";
import { getActiveServiceAreas } from "@/config/service-areas";

const SERVICE_PREFIX = "/services/";

const COMPANY_SLUGS = [
  "/about",
  "/property-managers",
  "/service-areas",
  "/blog",
  "/contact",
];

const CERTIFICATIONS = [
  "EPA 608 Universal",
  "Daikin VRV Certified",
  "NATE Certified",
];

export default function Footer() {
  const allEnabled = getNavPages();
  const services = pages
    .filter((p) => p.enabled && p.showInNav && p.slug.startsWith(SERVICE_PREFIX));
  const company = COMPANY_SLUGS
    .filter(isPageEnabled)
    .map((slug) => allEnabled.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const cities = getActiveServiceAreas().slice(0, 8);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Aximus HVAC Solutions, Inc. logo"
              width={1068}
              height={597}
              className="h-28 w-auto brightness-0 invert"
            />
          </div>
          <address className="mt-4 not-italic text-sm text-white/80 space-y-1">
            <div>Aximus HVAC Solutions, Inc.</div>
            <div>2855 Michelle Drive, Suite 150</div>
            <div>Irvine, CA 92606</div>
            <a href="tel:+18005551234" className="block hover:text-white">
              (800) 555-1234
            </a>
            <a href="mailto:service@aximushvac.com" className="block hover:text-white">
              service@aximushvac.com
            </a>
          </address>

          <div className="mt-6">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-light">
              Certifications
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-white/60">
              License: CSLB C-20 #XXXXXX (pending)
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-light">
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
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-light">
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
            <li>
              <a
                href="/downloads/aximus-sample-service-report.pdf"
                className="text-sm text-white/80 hover:text-white"
              >
                Download sample service report
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-light">
            Service Areas
          </h2>
          <ul className="mt-4 space-y-2">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {c.city}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center h-12 px-5 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-sky transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/60">
          <p>
            Serving commercial buildings across California: Irvine, Anaheim, Costa Mesa,
            Newport Beach, Santa Ana, Tustin, Orange, Huntington Beach, Los Angeles, and
            San Diego.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/60">
          <p>&copy; {year} Aximus HVAC Solutions, Inc. All rights reserved.</p>
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
