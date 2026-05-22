#!/usr/bin/env node
/**
 * Capture landing showcase sections from notiky.com as PNGs for the org README.
 */
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "docs/assets/showcase");
const baseUrl = process.env.LANDING_URL ?? "https://notiky.com";

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 2,
  reducedMotion: "reduce",
});
const page = await context.newPage();

console.log(`Loading ${baseUrl}...`);
await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 120_000 });
await page.waitForTimeout(2000);

async function captureSection(name, locatorFn) {
  const locator = locatorFn(page);
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  const box = await locator.boundingBox();
  if (!box) throw new Error(`No bounding box for ${name}`);
  const path = join(outDir, `${name}.png`);
  await locator.screenshot({ path, type: "png" });
  const optimized = await sharp(path)
    .resize({ width: 1200, withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 85 })
    .toBuffer();
  await sharp(optimized).toFile(path);
  console.log(`Captured ${name} -> ${path} (${optimized.length} bytes)`);
}

// Architecture: section containing engine diagram headline
await captureSection("architecture-engine", (p) =>
  p.locator("section").filter({ hasText: "One engine for the whole product loop" }).first(),
);

// How it works: #how-it-works section
await captureSection("product-loop", (p) => p.locator("#how-it-works"));

// Capabilities bento
await captureSection("capabilities-bento", (p) =>
  p.locator("section").filter({ hasText: "Everything your product needs" }).first(),
);

await browser.close();
console.log("Done.");
