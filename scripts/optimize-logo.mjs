#!/usr/bin/env node
import sharp from "sharp";
import { copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";

const src = "C:/Users/Maison/Desktop/Berenice/Logo Piano Bérénice à Nice.png";
const outDir = "public";
const iconDir = "app";

if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

// PNG transparent 512x512 (Open Graph, Apple touch)
await sharp(src)
  .resize({
    width: 512,
    height: 512,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9 })
  .toFile(`${outDir}/logo.png`);

// Version 1024 pour Open Graph
await sharp(src)
  .resize({
    width: 1200,
    height: 630,
    fit: "contain",
    background: { r: 0xfb, g: 0xf7, b: 0xef, alpha: 1 },
  })
  .png({ compressionLevel: 9 })
  .toFile(`${outDir}/og-image.png`);

// WebP compact pour usage en img
await sharp(src)
  .resize({
    width: 512,
    withoutEnlargement: true,
  })
  .webp({ quality: 92 })
  .toFile(`${outDir}/logo.webp`);

await sharp(src)
  .resize({
    width: 192,
    withoutEnlargement: true,
  })
  .webp({ quality: 92 })
  .toFile(`${outDir}/logo-192.webp`);

// Favicon PNG 32 + 180 (Apple)
await sharp(src)
  .resize({
    width: 32,
    height: 32,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(`${iconDir}/icon.png`);

await sharp(src)
  .resize({
    width: 180,
    height: 180,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(`${iconDir}/apple-icon.png`);

// Version small pour base64 dans vCard (PHOTO)
const vcardBuffer = await sharp(src)
  .resize({
    width: 256,
    height: 256,
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .jpeg({ quality: 82 })
  .toBuffer();

const { writeFile } = await import("node:fs/promises");
await writeFile(
  "lib/logo-vcard-base64.ts",
  `// Auto-généré par scripts/optimize-logo.mjs — ne pas éditer à la main\nexport const logoVcardBase64 = ${JSON.stringify(vcardBuffer.toString("base64"))};\n`,
);

console.log("✓ logo.png 512  /  og-image.png 1200x630  /  logo.webp  /  icon.png  /  apple-icon.png  /  logo-vcard-base64.ts");
