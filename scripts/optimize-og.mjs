#!/usr/bin/env node
/**
 * Compose une Open Graph image 1200x630 :
 *   - Photo portrait Bérénice au piano (cropée / assombrie)
 *   - Logo officiel en médaillon
 *   - Gradient sombre + texte SEO
 */
import sharp from "sharp";
import { readFile } from "node:fs/promises";

const SRC_PORTRAIT = "C:/Users/Maison/Desktop/Berenice/475633605_1037567545054019_1399408624039264445_n.jpg";
const SRC_LOGO = "C:/Users/Maison/Desktop/Berenice/Logo Piano Bérénice à Nice.png";
const OUT = "public/og-image.png";
const OUT_SQUARE = "public/og-image-square.png";

async function build(width, height, out) {
  // Crop portrait au bon ratio
  const base = await sharp(SRC_PORTRAIT)
    .rotate()
    .resize({ width, height, fit: "cover", position: "attention" })
    .modulate({ saturation: 1.08, brightness: 0.92 })
    .toBuffer();

  // Logo 160×160 en médaillon rond
  const logo = await sharp(SRC_LOGO)
    .resize({ width: 160, height: 160, fit: "contain", background: { r: 0xfb, g: 0xf7, b: 0xef, alpha: 1 } })
    .toBuffer();

  // Overlay : gradient sombre + textes
  const overlay = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0a1020" stop-opacity="0.1"/>
          <stop offset="0.45" stop-color="#0a1020" stop-opacity="0.55"/>
          <stop offset="1" stop-color="#0a1020" stop-opacity="0.92"/>
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#b8894a"/>
          <stop offset="1" stop-color="#d5b07c"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <rect x="80" y="${height - 250}" width="120" height="3" fill="url(#accent)"/>
      <text x="80" y="${height - 200}" fill="#d5b07c" font-family="Georgia, serif" font-size="22" font-weight="600" letter-spacing="5">
        DEPUIS 1994 · NICE · CIMIEZ
      </text>
      <text x="80" y="${height - 130}" fill="white" font-family="Georgia, serif" font-size="62" font-weight="700">
        Académie de piano Bérénice
      </text>
      <text x="80" y="${height - 70}" fill="#e4dac5" font-family="Helvetica, Arial, sans-serif" font-size="28">
        Cours de piano, solfège et éveil musical — Côte d'Azur
      </text>
      <text x="80" y="${height - 30}" fill="#b8894a" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="600">
        piano-berenice.com
      </text>
    </svg>
  `);

  await sharp(base)
    .composite([
      { input: overlay, blend: "over" },
      { input: logo, top: 40, left: width - 200, blend: "over" },
    ])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`✓ ${out} (${width}x${height})`);
}

await build(1200, 630, OUT);
await build(1200, 1200, OUT_SQUARE);
