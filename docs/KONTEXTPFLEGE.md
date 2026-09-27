# Kontextpflege für Lindendorf

## Zweck

Eine neue Sitzung liest zuerst `AGENTS.project.md`, dann `docs/KONTEXT_NEUES_FENSTER.md`.
`PROJEKTKONTEXT.md` wiederholt den Stand und vergibt keinen Auftrag.
`docs/UMBAU_UMGEBUNG.md` ist eine offene Liste. Nummern nicht von allein umsetzen.

## Aktualisierungspunkte

Der Kontext wird vor einer größeren Strukturänderung, nach jedem abgeschlossenen Arbeitsblock, vor einem bewusst erzeugten Zwischenstopp und vor einem Commit aktualisiert. Nach einer Fehlersuche wird nur die Ursache und die bestätigte Korrektur ergänzt. Routineänderungen ohne neue Entscheidung brauchen keinen langen Eintrag.

## Pflichtfelder

Jeder Snapshot enthält Datum und Uhrzeit, Entwicklungsstatus, Serverstatus, den letzten bestätigten Teststand, den letzten Commit, uncommittete Dateien, offene Risiken und den nächsten sicheren Arbeitsschritt.

## Schreibregeln

Der Text bleibt kurz und entscheidungsorientiert. Bereits stabile Regeln werden nicht erneut erklärt. Unbestätigte Architektur wird ausdrücklich als „pausiert“ oder „Experiment“ markiert. Vermutungen stehen nicht im Abschnitt „stabiler Stand“. Jede neue Datei wird nur genannt, wenn sie für die nächste Sitzung relevant ist.

## Sitzungsbeginn

Zu Beginn einer neuen Sitzung werden `AGENTS.project.md` und `docs/KONTEXT_NEUES_FENSTER.md` gelesen. Danach nur die dort genannten Dateien. Nicht das ganze Skript. Nicht den Erneuerungsplan als Auftrag.

## Sitzungsende

Vor dem Stoppen wird der Snapshot aktualisiert. Anschließend werden der Git-Status, die Existenz des Dokuments und — wenn ein Server verwendet wurde — der Serverstatus geprüft. Bei uncommitteten Experimenten muss klar bleiben, ob sie erhalten, getestet, zurückgebaut oder später separat committed werden sollen.

## Qualitätsgrenze

Kontextpflege darf keine ungetestete Funktion als fertig darstellen. Ein Typecheck allein bedeutet keine Browserabnahme. Ein Browser-Smoke-Test allein bedeutet keine vollständige Pfadabnahme. Der Snapshot trennt diese Aussagen ausdrücklich.
