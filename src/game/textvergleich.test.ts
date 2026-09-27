import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ersteAbweichung, vergleicheText } from "./textvergleich.ts";

describe("vergleicheText", () => {
  it("nimmt die längere Fassung", () => {
    const fund = vergleicheText("ratsherr-dennek", "Ratsherr Dennek", [
      { quelle: "Karte", lines: ["Dennek rührt."] },
      { quelle: "KI", lines: ["Dennek rührt weiter im Eimer, und das Wasser bleibt grau. Der Lehm an den Stiefeln ist hell."] },
      { quelle: "JSON", lines: ["Dennek rührt weiter im Eimer, und das Wasser bleibt grau. Der Lehm an den Stiefeln ist hell. Der Weg zum Wald ist kürzer."] },
    ]);
    assert.equal(fund.sieger, "JSON");
    assert.deepEqual(fund.verdeckt, ["JSON"]);
    assert.equal(fund.gleich, false);
  });

  it("lässt eine kürzere Karte durch", () => {
    const lang = "Dennek rührt weiter im Eimer, und das Wasser bleibt grau. Der Lehm an den Stiefeln ist hell.";
    const fund = vergleicheText("ratsherr-dennek", "Ratsherr Dennek", [
      { quelle: "Karte", lines: ["Dennek rührt."] },
      { quelle: "KI", lines: [lang] },
      { quelle: "JSON", lines: [lang] },
    ]);
    assert.equal(fund.sieger, "KI");
    assert.deepEqual(fund.verdeckt, []);
    assert.equal(fund.gleich, true);
    assert.equal(fund.quellen.find((quelle) => quelle.quelle === "Karte")?.kuerzer, true);
  });

  it("meldet gleichen Umfang mit anderem Wortlaut", () => {
    const fund = vergleicheText("wald", "Wald", [
      { quelle: "KI", lines: ["Der Pfad ist nass und der Rauch steht senkrecht über den Bäumen des Tals."] },
      { quelle: "Volltext", lines: ["Der Pfad ist nass und der Rauch steht schräg über den Bäumen des Tals."] },
    ]);
    assert.equal(fund.verdeckt.length, 0);
    assert.equal(fund.gleich, false);
    assert.equal(fund.quellen.find((quelle) => quelle.quelle === "Volltext")?.zeile, 1);
  });
});

describe("ersteAbweichung", () => {
  it("nennt die erste abweichende Zeile", () => {
    const fund = ersteAbweichung(["gleich", "links"], ["gleich", "rechts"]);
    assert.equal(fund?.zeile, 2);
    assert.equal(fund?.rechts, "rechts");
  });
});
