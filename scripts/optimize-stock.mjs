#!/usr/bin/env node
// Optimise les 5 photos libres de droit Pexels en WebP 3 tailles + AVIF lg.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const SRC = "C:/Users/Maison/AppData/Local/Temp/stock";
const OUT = "public/images";

const mapping = {
  "sheet-music-closeup.jpg": "stock-partition-solfege-piano",
  "piano-keys-closeup.jpg": "stock-touches-piano-gros-plan",
  "child-piano.jpg": "stock-eleve-partition-lecture",
  "hands-piano.jpg": "stock-mains-piano-partition",
  "grand-piano.jpg": "stock-mains-pianiste-piano-droit",
};

const sizes = [
  { suffix: "-sm", width: 480 },
  { suffix: "-md", width: 960 },
  { suffix: "-lg", width: 1600 },
];

if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });

for (const [src, slug] of Object.entries(mapping)) {
  const s = join(SRC, src);
  for (const { suffix, width } of sizes) {
    const dst = join(OUT, `${slug}${suffix}.webp`);
    await sharp(s)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .modulate({ saturation: 1.05 })
      .sharpen({ sigma: 0.5 })
      .webp({ quality: 82, effort: 6 })
      .toFile(dst);
  }
  await sharp(s)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .modulate({ saturation: 1.05 })
    .sharpen({ sigma: 0.5 })
    .avif({ quality: 55, effort: 4 })
    .toFile(join(OUT, `${slug}-lg.avif`));
  console.log(`✓ ${slug}`);
}
console.log("done");
