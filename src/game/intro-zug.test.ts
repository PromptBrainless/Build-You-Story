import assert from "node:assert/strict";
import test from "node:test";
import { mulberry32, saatAus, zieheGeordnet, zieheMitSaat } from "./intro-zug.ts";

const ZEHN = [
  "intro-weg",
  "intro-fremder-am-weg",
  "intro-tal",
  "intro-rauch",
  "intro-kinderschuh",
  "intro-hang",
  "intro-siegel",
  "intro-graben",
  "intro-lindendorf",
  "intro-ankunft",
];

test("zieht genau drei, ohne Duplikat, in Kanon-Reihenfolge", () => {
  const zug = zieheMitSaat(ZEHN, 3, 42);
  assert.equal(zug.length, 3);
  assert.equal(new Set(zug).size, 3);
  const indizes = zug.map((id) => ZEHN.indexOf(id));
  assert.deepEqual(indizes, [...indizes].sort((a, b) => a - b));
});

test("dieselbe Saat ergibt denselben Zug", () => {
  assert.deepEqual(zieheMitSaat(ZEHN, 3, 7), zieheMitSaat(ZEHN, 3, 7));
});

test("andere Saat kann anderen Zug ergeben", () => {
  const a = zieheMitSaat(ZEHN, 3, 1);
  const b = zieheMitSaat(ZEHN, 3, 2);
  assert.notDeepEqual(a, b);
});

test("Saat aus Name ist stabil", () => {
  assert.equal(saatAus("Ilse", 9), saatAus("Ilse", 9));
  assert.notEqual(saatAus("Ilse", 9), saatAus("Holm", 9));
});

test("Mulberry bleibt in [0,1)", () => {
  const zufall = mulberry32(123);
  for (let i = 0; i < 20; i += 1) {
    const x = zufall();
    assert.ok(x >= 0 && x < 1);
  }
});

test("Fisher-Yates mit festem Zufall bleibt geordnet", () => {
  const zug = zieheGeordnet(ZEHN, 3, () => 0.4);
  const indizes = zug.map((id) => ZEHN.indexOf(id));
  assert.deepEqual(indizes, [...indizes].sort((a, b) => a - b));
});
