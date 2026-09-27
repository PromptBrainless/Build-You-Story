# Prompt zur Weiterentwicklung von Lindendorf (SpielVersion1.0)

> Repo: https://github.com/PromptBrainless/SpielVersion1.0
> Referenzdokumente im Repo: `docs/WELTWERKZEUG.md`, `docs/ERNEUERUNGSPLAN.md`, `AGENTS.project.md`, `docs/PROJEKTKONTEXT.md`

---

## System-Prompt / Initialisierung

Du arbeitest am bestehenden Projekt **Lindendorf** (React/TypeScript, Vite, Tailwind, Zod). Deine Aufgabe ist **nicht**, das Spiel neu zu bauen, sondern die im Projekt selbst dokumentierten Zielbilder umzusetzen — Schritt für Schritt, ohne Big-Bang.

### 1. Grundprinzipien

- Du arbeitest additiv an bestehenden Modulen weiter, nicht gegen sie. Muster: **Verstehen → Anschließen → Erweitern**, nicht "neu entwerfen, alte Regeln überschreiben".
- Die drei Zustandsmuster bleiben getrennt und werden nicht vermischt:

  ```ts
  // src/game/heldSchema.ts — das Log, streng per Zod
  export const EntscheidungSchema = z.object({
    szeneId: z.string(),
    timestamp: z.number(),
    typ: z.enum(["ruf", "wissen", "npc", "weg"]),
    ziel: z.string(),
    wert: z.union([z.number(), z.string(), z.boolean()]),
  });
  ```

  ```ts
  // src/game/decisions.ts — der einzige Schreibweg ins Log
  export function protokolliere(held: Held, eintrag: Omit<Entscheidung, "timestamp">): void {
    if (!held.entscheidungen) held.entscheidungen = [];
    held.entscheidungen.push({ ...eintrag, timestamp: Date.now() });
  }
  ```

  ```ts
  // src/game/reputation.ts — Ruf ist eine Ansicht auf das Log, kein eigenes Feld
  export function rufAus(held: Held, ziel: string): number {
    const clamp = (n: number) => Math.max(-100, Math.min(100, n));
    return clamp(
      (held.entscheidungen ?? [])
        .filter((e) => e.typ === "ruf" && e.ziel === ziel)
        .reduce((sum, e) => sum + (typeof e.wert === "number" ? e.wert : 0), 0),
    );
  }
  ```

  Booleans/Enums am Held (bestehende Quests, z. B. `sannaGeholfen`) bleiben daneben bestehen. `held.effekte` (Gunst/Last) wirkt **vor** `probe()`, nie danach.

- Jeder Schritt bleibt für sich spielbar. Reihenfolge nach Bruchrisiko (`docs/ERNEUERUNGSPLAN.md`, Blöcke A–E), nicht nach Umfang.

**Freiheitsgrad für Umbau/Integration:** Innerhalb dieser Leitplanken hast du freie Hand, bestehende Module umzubauen, zusammenzulegen oder neu zu verdrahten, wenn es dem Zielbild dient — das ist ausdrücklich erlaubt und nicht auf "nicht ohne Auftrag" beschränkt. Zwei Bedingungen gelten dabei immer:

- **Komplexität begrenzt halten**: keine neue Abstraktionsschicht, kein neues Framework, keine generische Lösung für einen Einzelfall. Wenn ein Umbau mehr als die betroffenen Dateien plus ihre direkten Aufrufer anfasst, ist er zu groß geschnitten — in kleinere, einzeln spielbare Schritte teilen.
- **Impact vor Vollständigkeit**: bevorzuge den Umbau, der ein reales, im Projekt sichtbares Problem löst (z. B. die vier Speicher-Kopien in `docs/WELTWERKZEUG.md`), gegenüber dem, der nur "sauberer" aussieht. Wenn ein Umbau keinen im Projekt konkret benannten Unterschied im Spielerlebnis oder in der Wartbarkeit macht, lohnt er sich hier nicht.
- Ausgenommen bleiben trotzdem: Engine, Runtime-Grundgerüst, Auth, DB, Haupt-Endtitel, Zod-Vollumbau von `types.ts`, neue ArtKeys — dafür braucht es weiterhin einen expliziten Auftrag, weil ein Fehlgriff dort das ganze Spiel bricht, nicht nur eine Karte.

---

### 2. Priorisierte Aufgabenreihenfolge

#### A. Weltwerkzeug (ersetzt Spielleiter + `/editor`-Werkstatt als Zielbild)

Eine Fläche, drei Fächer, drei Speicher — kein neues System, sondern Zusammenführung bestehender.

**Fach Karte** — aktuelle Szene bearbeiten, Zurücksetzen auf Kanon, eine Stufe Rückgängig, Diff-Ansicht Kanon↔Auflage.
**Fach Held** — nur mit laufender Partie scharf, sonst Simulator-Banner. Ruf nur über `rufAus()`, Wissen über `deriveKnowledge()`, Erinnerung über die Log-Einträge `typ=npc`:

```ts
// src/game/memory.ts
export function merkeDir(held: Held, szeneId: string, npcId: string, flagId: string): void {
  if (erinnertSich(held, npcId, flagId)) return;
  protokolliere(held, { szeneId, typ: "npc", ziel: npcId, wert: flagId });
}

export function erinnertSich(held: Held, npcId: string, flagId: string): boolean {
  return (held.entscheidungen ?? []).some((e) => e.typ === "npc" && e.ziel === npcId && e.wert === flagId);
}
```

**Fach Prüfen** — Fluss-Vorschau, Questpfade, tote Knoten, Asset-Check, Modul-Export/Import (Zod), Kanon-Schreiben nur hier mit Zähler + zeilengenauem Diff, nie automatisch, nie Git.

Drei Speicher, nie gemischt: **Partie** (`lindendorf-save-v1`), **Auflage** (`lindendorf.welt.v2`, browserlokal, adressiert über `szeneId`), **Kanon** (Quelltext). Das Auflage-Schema existiert bereits:

```ts
// src/game/welt.ts
export const WELT_STORE = "lindendorf.welt.v2";

export const WeltAuflageSchema = z.object({
  title: z.string().optional(),
  art: z.string().optional(),
  portrait: z.union([z.string(), z.null()]).optional(),
  lines: z.array(z.string()).optional(),
  choices: z.array(z.string()).optional(),
  effekte: z.array(z.string()).optional(),
  effekteFort: z.array(z.string()).optional(),
  vorherigerText: TextStandSchema.optional(), // trägt "eine Stufe zurück"
});

export const WeltPackSchema = z.object({
  version: z.literal(2),
  karten: z.record(z.string(), WeltAuflageSchema),
  lagen: z.record(z.string(), HerkunftPatchSchema).optional(),
});
```

Die `id` an der Szene gibt es schon (`runtime.ts`, `PresentInput.id?: string`) — der nächste Schritt ist nicht mehr "id einführen", sondern **jede Szene, die noch über den Text-Hash läuft, auf eine stabile `id` umstellen** und den Fallback in der UI sichtbar als "hält nur, solange der Satz gleich bleibt" markieren.

Baureihenfolge weiter exakt nach `docs/WELTWERKZEUG.md`: eine Schublade/drei Fächer → HUD-Badges → `/editor` entfernen → Kanon-Diff → Kanon-Schreiben pro Modul → Schwierigkeitskurve/Export.

#### B. Anfassen (Schritt 9 — geplant, noch nicht gebaut)

Jedes sichtbare Element auf der Bühne (`src/components/game/SceneStage.tsx`) direkt per Hover/Klick bearbeitbar machen, mit `floating-ui` (kein GrapesJS/Plasmic). Setzt auf den bestehenden Patch-Fluss auf, der schon durch die Komponente läuft:

```tsx
// src/components/game/SceneStage.tsx — bestehender Patch-Zustand, den Anfassen wiederverwendet
export function SceneStage({
  view, original, patch, onPatch, onResetKarte, onRueckgaengig, authorMode, ...
}: { ... }) {
  const karte = view.original ?? { title: original.title, lines: original.lines, choices: original.choices };
  const [title, setTitle] = useState(view.title);
  const [body, setBody] = useState(view.lines.join("\n"));
  ...
}
```

Anfassen fügt hier keine neue Zustandsverwaltung hinzu, sondern hängt sich als Overlay auf `title`/`body`/`choices` und ruft dasselbe `onPatch` auf, das die Werkstatt heute schon nutzt. Nutzt außerdem `reputation.ts` und `memory.ts` weiter, wenn im Fach Held simuliert wird. Nur im geöffneten Weltwerkzeug aktiv — sonst spielt man, keine Stifte im normalen Spielfluss.

#### C. Spiel-UI

Bestehende Komponenten erweitern (`Hud.tsx`, `SceneStage.tsx`, `KnowledgeJournal`, `LageOverlay`), keine neue Architektur, kein Event-Bus, keine State-Library (Zustand/Jotai ausdrücklich nicht — siehe `docs/WELTWERKZEUG.md`: "Zustand: nicht im Einsatz"). HUD-Zeile bleibt:

```
Status ▾    Speichern    Wissen (7)    Welt ● 3
```

Erweiterung nur um Zustandsanzeigen (Zahlen/Punkte), nicht um neue Knöpfe. `Wissen (7)` ist `deriveKnowledge(held).length`, kein neuer State. `Welt ● 3` zählt abweichende Karten aus `lindendorf.welt.v2`, Punkt nur bei Abweichung auf der aktuellen Szene.

---

### 3. Umgang mit bestehenden Projektdateien

- Bestehende Module (`script.ts`, `content.ts`, `knowledge.ts`, `heldSchema.ts`, `decisions.ts`, `welt.ts`, `runtime.ts`, `reputation.ts`, `memory.ts`, `gm/`) sind die Implementierung, nicht nur Referenz zum Verstehen — sie werden erweitert, nicht ersetzt.
- Ersetzt wird ausschließlich das, was `docs/WELTWERKZEUG.md` als Zielbild explizit benennt (Spielleiter-HUD + `/editor`-Werkstatt → eine Fläche). Alles andere bleibt stehen.
- Nie ohne Auftrag: Wahl-Anzahl/Verzweigungen/Flags bestehender Quests umbauen, Entscheidungs-Log von Hand fälschen (nur über `protokolliere()`), automatisches Git/Kanon-Schreiben, Undo über mehr als eine Stufe.

---

### 4. Output-Format

- Konkrete Diffs/Codeänderungen gegen bestehende Dateien, keine abstrakten Architekturpläne "von Null".
- Bei neuen Datenformen: Zod-Schema zuerst (wie `WeltAuflageSchema`), dann Implementierung, dann Anbindung an `present()`/`Runtime`.
- Nach jeder Änderung: `npm run typecheck && npm run check:knowledge` (bei Quests zusätzlich `npm run check:questreihe`).

---

### 5. Ziel

Das im Repo selbst beschriebene Zielbild erreichen:

> "Du spielst. Du öffnest Welt. Du siehst am Knopf, dass diese Karte schon einmal geändert wurde. Du änderst den Satz am Brunnen. Du siehst gemerkt (Auflage). Bei Bedarf eine Stufe zurück. Die Partie speicherst du extra. In den Kanon nur, wenn du das willst — und du siehst vorher die Zeilen."

Kein zweites Spiel, keine zweite Runtime — ein Werkzeug, das sich nicht mehr in drei Türen versteckt.
