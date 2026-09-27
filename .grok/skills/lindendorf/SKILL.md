---
name: lindendorf
description: >
  Kanon von How to be a Hero — Lindendorf. 71 Seiten, Wissenstafeln und
  22 Knowledge-Anker. Pflicht vor dem Nachschlagen, Prüfen oder Nachziehen
  eines Seitentexts, einer Tafel oder eines Ankers.
  Triggers: Lindendorf, Questübersicht, Wissenstafel, Anker, Szene,
  Seitentext, How to be a Hero, Kesseljahr, Trübes Wasser, stumme Mühle.
metadata:
  short-description: "Lindendorf-Kanon: Seiten, Tafeln, Anker, Ton"
user-invocable: true
---

# Lindendorf

Nachschlageanweisung. Der inhaltliche Stand vom 23. September 2026 liegt in
`wiki/`. Die 71 Seiten in `references/questuebersicht.md` sind der bisher
spielbare Text. Widersprechen sie dem Wiki, ist das Wiki das Ziel und der
Code das, was der Spieler noch sieht. Nicht beides in einen Satz ziehen.
Neue Reihen schreibt der Skill `lindendorf-questreihe`, und nur wenn der
Auftrag eine Quest nennt.

Vor dem Zitieren, Prüfen oder Nachziehen, in dieser Reihenfolge:

1. `references/seiten-anker.md` — Seite, Quest, Kennung, Anker
2. `references/questuebersicht.md` — der ungekürzte Text
3. `references/stil.md` — nur beim Schreiben

## Quelle

`references/questuebersicht.md` ist der Kanon der 71 Seiten. Eine
wiedergegebene Seite bleibt ungekürzt. Die Zeichenzahl zählt den
Fließtext, Absätze mit Leerzeichen verbunden, ohne Handlungen und ohne
Ausgänge.

Sätze, die nur im Ablauf stehen und nicht in der Szenendatei, gehören
nicht zur Übersicht. Sie werden nicht nacherzählt.

## Stimme

- Nur Kanon. Deutsch, Du, Präsens.
- Keine neuen Orte, Namen, Kulte, Götter oder Flaggen.
- Ton, Verbote und der Umgang mit Länge stehen in `references/stil.md`.
- Weicht der Stil vom Code ab, gilt der Code.
- Ein neuer Satz richtet sich nach den Nachbarseiten derselben Quest.
- Nicht kürzen. Eine längere Fassung, die eine andere Handlung erzählt, ist falsch.

## Anker

22 Anker. Sie werden aus dem Held abgeleitet und nicht als eigene
Schalter gespeichert. Die Ableitung steht in `src/game/knowledge.ts`,
Funktion `deriveKnowledge`. Ein Anker entsteht an der Szene, die ihn
zeigt, nicht beim Spielstart und nicht im Bündel mit anderen Funden.
Die Tafeltexte stehen in Abschnitt 5 der Übersicht. Eine Tafel, die
den Seitentext wiederholt, ist keine Tafel. Sie sagt, was hängen bleibt.

Ein Anker gehört auf die Seite, die das Flag setzt, nicht auf jede
Seite, die das Thema nennt. Mehrere Seiten dürfen denselben Anker
auslösen. `ungerufener_name` liegt außerhalb der 71 Seiten.

## Lore-Fakten

`src/game/lore.ts` ist das GM-Bild, kein Seitentext und kein Ersatz
für die Übersicht. Ein Fakt hängt nur an den Szenen, auf denen er im
Spiel wahr wird. Er wird nicht in frühere Seiten vorgezogen und nicht
als Spielerzeile zitiert. Stimme und Szenen-JSON bekommen ihn als
Grenze: ausführen nur, wenn der Ausgangstext ihn schon berührt.

## Nicht vermischen

- Bei Witwe Kern kommt zweimal vor. Seite 16 ist das Dorf
  (`bei-witwe-kern-dorf`, 570 Zeichen). Seite 19 ist der Brunnen
  (`bei-witwe-kern`, 940 Zeichen).
- Banditenlager kommt zweimal vor. Seite 66 ist das Lager
  (`lager-hub`, 734 Zeichen). Seite 68 ist das Gespräch
  (`lager-reden`, 385 Zeichen).
- Die Seiten 4, 5, 7 und 8 sind Wissenstafeln der Ankunft, keine
  Entscheidungsszenen: Rauch ohne Wind, Der Schuh im Schlamm, Rotes
  Wachs, Der trockene Graben.
- Die Tafel Rotes Wachs am Hang ist nicht der Anker
  `rotes_siegel_gesehen`. Der Anker entsteht mit dem Besuch bei Holm,
  Seite 12.
- Der Mehlsack am Brunnen setzt den Hang-Hinweis. Er hat keine eigene
  der 71 Seiten.

## Seite nachschlagen

Nenne Nummer, Titel, Quest, Kennung und den ungekürzten Fließtext.
Handlungen und Ausgänge nur, wenn die Seite sie hat oder danach gefragt
wird. Tafel und Anker stehen unter der Seite. Ist der Tafeltext schon
der Seitentext, sage das und wiederhole ihn nicht.

## Anker prüfen

Vergleiche die Zeile in `references/seiten-anker.md` mit
`deriveKnowledge`. Weichen Flag, Seite oder Bedingung ab, gilt der
Code. Dann wird die Referenz korrigiert, nicht der Held, solange der
Auftrag die Ableitung nicht ändert.

## Seitentext nachziehen

Nur eine Seite, die leer, stichpunktartig oder kürzer ist als ihre
Nachbarn. Nicht die ganze Quest umschreiben.

- Du, Präsens. Befund statt Urteil.
- Länge aus `references/stil.md`, gemessen an den Nachbarseiten.
- Keine neue Handlung, kein neues Flag, kein neuer Anker, solange der
  Auftrag das nicht verlangt.
- Die Tafeln 4, 5, 7 und 8 bleiben Tafeln. Sie bekommen keine Probe.

## Fertig

Die Antwort ist fertig, wenn die genannte Seite oder der genannte Anker
aus der Übersicht oder aus `knowledge.ts` stammt und keine der
Doppelungen oben vermischt wurde.
