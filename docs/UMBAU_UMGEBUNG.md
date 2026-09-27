# Umbau der Umgebung — Entscheidungsplan

Stand: 23. September 2026. **Kein Auftrag.**
Nicht anfangen, solange der Nutzer keine Nummer aus Abschnitt 5 nennt.

Wahrheit des Spiels bleibt der Code: `present()` in `script.ts` und den
Quest-Modulen, dazu die längste Fassung aus Karte, KI-Kanon und Volltext.
Anweisungen, die dem widersprechen, verlieren.

---

## 1. Was heute gleichzeitig redet

| Schicht | Datei | Wirkt live? | Auftrag |
|---|---|---|---|
| Stimme | `src/game/werkstatt-vertrag.ts` `GROK_STIMME` | ja, Knopf Formulieren | Nur diese Seite. Dichter. Nicht kürzen. Keine Namen, die nicht schon dastehen. |
| Szene | derselbe Vertrag, `GROK_SZENE` | ja, Szenen-JSON | Dieselbe Handlung, dieselben Wahlen. Keine neuen Felder. |
| Bildsicht | `ART_SICHT` im selben Vertrag | ja, hängt an der Stimme | Ein Satz pro Art-Key. Gilt für jede Karte mit diesem Bild. |
| Lore-Grenze | `src/game/lore.ts`, eingehängt in `grokFassung` und Formulieren | ja | Fakt nur ausführen, wenn der Ausgangstext ihn schon berührt. |
| Lagen | `scripts/stimme-lagen.mjs` | nur wenn das Skript läuft | Dieselbe Stimme, anderes JSON: Titel, drei Absätze, drei Antworten, Mal. |
| Kanon-Skill | `.grok/skills/lindendorf/` | nur im Chat, wenn ausgelöst | 71 Seiten nachschlagen. Nicht erfinden. Stil in `references/stil.md`. |
| Quest-Skill | `.grok/skills/lindendorf-questreihe/` | nur im Chat | Neue Nebenquest in sieben Phasen. Engine nicht anfassen. |
| Einfüge-Prompt | `docs/PROMPT_QUESTREIHE.md` | nur wenn jemand ihn einkopiert | Dieselbe Quest-Anweisung, mit Platzhaltern. |
| Manus | `docs/ANWEISUNGEN_MANUS.md` | nein, anderes Werkzeug, 17. September | Fluss unantastbar. Damals: Texte länger und düsterer machen. |
| Autorenhandbuch | `docs/AUTORENHANDBUCH_TEXTABENTEUER.md` | nein | Ältere Schreibregeln. |
| Register | `docs/QUESTREGISTER.md` | nein, Nachschlagewerk | Namen, Flags, Labels. Code gewinnt. |
| Erneuerung | `docs/ERNEUERUNGSPLAN.md` | nein, Stand 20. September | Technische Reihenfolge. Behauptet, ältere Pläne zu ersetzen. |
| Kontext | `docs/PROJEKTKONTEXT.md` | nein, Snapshot 20. September | Nächster Schritt dort: Lager-Wege oder Glockenweg. Überholt. |
| Sandbox | `AGENTS.md` | ja, für den App-Bau | Ports, Preview, keine Lindendorf-Stimme. |

Nicht zu verwechseln: `docs/SYSTEMSTEUERUNG_UND_TON.md` ist der Lautstärkeregler,
kein Systemprompt.

---

## 2. Wo die Anweisungen sich beißen

Das sind die Stellen, an denen eine Anpassung nötig ist. Der Rest kann liegen bleiben.

1. **Länge.** `stil.md` will Ortsseiten bei 220–450 Zeichen. `GROK_STIMME` verbietet Kürzen. Die Laufzeit nimmt die längere Fassung. Drei Regeln, eine gewinnt nicht. Vorschlag: Obergrenze streichen. Untergrenze behalten, damit leere Karten auffallen. Die längere Fassung gewinnt nur, wenn sie dieselbe Handlung sagt.

2. **Ton.** `stil.md` sagt nüchtern, kurz, ohne Wertung. `GROK_STIMME` sagt schöne Sätze mit hässlichen Dingen. Beides ist derselbe Ton, wenn man ihn so liest: Befund, nicht Urteil. Die Obergrenze und der Abschiedssatz in `stil.md` sind am 23. September schon gestrichen. Den Prompt-Code noch nicht anfassen, solange Nummer 1 nicht genannt ist.

3. **Nur diese Seite gegen Lore.** Der Stimme-Prompt verbietet Welt. Die Lore hängt trotzdem an der Anfrage, mit dem Satz, sie nicht einzusetzen. Das ist richtig, solange der Satz hart bleibt. Er darf nicht zu „arbeite die Fakten ein“ werden. Sonst sitzt wieder der Held in Fenns Mulde.

4. **Bildsicht lügt.** `ART_SICHT.well` sagt immer „trübes Wasser“. Das gilt für den bitteren Krug, nicht für klares Wasser und nicht für die Zisterne. `return` sagt „der Weg führt fort“. Die Schlusskarte ist die Rückkehr zu Holm. Vorschlag: `ART_SICHT` nur noch Stoff und Licht, keine Handlung, kein Wasserzustand.

5. **Ende.** Der Abschiedssatz in `stil.md` ist gestrichen. Die Schlusskarte bleibt die Rückkehr. Nicht zurückschreiben.

6. **Quest-Skill.** Die Block-A-Sperre und die toten `attachments/`-Pfade sind am 23. September aus dem Skill. Nicht wieder einsetzen. Sieben Phasen bleiben.

7. **Kontext ist alt.** `PROJEKTKONTEXT.md` nennt als nächsten Schritt Lager oder Glockenweg. Beides ist spielbar. Der Snapshot darf den Umbau nicht steuern, bevor er neu geschrieben ist.

8. **Viele Pläne, eine Reihenfolge.** `ERNEUERUNGSPLAN.md` sagt, er ersetze `VORPLANUNG_VIER_PHASEN.md` und ältere Handoffs. `lindendorf-erweiterung-plan.md` ist die Rohfassung. `UPDATEPLAN_VERSTAENDLICHKEIT.md`, `WELTWERKZEUG.md`, `WELTWERKZEUG_CODE.md` planen dasselbe Werkzeug noch einmal. Für den Umbau zählt nur, was im Code sitzt.

---

## 3. Vorschlag: drei Prompts, nicht zwölf

Noch nicht geschrieben. Zur Entscheidung.

### A. Stimme — eine Fassung für Formulieren, Szene und Lagen

Gemeinsamer Kopf, drei Ausgaben.

Kopf, unverändert im Kern:

- Deutsch, Du, Präsens. „…“.
- Befund, nicht Urteil. Geruch, Kälte, Gewicht, Arbeit.
- Schöne Sätze nur, wenn das Hässliche konkret bleibt.
- Was geschieht, bleibt. Nicht kürzen. Keine neue Handlung, kein neuer Name, kein neuer Ort.
- Stichpunkte verboten.

Dann getrennt:

| Ausgabe | Wohin | JSON |
|---|---|---|
| Formulieren | `GROK_STIMME` | `{"text":"…"}` |
| Szene | `GROK_SZENE` | das vorhandene Szenen-JSON, gleiche Felder |
| Lagen | `stimme-lagen.mjs` | Titel, Geschichte, drei Antworten, Mal |

Lore bleibt ein Anhang mit dem heutigen Verbotssatz. Sie wird kein vierter Prompt.

### B. Kanon — ein Skill, zwei Aufgaben

`lindendorf` bleibt Nachschlagen: Seite, Tafel, Anker, Fakt. Er schreibt nicht.
`lindendorf-questreihe` bleibt das einzige Schreib-Skill für neue Quests.
Die Sperre „Block A“ fliegt. Tote Anhang-Pfade werden durch `docs/QUESTREGISTER.md`, `src/game/lore.ts` und die Quest-Module ersetzt.
`ANWEISUNGEN_MANUS.md` und `PROMPT_QUESTREIHE.md` werden Verweise, keine zweiten Regelwerke.

### C. Werkzeug — nicht noch ein Prompt

Weltwerkzeug, Textvergleich, Lore-Prüfung bleiben Skripte. Sie bekommen keinen eigenen Systemprompt. Sie melden Abweichung. Ein Mensch entscheidet, ob die längere Fassung die richtige Handlung ist.

`ART_SICHT` wird auf Stoff gekürzt. Beispiel Brunnen: „Stein, Holz, Eimer.“ Nicht „trübes Wasser“.

---

## 4. Inhalte, neu vorgeplant

Nicht neu geschrieben. Nur: was der Spieler sieht, was bedingt ist, was nicht angefasst wird, solange kein Auftrag kommt.

| Strang | Spielbar | Wahrheit | Nicht anfassen ohne Auftrag |
|---|---|---|---|
| Zehn Lagen | ja, vor dem Tal | `lagen` plus `stimme-lagen.mjs` | Die drei Antworten und die Mal-Tabelle. Keine elfte Lage. |
| Ankunft | ja | `content.ts`, `json/ankunft.ts` | Auge über drei Linien, Nordpass. Kein Name für den Fremden. |
| Dorf | ja | `script.ts` Hub, Labels | Holm benennt nur Banditen. Mara zeigt den Pfad. Schmied hat keine Quest. |
| Mehlsack | ja | `script.ts` | Am Brunnen heißt sie Müllerin. Lene erst in der Mühle. |
| Brunnen | ja | `quest-brunnen.ts` | Grovin fällt erst nach Frage oder Druck. Fünf Gold, Verhandeln, Sperre, drei Enden. |
| Mühle | ja | `quest-muehle.ts` | Rennik erst nach Vertrauen oder Druck. Zweite Schuld im Mahlstein, nicht an Renniks Wand. |
| Kesseljahr | ja | `quest-kesseljahr.ts`, Grete, Gewölbe, Schluss | Fenn erzählt nur beim Warten. Grete nur mit Zeit. Liste: dritter Stein, Gerberei-Wachs. |
| Glockenweg | ja | `script.ts` | Sannas Siegel ist nicht Holms Wachs. Glocke warnt oder bleibt still. |
| Lager | ja | `lager-content.ts` | Kiste, Kinderumhang, Listen mit Kreuzen. Vier Wege. |
| Ende | ja | `script.ts` Epilog, Karte `ende` | Rückkehr zu Holm. Folgen nur für gegangene Wege. |
| Wissen | 22 Keys | `knowledge.ts`, Tafeln | Ableiten, nicht speichern. Tafel wiederholt nicht die Seite. |
| Lore | 41 Fakten | `src/game/lore.ts` | GM-Grenze, kein Spielersatz. |

Offen, nicht in diesem Umbau:

- Der ungerufene Name hat keine Lore-Fakten. Erst nachlesen, dann ergänzen oder lassen.
- `text-pack.json` kann alte Sätze wieder auflegen, wenn die erste Zeile noch passt. Vor dem nächsten Formulieren prüfen, nicht blind löschen.
- Bilder: eigener Plan, `docs/BILDPLAN_DARKFANTASY.md`. Dieser Umbau ändert keine Datei unter `public/art/`.

---

## 5. Was du entscheiden kannst

Jede Zeile ist eine eigene Freigabe. Ohne Kreuz wird nichts geändert.

| Nr | Vorschlag | Wenn ja |
|---|---|---|
| 1 | Einen Stimm-Kopf für Formulieren, Szene und Lagen | `werkstatt-vertrag.ts` und `stimme-lagen.mjs` teilen sich den Kopf. Ausgaben bleiben getrennt. |
| 2 | `stil.md` an den Kopf ziehen | Länge nach oben offen. Ende-Satz streichen. Nüchtern bleibt das Gesetz gegen Pathos. |
| 3 | `ART_SICHT` auf Stoff kürzen | Kein Wasserzustand, kein „Weg führt fort“. |
| 4 | Quest-Skill entstauben | Block-A-Sperre weg. Tote Pfade weg. Sieben Phasen bleiben. |
| 5 | Manus-Anweisung und Einfüge-Prompt zu Verweisen machen | Keine zweite Stimme mehr. |
| 6 | `PROJEKTKONTEXT.md` neu schreiben | Erst nach diesem Umbau, nicht vorher. |
| 7 | Alte Pläne als abgelöst markieren | Eine Zeile oben: gilt nicht, siehe Erneuerungsplan oder dieses Blatt. Dateien nicht löschen. |
| 8 | Ungerufener Name in die Lore | Nur die Fakten, die der Code schon sagt. |

Nicht in diesem Umbau: neue Quest, neue Flags, neue Engine, neue Bilder, kürzere Spieltexte.
