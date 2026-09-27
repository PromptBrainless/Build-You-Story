import {
  AMULETT,
  ARTEFAKT,
  BRANDMITTEL,
  GEHEIMINFORMATIONEN,
  HEILTRANK,
  KOERPER,
  LEDERMANTEL,
  PROVIANT,
  RUHIGE_HAND,
  SCHLICHTER_RING,
  SCHLUESSEL,
  TRAGEGURT,
  ZAEHER_NACKEN,
} from "./types.ts";
import type { Held } from "./types.ts";

export type DingArt = "beutel" | "angelegt" | "veranlagung";
type Mod = { all?: number; staerke?: number; geschick?: number; charisma?: number };

export type Ding = {
  name: string;
  hint: string;
  art: DingArt;
  mod: Mod;
};

export const GEGENSTAENDE: Record<string, Ding> = {
  [HEILTRANK]: { name: HEILTRANK, hint: "einmal trinken", art: "beutel", mod: {} },
  [SCHLUESSEL]: { name: SCHLUESSEL, hint: "öffnet eine Tür", art: "beutel", mod: {} },
  [PROVIANT]: { name: PROVIANT, hint: "hält eine Weile vor", art: "beutel", mod: {} },
  [BRANDMITTEL]: { name: BRANDMITTEL, hint: "zündet, was nass nicht will", art: "beutel", mod: {} },
  [GEHEIMINFORMATIONEN]: { name: GEHEIMINFORMATIONEN, hint: "ein Name, der weh tut", art: "beutel", mod: {} },
  [AMULETT]: { name: AMULETT, hint: "+1 Charisma", art: "angelegt", mod: { charisma: 1 } },
  [ARTEFAKT]: { name: ARTEFAKT, hint: "Kirchensilber", art: "beutel", mod: {} },
  [LEDERMANTEL]: { name: LEDERMANTEL, hint: "+1 Charisma", art: "angelegt", mod: { charisma: 1 } },
  [KOERPER]: { name: KOERPER, hint: "+1 Stärke", art: "veranlagung", mod: { staerke: 1 } },
  [RUHIGE_HAND]: { name: RUHIGE_HAND, hint: "+1 Geschick", art: "veranlagung", mod: { geschick: 1 } },
  [ZAEHER_NACKEN]: { name: ZAEHER_NACKEN, hint: "+1 Stärke", art: "veranlagung", mod: { staerke: 1 } },
  [TRAGEGURT]: { name: TRAGEGURT, hint: "+1 Stärke", art: "angelegt", mod: { staerke: 1 } },
  [SCHLICHTER_RING]: { name: SCHLICHTER_RING, hint: "+1 Charisma", art: "angelegt", mod: { charisma: 1 } },
};

export function dingVon(name: string): Ding | undefined {
  return GEGENSTAENDE[name];
}

export function istBeutelDing(name: string) {
  return (GEGENSTAENDE[name]?.art ?? "beutel") === "beutel";
}

export function leereBeutel(inventar: string[]) {
  return inventar.filter((name) => !istBeutelDing(name));
}

export function attributMitGegenstand(held: Held | null | undefined, attributName: string, basis: number) {
  if (!held) return basis;
  let wert = basis;
  const name = attributName.toLowerCase();
  const staerke = name.startsWith("stär") || name === "st" || name === "staerke";
  const geschick = name.startsWith("gesch") || name === "ge";
  const charisma = name.startsWith("char") || name === "ch";
  for (const id of held.inventar ?? []) {
    const mod = GEGENSTAENDE[id]?.mod;
    if (!mod) continue;
    wert += mod.all ?? 0;
    if (staerke) wert += mod.staerke ?? 0;
    if (geschick) wert += mod.geschick ?? 0;
    if (charisma) wert += mod.charisma ?? 0;
  }
  return wert;
}
