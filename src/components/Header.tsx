"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { pages, getNavPages } from "@/config/navigation";

const SERVICE_PREFIX = "/services/";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navPages = getNavPages();
  const servicePages = pages.filter(
    (p) => p.enabled && p.showInNav && p.slug.startsWith(SERVICE_PREFIX)
  );

  const topNav = [
    navPages.find((p) => p.slug === "/"),
    navPages.find((p) => p.slug === "/about"),
    navPages.find((p) => p.slug === "/services"),
    navPages.find((p) => p.slug === "/property-managers"),
    navPages.find((p) => p.slug === "/service-areas"),
    navPages.find((p) => p.slug === "/blog"),
    navPages.find((p) => p.slug === "/contact"),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <header
      className={`sticky top-0 z-50 h-[72px] bg-white/95 backdrop-blur border-b border-border-subtle transition-shadow ${
        scrolled ? "shadow-[0_2px_8px_rgba(10,33,71,0.08)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Aximus HVAC home">
          <Image
            src="/images/logo.svg"
            alt="Aximus HVAC logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10"
          />
          <span className="font-display text-xl font-bold tracking-tight text-navy">
            AXIMUS<span className="text-blue"> HVAC</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {topNav.map((p) =>
            p.slug === "/services" ? (
              <div
                key={p.slug}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={p.slug}
                  className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-blue transition-colors"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onFocus={() => setServicesOpen(true)}
                >
                  {p.title}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {servicesOpen && servicePages.length > 0 && (
                  <div
                    className="absolute left-0 top-full pt-3 w-72"
                    role="menu"
                  >
                    <ul className="rounded-2xl border border-border-subtle bg-white shadow-lg p-2">
                      {servicePages.map((sp) => (
                        <li key={sp.slug}>
                          <Link
                            href={sp.slug}
                            className="block rounded-lg px-3 py-2 text-sm text-navy hover:bg-surface hover:text-blue"
                            role="menuitem"
                          >
                            {sp.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={p.slug}
                href={p.slug}
                className="text-sm font-medium text-navy hover:text-blue transition-colors"
              >
                {p.title}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+18005551234"
            className="text-sm font-semibold text-blue hover:text-navy"
          >
            (800) 555-1234
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-5 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+18005551234"
            aria-label="Call Aximus HVAC"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-blue text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border-control text-navy"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-border-subtle bg-white transition-[max-height,opacity] duration-300 ease-out ${
          menuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
          {topNav.map((p) => (
            <Link
              key={p.slug}
              href={p.slug}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 text-base font-medium text-navy hover:bg-surface rounded-lg"
            >
              {p.title}
            </Link>
          ))}
          {servicePages.length > 0 && (
            <div className="mt-1 mb-2 rounded-lg bg-surface px-2 py-2">
              <div className="px-2 pb-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Services
              </div>
              {servicePages.map((sp) => (
                <Link
                  key={sp.slug}
                  href={sp.slug}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 text-sm text-navy hover:text-blue"
                >
                  {sp.title}
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center h-12 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
