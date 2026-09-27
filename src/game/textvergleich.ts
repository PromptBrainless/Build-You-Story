export type TextBlock = {
  quelle: string;
  lines?: string[];
};

export type QuellenStand = {
  quelle: string;
  chars: number;
  fehlt: boolean;
  gleich: boolean;
  kuerzer: boolean;
  zeile: number;
  ausschnitt: string;
};

export type TextVergleich = {
  id: string;
  titel: string;
  sieger: string;
  siegerChars: number;
  spielChars: number;
  quellen: QuellenStand[];
  verdeckt: string[];
  gleich: boolean;
};

const SPIEL_QUELLEN = new Set(["Karte", "KI", "Volltext", "present"]);

export function textZeichen(lines?: string[]) {
  return (lines ?? []).map((zeile) => zeile.trim()).filter(Boolean).join(" ").length;
}

export function textNorm(lines?: string[]) {
  return (lines ?? [])
    .map((zeile) => zeile.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

export function ersteAbweichung(links?: string[], rechts?: string[]) {
  const a = (links ?? []).map((zeile) => zeile.trim()).filter(Boolean);
  const b = (rechts ?? []).map((zeile) => zeile.trim()).filter(Boolean);
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i += 1) {
    if ((a[i] ?? "") !== (b[i] ?? "")) return { zeile: i + 1, links: a[i] ?? "", rechts: b[i] ?? "" };
  }
  return null;
}

function leerStand(quelle: string): QuellenStand {
  return { quelle, chars: 0, fehlt: true, gleich: false, kuerzer: false, zeile: 0, ausschnitt: "" };
}

/** Längste Fassung gewinnt. `verdeckt` sind Quellen, die länger sind als das, was das Spiel lesen kann. */
export function vergleicheText(id: string, titel: string, bloecke: TextBlock[]): TextVergleich {
  const gefuellt = bloecke
    .map((block) => ({
      quelle: block.quelle,
      lines: block.lines ?? [],
      chars: textZeichen(block.lines),
      norm: textNorm(block.lines),
    }))
    .filter((block) => block.chars > 0);

  if (!gefuellt.length) {
    return {
      id,
      titel,
      sieger: "",
      siegerChars: 0,
      spielChars: 0,
      quellen: bloecke.map((block) => leerStand(block.quelle)),
      verdeckt: [],
      gleich: true,
    };
  }

  const sieger = gefuellt.reduce((best, block) => (block.chars > best.chars ? block : best));
  const spiel = gefuellt.filter((block) => SPIEL_QUELLEN.has(block.quelle));
  const spielSieger = spiel.length ? spiel.reduce((best, block) => (block.chars > best.chars ? block : best)) : undefined;

  const quellen = bloecke.map((block) => {
    const chars = textZeichen(block.lines);
    if (chars === 0) return leerStand(block.quelle);
    const gleich = textNorm(block.lines) === sieger.norm;
    const diff = gleich ? null : ersteAbweichung(sieger.lines, block.lines);
    return {
      quelle: block.quelle,
      chars,
      fehlt: false,
      gleich,
      kuerzer: chars + 40 < sieger.chars,
      zeile: diff?.zeile ?? 0,
      ausschnitt: (diff?.rechts ?? "").slice(0, 140),
    };
  });

  const spielChars = spielSieger?.chars ?? 0;
  const verdeckt = quellen.filter((quelle) => !quelle.fehlt && quelle.chars > spielChars).map((quelle) => quelle.quelle);
  const nah = quellen.some((quelle) => !quelle.fehlt && !quelle.gleich && !quelle.kuerzer);

  return {
    id,
    titel,
    sieger: sieger.quelle,
    siegerChars: sieger.chars,
    spielChars,
    quellen,
    verdeckt,
    gleich: verdeckt.length === 0 && !nah,
  };
}
