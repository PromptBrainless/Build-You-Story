# Bild, Ton und Oberfläche

## Oberfläche

Die React-Komponenten liegen in drei Bereichen:

- [src/components/game](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/tree/main/src/components/game) – Spielansicht, HUD, Szenen, Regeln, Heldenerstellung, Journal und Systemsteuerung.
- [src/components/welt](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/tree/main/src/components/welt) – Weltwerkzeug und Editor.
- [src/components/ui](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/tree/main/src/components/ui) – wiederverwendbare Button- und Eingabekomponenten.

## Spielkomponenten

- [GameApp.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/GameApp.tsx) – Spielcontainer.
- [CreateHero.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/CreateHero.tsx) – Heldenerstellung.
- [SceneStage.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/SceneStage.tsx) – Szene.
- [Hud.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/Hud.tsx) – HUD.
- [KnowledgeJournal.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/KnowledgeJournal.tsx) – Wissensjournal.
- [LageOverlay.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/LageOverlay.tsx) – Lageanzeige.
- [RulesScreen.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/RulesScreen.tsx) – Regelerklärung.
- [Systemsteuerung.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/Systemsteuerung.tsx) – Ton, Darstellung und Verhalten.
- [TitleScreen.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/TitleScreen.tsx) – Titelbildschirm.
- [ZustandLeiste.tsx](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/components/game/ZustandLeiste.tsx) – Zustandsleiste.

## Bild und Ton

- [src/game/art.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/art.ts) und [src/game/szene-bilder.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/szene-bilder.ts) ordnen Bildschlüssel zu.
- [public/art](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/tree/main/public/art) enthält Hintergründe, Porträts, Wissensbilder und Medien.
- [src/game/klang.ts](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/src/game/klang.ts) erzeugt prozedural Wind, Wasser, Feuer, Hammerschlag und Stimmengewirr.
- [docs/BILDPLAN_DARKFANTASY.md](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/docs/BILDPLAN_DARKFANTASY.md), [docs/VISUELLE_STILANALYSE.md](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/docs/VISUELLE_STILANALYSE.md) und [docs/SYSTEMSTEUERUNG_UND_TON.md](https://github.com/PromptBrainless/lindendorf-rpg-alpha-V.1.1/blob/main/docs/SYSTEMSTEUERUNG_UND_TON.md) dokumentieren die Gestaltung.

## Verknüpfte Wiki-Seiten

- [Stil](Stil.md)
- [Wissenstafeln](Wissenstafeln.md)
- [Quest-Ankunft](Quest-Ankunft.md)
