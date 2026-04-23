import Link from "next/link";
import { Check, Star, Building2 } from "lucide-react";

// ============================================================================
// PricingCards.tsx
// Aximus HVAC Solutions — Preventive Maintenance Agreements (PMA)
// 4-tier pricing: Essential / Professional / Premium / Enterprise
// Aligned with brand system (Sora headings, Inter body, brand colors)
// ============================================================================

interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceSubtext: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: "popular" | "enterprise";
}

const tiers: PricingTier[] = [
  {
    id: "essential",
    name: "Essential",
    price: "Starting at $3,600",
    priceSubtext: "per year",
    description:
      "For small commercial buildings with a single VRF system. Medical offices, dental clinics, retail, small offices.",
    features: [
      "2 scheduled visits per year (semi-annual)",
      "Next Business Day emergency response",
      "10% discount on time & materials",
      "Standard service documentation (PDF reports)",
      "Filter cleaning, coil inspection, controls check",
      "Refrigerant pressure & electrical verification",
    ],
    ctaLabel: "Get PMA Pricing",
    ctaHref: "/contact?plan=essential",
  },
  {
    id: "professional",
    name: "Professional",
    price: "Starting at $6,200",
    priceSubtext: "per year",
    description:
      "For mid-size commercial buildings. Class B offices, medical centers, mixed-use, schools.",
    features: [
      "3 full visits + 1 filter visit per year",
      "8-Hour emergency response",
      "15% discount on time & materials",
      "Refrigerant top-off included (up to 5 lbs/year)",
      "Detailed reports with photos",
      "Annual energy performance review",
      "Priority scheduling",
      "Deep coil cleaning & EEV operation check",
    ],
    ctaLabel: "Get PMA Pricing",
    ctaHref: "/contact?plan=professional",
    highlight: "popular",
  },
  {
    id: "premium",
    name: "Premium",
    price: "Starting at $9,800",
    priceSubtext: "per year",
    description:
      "For large commercial buildings. Class A offices, hospitals, mission-critical facilities.",
    features: [
      "4 full visits + 2 filter visits per year",
      "4-Hour emergency response GUARANTEED (24/7)",
      "20% discount on time & materials",
      "Refrigerant top-off included (up to 15 lbs/year)",
      "Quarterly reports with trending data",
      "Quarterly energy performance reviews",
      "Dedicated lead technician",
      "Premium MERV 13 filters included",
      "Annual thermographic electrical inspection",
    ],
    ctaLabel: "Get PMA Pricing",
    ctaHref: "/contact?plan=premium",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom Quote",
    priceSubtext: "tailored to your portfolio",
    description:
      "For 40+ indoor units, multi-building portfolios, or mission-critical facilities (hospitals, data centers, biotech).",
    features: [
      "Custom visit cadence (up to weekly)",
      "Optional 1-Hour SLA",
      "Up to 25% T&M discount",
      "Refrigerant allowance by agreement",
      "Dedicated account manager",
      "Portfolio MSA with consolidated billing",
      "Custom BMS integration & reporting",
      "24/7/365 dispatch with 5-minute pickup",
    ],
    ctaLabel: "Schedule Enterprise Consultation",
    ctaHref: "/contact?plan=enterprise",
    highlight: "enterprise",
  },
];

export default function PricingCards() {
  return (
    <section
      aria-labelledby="pma-pricing-heading"
      className="bg-[#F5FAFF] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="pma-pricing-heading"
            className="font-[Sora] text-3xl font-bold text-[#0A2147] md:text-4xl lg:text-5xl"
          >
            Preventive Maintenance Agreements
          </h2>
          <p className="mt-4 text-base text-[#264261] md:text-lg">
            Four tiers built around system size, response time, and depth of service.
            Pricing scales with the number of outdoor condensers and indoor units in
            your VRF system — so you only pay for what your building actually needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Disclaimer / Small print */}
        <div className="mx-auto mt-10 max-w-4xl space-y-3 text-center">
          <p className="text-xs leading-relaxed text-[#264261]/80">
            Starting prices apply to a single VRF system with up to 4 indoor units.
            Final pricing is based on the number of outdoor condensers and indoor fan
            coil units serviced. Free on-site assessment included before contract.
          </p>
          <p className="text-xs leading-relaxed text-[#264261]/80">
            Refrigerant beyond included allowance is billed at distributor cost + 25%.
            Pricing valid for properties within Orange County service area. Portfolio
            discounts (8–15%) available for 3+ properties under a single MSA.
          </p>
          <p className="text-sm font-medium text-[#124E88]">
            Why our pricing is transparent: VRF maintenance work scales with the number
            of indoor units in your building, not just the system count. We price honestly
            so you know what to expect — no surprise invoices.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Single Pricing Card
// ============================================================================
function PricingCard({ tier }: { tier: PricingTier }) {
  const isPopular = tier.highlight === "popular";
  const isEnterprise = tier.highlight === "enterprise";

  // Card-level styling differences by highlight type
  const cardClasses = [
    "relative flex flex-col rounded-2xl bg-white p-6 transition-all duration-200",
    isPopular
      ? "border-2 border-[#124E88] shadow-lg shadow-[#124E88]/10 lg:scale-[1.02]"
      : isEnterprise
      ? "border-2 border-[#3288C0] shadow-md shadow-[#3288C0]/10"
      : "border border-[#D7E2EE] hover:-translate-y-1 hover:shadow-md",
  ].join(" ");

  return (
    <div className={cardClasses}>
      {/* "MOST POPULAR" badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#124E88] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
            <Star className="h-3 w-3 fill-current" aria-hidden="true" />
            Most Popular
          </span>
        </div>
      )}

      {/* "ENTERPRISE" badge */}
      {isEnterprise && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#3288C0] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
            <Building2 className="h-3 w-3" aria-hidden="true" />
            Enterprise
          </span>
        </div>
      )}

      {/* Tier name */}
      <h3 className="font-[Sora] text-xl font-bold text-[#0A2147]">
        {tier.name}
      </h3>

      {/* Price */}
      <div className="mt-3">
        <p
          className={`font-[Sora] font-bold leading-tight text-[#0A2147] ${
            tier.price.startsWith("Custom") ? "text-2xl" : "text-2xl lg:text-3xl"
          }`}
        >
          {tier.price}
        </p>
        <p className="mt-1 text-sm text-[#264261]">{tier.priceSubtext}</p>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-[#264261]">{tier.description}</p>

      {/* Divider */}
      <div className="my-5 border-t border-[#D7E2EE]" aria-hidden="true" />

      {/* Features list */}
      <ul className="flex-1 space-y-1.5" aria-label={`${tier.name} plan features`}>
        {tier.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <Check
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#124E88]"
              strokeWidth={3}
              aria-hidden="true"
            />
            <span className="text-sm leading-snug text-[#264261]">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-6">
        <Link
          href={tier.ctaHref}
          className={[
            "block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3288C0] focus-visible:ring-offset-2",
            "min-h-[48px] flex items-center justify-center",
            isPopular || isEnterprise
              ? "bg-[#124E88] text-white hover:bg-[#0D457E] active:bg-[#0A2147]"
              : "border border-[#7899AD] bg-transparent text-[#124E88] hover:bg-[#F5FAFF] active:bg-[#E7EEF5]",
          ].join(" ")}
          aria-label={`${tier.ctaLabel} for ${tier.name} plan`}
        >
          {tier.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
