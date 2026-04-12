export interface ServiceAreaDetails {
  intro: string;
  buildingTypes: string[];
  localNotes: string;
  neighborhoods: string[];
  zips: string[];
}

export const serviceAreaDetails: Record<string, ServiceAreaDetails> = {
  irvine: {
    intro:
      "Irvine has one of the densest concentrations of VRF-equipped Class-A office space in Orange County. We service VRV and VRF systems across the Spectrum, Irvine Business Complex, and the medical and R&D campuses around UCI.",
    buildingTypes: [
      "Class-A office towers and corporate campuses",
      "Medical office buildings and outpatient clinics",
      "R&D and biotech tenant buildouts",
      "Mixed-use residential over retail",
    ],
    localNotes:
      "Many Irvine buildings run Daikin VRV IV or VRV 5 systems commissioned between 2015 and 2022. Common service items: communication faults between outdoor and branch controllers, and refrigerant charge verification on long-pipe-length jobs in taller IBC towers.",
    neighborhoods: [
      "Irvine Spectrum",
      "Irvine Business Complex (IBC)",
      "University Research Park",
      "Quail Hill",
    ],
    zips: ["92602", "92603", "92604", "92606", "92612", "92614", "92617", "92618", "92620"],
  },
  "newport-beach": {
    intro:
      "Newport Beach's Class-A office stock — Newport Center, Fashion Island, and the office parks along MacArthur — relies heavily on VRF for zoned tenant control. Coastal exposure makes outdoor-unit corrosion inspection part of every maintenance visit.",
    buildingTypes: [
      "Newport Center office towers",
      "Boutique office buildings along PCH and Jamboree",
      "Hospitality and conference venues",
      "High-end mixed-use retail",
    ],
    localNotes:
      "Salt-air exposure accelerates coil and cabinet corrosion on rooftop and ground-level outdoor units. Our Newport Beach PMA adds a coastal corrosion check and condenser wash to each quarterly visit.",
    neighborhoods: [
      "Newport Center / Fashion Island",
      "Airport Area (MacArthur/Jamboree)",
      "Balboa Peninsula commercial",
      "Corona del Mar",
    ],
    zips: ["92660", "92661", "92662", "92663", "92625", "92657"],
  },
  "costa-mesa": {
    intro:
      "Costa Mesa's commercial base mixes retail at South Coast Plaza, office parks along Bristol and Anton, and a growing inventory of light-industrial creative space. Most VRF work here is tenant-improvement driven — new zones, indoor unit relocations, and control integration.",
    buildingTypes: [
      "Office parks near South Coast Metro",
      "Retail and restaurant spaces in South Coast Plaza area",
      "Creative / light-industrial conversions",
      "Hospitality along Bristol Street",
    ],
    localNotes:
      "Tenant churn in South Coast Metro means frequent indoor-unit relocation work. We handle VRF zoning changes, refrigerant recovery, and commissioning without shutting down neighboring tenants.",
    neighborhoods: [
      "South Coast Metro",
      "Mesa Verde",
      "Westside Costa Mesa",
      "SoBeCa District",
    ],
    zips: ["92626", "92627", "92628"],
  },
  anaheim: {
    intro:
      "Anaheim's commercial HVAC demand is driven by hospitality near the Convention Center and the Platinum Triangle's office and mixed-use towers. Guest-room VRF and ballroom zoning are the recurring service themes.",
    buildingTypes: [
      "Convention Center-adjacent hotels",
      "Platinum Triangle office and mixed-use towers",
      "Industrial and logistics near the 5 and 91",
      "Quick-service and sit-down restaurants",
    ],
    localNotes:
      "Hotel VRF systems near the Convention Center need service windows that don't collide with guest occupancy or events. We run after-hours and overnight visits so ballrooms and guest floors stay online.",
    neighborhoods: [
      "Anaheim Resort / Convention Center",
      "Platinum Triangle",
      "Downtown Anaheim",
      "Anaheim Hills commercial",
    ],
    zips: ["92801", "92802", "92804", "92805", "92806", "92807", "92808"],
  },
  "santa-ana": {
    intro:
      "Santa Ana's civic core, MainPlace office stock, and the growing office buildout around the OC Streetcar line all run on commercial HVAC that increasingly means VRF. We service county, civic, and private tenants across the city.",
    buildingTypes: [
      "Civic and county office buildings",
      "MainPlace / 17th Street commercial",
      "Historic downtown mixed-use",
      "Medical and legal office suites",
    ],
    localNotes:
      "Historic downtown buildings often have VRF retrofitted into older envelopes. Refrigerant pipe runs get long and branch controller placement gets creative — we document each retrofit so future service calls don't start from zero.",
    neighborhoods: [
      "Downtown Santa Ana",
      "MainPlace",
      "South Coast Metro (shared with Costa Mesa)",
      "Civic Center",
    ],
    zips: ["92701", "92703", "92704", "92705", "92706", "92707"],
  },
  tustin: {
    intro:
      "Tustin's medical office corridor along Newport Avenue and the mixed-use buildout at The District and Tustin Legacy drive most of the VRF workload here. Zoned comfort and low acoustic signature matter in both.",
    buildingTypes: [
      "Medical office buildings and surgery centers",
      "The District at Tustin Legacy retail and office",
      "Old Town Tustin professional offices",
      "Flex / R&D space",
    ],
    localNotes:
      "Medical tenants require documented refrigerant logs, HEPA-adjacent filter coordination, and strict service-window compliance. Every Tustin MOB visit ends with a written log suitable for facility audits.",
    neighborhoods: [
      "Tustin Legacy / The District",
      "Old Town Tustin",
      "Newport Avenue medical corridor",
      "Tustin Ranch",
    ],
    zips: ["92780", "92782"],
  },
  orange: {
    intro:
      "The City of Orange is anchored by medical — UCI Health, CHOC, St. Joseph — plus the office stock around The Village at Orange. VRF service here skews toward high-uptime medical environments.",
    buildingTypes: [
      "Hospital-adjacent medical office buildings",
      "The Village at Orange retail",
      "Old Towne Orange professional offices",
      "Outpatient surgery and imaging centers",
    ],
    localNotes:
      "Medical-adjacent properties can't take extended downtime. We stage replacement boards, fan motors, and EEV kits for the most common Daikin and Mitsubishi systems in the area so a diagnosis visit becomes a repair visit.",
    neighborhoods: [
      "UCI Health / St. Joseph medical district",
      "Old Towne Orange",
      "The Village at Orange",
      "Orange Park Acres commercial",
    ],
    zips: ["92865", "92866", "92867", "92868", "92869"],
  },
  "huntington-beach": {
    intro:
      "Huntington Beach commercial HVAC centers on hospitality at Pacific City, retail along Beach Boulevard, and the office parks near Bella Terra. Like Newport Beach, coastal exposure is a factor on every visit.",
    buildingTypes: [
      "Pacific City hospitality and retail",
      "Bella Terra office and retail",
      "Beach Boulevard commercial",
      "Light-industrial near Gothard",
    ],
    localNotes:
      "Coastal corrosion on outdoor coils and electrical contactors is the most common failure mode we see in Huntington Beach. Quarterly coil wash and contactor inspection is standard on every PMA in this ZIP.",
    neighborhoods: [
      "Pacific City / Downtown HB",
      "Bella Terra",
      "Beach / Edinger commercial",
      "Gothard industrial corridor",
    ],
    zips: ["92646", "92647", "92648", "92649"],
  },
};

export const getServiceAreaDetails = (slug: string): ServiceAreaDetails | undefined =>
  serviceAreaDetails[slug];
