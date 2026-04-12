import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, 'sample-report.html');
const outPath = resolve(__dirname, '..', 'public', 'downloads', 'aximus-sample-service-report.pdf');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' });
await page.emulateMedia({ media: 'print' });
await page.pdf({
  path: outPath,
  format: 'Letter',
  printBackground: true,
  margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
});
await browser.close();
console.log('Wrote', outPath);
