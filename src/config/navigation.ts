export interface PageConfig {
  slug: string;
  title: string;
  enabled: boolean;
  showInNav: boolean;
  showInSitemap: boolean;
}

export const pages: PageConfig[] = [
  { slug: "/", title: "Home", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/about", title: "About", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/services", title: "Services", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/services/vrv-vrf-installation", title: "VRV/VRF Installation", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/services/vrv-vrf-repair", title: "VRV/VRF Repair", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/services/vrv-vrf-maintenance", title: "VRV/VRF Maintenance", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/services/vrv-vrf-commissioning", title: "VRV/VRF Commissioning", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/services/daikin-vrv-service", title: "Daikin VRV Service", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/services/emergency-vrf-repair", title: "Emergency VRF Repair", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/services/mitsubishi-vrf-service", title: "Mitsubishi VRF Service", enabled: false, showInNav: true, showInSitemap: true },
  { slug: "/property-managers", title: "Property Managers", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/service-areas", title: "Service Areas", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/blog", title: "Blog", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/contact", title: "Contact", enabled: true, showInNav: true, showInSitemap: true },
  { slug: "/privacy-policy", title: "Privacy Policy", enabled: true, showInNav: false, showInSitemap: true },
];

export const getNavPages = () => pages.filter((p) => p.enabled && p.showInNav);
export const getSitemapPages = () => pages.filter((p) => p.enabled && p.showInSitemap);
export const isPageEnabled = (slug: string) => pages.find((p) => p.slug === slug)?.enabled ?? false;
