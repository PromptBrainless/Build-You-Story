import { readFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import kiAuflagen from "../src/game/json/ki-auflagen.json" with { type: "json" };
import { VOLLTEXTE } from "../src/game/json/volltexte.ts";
import { vergleicheText } from "../src/game/textvergleich.ts";

const root = resolve(process.cwd());
const ALIAS = {
  "dorf-hub": "lindendorf",
  "sanna-botin": "sanna-die-botin",
};
const spielDateien = [
  "src/game/script.ts",
  "src/game/content.ts",
  "src/game/quest-brunnen.ts",
  "src/game/quest-muehle.ts",
  "src/game/quest-kesseljahr.ts",
  "src/game/kesseljahr-gewoelbe.ts",
  "src/game/kesseljahr-grete.ts",
  "src/game/kesseljahr-schluss.ts",
  "src/game/json/ankunft.ts",
];
const kartenDateien = ["src/game/json/baum.ts", "src/game/json/ankunft.ts"];

function mass(lines) {
  return (lines ?? []).map((zeile) => String(zeile).trim()).filter(Boolean).join(" ").length;
}

function zeichenkette(body) {
  const lines = [];
  const re = /"((?:\\.|[^"\\])*)"/g;
  let fund;
  while ((fund = re.exec(body))) {
    lines.push(fund[1].replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
  }
  return lines;
}

function kartenAus(text) {
  const map = new Map();
  let i = 0;
  while (i < text.length) {
    const j = text.indexOf("karte(", i);
    if (j < 0) break;
    if (j > 0 && /[A-Za-z0-9_$]/.test(text[j - 1])) {
      i = j + 6;
      continue;
    }
    const open = j + "karte(".length - 1;
    let depth = 0;
    let k = open;
    let inStr = false;
    let esc = false;
    for (; k < text.length; k += 1) {
      const c = text[k];
      if (inStr) {
        if (esc) esc = false;
        else if (c === "\\") esc = true;
        else if (c === '"') inStr = false;
        continue;
      }
      if (c === '"') {
        inStr = true;
        continue;
      }
      if (c === "(" || c === "[" || c === "{") depth += 1;
      else if (c === ")" || c === "]" || c === "}") {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    const args = text.slice(open + 1, k);
    const id = args.match(/^\s*"([^"]+)"/)?.[1];
    const title = args.match(/^\s*"[^"]+"\s*,\s*"([^"]+)"/)?.[1];
    const head = args.match(/^\s*"[^"]+"\s*,\s*"[^"]+"\s*,\s*"[^"]+"\s*,\s*\[/)?.[0];
    let lines = [];
    if (id && head) {
      const start = args.indexOf("[", head.length - 1);
      let d = 0;
      let end = start;
      let s = false;
      let e = false;
      for (; end < args.length; end += 1) {
        const c = args[end];
        if (s) {
          if (e) e = false;
          else if (c === "\\") e = true;
          else if (c === '"') s = false;
          continue;
        }
        if (c === '"') {
          s = true;
          continue;
        }
        if (c === "[") d += 1;
        else if (c === "]") {
          d -= 1;
          if (d === 0) {
            end += 1;
            break;
          }
        }
      }
      lines = zeichenkette(args.slice(start, end));
    }
    if (id) {
      const bisher = map.get(id);
      if (!bisher || mass(lines) >= mass(bisher.lines)) map.set(id, { title, lines });
    }
    i = k + 1;
  }
  return map;
}

function presents(text) {
  const out = [];
  let i = 0;
  while (true) {
    const j = text.indexOf("present({", i);
    if (j < 0) break;
    const start = text.indexOf("{", j);
    let depth = 0;
    let k = start;
    let inStr = false;
    let esc = false;
    while (k < text.length) {
      const c = text[k];
      if (inStr) {
        if (esc) esc = false;
        else if (c === "\\") esc = true;
        else if (c === '"') inStr = false;
      } else if (c === '"') inStr = true;
      else if (c === "{") depth += 1;
      else if (c === "}") {
        depth -= 1;
        if (depth === 0) break;
      }
      k += 1;
    }
    const block = text.slice(start, k + 1);
    const id = block.match(/\bid:\s*"([^"]+)"/)?.[1];
    const title = block.match(/title:\s*"([^"]+)"/)?.[1];
    const lm = block.match(/lines:\s*\[([\s\S]*?)\]/);
    const lines = lm ? zeichenkette(lm[1]) : [];
    if (id) out.push({ id, title, lines });
    i = j + 9;
  }
  return out;
}

function laenger(pool, id) {
  const namen = [id, ALIAS[id]].filter(Boolean);
  let best = [];
  for (const name of namen) {
    const lines = pool[name]?.lines;
    if (mass(lines) > mass(best)) best = lines;
  }
  return best;
}

async function dateien(dir) {
  const liste = [];
  for (const eintrag of await readdir(dir, { withFileTypes: true })) {
    const pfad = join(dir, eintrag.name);
    if (eintrag.isDirectory()) liste.push(...(await dateien(pfad)));
    else if (eintrag.name.endsWith(".json")) liste.push(pfad);
  }
  return liste;
}

const karten = new Map();
for (const rel of kartenDateien) {
  const text = await readFile(join(root, rel), "utf8");
  for (const [id, karte] of kartenAus(text)) {
    const bisher = karten.get(id);
    if (!bisher || mass(karte.lines) >= mass(bisher.lines)) karten.set(id, karte);
  }
}

const json = new Map();
const titel = new Map();
for (const [id, karte] of karten) if (karte.title) titel.set(id, karte.title);

for (const pfad of await dateien(join(root, "src/game/json/quests"))) {
  const roh = JSON.parse(await readFile(pfad, "utf8"));
  const szenen = [
    ...(roh.szenen ?? []),
    ...(roh.teile?.flatMap((teil) => teil.szenen ?? []) ?? []),
    ...(roh.lines && roh.id ? [roh] : []),
  ];
  for (const szene of szenen) {
    if (!szene?.id || !Array.isArray(szene.lines)) continue;
    const bisher = json.get(szene.id);
    if (!bisher || mass(szene.lines) > mass(bisher)) {
      json.set(szene.id, szene.lines);
      if (szene.title) titel.set(szene.id, szene.title);
    }
  }
}

const present = new Map();
for (const rel of spielDateien) {
  const text = await readFile(join(root, rel), "utf8");
  for (const block of presents(text)) {
    const bisher = present.get(block.id);
    if (!bisher || mass(block.lines) > mass(bisher)) {
      present.set(block.id, block.lines);
      if (block.title && !titel.has(block.id)) titel.set(block.id, block.title);
    }
  }
}

for (const [id, eintrag] of Object.entries(kiAuflagen)) {
  if (eintrag?.title && !titel.has(id)) titel.set(id, eintrag.title);
}

const ids = new Set([...karten.keys(), ...json.keys(), ...present.keys(), ...Object.keys(kiAuflagen), ...Object.keys(VOLLTEXTE)]);
const vergleiche = [...ids].map((id) =>
  vergleicheText(id, titel.get(id) ?? id, [
    { quelle: "Karte", lines: karten.get(id)?.lines },
    { quelle: "KI", lines: laenger(kiAuflagen, id) },
    { quelle: "Volltext", lines: laenger(VOLLTEXTE, id) },
    { quelle: "JSON", lines: json.get(id) },
    { quelle: "present", lines: present.get(id) },
  ]),
);

const alle = process.argv.includes("--alle");
const verdeckt = vergleiche.filter((fund) => fund.verdeckt.length);
const nah = vergleiche.filter((fund) => !fund.gleich && !fund.verdeckt.length);
const zeigen = alle ? vergleiche : [...verdeckt, ...nah];

function zeile(fund) {
  const teile = fund.quellen
    .filter((quelle) => !quelle.fehlt)
    .map((quelle) => {
      const stand = quelle.gleich ? "gleich" : quelle.kuerzer ? "kürzer" : "weicht ab";
      const ort = quelle.zeile ? `, Zeile ${quelle.zeile}` : "";
      return `${quelle.quelle} ${quelle.chars} ${stand}${ort}`;
    });
  const extra = fund.verdeckt.length ? ` · nicht im Spiel: ${fund.verdeckt.join(", ")}` : "";
  return `${fund.id} — Sieger ${fund.sieger || "—"} ${fund.siegerChars}, Spiel ${fund.spielChars}${extra}\n  ${teile.join(" · ")}`;
}

console.log(`Textvergleich: ${vergleiche.length} Szenen, ${verdeckt.length} verdeckt länger, ${nah.length} gleicher Umfang anderer Wortlaut.`);
if (zeigen.length) console.log(zeigen.map(zeile).join("\n"));
if (verdeckt.length) {
  console.error("Die längere Fassung liegt nicht in Karte, KI, Volltext oder present().");
  process.exit(1);
}
