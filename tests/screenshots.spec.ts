import { test } from '@playwright/test';

const pages = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/services', name: 'services' },
  { path: '/services/vrv-vrf-installation', name: 'services-vrv-vrf-installation' },
  { path: '/services/vrv-vrf-repair', name: 'services-vrv-vrf-repair' },
  { path: '/services/vrv-vrf-maintenance', name: 'services-vrv-vrf-maintenance' },
  { path: '/services/vrv-vrf-commissioning', name: 'services-vrv-vrf-commissioning' },
  { path: '/services/daikin-vrv-service', name: 'services-daikin-vrv-service' },
  { path: '/services/emergency-vrf-repair', name: 'services-emergency-vrf-repair' },
  { path: '/property-managers', name: 'property-managers' },
  { path: '/service-areas', name: 'service-areas' },
  { path: '/blog', name: 'blog' },
  { path: '/contact', name: 'contact' },
  { path: '/privacy-policy', name: 'privacy-policy' },
];

for (const { path, name } of pages) {
  test(`screenshot ${name}`, async ({ page }, testInfo) => {
    await page.goto(path, { waitUntil: 'networkidle' });
    await page.waitForLoadState('domcontentloaded');
    await page.evaluate(async () => {
      const imgs = Array.from(document.images);
      await Promise.all(
        imgs.map((img) =>
          img.complete ? Promise.resolve() : new Promise((res) => {
            img.addEventListener('load', res);
            img.addEventListener('error', res);
          })
        )
      );
    });
    const viewport = testInfo.project.name;
    await page.screenshot({
      path: `screenshots/${name}-${viewport}.png`,
      fullPage: true,
    });
  });
}
