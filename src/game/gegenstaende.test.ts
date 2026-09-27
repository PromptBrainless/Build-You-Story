import assert from "node:assert/strict";
import test from "node:test";
import { attributMitGegenstand, leereBeutel } from "./gegenstaende.ts";
import { HEILTRANK, KOERPER, LEDERMANTEL, PROVIANT } from "./types.ts";

test("leer nimmt nur den Beutel, nicht Mantel und Veranlagung", () => {
  assert.deepEqual(leereBeutel([HEILTRANK, LEDERMANTEL, KOERPER, PROVIANT]), [LEDERMANTEL, KOERPER]);
});

test("Ledermantel hebt Charisma, Veranlagung die Stärke", () => {
  const held = { inventar: [LEDERMANTEL, KOERPER] } as { inventar: string[] };
  assert.equal(attributMitGegenstand(held as never, "Charisma", 10), 11);
  assert.equal(attributMitGegenstand(held as never, "Stärke", 10), 11);
  assert.equal(attributMitGegenstand(held as never, "Geschick", 10), 10);
});
