# Kanon-Register

Dieses Dokument legt die Quellen- und Entscheidungsordnung für Lindendorf fest. Es dient als verbindliche Arbeitsgrundlage für alle späteren Änderungen am Weltwerkzeug, an Quests, an Karrieren und am Spielkorpus.

## 1. Grundsatz

Der aktive Code und die dokumentierte Projektlogik des Hauptrepo `PromptBrainless/lindendorf-rpg-alpha-V.1.1` gelten als primäre Quelle. Wiki, Anhänge, alte Repositories und der Exportbaum dienen nur als Vergleichs-, Ideen- und Historienquelle.

Die Regel lautet:

- Code gewinnt gegen widersprechende Markdown-Dateien.
- Bestätigter Projektstand gewinnt gegen freie Entwürfe.
- Implementierte Daten gewinnen gegen bloße Beschreibung.
- Archiv und Vergleich gewinnen nicht gegen den aktiven Kanon.

## 2. Quellenstatus

| Status | Bedeutung | Verbindlichkeit |
|---|---|---|
| `aktiv` | laufender Hauptbestand, im Code oder in den aktiven Projektdateien | höchste |
| `implementiert` | technisch im Spiel vorhanden, aber noch nicht vollständig in Begriffen/Leitlinien dokumentiert | hoch |
| `dokumentiert` | als Projektregel, Questregister oder Leitlinie klar beschrieben | hoch |
| `wiki` | relevante Planung, ideenreich, nicht automatisch verbindlich | mittel |
| `arbeitsstand` | laufender Entwurf, offen für Änderungen | niedrig |
| `idee` | Vorschlag, noch nicht abgestimmt | niedrig |
| `archiv` | historische Vergleichsquelle, kein aktiver Kanon | sehr niedrig |
| `widerspruechlich` | mehrere Quellen widersprechen sich | nur nach Entscheidung |
| `unklar` | nicht ausreichend belegt | nur als Arbeitspunkt |

## 3. Bindungsstufen

### 3.1 Aktiver Kanon

Folgende Bereiche gelten als aktiver Kanon, sobald sie im aktiven Code oder im aktiven Projektregister eindeutig belegt sind:

- Questnamen, Flags, Hub-Labels und Wissenskeys aus `docs/QUESTREGISTER.md`
- Laufender Spielablauf aus `src/game/script.ts`, `src/game/quest-*.ts`, `src/game/lager-content.ts`
- Wissenslogik aus `src/game/knowledge.ts`
- Lore-Grenze aus `src/game/lore.ts`
- Gesprochene Stimme aus `src/game/werkstatt-vertrag.ts`
- Welt- und Spielleit-Module aus `src/game/welt*.ts` und `src/game/gm/`

### 3.2 Verbindliche Projektregeln

Diese Regeln sind verbindlich, solange keine ausdrückliche Gegenentscheidung erfolgt:

- `AGENTS.project.md`
- `docs/KONTEXT_NEUES_FENSTER.md`
- `docs/QUESTREGISTER.md`
- `docs/ERNEUERUNGSPLAN.md` nur als historischer Ablauf oder als Anforderungsplan, falls ausdrücklich erwähnt

### 3.3 Vergleichs- und Archivquellen

- `export/spielversion1-7170673/` ist ein Vergleichsarchiv
- `wiki/` ist ein relevanter Planungsraum, aber kein automatischer Kanon
- `attachments/` stellt Ergänzungs- und Arbeitsmaterial bereit, aber keine automatische Spielregel

## 4. Entscheidungsregeln

Bei Widersprüchen gilt die Reihenfolge:

1. aktiver Code
2. aktives Projektregister
3. dokumentierte Projektregeln
4. bestätigte Wiki-Seiten
5. Arbeitsstände und Anhänge
6. Archiv/Export

Wenn ein Eintrag nur im Wiki oder in Anhängen existiert, dann darf er nicht stillschweigend als Spielregel eingesetzt werden. Er bleibt als Entwurf oder Recherchegegenstand markiert.

## 5. Weltwerkzeug-Status

Das Weltwerkzeug muss nur Inhalte anzeigen, deren Quelle mindestens den Status `aktiv`, `implementiert` oder `dokumentiert` trägt. Entwürfe, Ideen, Wiki-Inhalte und Archivmaterialien dürfen nur in separaten Ansichten dargestellt werden.

Dafür gelten drei Ansichten:

- `Kanonansicht`: nur bestätigte, aktive Quellen
- `Quellenansicht`: dokumentiert, Wiki, Arbeitsstände, Archiv, mit Statusmarkierung
- `Abgleichansicht`: Widersprüche, fehlende Belege, Kennzeichnungen von Unklarheit

## 6. Nächste Aufgaben

Der nächste echte Arbeitsblock ist:

- Kanon- und Quellenstatus für Figuren, Orte, Quests, Wissen und Flags erfassen
- Weltwerkzeug auf diese Statusansichten umstellen
- Karriere-, Status- und Schicksal-/Glück-Entwürfe als separate Planungsdateien behandeln
- keine neue Handlung, keine neue Flag, keine neue ArtKey ohne bestätigte Notwendigkeit

## 7. Verwendungsregeln für KI und Agenten

Wenn ein Agent etwas prüfen oder ändern soll, darf er nur in die folgenden Kategorien einordnen:

- `aktiv`
- `implementiert`
- `dokumentiert`
- `wiki`
- `arbeitsstand`
- `archiv`
- `widerspruechlich`
- `unklar`

Er darf niemals einen Entwurf ohne Entscheidung als kanonisch einordnen.

## 8. Abgrenzung

- `wiki/` = Planungsraum
- `attachments/` = Ergänzungen, Medien und Arbeitsmaterial
- `export/spielversion1-7170673/` = historischer Vergleich
- `src/` = aktiver implementierter Kern
- `docs/` = Projekt- und Regelwerk

Damit bleibt der Produktionskanon sauber trennbar vom Entwurfs-, Archiv- und Ideenraum.

