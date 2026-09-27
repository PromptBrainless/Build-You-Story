# Weltwerkzeug: Kanon- und Quellenmodell

Das Weltwerkzeug muss in Lindendorf als kontrollierte Kanonansicht konzipiert werden. Es darf keine ungesichteten Entwürfe, freien Wiki-Ideen oder archivierten Arbeitsstände als aktive Wahrheit ausgeben.

## 1. Ziel

Das Werkzeug soll die Welt von Lindendorf in drei Schichten darstellen:

1. Kanon: bestätigte Wahrheit
2. Quellen: dokumentierte und historische Einordnung
3. Entwurf: offen, noch nicht beschlossen

## 2. Grundprinzipien

- Nur `aktiv`, `implementiert` und `dokumentiert` sind für die Kanonansicht zugelassen.
- `wiki`, `arbeitsstand`, `idee` und `archiv` sind getrennt anzuzeigen.
- Widersprüche müssen sichtbar, aber nicht automatisch gelöst werden.
- Das Werkzeug darf keine neue Handlung erzeugen und keine neue Flag, ArtKey oder Quest ohne Freigabe anlegen.

## 3. Ansichten

### 3.1 Kanonansicht

Zeigt nur:

- Figuren mit aktiver Quelle
- Orte mit aktiver Quelle
- Quests mit bestätigter Zuordnung
- Wissenskeys mit aktiver Freischaltung
- Flags, Hub-Labels und eindeutige IDs aus dem Projektregister
- aktive Enden und Spielpfade
- konforme Asset- und Portrait-Referenzen

### 3.2 Quellenansicht

Zeigt zusätzlich:

- Wiki-Seiten
- Anhänge
- Archivstände
- historische Vergleichsstände
- offene Defizite
- Widersprüche mit Erklärung

### 3.3 Abgleichansicht

Zeigt z.B.:

- Figur in Wiki erwähnt, Code kennt sie nicht
- Umwelt-Text in Attachments, aber kein aktiver Codepfad
- Wissenskey in der Dokumentation, aber keinerlei Freischaltung
- Quest aus Archiv, aber keine aktiv implementierte Quelle

## 4. Verhaltensregeln

- Das Weltwerkzeug muss alle Einträge mit einem Status und einer Belegquelle anzeigen.
- Wenn kein aktiver Beleg existiert, bleibt der Eintrag in der Entwurfs- oder Archivansicht.
- Die Ausgabe darf keine stillschweigende Objektklassifizierung annehmen.
- Ein archivierter Zustand darf weder neue Projektregeln noch aktive Spielregeln erzeugen.

## 5. Technische Richtlinie

Die späteren Implementierungsbausteine sollten die folgenden Felder unterstützen:

```ts
type Quellenstatus =
  | "aktiv"
  | "implementiert"
  | "dokumentiert"
  | "wiki"
  | "arbeitsstand"
  | "idee"
  | "archiv"
  | "widerspruechlich"
  | "unklar";

type Quellenbeleg = {
  pfad: string;
  status: Quellenstatus;
  prioritaet: number;
  begruendung: string;
};
```

Diese Typisierung dient als Entwurf für die spätere Weltwerkzeug-Umstellung. Sie ist kein Aufruf zum vollständigen Zod- oder Runtime-Umbau ohne konkreten Auftrag.

## 6. Was nicht zulässig ist

- unbestätigte Entwürfe als Kanon anzeigen
- neue Handlung aus einem Entwurf ableiten
- neue ArtKeys, Flags oder Enden zum Entwurf machen
- Archive als aktive Arbeitsquelle behandeln
- Wiki- und Attachment-Inhalte ohne Benutzerentscheidung freigeben

## 7. Nächster Schritt

Im nächsten Projektblock gilt:

- Quests, Figuren, Orte, Wissen, Flags und Assets als Statusobjekte katalogisieren
- Statusfelder für die Weltansicht anlegen
- getrennte Filter für Kanon, Quellen und Archiv einbauen
- Vor implementierten Entwurfs- oder Regeländerungen immer die Source-Status prüfen

