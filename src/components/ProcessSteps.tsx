import type { ReactNode } from "react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Assess",
    description: "We inspect your VRF system and document current condition.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Diagnose",
    description: "Factory-certified diagnostics identify the root cause.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 12h3l2-6 4 12 2-6h7" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Repair",
    description: "We fix it right the first time with OEM parts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.6-.3-.3-2.6 2.5-2.7Z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Document",
    description: "You get a detailed service report for your records.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
        <path d="M14 3v6h6" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
            Our Process
          </h2>
          <p className="mt-3 text-text-secondary">
            Every service call follows the same four steps. No shortcuts.
          </p>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          <div
            aria-hidden
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border-subtle"
          />
          {steps.map((s) => (
            <li
              key={s.number}
              className="relative bg-white border border-card-border rounded-2xl p-6 transition-transform hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,33,71,0.08)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface text-brand-blue">
                  {s.icon}
                </span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-blue text-white text-sm font-semibold font-display">
                  {s.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
