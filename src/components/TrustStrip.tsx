import type { ReactNode } from "react";

interface TrustBadge {
  label: string;
  icon: ReactNode;
}

const badges: TrustBadge[] = [
  {
    label: "EPA 608 Universal Certified",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Daikin VRV Factory Trained",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
      </svg>
    ),
  },
  {
    label: "NATE Certified",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
        <path d="m9.5 8.5 2 2 3-3" />
        <path d="M8 14v7l4-2 4 2v-7" />
      </svg>
    ),
  },
  {
    label: "4-Hour Emergency Response",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    label: "Warranty-Compliant Documentation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
        <path d="M14 3v6h6" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-surface border-y border-border-subtle" aria-label="Certifications and commitments">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {badges.map((b) => (
            <li key={b.label} className="flex items-center gap-2 text-sm font-medium text-brand-navy">
              <span className="text-brand-blue">{b.icon}</span>
              <span>{b.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
