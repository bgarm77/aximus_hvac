// Photo enhancement pipeline:
// 1) Real-ESRGAN upscale (4x) -> PNG
// 2) sharp: resize to target, normalize, sharpen, modest saturation lift
// 3) Save as WebP (q=90) overwriting target path

import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync, unlinkSync } from 'node:fs';
import { dirname } from 'node:path';
import sharp from 'sharp';

const ROOT = 'C:/VSCodeProjects/aximus_hvac';
const SRC = `${ROOT}/public/images/blog`;
const TMP = `${ROOT}/tools/realesrgan/tmp`;
const EXE = `${ROOT}/tools/realesrgan/realesrgan-ncnn-vulkan.exe`;
const MODELS = `${ROOT}/tools/realesrgan/models`;

mkdirSync(TMP, { recursive: true });

const MAP = [
  { src: 'iStock-1609631886.jpg', dst: 'public/images/home/hero.webp',     w: 1600, h: 1200 },
  { src: 'iStock-2223163788.jpg', dst: 'public/images/home/hero-1.webp',   w: 800,  h: 600  },
  { src: 'iStock-2232366225.jpg', dst: 'public/images/home/hero-2.webp',   w: 800,  h: 600  },
  { src: 'iStock-641843236.jpg',  dst: 'public/images/home/hero-3.webp',   w: 800,  h: 600  },
  { src: 'iStock-1043629792.jpg', dst: 'public/images/services/installation.webp',              w: 1600, h: 1200 },
  { src: 'iStock-1609635589.jpg', dst: 'public/images/services/diagnosis.webp',                 w: 1600, h: 1200 },
  { src: 'iStock-1347870391.jpg', dst: 'public/images/services/maintenance.webp',               w: 1600, h: 1200 },
  { src: 'iStock-1609629293.jpg', dst: 'public/images/services/commissioning.webp',             w: 1600, h: 1200 },
  { src: 'iStock-1323336449.jpg', dst: 'public/images/services/daikin-vrv-units.webp',          w: 1600, h: 1200 },
  { src: 'iStock-807242604.jpg',  dst: 'public/images/services/emergency-service.webp',         w: 1600, h: 1200 },
  { src: 'iStock-1392864659.jpg', dst: 'public/images/services/mitsubishi-citymulti-product.webp', w: 1600, h: 1200 },
  { src: 'iStock-2187716054.jpg', dst: 'public/images/services/about-skyline.webp',             w: 2048, h: 1366 },
  { src: 'iStock-1591637342.jpg', dst: 'public/images/services/service-areas-banner.webp',      w: 2400, h: 1000 },
  { src: 'iStock-1165156674.jpg', dst: 'public/images/services/property-managers.webp',         w: 2048, h: 1366 },
];

async function enhance({ src, dst, w, h }) {
  const srcPath = `${SRC}/${src}`;
  const tmpPng  = `${TMP}/${src.replace(/\.jpg$/i, '.png')}`;
  const dstPath = `${ROOT}/${dst}`;

  mkdirSync(dirname(dstPath), { recursive: true });

  console.log(`\n→ ${src} -> ${dst}`);
  console.log(`  [1/2] Real-ESRGAN upscale 4x...`);
  execFileSync(EXE, [
    '-i', srcPath,
    '-o', tmpPng,
    '-n', 'realesrgan-x4plus',
    '-s', '4',
    '-m', MODELS,
  ], { stdio: ['ignore', 'ignore', 'inherit'] });

  console.log(`  [2/2] sharp: resize ${w}x${h}, normalize, sharpen, webp q90...`);
  await sharp(tmpPng)
    .resize(w, h, { fit: 'cover', position: 'centre' })
    .normalise()
    .modulate({ saturation: 1.08, brightness: 1.02 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
    .webp({ quality: 90, effort: 6 })
    .toFile(dstPath);

  try { unlinkSync(tmpPng); } catch {}
  console.log(`  ✓ ${dstPath}`);
}

(async () => {
  const start = Date.now();
  for (const item of MAP) {
    if (!existsSync(`${SRC}/${item.src}`)) {
      console.error(`MISSING SOURCE: ${item.src}`);
      process.exit(1);
    }
    await enhance(item);
  }
  const mins = ((Date.now() - start) / 60000).toFixed(1);
  console.log(`\nDone. ${MAP.length} photos processed in ${mins} min.`);
})();
