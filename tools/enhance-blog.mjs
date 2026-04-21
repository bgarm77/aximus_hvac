// Batch-enhance all JPGs in public/images/blog/:
// 1) Real-ESRGAN 4x upscale -> PNG
// 2) sharp: resize (max 1600px long side, preserve aspect), normalize,
//    modulate, sharpen, WebP q90
// 3) write <name>.webp next to source, then delete the .jpg

import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import sharp from 'sharp';

const ROOT = 'C:/VSCodeProjects/aximus_hvac';
const DIR  = `${ROOT}/public/images/blog`;
const TMP  = `${ROOT}/tools/realesrgan/tmp`;
const EXE  = `${ROOT}/tools/realesrgan/realesrgan-ncnn-vulkan.exe`;
const MODELS = `${ROOT}/tools/realesrgan/models`;
const MAX_LONG_SIDE = 1600;

mkdirSync(TMP, { recursive: true });

const jpgs = readdirSync(DIR).filter((f) => /\.jpe?g$/i.test(f));

async function enhance(filename) {
  const srcPath = `${DIR}/${filename}`;
  const base    = filename.replace(/\.jpe?g$/i, '');
  const tmpPng  = `${TMP}/${base}.png`;
  const dstPath = `${DIR}/${base}.webp`;

  console.log(`\n→ ${filename}`);
  console.log(`  [1/2] Real-ESRGAN upscale 4x...`);
  execFileSync(EXE, [
    '-i', srcPath,
    '-o', tmpPng,
    '-n', 'realesrgan-x4plus',
    '-s', '4',
    '-m', MODELS,
  ], { stdio: ['ignore', 'ignore', 'inherit'] });

  const meta = await sharp(tmpPng, { limitInputPixels: false }).metadata();
  const ratio = MAX_LONG_SIDE / Math.max(meta.width, meta.height);
  const w = Math.round(meta.width  * ratio);
  const h = Math.round(meta.height * ratio);

  console.log(`  [2/2] sharp: resize ${w}x${h}, webp q90...`);
  await sharp(tmpPng, { limitInputPixels: false })
    .resize(w, h)
    .normalise()
    .modulate({ saturation: 1.08, brightness: 1.02 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
    .webp({ quality: 90, effort: 6 })
    .toFile(dstPath);

  try { unlinkSync(tmpPng); } catch {}
  try { unlinkSync(srcPath); } catch {}
  console.log(`  ✓ ${base}.webp (${w}x${h}), jpg deleted`);
}

(async () => {
  const start = Date.now();
  console.log(`Processing ${jpgs.length} files...`);
  for (const f of jpgs) {
    await enhance(f);
  }
  const mins = ((Date.now() - start) / 60000).toFixed(1);
  console.log(`\nDone. ${jpgs.length} files processed in ${mins} min.`);
})();
