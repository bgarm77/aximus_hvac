export interface ServiceArea {
  city: string;
  slug: string;
  zip: string | string[];
  county: string;
  tier: 1 | 2;
  enabled: boolean;
}

export const serviceAreas: ServiceArea[] = [
  { city: "Irvine", slug: "irvine", zip: ["92612", "92618"], county: "Orange", tier: 1, enabled: true },
  { city: "Newport Beach", slug: "newport-beach", zip: "92660", county: "Orange", tier: 1, enabled: true },
  { city: "Costa Mesa", slug: "costa-mesa", zip: "92626", county: "Orange", tier: 1, enabled: true },
  { city: "Anaheim", slug: "anaheim", zip: "92802", county: "Orange", tier: 1, enabled: true },
  { city: "Santa Ana", slug: "santa-ana", zip: "92701", county: "Orange", tier: 1, enabled: true },
  { city: "Tustin", slug: "tustin", zip: "92780", county: "Orange", tier: 1, enabled: true },
  { city: "Orange", slug: "orange", zip: "92867", county: "Orange", tier: 1, enabled: true },
  { city: "Huntington Beach", slug: "huntington-beach", zip: "92647", county: "Orange", tier: 1, enabled: true },

  { city: "Los Angeles", slug: "los-angeles", zip: "90001", county: "Los Angeles", tier: 2, enabled: false },
  { city: "Long Beach", slug: "long-beach", zip: "90802", county: "Los Angeles", tier: 2, enabled: false },
  { city: "Santa Monica", slug: "santa-monica", zip: "90401", county: "Los Angeles", tier: 2, enabled: false },
  { city: "Pasadena", slug: "pasadena", zip: "91101", county: "Los Angeles", tier: 2, enabled: false },
  { city: "Glendale", slug: "glendale", zip: "91201", county: "Los Angeles", tier: 2, enabled: false },
  { city: "Burbank", slug: "burbank", zip: "91501", county: "Los Angeles", tier: 2, enabled: false },
  { city: "Torrance", slug: "torrance", zip: "90501", county: "Los Angeles", tier: 2, enabled: false },

  { city: "San Diego", slug: "san-diego", zip: "92101", county: "San Diego", tier: 2, enabled: false },
  { city: "Carlsbad", slug: "carlsbad", zip: "92008", county: "San Diego", tier: 2, enabled: false },
  { city: "Oceanside", slug: "oceanside", zip: "92054", county: "San Diego", tier: 2, enabled: false },
  { city: "Escondido", slug: "escondido", zip: "92025", county: "San Diego", tier: 2, enabled: false },
  { city: "Chula Vista", slug: "chula-vista", zip: "91910", county: "San Diego", tier: 2, enabled: false },
];

export const getActiveServiceAreas = () => serviceAreas.filter((a) => a.enabled);
export const getServiceAreasByTier = (tier: 1 | 2) => serviceAreas.filter((a) => a.tier === tier && a.enabled);
export const getServiceArea = (slug: string) => serviceAreas.find((a) => a.slug === slug);
