#!/usr/bin/env node
/** Export integration logos as transparent PNGs for GitHub README (dark bg). */
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "docs/assets/integrations");
const logos = ["logo-cursor", "logo-claude", "linear-short"];

for (const name of logos) {
  execSync(
    `npx --yes @resvg/resvg-js-cli "${join(dir, `${name}.svg`)}" "${join(dir, `${name}.png`)}" --fit-width 160`,
    { stdio: "inherit" },
  );
}

console.log("Integration PNGs exported.");
