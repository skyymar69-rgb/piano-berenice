#!/usr/bin/env node
/**
 * Optimise et convertit les photos sources vers public/images/*.webp
 * en 3 tailles responsives (small/medium/large) + applique saturation + contraste doux
 * pour un rendu "agence premium".
 */
import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";
import { existsSync } from "node:fs";

const SRC = "C:/Users/Maison/Desktop/Berenice";
const OUT = "public/images";

// Mapping source → nom court SEO
const mapping = {
  "241178655_4806659896029874_6414631030714566118_n.jpeg": "berenice-piano-queue-nappe-rouge",
  "241179567_4806659786029885_8211947285220002178_n.jpeg": "berenice-jouant-piano-queue-salle-vitraux",
  "241383314_4806671489362048_4820389759432809429_n.jpeg": "salle-solfege-tables-chaises",
  "241407217_4806659939363203_4774473477562200631_n.jpeg": "couloir-accueil-academie-piano-nice",
  "475633605_1037567545054019_1399408624039264445_n.jpg": "berenice-lecardeur-portrait-piano-queue",
  "511127591_24562631260006111_3980039683067184774_n.jpg": "piano-yamaha-partition-cours",
  "512671100_24562621746673729_2720284150443475462_n.jpg": "salle-cours-piano-queue-decor",
  "512846747_24562608843341686_7692620072571822929_n.jpg": "partition-rose-piano-eveil-musical",
  "515506968_24678559508413285_967421485932614928_n.jpg": "salle-cours-solfege-groupe-academie",
  "515543249_24678559281746641_1546140514455888523_n.jpg": "salle-audition-piano-academie-nice",
};

const sizes = [
  { suffix: "-sm", width: 480 },
  { suffix: "-md", width: 960 },
  { suffix: "-lg", width: 1600 },
];

async function main() {
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });
  const files = await readdir(SRC);
  let generated = 0;

  for (const file of files) {
    const outName = mapping[file];
    if (!outName) continue;
    const src = join(SRC, file);

    for (const { suffix, width } of sizes) {
      const dst = join(OUT, `${outName}${suffix}.webp`);
      await sharp(src)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .modulate({ saturation: 1.08, brightness: 1.02 })
        .sharpen({ sigma: 0.6 })
        .webp({ quality: 82, effort: 6 })
        .toFile(dst);
      generated++;
    }
    // Version AVIF large (fallback moderne)
    await sharp(src)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .modulate({ saturation: 1.08, brightness: 1.02 })
      .sharpen({ sigma: 0.6 })
      .avif({ quality: 55, effort: 4 })
      .toFile(join(OUT, `${outName}-lg.avif`));
    generated++;
    console.log(`✓ ${outName}`);
  }
  console.log(`\nGenerated ${generated} files in ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
