# Wissen und Freischaltungen

## Grundprinzip

Lindendorf trennt sichtbare Szene, internes Wissen und Spielerwissen. Wissen wird aus dem Zustand der Heldin oder des Helden abgeleitet und kann spätere Szenen, Hinweise und Wege freischalten.

## Quellen

- [src/game/knowledge.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/knowledge.ts) – Ableitung des Spielerwissens.
- [src/game/wissen-inneres.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/wissen-inneres.ts) – innere Wissenslogik.
- [src/game/wissen-tafeln.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/wissen-tafeln.ts) – Wissenstafeln.
- [docs/WISSEN_FREISCHALTUNGSPLAN.md](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/docs/WISSEN_FREISCHALTUNGSPLAN.md) – Freischaltungsplan.
- [scripts/check-knowledge-gates.mjs](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/scripts/check-knowledge-gates.mjs) – Prüfung der Wissenstore.
- [scripts/lege-wissen-ab.mjs](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/scripts/lege-wissen-ab.mjs) – Ablagewerkzeug.

## JSON-Wissensbestand

Die Einzelkarten liegen unter [src/game/json/wissen](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/tree/main/src/game/json/wissen). Dort sind unter anderem Ankunft, Brunnen, Mühle, Rathaus, Gasse, Kirche, Kesseljahr, Lager, Wald, Figurenhinweise und Endwissen abgelegt.

## Regeln

Wissen darf nur erscheinen, wenn die passende Bedingung erfüllt ist. Die technische Wahrheit liegt in `knowledge.ts`; die sichtbare Darstellung wird über Wissenstafeln und Journal-Komponenten vermittelt.

## Verknüpfte Wiki-Seiten

- [Knowledge-Anker](Knowledge-Anker.md)
- [Wissenstafeln](Wissenstafeln.md)
- [NPCs](NPCs.md)
- [Projekt: Quests und Szenen](Projekt-Quests-und-Szenen.md)
