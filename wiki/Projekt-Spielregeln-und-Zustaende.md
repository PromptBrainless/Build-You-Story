# Spielregeln und Zustände

## Kernsystem

README und Code nennen drei Attribute, W10-Proben, Erfolgsgrade, Zustände, Entscheidungen, Ruf, Effekte, Tageszeit und lokalen Spielstand.

## Zentrale Module

- [types.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/types.ts) – Held-, Szenen-, Bild- und Zustandsformen.
- [heldSchema.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/heldSchema.ts) – Validierung des Heldzustands.
- [attribute.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/attribute.ts) – Attribute.
- [pruefung.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/pruefung.ts) – Probenlogik.
- [probe-rechnung.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/probe-rechnung.ts) – Berechnung.
- [pruefung-text.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/pruefung-text.ts) – Ergebnistext.
- [effekte.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/effekte.ts) – Gunst und Last.
- [decisions.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/decisions.ts) – Entscheidungsprotokoll.
- [reputation.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/reputation.ts) – Ruf.
- [taten.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/taten.ts) – Handlungen.
- [tageszeit.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/tageszeit.ts) – Zeitverlauf.
- [zeitModifikatoren.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/zeitModifikatoren.ts) – zeitabhängige Modifikatoren.
- [gegenstaende.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/gegenstaende.ts) – Gegenstände.
- [heal.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/heal.ts) – Heilung.
- [fokus.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/fokus.ts) und [fokus-fang.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/fokus-fang.ts) – Fokusmechanik.
- [engine.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/engine.ts) und [runtime.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/runtime.ts) – Ausführung.
- [save.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/save.ts) – lokaler Spielstand.

## Zustandsmuster

Laut Projektregeln werden bestehende Questzustände über Booleans/Enums am Held, `held.effekte` und `held.entscheidungen` modelliert. Ruf wird über `rufAus()` abgeleitet; kein zusätzliches Ruf-Feld und kein automatischer Verfall.

## Verknüpfte Wiki-Seiten

- [Schicksal, Glück und Überleben](Lindendorf-Schicksal-Glueck-und-Ueberleben.md)
- [Queststruktur](Queststruktur.md)
- [Weltgeheimnis](Weltgeheimnis.md)
- [Spielablauf](Projekt-Technik-und-Laufzeit.md)
