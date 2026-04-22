#!/usr/bin/env node
/**
 * Génère un écosystème complet de favicons à partir du logo :
 *   - favicon.ico multi-résolution (16,32,48)
 *   - PNG 16/32/48/96/128/192/256/384/512
 *   - apple-touch-icon 180/152/167/120/76
 *   - SVG vectoriel (embed PNG en <image>)
 *   - pinned-tab monochrome (approx)
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";

const SRC = "C:/Users/Maison/Desktop/Berenice/Logo Piano Bérénice à Nice.png";
const OUT = "public";

const sizes = [16, 32, 48, 64, 96, 128, 144, 192, 256, 384, 512];
const apple = [57, 60, 72, 76, 114, 120, 144, 152, 167, 180];

const buffers = {};

for (const s of sizes) {
  const buf = await sharp(SRC)
    .resize({ width: s, height: s, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(`${OUT}/icon-${s}.png`, buf);
  buffers[s] = buf;
  console.log(`✓ icon-${s}.png`);
}

for (const s of apple) {
  const buf = await sharp(SRC)
    .resize({ width: s, height: s, fit: "contain", background: { r: 0xfb, g: 0xf7, b: 0xef, alpha: 1 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(`${OUT}/apple-icon-${s}.png`, buf);
  console.log(`✓ apple-icon-${s}.png`);
}

// favicon.ico multi-res (16, 32, 48)
const ico = await pngToIco([buffers[16], buffers[32], buffers[48]]);
await writeFile(`${OUT}/favicon.ico`, ico);
console.log(`✓ favicon.ico (16,32,48)`);

// SVG wrapper (embarque le PNG 512 en base64)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <title>Académie de piano Bérénice</title>
  <image href="data:image/png;base64,${buffers[512].toString("base64")}" width="512" height="512"/>
</svg>`;
await writeFile(`${OUT}/icon.svg`, svg);
console.log(`✓ icon.svg (PNG embed)`);

// safari-pinned-tab monochrome approx (clé de sol générique)
const pinnedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <title>Académie de piano Bérénice</title>
  <path d="M8.2 1.3c-.7.7-1 1.7-1 2.7 0 1 .3 2 .8 3.2-1.8 1.3-3.1 2.8-3.1 4.8 0 1.8 1.3 3.3 2.9 3.8l.2 1.5c.1.4 0 .8-.3 1.1-.3.3-.7.5-1.2.5-.7 0-1.2-.4-1.4-1 .6-.1 1.1-.6 1.1-1.3 0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4c0 1.5 1.3 2.7 2.9 2.7.9 0 1.7-.3 2.2-.9.5-.6.7-1.3.6-2l-.3-1.4c.1 0 .2 0 .4.1 1.8 0 3.2-1.4 3.2-3.2 0-1.5-1-2.7-2.3-3.1l-.3-2c.9-.8 1.5-1.9 1.5-3.1 0-1-.3-1.8-.9-2.5-.1-.1-.2-.1-.3 0-.6.5-1 1.4-1 2.4 0 1.1.5 2 1.2 2.7l.3 1.9c-.2 0-.4-.1-.6-.1-1.7 0-3.1 1.4-3.1 3.1 0 1.2.6 2.2 1.6 2.7l-.2-1.2c-.4-.3-.6-.8-.6-1.3 0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .8-.5 1.4-1.2 1.6l-.3-1.7c-.1-.6-.2-1.1-.5-1.7-.5-1.2-.8-2.2-.8-3.2 0-.8.2-1.5.6-2.1.1-.1.1-.2 0-.3-.1-.1-.2-.1-.3 0z"/>
</svg>`;
await writeFile(`${OUT}/safari-pinned-tab.svg`, pinnedSvg);
console.log(`✓ safari-pinned-tab.svg`);

// browserconfig.xml pour IE/Edge ancien
const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/icon-96.png"/>
      <square150x150logo src="/icon-192.png"/>
      <square310x310logo src="/icon-384.png"/>
      <TileColor>#1a2540</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
await writeFile(`${OUT}/browserconfig.xml`, browserconfig);
console.log(`✓ browserconfig.xml`);

console.log("\n✨ Favicon ecosystem done.");
