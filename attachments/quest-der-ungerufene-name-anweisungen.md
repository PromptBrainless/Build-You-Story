# Der ungerufene Name — Bauanweisungen

Kein Vorschlag, keine Idee zum Abwägen. Das ist die vollständige Liste der Änderungen, mit denen der bereits im Code vorhandene Faden geschlossen wird. Jede Anweisung nennt Datei, Funktion, exakte Einfügestelle, den einzufügenden Text und das zu setzende Flag. Reihenfolge = Reihenfolge im Spielfluss.

**Ort des Fadens ist nicht mehr auf Dorf/Glockenweg/Wald begrenzt.** Nach weiterer Prüfung von `dorfSchmiedeApotheke`, `dorfFalscherMehlsack`, `dorfBettler`, `dorfMaraHintertuer`, `lager-content.ts` und `epilog()` zieht sich der Faden durch **zwölf** Stellen, nicht acht. Zusätzlich gilt: **Steinbruch und Banditenlager sind derselbe Ort** (`LAGER_CONTENT.title = "Banditenlager"`, `LAGER_CONTENT.id = "lager-steinbruch"`, die Kampf-Probe heißt wörtlich „den Steinbruch halten"). Es wird **kein** neuer Schauplatz gebaut. Der Abschluss liegt in bereits existierenden Lager- und Epilog-Texten.

---

## Neue Flags (Typ ergänzen in `types.ts`, Default `false`)

```
fadenRinne: boolean;
fadenMehlsackSpan: boolean;
fadenBettlerSohn: boolean;
fadenMaraWarnung: boolean;
fadenHolm: boolean;
schnurLetzterKnoten: boolean;
glockeNamenGelesen: boolean;
koehlerBefragt: boolean;
```

Ergänze zusätzlich eine Hilfsfunktion, z. B. in `taten.ts` oder direkt in `script.ts`:

```ts
function fadenAnzahl(held: Held): number {
  return [
    held.fadenRinne,
    held.fadenMehlsackSpan,
    held.fadenBettlerSohn,
    held.fadenMaraWarnung,
    held.fadenHolm,
    held.schnurLetzterKnoten,
    held.glockeNamenGelesen,
    held.koehlerBefragt,
  ].filter(Boolean).length;
}
```

Keine Kollision mit `QUESTREGISTER.md` — trage nach Umsetzung alle acht Flags dort unter „Held-Flags der Nebenreihen" ein, Abschnitt „Erinnerung des Tals".

---

## 1. Schmiede/Apotheke — Abflussrinne

**Datei:** `script.ts`, Funktion `dorfSchmiedeApotheke` (Zeile 820–835).
**Anweisung:** Ersetze die reine Flavor-Zeile 828 durch eine dritte Wahlmöglichkeit. Füge der `choices`-Liste `"Die Abflussrinne untersuchen (Geschick, leicht)"` hinzu, vor `"Zurück zum Dorf"`. Bei Wahl dieser Option: `probe(held, "Geschicklichkeit", held.geschick, LEICHT, "die Rinne untersuchen", undefined, "wahrnehmung")`. Bei Erfolg setze `held.fadenRinne = true` und zeige:

> „Die blutige Wolle ist an drei Stellen abgeschnitten, nicht gerissen. Jemand hat sie absichtlich hier zurückgelassen — oder absichtlich verloren."

Bei Misserfolg keine neue Information, keine Konsequenz.

---

## 2. Rathaus — Holms Brief

**Datei:** `script.ts`, Funktion `dorfHolmSiegel` (Zeile 918–978).
**Anweisung:** Erweitere die `wahl === 0`-Erfolgszweig (Zeile 955–968, Geschick-Erfolg) um eine zusätzliche Zeile nach der bestehenden Ausgabe. Setze `held.fadenHolm = true` in diesem Zweig und ergänze:

> „Der schwarze Faden im Wachs ist kein Zufallsfund. Du hast dasselbe Material heute schon einmal gesehen — in der Rinne bei der Schmiede." *(diese Zeile nur einfügen, wenn `held.fadenRinne === true`; sonst entfällt sie ersatzlos)*

---

## 3. Dorfplatz — Der Junge mit der roten Schnur, zweiter Besuch

**Datei:** `script.ts`, Funktion `dorfRoteSchnur` (Zeile 980–1030).
**Anweisung:** Der Guard-Block am Anfang (Zeile 981–984) zeigt aktuell nur eine statische Zeile, wenn `schnurGeholfen` bereits gesetzt ist. Ersetze diesen Block: Wenn `held.schnurGeholfen === true` UND `fadenAnzahl(held) >= 2` UND `held.schnurLetzterKnoten === false`, biete eine neue, einmalige Interaktion an statt der Standardzeile:

> Wahlmöglichkeiten: „Ihn nach dem letzten Knoten fragen (Charisma, mittel)" / „Ihn in Ruhe lassen"

Bei Erfolg der Charisma-Probe setze `held.schnurLetzterKnoten = true` und zeige:

> „Der Junge löst den letzten Knoten nicht vor dir. Aber er sagt: „Für den, der am Brunnen fehlt. Bevor du fragst — nein, ich weiß seinen Namen nicht mehr. Ich weiß nur, dass ihn jemand gerufen hat, bevor er ging.""

Wenn `fadenAnzahl(held) < 2`, bleibt der bestehende Guard-Text unverändert. Diese Bedingung erzwingt, dass der Held vorher mindestens eine andere Spur gefunden hat, bevor der Junge überhaupt reagiert.

---

## 4. Glockenweg — Sannas zerrissene Zeile

**Datei:** `script.ts`, Funktion `glockenwegSanna` (Zeile 1415–1466).
**Anweisung:** Keine neue Wahlmöglichkeit nötig — der Erfolgszweig (Zeile 1446–1461) bleibt unverändert bestehen. Diese Szene liefert den Warnsatz „Wenn sie dich beim Namen rufen, antworte nicht", der erst in Anweisung 11 seine Bedeutung bekommt. Setze hier **kein** neues Flag; `held.sannaGeholfen` reicht als Marker.

---

## 5. Glockenweg — Jorren im Geröll

**Datei:** `script.ts`, Funktion `glockenwegSalz` (Zeile 1468–1507).
**Anweisung:** Keine neue Wahlmöglichkeit. Das schwarze Holz (Zeile 1482) bleibt als Text stehen. Es wird in Anweisung 12 explizit mit dem Splitter aus dem Mehlsack (Anweisung 6) verglichen — dafür ist kein zusätzliches Flag nötig, die Verknüpfung erfolgt über `held.mehlsackGefunden` und `held.fadenMehlsackSpan`.

---

## 6. Mühle — der falsche Mehlsack

**Datei:** `script.ts`, Funktion `dorfFalscherMehlsack` (Zeile 1159–1248).
**Anweisung:** Erweitere den Erfolgszweig von `wahl === 0` (Zeile 1180–1197). Setze zusätzlich zu `held.mehlsackGefunden = true` das neue Flag `held.fadenMehlsackSpan = true` und hänge nach der bestehenden Zeile über die grüne Flamme eine weitere Zeile an:

> „Der Span sieht aus wie das Stück Holz, das im Geröll am Glockenweg liegt — falls du schon dort warst, bist du sicher." *(nur einfügen, wenn `held.salzGerettet === true` oder `held.salzLiegenGelassen === true`, also der Held die Jorren-Szene bereits gesehen hat; sonst entfällt der Satz)*

---

## 7. Brunnen — der Bettler

**Datei:** `script.ts`, Funktion `dorfBettler` (Zeile 1250–1354).
**Anweisung:** Erweitere den Erfolgszweig von `wahl === 1` (Zeile 1306–1323, „Nach dem Grund fragen", Erfolg). Setze zusätzlich `held.fadenBettlerSohn = true`. Der Text über den verschwundenen Sohn (Zeile 1320–1321) bleibt unverändert — er ist bereits vollständig und muss nicht umgeschrieben werden. Nur das Flag fehlt.

---

## 8. Taverne — Mara, Hintertür

**Datei:** `script.ts`, Funktion `dorfMaraHintertuer` (Zeile 716–786).
**Anweisung:** Erweitere den Erfolgszweig (Zeile 743–759). Setze zusätzlich `held.fadenMaraWarnung = true`. Der Warnsatz „geh nicht nach dem ersten Geräusch" (Zeile 757) bleibt unverändert stehen.

---

## 9. Glockenweg — die Kapellenglocke

**Datei:** `script.ts`, Funktion `glockenwegGlocke` (Zeile 1509–1541).
**Anweisung:** Füge vor der bestehenden `choices`-Liste (Zeile 1525: `["Das Seil lösen (Geschick, mittel)", "Die Glocke in Ruhe lassen"]`) eine dritte Option ein: `"Die eingeritzten Namen genauer prüfen (Geschick, leicht)"`. Bei Erfolg dieser separaten, leichten Probe setze `held.glockeNamenGelesen = true` und zeige, bevor die bestehende Wahl (Seil lösen / in Ruhe lassen) erneut angeboten wird:

> „Unter der Asche im Glockenrahmen findest du einen zweiten, kleineren Abdruck — dieselbe Kerbe, die auf dem Groschen des Bettlers am Brunnen sitzt." *(nur einfügen, wenn `held.fadenBettlerSohn === true`; sonst entfällt der Satz ersatzlos, die restliche Zeile bleibt)*

Nach dieser Zusatzoption läuft die bestehende Logik (Seil lösen / in Ruhe lassen) unverändert weiter.

---

## 10. Wald — der Köhler

**Datei:** `script.ts`, Funktion `szeneWald`, Charisma-Erfolgszweig (Zeile 1656–1670).
**Anweisung:** Ersetze den einzeiligen `rt.present`-Aufruf durch einen zweiten, anschließenden `rt.present`-Aufruf mit Wahlmöglichkeit, aber nur wenn `fadenAnzahl(held) >= 3`:

> Wahlmöglichkeiten: „Nach dem Gebetsband fragen (Charisma, mittel)" / „Ihn ziehen lassen"

Bei Erfolg setze `held.koehlerBefragt = true` und zeige:

> „„Es gehört niemandem mehr, den ich nennen will“, sagt der Köhler. „Aber wenn du am Ende der Kiste die Namen liest, dann halt inne, bevor du das letzte Kreuz überliest.“"

Diese Zeile bereitet direkt Anweisung 12 (Lager-Nachspiel) vor.

---

## 11. Lager — Kess ruft einen Namen (Fluchtszene)

**Datei:** `lager-content.ts`, Objekt `LAGER_WEGE.kampf.fluchtErfolg` (drei Zeilen, letzte lautet „Hinter dir ruft Kess einen Namen…").
**Anweisung:** Diese Zeile wird **nicht** verändert. Füge in `script.ts`, Funktion `lagerKampf`, direkt nach dem `rt.present`-Aufruf mit `weg.fluchtErfolg` (nach Zeile 2044) einen zusätzlichen, bedingten `rt.present`-Aufruf ein, der nur feuert, wenn `held.sannaGeholfen === true`:

> „Sannas Zeile ist noch da, unter dem Atem, den du nicht mehr hast: Wenn sie dich beim Namen rufen, antworte nicht. Du drehst dich nicht um."

Diese Zeile löst den Warnsatz von Anweisung 4 nach drei Kapiteln endlich ein — bisher verpufft er folgenlos, sobald die Szene vorbei ist.

---

## 12. Lager — Nachspiel, Kirchenkiste und Kinderumhang

**Datei:** `lager-content.ts`, `LAGER_CONTENT.nachspiel` (Zeile 82–87), ausgelöst in `script.ts` über `szeneLager` bei `held.lagerGeloest`.
**Anweisung:** Füge dem `nachspiel`-Array eine fünfte, bedingte Zeile hinzu — bedingt heißt hier: in `script.ts` prüfst du vor dem `rt.present`-Aufruf mit `lager.nachspiel`, ob `fadenAnzahl(held) >= 5`, und hängst in diesem Fall eine zusätzliche Zeile an das kopierte `lines`-Array an, **nicht** an das `LAGER_CONTENT`-Objekt selbst (das bleibt unverändert, damit ein Durchlauf ohne die Zusatzquest weiterhin funktioniert):

> „Neben dem Kreuz, das bei einem der Namen steht, liegt eine Locke aus weißem Haar, verknotet mit rotem Garn — derselben Farbe wie der Knoten an der Kapellenglocke. Du hebst den Kinderumhang auf, den bisher niemand berührt hat, und liest den Namen daneben zum ersten Mal laut. Er ist kein Fremder mehr."

Setze in derselben Bedingung ein letztes neues Flag, z. B. `held.fadenGeschlossen = true` (ergänze auch dieses in `types.ts`).

---

## 13. Epilog — Rückgabe an den Bettler

**Datei:** `script.ts`, Funktion `epilog()` (Zeile 2327–2375).
**Anweisung:** Füge eine neue Zeile in die `bits`-Liste ein, direkt nach der bestehenden Zeile für `held.bettlerGeholfen` (Zeile 2337). Bedingung: `held.fadenGeschlossen && held.bettlerGeholfen`:

```ts
if (held.fadenGeschlossen && held.bettlerGeholfen) {
  bits.push("Der Bettler am Brunnen hört den Namen seines Sohnes nicht von dir. Aber er sieht, dass du ihn kennst. Das reicht ihm, um endlich den Groschen wegzulegen.");
}
```

Falls `held.fadenGeschlossen` gesetzt ist, aber `held.bettlerGeholfen` nicht (Held hat dem Bettler nie geholfen), füge stattdessen ein:

```ts
else if (held.fadenGeschlossen) {
  bits.push("Du kennst jetzt einen Namen, den in Lindendorf niemand mehr ausspricht. Du bist der Einzige.");
}
```

---

## 14. Bestehende Traumzeile im Epilog — unverändert lassen, aber referenzieren

**Datei:** `script.ts`, Zeile 2305 (bereits vorhanden, Teil eines Ende-Zweigs):
> „In der Nacht träumst du vom Klang einer Kiste, die durch Farn gezogen wird…"

**Anweisung:** Diese Zeile nicht anfassen. Sie ist bereits die stimmige Schlusskadenz für genau diesen Faden — sie passt nur zufällig, weil sie vor dem Faden geschrieben wurde. Keine Änderung nötig, keine neue Bedingung einbauen. Sie funktioniert als stiller Nachhall, sobald Anweisungen 1–13 stehen.

---

## Reihenfolge der Umsetzung (verbindlich, nicht optional)

1. Flags in `types.ts` ergänzen, inklusive `fadenGeschlossen`. `createHeld()`-Defaults ergänzen.
2. `fadenAnzahl()`-Hilfsfunktion schreiben und testen.
3. Anweisungen 1, 2, 6, 7, 8 umsetzen (Dorf-Ebene, keine Abhängigkeiten untereinander).
4. Anweisung 3 umsetzen (hängt von `fadenAnzahl >= 2` ab, also erst nach Schritt 3 testbar).
5. Anweisungen 5, 9, 10 umsetzen (Glockenweg/Wald, Anweisung 9 hängt von Anweisung 7 ab, Anweisung 10 von `fadenAnzahl >= 3`).
6. Anweisung 11 umsetzen (Lager-Kampf-Flucht).
7. Anweisung 12 umsetzen (Lager-Nachspiel, hängt von `fadenAnzahl >= 5` ab — mit acht möglichen Flags realistisch erreichbar, aber nicht garantiert; das ist beabsichtigt, kein Bug).
8. Anweisung 13 umsetzen (Epilog).
9. `check:questreihe`, `check:knowledge`, `check:szenen` erneut laufen lassen. Alle drei müssen weiterhin grün sein.
10. `QUESTREGISTER.md` aktualisieren: neuer Eintrag unter „Erinnerung des Tals", alle acht plus die zwei Abschluss-Flags eintragen.

Keine der 14 Anweisungen legt einen neuen Ort, ein neues Bild oder eine neue Hauptfigur an. Jede einzelne hängt sich an eine Funktion, die bereits existiert und bereits lädt.
