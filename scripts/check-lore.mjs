import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { LORE } from "../src/game/lore.ts";

const root = resolve(process.cwd());
const dateien = [
  "src/game/json/baum.ts",
  "src/game/json/ankunft.ts",
  "src/game/content.ts",
  "src/game/lager-content.ts",
  "src/game/script.ts",
];

const bekannt = new Set();
for (const rel of dateien) {
  const text = await readFile(resolve(root, rel), "utf8");
  for (const fund of text.matchAll(/karte\(\s*"([^"]+)"/g)) bekannt.add(fund[1]);
  for (const fund of text.matchAll(/\bid:\s*"([^"]+)"/g)) bekannt.add(fund[1]);
}

const fehlend = [];
for (const fakt of LORE) {
  for (const id of fakt.szenen) {
    if (!bekannt.has(id)) fehlend.push(`${fakt.id} → ${id}`);
  }
}

if (fehlend.length) {
  console.error(`Lore: ${fehlend.length} Szenen fehlen\n${fehlend.join("\n")}`);
  process.exit(1);
}
console.log(`Lore: ${LORE.length} Fakten, jede Szene existiert.`);
