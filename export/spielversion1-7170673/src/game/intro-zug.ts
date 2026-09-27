/** Mulberry32 — klein, deterministisch, gut genug für drei von zehn. */
export function mulberry32(saat: number): () => number {
  let t = saat >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) >>> 0;
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

export function saatAus(name: string, extra = 0): number {
  let h = 2166136261 ^ (extra >>> 0);
  for (let i = 0; i < name.length; i += 1) {
    h = Math.imul(h ^ name.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

export function neueIntroSaat(name: string): number {
  const extra =
    typeof crypto !== "undefined" && "getRandomValues" in crypto
      ? crypto.getRandomValues(new Uint32Array(1))[0]!
      : (Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0;
  return saatAus(name, extra);
}

export function zieheGeordnet(
  alle: readonly string[],
  anzahl: number,
  zufall: () => number = Math.random,
): string[] {
  const n = Math.max(0, Math.min(anzahl, alle.length));
  const pool = [...alle];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(zufall() * (i + 1));
    const merke = pool[i]!;
    pool[i] = pool[j]!;
    pool[j] = merke;
  }
  const genommen = new Set(pool.slice(0, n));
  return alle.filter((id) => genommen.has(id));
}

export function zieheMitSaat(alle: readonly string[], anzahl: number, saat: number): string[] {
  return zieheGeordnet(alle, anzahl, mulberry32(saat));
}
