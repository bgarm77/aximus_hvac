import Link from "next/link";

interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  highlighted?: boolean;
  features: string[];
}

const tiers: PricingTier[] = [
  {
    name: "Essential",
    price: "$2,400–$4,800",
    cadence: "per year",
    features: [
      "2 scheduled visits per year",
      "Next Business Day emergency response",
      "10% discount on time & materials",
      "Standard service documentation",
    ],
  },
  {
    name: "Professional",
    price: "$5,400–$9,600",
    cadence: "per year",
    highlighted: true,
    features: [
      "4 scheduled visits per year",
      "8-Hour emergency response",
      "15% discount on time & materials",
      "Refrigerant top-offs included",
      "Quarterly performance reports",
    ],
  },
  {
    name: "Premium",
    price: "$9,600–$18,000",
    cadence: "per year",
    features: [
      "6+ scheduled visits per year",
      "4-Hour emergency response guarantee",
      "20% discount on time & materials",
      "Dedicated lead technician",
      "Monthly performance reports",
    ],
  },
];

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="shrink-0 mt-0.5"
  >
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export default function PricingCards() {
  return (
    <section className="py-16 sm:py-20 bg-surface" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
            Preventive Maintenance Agreements
          </h2>
          <p className="mt-3 text-text-secondary">
            Three tiers built around visit cadence, response time, and included labor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const isHighlight = t.highlighted;
            return (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-2xl bg-white p-8 transition-transform hover:-translate-y-0.5 ${
                  isHighlight
                    ? "border-2 border-brand-blue shadow-[0_6px_20px_rgba(10,33,71,0.08)] lg:-mt-4"
                    : "border border-card-border"
                }`}
              >
                {isHighlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-brand-blue text-white text-xs font-semibold uppercase tracking-wider px-3 py-1">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-bold text-brand-navy">{t.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-display text-brand-navy">{t.price}</span>
                </div>
                <p className="text-sm text-text-secondary">{t.cadence}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-brand-navy">
                      <span className="text-brand-blue">
                        <CheckIcon />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center justify-center h-12 px-5 rounded-xl text-sm font-semibold transition-colors ${
                    isHighlight
                      ? "bg-brand-blue text-white hover:bg-brand-navy"
                      : "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  }`}
                >
                  Get PMA Pricing
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-text-secondary max-w-3xl">
          Prices are approximate. Final pricing depends on system size, building type, and specific
          requirements. Contact us for a custom quote.
        </p>
      </div>
    </section>
  );
}
