import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { LORE, loreFuerFigur, loreFuerSzene, loreFuerWissen, loreZeilen } from "./lore.ts";

describe("lore", () => {
  it("hängt Fakten nur an benannte Szenen", () => {
    const ids = new Set(LORE.map((fakt) => fakt.id));
    assert.equal(ids.size, LORE.length);
    for (const fakt of LORE) {
      assert.ok(fakt.text.length > 40, fakt.id);
      assert.ok(fakt.szenen.length > 0, fakt.id);
    }
  });

  it("gibt an der Zisterne Grovin und nicht die Mühle", () => {
    const texte = loreZeilen("grovins-zisterne").join(" ");
    assert.match(texte, /Grovin/);
    assert.equal(texte.includes("Yorwin"), false);
    assert.equal(loreFuerSzene("beim-schmied").length, 1);
  });

  it("findet Figur und Wissenskey", () => {
    assert.ok(loreFuerFigur("Ilse Brandtner").length >= 2);
    assert.ok(loreFuerWissen("ilses_liste").some((fakt) => fakt.szenen.includes("hinter-dem-stein")));
  });
});
