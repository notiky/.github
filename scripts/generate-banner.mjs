#!/usr/bin/env node
/**
 * Generate org profile banner PNG (1200x400) matching landing OG style.
 */
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "docs/assets/banner.png");
const logoPath = join(
  root,
  "../notiky-app/apps/web/public/logos/notiky-logo/logo-boxed.png",
);

const W = 1200;
const H = 400;

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#05070b"/>
  <rect x="0" y="0" width="${W}" height="4" fill="#C9A84C"/>
  <text x="120" y="175" fill="#faf6e6" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="700">The product engineering brain</text>
  <text x="120" y="225" fill="rgba(250,246,230,0.55)" font-family="system-ui, -apple-system, sans-serif" font-size="22">Persistent product context for AI coding workflows</text>
  <text x="${W - 48}" y="${H - 32}" text-anchor="end" fill="rgba(250,246,230,0.3)" font-family="ui-monospace, monospace" font-size="14">notiky.com</text>
</svg>`;

const logoBuf = await readFile(logoPath);
const logoPng = await sharp(logoBuf).resize(64, 64).png().toBuffer();

const base = sharp(Buffer.from(svg)).png();
const composed = await base
  .composite([{ input: logoPng, top: 130, left: 40 }])
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile(outPath, composed);
console.log(`Wrote ${outPath} (${composed.length} bytes)`);
