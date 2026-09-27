# Lindendorf — vollständige Quest-Lore

Stand: aktuelles Quest-Register (`src/game/json/baum.ts`) plus Logik aus `quest-brunnen.ts`, `quest-muehle.ts`, `quest-kesseljahr.ts`, `kesseljahr-grete.ts`, `kesseljahr-gewoelbe.ts`, `kesseljahr-schluss.ts`, `lager-content.ts` und der Konzeptnotiz `docs/SZENARIO_ALTER_GLOCKENWEG.md`. Alles in eigenen Worten paraphrasiert, keine Spielzeilen wörtlich übernommen.

---

## 1. Ankunft (Hauptfluss)

**Ausgangslage:** Der Held reist zu Fuß ins Tal, allein, bei Regen. Auf dem Weg begegnet er einem verletzten Fremden, der ein kleines, silbernes Kirchenartefakt bei sich trägt — erkennbar an einem eingeritzten Zeichen (ein offenes Auge über drei Linien). Der Held hat schon einmal ein ähnliches Zeichen gesehen, Jahre zuvor an einem Grenzstein am Nordpass, wo Händler sich davor bekreuzigten. Je nach Handlungsentscheidung (Kampf, Schleichen, Überreden oder Vorübergehen) bekommt der Held das Artefakt, erbeutet es heimlich, erhält es freiwillig oder lässt den Fremden ziehen.

**Personen:** der namenlose Fremde am Weg (verwundet, flüchtig, trägt das Kirchensilber).

**Objekte/Infos:** das Kirchensilber-Artefakt mit dem Augen-Symbol — taucht später im Banditenlager als Teil einer Kirchenkiste wieder auf, die dasselbe Siegel trägt.

**Verbindung zum Dorf:** Reine Exposition. Zeigt schon vor der Ankunft, dass in der Region etwas mit der Kirche und ihren Zeichen nicht stimmt, lange bevor das Dorf selbst erreicht wird.

---

## 2. Lindendorf (Dorf-Hub, Hauptfluss)

**Ausgangslage:** Der Held erreicht den Dorfplatz. Häuser, Brunnen, Taverne, Mühle, Rathaus und der Weg zum Hang sind sichtbar; im Osten steigt Rauch aus dem alten Steinbruch.

**Personen:**
- **Holm** — Ratsherr/Bürgermeisterfigur im Rathaus, erteilt den offiziellen Auftrag: Banditen im Steinbruch sollen verschwinden, damit das Dorf wieder ruhig schlafen kann.
- **Mara** — Wirtin der Taverne „Zum letzten Fass“.
- **der Schmied** — Handwerker, keine tiefere Rolle in den bisherigen Quests.
- **Witwe Kern** — Kräuterfrau/Heilerin, taucht später zentral in der Brunnen-Quest wieder auf.

**Verbindung zum Dorf:** Diese Szene *ist* das Dorf — die Nabe, von der aus sich Brunnen-, Mühle-, Kesseljahr-, Wald- und Lager-Quest verzweigen. Wichtig: Der offizielle Auftrag (Banditen) ist die einzige Bedrohung, die das Dorf selbst benennt. Alle anderen, eigentlich gravierenderen Probleme (Wasser, Mehl, Vertuschung) werden von niemandem offiziell ausgesprochen.

---

## 3. Trübes Wasser (Brunnen-Quest, Reihe „Versorgung“)

**Ausgangslage:** Der Dorfbrunnen liefert graubraunes, nach Eisen schmeckendes Wasser. Kinder husten, die Apothekerin Witwe Kern behandelt zunehmend mehr Fälle. Ratsherr Dennek steht ständig am Brunnenrand und rührt mit einem Stock im Eimer, als könne er das Wasser dadurch klären — vermeidet dabei aber auffällig eine bestimmte Stelle am Brunnenschacht.

**Personen:**
- **Ratsherr Dennek** — behauptet, es sei nur ein „trockenes Jahr“, weiß aber mehr, als er sagt, und lässt beim Reden unbewusst den Namen „Grovin“ fallen.
- **Witwe Kern** — bestätigt die Vergiftung fachlich, vermutet von Anfang an, dass jemand den Brunnen absichtlich angefasst hat; führt Krankenzettel mit den Namen betroffener Haushalte nahe am Brunnen.
- **Grovin** — hat dem Dorf vor Jahren den Brunnen gebaut, wurde vom Amt nie bezahlt (Dennek vertröstete ihn auf „später“). Aus Rache/Ausgleich hat er heimlich einen Ablaufgraben zu einer eigenen, gepflegten Zisterne am Waldrand gelegt und zweigt dort einen Teil des Dorfwassers ab.

**Ablauf/Ereignisse:**
1. Am Brunnen: verschmutztes Wasser, hustende Kinder, Denneks verdächtiges Rühren.
2. Bei Kern: medizinische Bestätigung, Verdacht auf Fremdeinwirkung, Hinweis auf betroffene Häuser.
3. Bei Dennek: je nach Gesprächsführung (Charisma-Probe zum trockenen Jahr, Stärke-Probe zum Bedrängen) gibt er entweder ruhig zu, dass Grovin den Brunnen gebaut und nie Lohn erhalten hat, oder er bleibt stur und verrät den Namen nur versehentlich.
4. Am Brunnenschacht: frischer Mörtel an einer Fuge, ein unauffälliger Ablaufgraben Richtung Wald (Wahrnehmungsprobe nötig, sonst muss man den Graben später im Unterholz suchen).
5. Am Graben/an der Zisterne: eine gepflegte, klare Zisterne im Dickicht. Zugang per Kraft (durchs Gestrüpp, kleiner Schaden durch Dornen) oder per Schleichen (bei Misserfolg entdeckt Grovin den Helden mit einer Grabegabel in der Hand).
6. Bei Grovin: er erklärt offen seinen Grund — drei Jahre unbezahlte Arbeit, Dennek habe ihn stets vertröstet. Er will dem Dorf nicht schaden, sondern nur, dass seine Rechnung endlich gehört wird.

**Lösungswege (bestimmen das Ende):**
- **Bestechen** (5 Gold): Grovin nimmt das Geld, behält aber die Zisterne — das Dorfwasser wird nur teilweise klarer, ein Teil bleibt bei ihm.
- **Verhandeln** (Charisma, mittel, nur wenn zuvor nach seinem Grund gefragt wurde): Held verspricht Grovin Holms Entschädigung; bei Erfolg öffnet Grovin die Sperre freiwillig — sauberstes Ende, aber Holm „schuldet“ Grovin jetzt real etwas.
- **Sperre unbemerkt umlegen** (Geschick): bei Erfolg fließt das Wasser zurück, ohne dass das Dorf je erfährt, warum; bei Misserfolg Kampf mit der Grabegabel (Schaden).
- **Sperre gewaltsam zerstören** (Stärke): bei Erfolg flieht Grovin in den Wald (Ende „Wasser mit einem Riss“ — ungelöst, Grovin bleibt eine Bedrohung, nächtliche Schritte am Waldrand); bei Misserfolg Kampf mit Schaden.

**Mögliche Enden:**
- „Zwei Brunnen, ein Dorf“ (bestochen) — Wasser reicht nie ganz, Held trägt das Wissen allein.
- „Wasser mit einem Riss“ (zerstört, Dennek nicht entlarvt) — Grovin verschwindet, Bedrohung bleibt vage bestehen.
- „Klares Wasser“ (verhandelt/geöffnet) — Wasser wieder klar; wenn Dennek zuvor entlarvt wurde, meidet er fortan öffentlich den Brunnenrand; wenn Grovin ein Versprechen abgerungen wurde, hat Holm nun eine reale, uneingelöste Schuld bei ihm.

**Verbindung zum Dorf:** Musterbeispiel für das Grundthema — eine öffentliche Notlage (krankes Wasser) hat eine private, nachvollziehbare Ursache (unbeglichene Schuld einer Amtsperson gegenüber einem einfachen Handwerker), und die Obrigkeit (Dennek) deckt lieber, statt zu lösen.

---

## 4. Die stumme Mühle (Reihe „Versorgung“)

**Ausgangslage:** Die Mühle liefert kein Mehl, obwohl das Wasserrad läuft. Der Müller Bertok hat mehlweiße Hände, obwohl seit Tagen nichts gemahlen wurde. Etwas bewegt sich hinter den Getreidesäcken.

**Personen:**
- **Bertok** — Müller, unter Druck, redet zunächst nur von schlechtem Korn und niedrigem Wasser.
- **Lene** — Bertoks Tochter, zählt zwanghaft dieselben Mehlsäcke, bewacht mit ihrem Körper eine hohle Wand in der Kornkammer.
- **Yorwin** — Lenes Schwager, versteckt sich mit zwei Kindern hinter der Wandnische; seine Frau (Lenes Schwester) ist tot. Rennik weiß von den Kindern, deshalb liegt die Mühle still.
- **Rennik** — Gläubiger/Kaufmann mit Kontor und Lagerhaus flussabwärts, presst Bertok über eine alte Schuld (Bertoks unterschriebener Schuldschein hängt bei ihm an der Wand, neben einer zweiten, eigenen Schuld Renniks in einem Nachbarort).
- **ein namenloser Wächter** am Lagerhaus-Steg.

**Ablauf/Ereignisse:**
1. Bei Bertok am Mahlwerk: Ausreden zuerst; je nach Ansatz (Charisma zum Vertrauen gewinnen oder direkter Druck) nennt er entweder vorsichtig „ein Mann am Ufer“ oder direkt den Namen Rennik. Bei fortgeschrittenem Vertrauen zieht er sogar einen belastenden Schuldschein aus dem Mahlstein.
2. Bei Lene in der Kornkammer: zählt Säcke, meidet die hintere Wand. Durchsuchen (Geschick) deckt bei Erfolg die Nische mit Yorwin und den Kindern auf; bei Misserfolg bleibt sie verschlossen. Bedrängen kann sie unter Druck zum Nennen von „Rennik, Ufer“ bringen.
3. Am Wasserrad: Wahrnehmungsprobe zeigt nasse Schleifspuren eines gezogenen Sacks samt Kinderschuh-Abdruck Richtung Ufer — widerlegt Bertoks Ausrede vom niedrigen Wasserstand.
4. Am Uferweg: morscher Steg (Stärkeprobe, bei Misserfolg Sturz ins kalte Wasser, Schaden, und der Wächter wird gewarnt), dahinter ein Wächter vor dem Lagerhaus (Schleichen, Bertoks Namen nennen, oder Kampf).
5. In Renniks Kontor: Rennik sitzt an einem zu feinen Tisch, wiegt fremdes Korn, an der Wand hängt Bertoks Schuldschein. Er macht unverhohlen klar, dass er über Mühle und Dorfversorgung bestimmt.

**Sonderweg — Verrat:** Wer die versteckte Familie entdeckt hat, kann sie stattdessen Holm im Rathaus melden. Die Wache holt Yorwin und die Kinder noch vor Mittag; die Mühle bekommt dafür offiziellen Schutz und pünktliches Mehl — aber Bertok grüßt den Helden fortan nur noch kühl.

**Lösungswege in Renniks Kontor:**
- **Schuldschein stehlen** (Geschick): befreit die Mühle unbemerkt.
- **Rennik mit seiner eigenen (zweiten) Schuld konfrontieren** (Charisma): er gibt nach, verlässt die Mühle „freiwillig“, um nicht selbst bloßgestellt zu werden.
- **Kampf** (Stärke): Rennik flieht, die Schuldscheine bleiben zurück, aber im Dorf spricht man danach über die blutigen Spuren am Steg.

**Mögliche Enden:**
- „Sicheres Mehl, leere Blicke“ (verraten) — offiziell gelöst, moralisch belastet, Bertok distanziert.
- „Mehl mit rauen Händen“ (Kampf) — Mühle läuft wieder, aber mit sichtbaren Nachwirkungen der Gewalt; Lene bleibt verängstigt.
- „Stilles Mehl“ (gestohlen/verhandelt) — leiseste Lösung, Bertok bedankt sich stumm mit einem Sack Mehl, in der Kornkammer ist danach nichts mehr zu hören (die Familie ist sicher/weitergezogen).

**Verbindung zum Dorf:** Dasselbe Muster wie beim Brunnen, diesmal bei der Nahrungsversorgung: eine scheinbare Naturursache (Wasserstand, schlechtes Korn) verdeckt eine handfeste Erpressung durch einen Gläubiger mit Machtposition, und mittendrin verstecken sich echte Kriegs-/Fluchtopfer der Dorfwirtschaft.

---

## 5. Das Kesseljahr (Reihe „Erinnerung“)

**Ausgangslage:** Hinter der Gerberei liegt eine seit Jahren gemiedene, leere Gasse — obwohl sie der kürzeste Weg zum Fluss wäre. Der Bettler Fenn sitzt seit jeher an der Kirchmauer und trägt ein abgewetztes Stück Lattenzaun in der Tasche. Ratsherr Vahl will die Gasse in einer Woche für ein „Lagerhaus“ bebauen lassen.

**Personen:**
- **Fenn** — Bettler, Zeitzeuge; wartet still darauf, dass jemand fragt statt nur vermutet.
- **Ratsherr Vahl** — verwaltet den geplanten Baugrund, dreht ständig einen alten Siegelring, verweist bei genauerem Nachfragen ausweichend auf seinen Großvater.
- **Grete** — fast blinde alte Frau am Gassenrand, trägt ein Medaillon mit einer Haarlocke, kennt die volle Geschichte, gibt sie aber nur preis, wenn man Zeit statt Drängen mitbringt.
- **Ilse Brandtner** — verstorbene Hebamme, führte damals heimlich Buch über die Toten des Kesseljahrs; wurde später selbst im Mühlbach gefunden, an einem Abend mit ungewöhnlich niedrigem Wasserstand (implizit: ermordet, um sie zum Schweigen zu bringen).
- **der Küster / der Pfarrer** — bewachen nebenbei den Zugang zum Kirchengewölbe.

**Die Hintergrundgeschichte (von Fenn erzählt):** Im „Kesseljahr“ wurde die Gasse mit Brettern vernagelt — wie man es sonst nur bei Pestfällen tat — und Tag und Nacht bewacht. Drei Ratsmitglieder hielten den Schlüssel zur einzigen Tür, durch die versprochenes Korn kommen sollte. Das Korn kam nicht rechtzeitig oder gar nicht, das Fieber dafür pünktlich. Als man die Bretter im Frühjahr wieder entfernte, war kaum noch jemand der ursprünglichen Bewohner übrig. Das freiwerdende Land wurde noch vor der ordentlichen Trauer aufgeteilt — Vahls Großvater unterschrieb als Erster, zwei weitere Ratsmitglieder folgten.

**Ablauf/Ereignisse:**
1. Bei Fenn: nach anfänglichem Zögern (bei zu forschem Drängen blockt er ab) erzählt er die Geschichte des Kesseljahrs vollständig und verweist auf Grete.
2. Bei Vahl: rechtfertigt den Bauplan als reine Ordnungsmaßnahme; bei geschickter Nachfrage (Charisma) gibt er zu, dass sein Großvater „Verantwortung getragen“ habe, bricht aber ab, sobald es um die Landaufteilung geht.
3. In der Gasse selbst: verwitterte Kratzspuren in Fünfergruppen an einer Hauswand (eine Strichliste), ein zugewachsener Ziehbrunnen; unter einem losen Stein liegt ein verwittertes Kinderspielzeug (ein Holzpferd ohne Beine) — stiller Beleg für die eingeschlossenen Familien.
4. Bei Grete: sie öffnet sich nur bei Geduld, nicht bei Druck (Drängen sperrt sie dauerhaft zu). Sie bestätigt Ilse Brandtners Rolle, ihren Tod im Mühlbach, und verrät den Ort der versteckten Liste — hinter dem dritten Stein von links im Kirchengewölbe, markiert mit Gerberei-Wachs.
5. Im Kirchengewölbe: Zugang per Bitte beim Pfarrer (Charisma, leichter wenn man das Kirchensilber-Artefakt trägt) oder nächtliches Schleichen (Geschick, bei Misserfolg merkt sich der Küster den Helden für spätere Versuche). Im Gewölbe liegt Ilse Brandtners Wachstuch mit Namen, Daten und der genauen Landaufteilung, endend mit dem Satz, dass die Gezählten nicht vergessen werden dürfen.

**Abschlusskonfrontation mit Vahl (nur mit gefundener Liste möglich):**
- **Vor dem Rat öffentlich vorlesen** (Charisma, schwer): bei Erfolg verliert Vahl sein Ratsamt öffentlich, Fenn wird im Dorf fortan gegrüßt statt übersehen.
- **Liste Holm heimlich zustecken** (Geschick, mittel): Holm lässt den Bauplatz ruhig „aus Ordnungsgründen“ liegen, die Wahrheit bleibt aber in einer Schublade verborgen.
- **Vahl unter vier Augen zur Rede stellen** (Stärke, mittel): Baufreigabe wird zurückgezogen, wirkt aber wie Erpressung statt Aufklärung — Vahl bleibt im Amt, nur eingeschüchtert.
- **Liste für Fenn verbrennen:** die Gasse wird bebaut, die Wahrheit endgültig ausgelöscht; Fenn erhält als einziger „Trost“ zu wissen, dass wenigstens der Held es weiß.

**Verbindung zum Dorf:** Dies ist der historische Schlüssel des gesamten Spiels — erklärt, warum ganz Lindendorf so verschlossen, ängstlich und misstrauisch gegenüber Fragen ist. Die aktuellen Nöte (Wasser, Mehl) sind Wiederholungen desselben Grundmusters: Not wird von denen mit Macht ausgenutzt, und wer zu genau fragt, endet wie Ilse Brandtner.

---

## 6. Hang und Wald / Alter Glockenweg (Hauptfluss)

**Ausgangslage:** Oberhalb des Dorfes führt ein alter Versorgungsweg zu einer verlassenen Kapelle mit einer kleinen Signalglocke. Früher liefen hier Salz, Mehl und Nachrichten über den Pass; heute nutzen die Banditen den Weg als Vorwarnsystem und Transportroute für gestohlene Vorräte.

**Personen:**
- **Sanna** — Botin, hat auf dem Weg eine versiegelte Nachricht für Lindendorf im Geröll verloren; das Siegel darauf ist nicht das gewöhnliche Bürgermeister-Wachs, sondern etwas anderes darunter (Verbindung zum roten Siegel-Motiv, das auch an Türen im Dorf und am Hang klebt).
- **Jorren** — trägt Salz den Weg hinauf, haftet persönlich für die Ware, ein Teil davon ist im Geröll verschüttet.
- die Kapellenglocke selbst — kein übernatürliches Element, sondern ein reines Werkzeug der Banditen.

**Konzipierte Unterquests (laut Design-Dokument):**
1. **Der verlorene Brief** — Spur im Geröll lesen (Geschick) oder Sanna beruhigen und den Inhalt rekonstruieren (Charisma); bei Erfolg kennt der Held später im Wald eine sichere Abzweigung.
2. **Der Sack im Geröll** — Stein wegbewegen (Stärke) oder Last sichern (Geschick) für Jorren; bei Erfolg kleine Goldbelohnung und später sichtbare Salzspuren im Wald, die den Bandentransportweg bestätigen.
3. **Die Glocke zum Schweigen bringen** — das morsche Glockenseil sichern (Geschick); bei Erfolg ist das Banditenlager bei der Ankunft weniger vorbereitet; bei Misserfolg läutet die Glocke und warnt die Banditen vorab.

**Verbindung zum Dorf:** Verknüpft die Alltagsprobleme des Tals mit der höheren, kirchlich/institutionell gefärbten Vertuschungsebene (verdecktes Siegel) und bereitet gezielt den Zugang zum Banditenlager vor — der Weg ist kein eigenständiges Nebenschauplatz, sondern eine vorbereitende Dorfschleife, deren Folgen erst im Wald und am Lager sichtbar werden.

---

## 7. Banditenlager (Hauptfluss)

**Ausgangslage:** Im alten Steinbruch im Osten hat sich eine Bande unter dem Anführer Kess (Narbe über der Lippe) eingenistet — drei Zelte, ein Feuer, und eine Kiste mit dem Siegel der Kirche von Lindendorf. Neben der Kiste liegt ein Kinderumhang, den niemand berührt.

**Personen:**
- **Kess** — Anführer, würfelt mit stumpfen Knochen, trägt kein Wappen, glaubt „an Galgen, nicht an Helden“, deutet an, dass das eigentliche Problem älter ist als der Auftrag gegen ihn.
- drei bis vier namenlose Bandenmitglieder, ein Wachposten auf dem Fels.

**Zentrale Enthüllung:** In der Kirchenkiste liegen unter dem Silber Listen mit Namen, Mengen und Tagen — einige Namen sind aus dem Dorf bekannt, neben anderen steht nur ein Kreuz. Das Lager ist damit kein zufälliges Räubernest, sondern Teil desselben Versorgungs-/Vertuschungsnetzwerks, das über Kirche und Rat läuft (Verbindung zum Kesseljahr- und zum Glockenweg-Strang).

**Vier Zugangswege:**
- **Schleichen** (Geschick, erleichtert durch Maras Tipp zu einem Schleichpfad und durch eine gestoppte Glocke): bei Erfolg wird das Kirchensilber unbemerkt geborgen; bei Misserfolg Entdeckung und erzwungener Übergang zu Reden oder Kampf.
- **Reden** (Charisma/Verhandlung): drei Unterwege — drohen (Erfolg vertreibt die Bande kampflos), handeln (Gold gegen Abzug und eine Nacht Vorsprung) oder lügen (behaupten, die Stadtwache folge).
- **Kampf** (Stärke): direkter, chaotischer Nahkampf zwischen Zelten und Feuer; bei Sieg flieht Kess, bei Niederlage bleibt nur Flucht mit oder ohne die Kiste.
- **Seitentor** (mit zuvor gefundenem Schlüssel): drei Vorgehensweisen — nur die Beute nehmen, die Zeltseile kappen und im Chaos handeln, oder Kess direkt von hinten stellen (der sich dabei als „Schwätzer“ erweist, der um sein Leben bittet und darauf hinweist, dass seine Tötung dem Dorf nichts zurückgibt).

**Nachspiel:** Das Feuer brennt noch, die Kiste ist leichter als erwartet. Im letzten Zelt finden sich keine Schätze, nur feuchte Decken und abgenutzte Stiefel — die Banditen selbst leben kaum besser als ihre Opfer.

**Verbindung zum Dorf:** Was Holm als reines „Banditenproblem“ präsentiert, entpuppt sich als weiterer Ausläufer desselben Geldflusses, der schon bei Rennik (Mühle) und beim Rat (Kesseljahr) sichtbar wurde — keine externe Bedrohung, sondern ein Symptom desselben dorfinternen Systems aus Schulden, Schweigegeld und kirchlicher Deckung.

---

## 8. Ende (Hauptfluss)

Reiner Abschluss-Knoten ohne eigene neue Handlung — sammelt und spiegelt die Konsequenzen aus allen vorherigen Entscheidungen (Brunnen-, Mühle-, Kesseljahr- und Lager-Lösungswege) im Rückblick auf das Dorf.

---

## Das übergreifende Muster

Jede der fünf inhaltlichen Quests (Brunnen, Mühle, Kesseljahr, Wald, Lager) folgt derselben Grundstruktur: eine Notlage, die zunächst wie Naturzufall oder externe Bedrohung wirkt (trockenes Jahr, niedriger Wasserstand, Banditen), entpuppt sich bei genauerem Hinsehen als Folge einer privaten Schuld oder einer bewussten Vertuschung durch jemanden mit Macht im Dorf — Dennek, Rennik, der Rat um Vahl, und letztlich die Kirche selbst über das wiederkehrende Siegel-Motiv. Das Kesseljahr liefert dazu die historische Erklärung: Das Dorf hat bereits einmal erlebt, was geschieht, wenn jemand zu genau nachfragt — Ilse Brandtner ist dafür der stumme Beweis. Diese Erfahrung erklärt, warum Lindendorf in jeder einzelnen Quest zunächst schweigt, ausweicht und wegsieht, bevor es — je nach Entscheidung des Helden — vielleicht doch zu reden beginnt.
