import { safeJsonLd } from "@/lib/safeJsonLd";

const SITE_URL = "https://aximushvac.com";

const schema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Aximus HVAC Solutions, Inc.",
  alternateName: "Aximus HVAC",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  image: `${SITE_URL}/images/logo.svg`,
  telephone: "+1-800-555-1234",
  email: "service@aximushvac.com",
  priceRange: "$$",
  description:
    "Commercial VRV/VRF installation, repair, and maintenance across California. Factory-certified Daikin and Mitsubishi Electric technicians with 4-hour emergency response.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2855 Michelle Drive, Suite 150",
    addressLocality: "Irvine",
    addressRegion: "CA",
    postalCode: "92606",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.6846,
    longitude: -117.8265,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Orange County, California" },
    { "@type": "AdministrativeArea", name: "Los Angeles County, California" },
    { "@type": "AdministrativeArea", name: "San Diego County, California" },
    { "@type": "City", name: "Irvine, CA" },
    { "@type": "City", name: "Anaheim, CA" },
    { "@type": "City", name: "Costa Mesa, CA" },
    { "@type": "City", name: "Newport Beach, CA" },
    { "@type": "City", name: "Santa Ana, CA" },
    { "@type": "City", name: "Tustin, CA" },
    { "@type": "City", name: "Orange, CA" },
    { "@type": "City", name: "Huntington Beach, CA" },
    { "@type": "City", name: "Los Angeles, CA" },
    { "@type": "City", name: "San Diego, CA" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-800-555-1234",
      contactType: "customer service",
      areaServed: "US-CA",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-800-555-1234",
      contactType: "emergency",
      areaServed: "US-CA",
      hoursAvailable: "Mo-Su 00:00-23:59",
    },
  ],
  hasCredential: [
    "EPA 608 Universal",
    "Daikin VRV Certified",
    "NATE Certified",
    "CSLB C-20 Licensed",
  ],
  knowsAbout: [
    "VRV installation",
    "VRF installation",
    "VRV repair",
    "VRF repair",
    "Daikin VRV service",
    "Mitsubishi Electric VRF service",
    "HVAC commissioning",
    "Preventive maintenance agreement",
    "Title 24 compliance",
  ],
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
