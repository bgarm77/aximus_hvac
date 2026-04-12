"use client";

import Link from "next/link";
import { useState } from "react";
import { getNavPages } from "@/config/navigation";

const PRIMARY_SLUGS = [
  "/services",
  "/property-managers",
  "/service-areas",
  "/about",
  "/blog",
  "/contact",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navPages = getNavPages().filter((p) => PRIMARY_SLUGS.includes(p.slug));

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-white/95 backdrop-blur border-b border-[color:var(--color-card-border)]">
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-bold text-[color:var(--color-brand-navy)] tracking-tight"
          aria-label="Aximus HVAC home"
        >
          AXIMUS
          <span className="text-[color:var(--color-brand-blue)]"> HVAC</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navPages.map((p) => (
            <Link
              key={p.slug}
              href={p.slug}
              className="text-sm font-medium text-[color:var(--color-brand-navy)] hover:text-[color:var(--color-brand-blue)] transition-colors"
            >
              {p.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+18005551234"
            className="text-sm font-semibold text-[color:var(--color-brand-blue)] hover:text-[color:var(--color-brand-navy)]"
          >
            (800) 555-1234
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-5 rounded-xl bg-[color:var(--color-brand-blue)] text-white text-sm font-semibold hover:bg-[color:var(--color-brand-navy)] transition-colors"
          >
            Request service
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[color:var(--color-border-control)] text-[color:var(--color-brand-navy)]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--color-card-border)] bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
            {navPages.map((p) => (
              <Link
                key={p.slug}
                href={p.slug}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base font-medium text-[color:var(--color-brand-navy)] hover:bg-[color:var(--color-surface)] rounded-lg"
              >
                {p.title}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-12 rounded-xl bg-[color:var(--color-brand-blue)] text-white text-sm font-semibold"
            >
              Request service
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
