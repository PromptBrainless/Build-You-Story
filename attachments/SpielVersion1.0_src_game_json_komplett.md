# SpielVersion1.0 — src/game/json vollständig

Quelle: https://github.com/PromptBrainless/SpielVersion1.0/tree/main/src/game/json
Anzahl Dateien: 41

## Inhaltsverzeichnis

1. `ankunft.ts`
2. `baum.ts`
3. `quests/ankunft.json`
4. `quests/ankunft/fremder.json`
5. `quests/ankunft/tal.json`
6. `quests/ankunft/weg.json`
7. `quests/brunnen.json`
8. `quests/brunnen/dennek.json`
9. `quests/brunnen/ende.json`
10. `quests/brunnen/kern.json`
11. `quests/brunnen/platz.json`
12. `quests/brunnen/schacht.json`
13. `quests/brunnen/zisterne.json`
14. `quests/dorf.json`
15. `quests/dorf/handwerk.json`
16. `quests/dorf/platz.json`
17. `quests/dorf/rathaus.json`
18. `quests/dorf/taverne.json`
19. `quests/ende.json`
20. `quests/ende/ende.json`
21. `quests/gasse.json`
22. `quests/gasse/gewoelbe.json`
23. `quests/gasse/grete.json`
24. `quests/gasse/kirche.json`
25. `quests/gasse/ort.json`
26. `quests/gasse/schluss.json`
27. `quests/lager.json`
28. `quests/lager/hub.json`
29. `quests/lager/kampf.json`
30. `quests/lager/reden.json`
31. `quests/lager/schleich.json`
32. `quests/lager/tor.json`
33. `quests/muehle.json`
34. `quests/muehle/ende.json`
35. `quests/muehle/kammer.json`
36. `quests/muehle/mahlwerk.json`
37. `quests/muehle/ufer.json`
38. `quests/wald.json`
39. `quests/wald/glockenweg.json`
40. `quests/wald/wald.json`
41. `schema.ts`

---

## Datei: `ankunft.ts`

```ts
import { INTRO_ARTIFACT_CONTENT, INTRO_WEG_CONTENT } from "../content";
import { karte, type SzeneJson, type TeilJson } from "./schema";

export const INTRO_TAL = karte("intro-tal", "Das Tal", "forest", [
  "Der Wald steht dicht an den Hängen. Zwischen den Stämmen hängen Fetzen von Nebel.",
  "Weiter unten siehst du Rauch, der senkrecht steigt. Kein Wind. Kein gutes Zeichen, wenn Rauch so gerade steht.",
  "Jemand hat die Felder abgeerntet. Jemand anderes hat vergessen, die Zäune zu reparieren.",
  "Am Waldrand liegen Bündel aus nassem Reisig, sorgfältig aufgeschichtet und doch unberührt. Daneben steckt ein Kinderschuh im Schlamm.",
  "Kein Vogel ruft. Ein Ast bricht, weit oberhalb des Weges, und danach wartet das Tal wieder auf ein Geräusch von dir.",
  "Du verstehst noch nicht, was hier geschehen ist. Aber du erkennst die Spur einer Gegend, in der Menschen gelernt haben, ihre Fragen leise zu stellen.",
]);

export const INTRO_HANG = karte("intro-hang", "Am Hang", "chapel", [
  "Oberhalb des Dorfes schneidet ein alter Weg den Hang. Dort steht eine Kapelle, deren Dach dunkler ist als der Himmel.",
  "Eine kleine Glocke bewegt sich einmal über dem Geröll.",
  "Du kennst den Weg noch nicht. Du merkst dir nur den Ton.",
  "Unterhalb der Kapelle klafft ein trockener Graben im Hang. Früher muss dort Wasser gelaufen sein. Jetzt liegen darin Knochen von Tieren, ausgebleicht und ordentlich nebeneinander.",
  "Am Türsturz der Kapelle hängt ein Streifen rotes Wachs. Er ist gebrochen, aber nicht alt genug, um von selbst gebrochen zu sein.",
  "Die Glocke schweigt wieder. Trotzdem hast du das Gefühl, dass etwas im Tal nun weiß, dass du angekommen bist.",
]);

export const INTRO_LINDENDORF = karte("intro-lindendorf", "Lindendorf", "village", [
  "Häuser drücken sich aneinander, als könnten sie so wärmer bleiben.",
  "Am Brunnen stehen Frauen mit verschränkten Armen. In der Taverne löscht jemand eine Lampe, obwohl es noch nicht ganz dunkel ist.",
  "Das Rathaus hat eine Tür, die zu oft geflickt wurde. Über dem Türsturz klebt altes rotes Wachs.",
  "Ein Gerber zieht eine Plane über seine Ware. Die Plane ist zu klein. Ein Teil des Leders bleibt im Regen liegen, und niemand macht sich die Mühe, es zu retten.",
  "Aus einem offenen Fenster dringt das Husten eines alten Mannes. Eine Stimme zählt dahinter Münzen. Sie kommt immer nur bis vier.",
  "Lindendorf wirkt nicht verlassen. Es wirkt schlimmer: bewohnt von Menschen, die sich daran gewöhnt haben, dass niemand kommt.",
]);

export const INTRO_ANKUNFT = karte("intro-ankunft", "Ankunft", "village", [
  "Du bleibst am Rand des Platzes stehen. Niemand fragt, wer du bist.",
  "Das ist zunächst höflich. Dann merkst du, dass es Vorsicht ist.",
  "Du könntest weitergehen. Aber der Weg nach Osten führt am Steinbruch vorbei, und aus dem Steinbruch steigt Rauch.",
  "In Lindendorf wartet niemand auf einen Helden. Trotzdem beginnt hier dein Weg.",
  "Hinter dir schließt sich das Tal wie ein nasser Kragen. Vor dir liegen Türen, hinter denen jeder etwas verloren hat und nicht jeder bereit ist, es beim Namen zu nennen.",
  "Du spürst die Blicke erst, als sie aufhören. Die Leute hier sehen Fremde nicht lange an. Sie wissen, dass man von Gesichtern allein nicht satt wird.",
  "Am Brunnen schlägt ein Tropfen auf Stein. Dann noch einer. So beginnt in diesem Dorf vieles: nicht mit einem Ruf, sondern mit etwas, das nicht aufhört.",
]);

const weg: SzeneJson = {
  id: INTRO_WEG_CONTENT.id,
  title: INTRO_WEG_CONTENT.title,
  art: INTRO_WEG_CONTENT.art,
  portrait: null,
  lines: INTRO_WEG_CONTENT.lines,
  choices: INTRO_WEG_CONTENT.choices,
};

const fremder: SzeneJson = {
  id: INTRO_ARTIFACT_CONTENT.id,
  title: INTRO_ARTIFACT_CONTENT.title,
  art: INTRO_ARTIFACT_CONTENT.art,
  portrait: null,
  lines: INTRO_ARTIFACT_CONTENT.lines,
  choices: INTRO_ARTIFACT_CONTENT.choices.map((item) => item.label),
  successLines: INTRO_ARTIFACT_CONTENT.successLines,
  failureLines: INTRO_ARTIFACT_CONTENT.failureLines,
  passLines: INTRO_ARTIFACT_CONTENT.passLines,
};

function teil(id: string, titel: string, szenen: SzeneJson[]): TeilJson {
  return { id, titel, quest: "ankunft", datei: `ankunft/${id}.json`, szenen };
}

export const ANKUNFT_TEILE: TeilJson[] = [
  teil("weg", "Der Weg", [weg]),
  teil("fremder", "Der Fremde", [fremder]),
  teil("tal", "Tal und Dorf", [INTRO_TAL, INTRO_HANG, INTRO_LINDENDORF, INTRO_ANKUNFT]),
];
```

---

## Datei: `baum.ts`

```ts
import { LAGER_CONTENT, LAGER_WEGE } from "../lager-content";
import { ANKUNFT_TEILE } from "./ankunft";
import { karte, QuestSchema, TeilSchema, type QuestJson, type SzeneJson, type TeilJson } from "./schema";

function teil(quest: string, id: string, titel: string, szenen: SzeneJson[]): TeilJson {
  return TeilSchema.parse({ id, titel, quest, datei: `${quest}/${id}.json`, szenen });
}

function quest(id: string, titel: string, reihe: string, teile: TeilJson[]): QuestJson {
  return QuestSchema.parse({ id, titel, reihe, datei: `${id}.json`, teile });
}

const lagerHub: SzeneJson = {
  id: "lager-hub",
  title: LAGER_CONTENT.title,
  art: LAGER_CONTENT.art,
  portrait: "kess",
  lines: LAGER_CONTENT.lines,
  choices: [...LAGER_CONTENT.choices, LAGER_CONTENT.choiceTor],
};

export const QUESTS: QuestJson[] = [
  quest("ankunft", "Ankunft", "Hauptfluss", ANKUNFT_TEILE),
  quest("dorf", "Lindendorf", "Hauptfluss", [
    teil("dorf", "platz", "Dorfplatz", [
      karte("dorf-platz", "Dorfplatz", "village", [
        "Du stehst jetzt mitten in Lindendorf. Der Platz ist klein genug, dass jedes Gespräch einen Zeugen findet.",
        "Vor dir liegen Rathaus, Taverne, Brunnen, die Mühle und der Weg zum Hang.",
        "Aus dem Osten steigt Rauch. Dort liegt der alte Steinbruch.",
      ]),
    ]),
    teil("dorf", "rathaus", "Rathaus", [karte("rathaus", "Rathaus", "townhall", [], ["Weiter"], "holm")]),
    teil("dorf", "taverne", "Taverne", [karte("zum-letzten-fass", "Zum letzten Fass", "tavern", [], ["Weiter"], "mara")]),
    teil("dorf", "handwerk", "Schmiede und Apotheke", [
      karte("schmiede-apotheke", "Schmiede und Apotheke", "village"),
      karte("beim-schmied", "Beim Schmied", "smithy", [], ["Weiter"], "smith"),
      karte("bei-witwe-kern-dorf", "Bei Witwe Kern", "apothecary", [], ["Weiter"], "kern"),
    ]),
  ]),
  quest("brunnen", "Trübes Wasser", "Versorgung", [
    teil("brunnen", "platz", "Brunnenplatz", [
      karte("brunnen-krug", "Der bittere Krug", "well", [
        "Der Wassereimer am Dorfbrunnen steht halb voll, so wie ihn die Nacht zurückgelassen hat, denn niemand hat sich heute Morgen die Mühe gemacht, ihn zu leeren und neu zu füllen, wie es sonst die erste Pflicht des Tages ist, noch vor dem Brot, noch vor dem Vieh. Das Wasser darin hat die falsche Farbe angenommen, ein trübes Graubraun, das eher an aufgewühlten Teichgrund erinnert als an das, was aus der Tiefe der Erde kommen sollte, klar und kalt und ohne Geschichte.",
        "Vor der Apotheke hustet ein Kind, ein trockenes, hartes Husten, das sich anhört, als sitze ihm etwas Falsches in der Brust fest. Die Mutter hält es fester an sich, fester, als das bloße Husten es eigentlich verlangte, mit jener Art von Griff, die weniger dem Kind gilt als der eigenen Angst, die man damit niederhalten will.",
        "Am Brunnenrand steht Ratsherr Dennek und rührt mit einem Stock im Eimer, langsam, im Kreis, immer wieder, als könnte man ein vergiftetes Wasser durch bloßes Rühren wieder klären, so wie man einen Brei glattstreicht, dem nichts mehr fehlt als ein wenig Geduld. Er sieht dabei nicht auf, weder zum Kind noch zur Mutter noch zu irgendwem, der vorbeigeht — als hoffe er, dass die Bewegung seiner Hand genüge, um auch die Fragen im Kreis zu halten, die man ihm sonst stellen würde.",
      ]),
      karte(
        "brunnen-hub",
        "Trübes Wasser",
        "well",
        [
          "Das Wasser im Eimer bleibt trüb bis auf den Grund, gleich wie oft man danach sieht, und es schmeckt nach Eisen, sobald der Wind vom Wald herüberzieht, als trüge er selbst einen Rest der Wahrheit mit sich, die man ihm sonst nirgendwo abringen kann.",
        ],
        [
          "Mit Witwe Kern über das Wasser sprechen",
          "Mit Ratsherr Dennek sprechen",
          "Den Brunnen selbst untersuchen",
          "Den Graben am Brunnenrand verfolgen",
          "Zurück zum Dorfplatz",
        ],
      ),
    ]),
    teil("brunnen", "kern", "Witwe Kern", [karte("bei-witwe-kern", "Bei Witwe Kern", "apothecary", [], ["Weiter"], "kern")]),
    teil("brunnen", "dennek", "Ratsherr Dennek", [karte("ratsherr-dennek", "Ratsherr Dennek", "well")]),
    teil("brunnen", "schacht", "Schacht und Graben", [
      karte("brunnenschacht", "Brunnenschacht", "well"),
      karte("ablaufgraben", "Ablaufgraben", "ditch"),
    ]),
    teil("brunnen", "zisterne", "Grovins Zisterne", [
      karte("an-der-zisterne", "An der Zisterne", "well"),
      karte("grovins-zisterne", "Grovins Zisterne", "well", [], ["Weiter"], "grovin"),
    ]),
    teil("brunnen", "ende", "Ausgänge", [
      karte("zwei-brunnen-ein-dorf", "Zwei Brunnen, ein Dorf", "well", [], ["Weiter"], "kern"),
      karte("wasser-mit-einem-riss", "Wasser mit einem Riss", "well"),
      karte("klares-wasser", "Klares Wasser", "well", [], ["Weiter"], "kern"),
    ]),
  ]),
  quest("muehle", "Die stumme Mühle", "Versorgung", [
    teil("muehle", "mahlwerk", "Mahlwerk", [
      karte("muehle-stumm", "Die stumme Mühle", "mill", [
        "Kein Mehlstaub in der Luft, obwohl das Rad sich dreht.",
        "Vor der Tür lehnt ein leerer Karren, dessen Deichsel schon Moos angesetzt hat.",
        "Bertok steht im Eingang, bevor du klopfen kannst. Seine Hände sind mehlweiß, obwohl seit Tagen nichts gemahlen wurde.",
        "Hinter ihm bewegt sich etwas zwischen den Säcken — zu schnell für eine Ratte.",
      ]),
      karte(
        "muehle-hub",
        "Mühle",
        "mill",
        ["Das Rad schlägt gegen das Wasser und mahlt nichts."],
        [
          "Mit Bertok am Mahlwerk sprechen",
          "Zu Lene in die Kornkammer gehen",
          "Das Wasserrad und den Uferweg ansehen",
          "Die Mühle verlassen",
        ],
        "miller",
      ),
      karte("bertok-am-mahlwerk", "Bertok am Mahlwerk", "mill", [], ["Weiter"], "miller"),
    ]),
    teil("muehle", "kammer", "Kornkammer", [
      karte("kornkammer", "Kornkammer", "mill"),
      karte("lene-in-der-kornkammer", "Lene in der Kornkammer", "mill"),
      karte("hinter-der-nische", "Hinter der Nische", "mill"),
    ]),
    teil("muehle", "ufer", "Ufer und Kontor", [
      karte("wasserrad", "Wasserrad", "mill"),
      karte("uferpfad", "Uferpfad", "ditch"),
      karte("morscher-steg", "Morscher Steg", "ditch"),
      karte("lagerhaus-am-fluss", "Lagerhaus am Fluss", "mill"),
      karte("renniks-kontor", "Renniks Kontor", "mill"),
    ]),
    teil("muehle", "ende", "Ausgänge", [
      karte("sicheres-mehl-leere-blicke", "Sicheres Mehl, leere Blicke", "mill", [], ["Weiter"], "holm"),
      karte("mehl-mit-rauen-haenden", "Mehl mit rauen Händen", "mill"),
      karte("stilles-mehl", "Stilles Mehl", "mill", [], ["Weiter"], "miller"),
    ]),
  ]),
  quest("gasse", "Das Kesseljahr", "Erinnerung", [
    teil("gasse", "kirche", "Kirche und Fenn", [
      karte("gasse-kirche", "Vor der Kirche", "chapel"),
      karte(
        "gasse-hub",
        "Die leere Gasse",
        "gate",
        [],
        ["Bei Fenn an der Kirchmauer bleiben", "Ratsherr Vahl im Rathaus aufsuchen", "Die Gasse hinter der Gerberei ansehen", "Zurück zum Dorfplatz"],
      ),
      karte("fenn", "Fenn", "chapel"),
      karte("fenn-an-der-kirchmauer", "Fenn an der Kirchmauer", "chapel"),
      karte("vahls-stube", "Vahls Stube", "townhall"),
      karte("ratsherr-vahl", "Ratsherr Vahl", "townhall"),
    ]),
    teil("gasse", "ort", "Gerbereigasse", [karte("gerbereigasse", "Gerbereigasse", "gate")]),
    teil("gasse", "grete", "Grete", [
      karte("gretes-kate", "Gretes Kate", "village"),
      karte("grete", "Grete", "village"),
    ]),
    teil("gasse", "gewoelbe", "Gewölbe", [
      karte("kirchengewoelbe", "Kirchengewölbe", "chapel"),
      karte("unter-der-kirche", "Unter der Kirche", "chapel"),
      karte("im-gewoelbe", "Im Gewölbe", "chapel"),
      karte("hinter-dem-stein", "Hinter dem Stein", "chapel"),
    ]),
    teil("gasse", "schluss", "Ausgänge", [
      karte("vahls-stube-abend", "Vahls Stube, Abend", "townhall"),
      karte("was-die-liste-wiegt", "Was die Liste wiegt", "townhall"),
      karte("ein-zweites-schweigen", "Ein zweites Schweigen", "gate"),
      karte("was-ausgegraben-bleibt", "Was ausgegraben bleibt", "chapel"),
      karte("ein-name-unter-vielen", "Ein Name unter vielen", "village"),
      karte("stille-rechnung", "Stille Rechnung", "village"),
    ]),
  ]),
  quest("wald", "Hang und Wald", "Hauptfluss", [
    teil("wald", "glockenweg", "Alter Glockenweg", [
      karte("glockenweg", "Alter Glockenweg", "chapel"),
      karte("sanna-die-botin", "Sanna, die Botin", "chapel", [], ["Weiter"], "sanna"),
      karte("jorren-im-geroell", "Jorren im Geröll", "chapel"),
      karte("die-kapellenglocke", "Die Kapellenglocke", "chapel"),
    ]),
    teil("wald", "wald", "Wald", [karte("wald", "Wald", "forest")]),
  ]),
  quest("lager", "Banditenlager", "Hauptfluss", [
    teil("lager", "hub", "Steinbruch", [lagerHub]),
    teil("lager", "schleich", "Schleichen", [
      karte("lager-schleich", "Schleichen", "sneak", LAGER_WEGE.schleich.erfolg, [...LAGER_WEGE.schleich.choicesWeiter]),
    ]),
    teil("lager", "reden", "Reden", [
      karte("lager-reden", LAGER_WEGE.reden.title, "camp", LAGER_WEGE.reden.lines, [...LAGER_WEGE.reden.choices], "kess"),
    ]),
    teil("lager", "kampf", "Kampf", [
      karte("lager-kampf", LAGER_WEGE.kampf.title, "combat", LAGER_WEGE.kampf.auf),
    ]),
    teil("lager", "tor", "Seitentor", [
      karte("lager-tor", LAGER_WEGE.tor.title, "gate", LAGER_WEGE.tor.lines, [...LAGER_WEGE.tor.choices]),
    ]),
  ]),
  quest("ende", "Ende", "Hauptfluss", [
    teil("ende", "ende", "Ende", [karte("ende", "Ende", "return")]),
  ]),
];

const SZENE_INDEX = new Map<string, { szene: SzeneJson; teil: TeilJson; quest: QuestJson }>();
const TITEL_INDEX = new Map<string, { szene: SzeneJson; teil: TeilJson; quest: QuestJson }>();

for (const questItem of QUESTS) {
  for (const teilItem of questItem.teile) {
    for (const szene of teilItem.szenen) {
      SZENE_INDEX.set(szene.id, { szene, teil: teilItem, quest: questItem });
      TITEL_INDEX.set(szene.title, { szene, teil: teilItem, quest: questItem });
    }
  }
}

export function fundFuerSzene(id?: string, titel?: string) {
  if (id && SZENE_INDEX.has(id)) return SZENE_INDEX.get(id)!;
  if (titel && TITEL_INDEX.has(titel)) return TITEL_INDEX.get(titel)!;
  return null;
}

export function jsonDerSzene(id?: string, titel?: string) {
  const fund = fundFuerSzene(id, titel);
  return fund ? JSON.stringify(fund.szene, null, 2) : null;
}

export function jsonDesTeils(id?: string, titel?: string) {
  const fund = fundFuerSzene(id, titel);
  return fund ? JSON.stringify(fund.teil, null, 2) : null;
}

export function jsonDerQuest(id?: string, titel?: string) {
  const fund = fundFuerSzene(id, titel);
  return fund ? JSON.stringify(fund.quest, null, 2) : null;
}

export function exportiereAlleQuests() {
  return QUESTS.map((item) => ({
    datei: item.datei,
    inhalt: JSON.stringify(item, null, 2),
    teile: item.teile.map((teilItem) => ({ datei: teilItem.datei, inhalt: JSON.stringify(teilItem, null, 2) })),
  }));
}
```

---

## Datei: `quests/ankunft.json`

```json
{
  "id": "ankunft",
  "titel": "Ankunft",
  "reihe": "Hauptfluss",
  "datei": "ankunft.json",
  "teile": [
    {
      "id": "weg",
      "titel": "Der Weg",
      "quest": "ankunft",
      "datei": "ankunft/weg.json",
      "szenen": [
        {
          "id": "intro-weg",
          "title": "Der Weg nach Lindendorf",
          "art": "road",
          "portrait": null,
          "lines": [
            "Der Weg ins Tal ist kaum breit genug für zwei Wagen. Wo sich Räder begegnen, muss einer zurücksetzen. Meistens der Schwächere.",
            "Du gehst allein.",
            "Der Regen hat in der Nacht aufgehört, aber er hängt noch immer in der Luft. Jeder Schritt drückt Wasser aus dem Leder deiner Stiefel. Kälte kriecht durch die Nähte und setzt sich in den Knochen fest.",
            "Hinter dir liegt nichts, das auf dich wartet.",
            "Vor dir liegt Lindendorf.",
            "Auf der Karte war es kaum mehr als ein Fleck Tinte am Rand des Tals. Ein Name, zwischen Hügel und Wald gequetscht, als hätte selbst der Kartenschreiber gehofft, niemand müsse jemals dorthin.",
            "In der Dämmerung wirkt es größer.",
            "Oder näher.",
            "Unter deinen Sohlen lockern sich die Steine des Weges. Wasser läuft zwischen ihnen hindurch. Schwarzes Gras wächst aus den Fugen, niedergetreten von Rädern und Hufen. Die Spuren sind alt. Zu alt für die Jahreszeit.",
            "Seit Tagen scheint niemand diesen Weg benutzt zu haben.",
            "Kein Händler.",
            "Kein Bauer.",
            "Nicht einmal ein Bettler.",
            "Nur der Wind zieht durch das Tal. Er streicht über die Hänge und bringt den Geruch von nassem Holz mit sich. Darunter liegt etwas anderes. Schwächer. Süßlich.",
            "Der Geruch von Verwesung reist weit, wenn die Luft feucht genug ist.",
            "Du bleibst nicht stehen.",
            "Umkehren ist keine Richtung. Es ist nur die Entscheidung, dieselbe Strecke noch einmal zu gehen.",
            "Also setzt du einen Fuß vor den anderen.",
            "Manchmal besteht der einzige Unterschied zwischen Mut und Gewohnheit darin, dass niemand mehr weiß, warum er überhaupt weiterläuft."
          ],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "fremder",
      "titel": "Der Fremde",
      "quest": "ankunft",
      "datei": "ankunft/fremder.json",
      "szenen": [
        {
          "id": "intro-fremder-am-weg",
          "title": "Der Fremde am Weg",
          "art": "stranger",
          "portrait": null,
          "lines": [
            "Etwa fünfzig Schritt voraus taucht eine Gestalt aus dem Regen auf.",
            "Ein Mann. Mager genug, dass der Wind an ihm zerren kann.",
            "Sein Gang ist ungleichmäßig. Nicht das Hinken eines Verletzten. Eher das Stolpern eines Menschen, der zu lange wach geblieben ist oder zu viel Blut verloren hat. Jeder Schritt wirkt, als müsse er sich erst daran erinnern, wie Gehen funktioniert.",
            "Nasses Haar klebt an seiner Stirn. Der linke Ärmel seines Mantels ist dunkel verfärbt. Das Blut darauf ist bereits getrocknet.",
            "Als er kurz ins Straucheln gerät, schlägt der Mantel auseinander.",
            "Etwas Silbernes blitzt darunter hervor.",
            "Ein Artefakt.",
            "Nicht groß. Vielleicht handtellergroß. Doch selbst auf diese Entfernung erkennst du das Zeichen: ein offenes Auge über drei eingeritzten Linien.",
            "\"Kirchensilber\"",
            "Du hast das Symbol schon einmal gesehen.",
            "Am Nordpass. Vor Jahren. Es war in einen Grenzstein geschlagen worden, halb verborgen unter Eis und Schnee. Die Händler hatten damals darüber gespuckt und sich bekreuzigt. Niemand erklärte warum.",
            "Heute gibt es keinen Schnee.",
            "Nur Regen, Schlamm und einen Fremden, der etwas bei sich trägt, das kaum ihm gehören dürfte.",
            "Der Mann hat dich noch nicht bemerkt.",
            "Hinter ihm verschluckt Nebel den Weg.",
            "Vor ihm liegt Lindendorf.",
            "Zwischen euch stehen nur einige Schritte, schlechtes Wetter und die Frage, wem das Blut auf seinem Ärmel gehört."
          ],
          "choices": [
            "(Stärke – mittel) Der Mann wirkt geschwächt. Falls er Widerstand leistet, dürfte der Kampf kurz sein. Dennoch tragen auch Sterbende Messer.",
            "(Geschick – schwer) Der Regen dämpft Geräusche. Der Nebel verbirgt Bewegungen. Doch Kirchenartefakte werden selten achtlos getragen.",
            "(Charisma – mittel) Vielleicht ist er verängstigt. Vielleicht verletzt. Vielleicht sucht er Hilfe mehr als Streit.",
            "Vorübergehen - Manche Dinge bringen Unglück, lange bevor man sie berührt."
          ],
          "successLines": [
            "Du packst den Mann am Mantel und entreißt ihm das Artefakt. Der Stoff reißt mit einem trockenen Laut. Er stolpert zurück, greift nach dem leeren Riemen und verschwindet schließlich im Nebel.",
            "Deine Finger lösen den Riemen, ohne dass der Mann den Verlust bemerkt. Erst im Nebel tastet er vergeblich nach dem Silber. Sein Fluchen wird leiser, bis der Regen es nimmt.",
            "Du sprichst ruhig auf ihn ein. Der Mann senkt den Blick und legt dir das Artefakt in die Hand. Seine Finger bleiben einen Augenblick länger darauf liegen, als würde er sich von etwas verabschieden."
          ],
          "failureLines": [
            "Der Mann bemerkt deine Absicht. Für einen Augenblick wirkt er schwach — dann ist er schneller, als du erwartet hast. Etwas Hartes schlägt gegen deine Hand, und der Schmerz bleibt, obwohl der Mann schon zurückweicht.",
            "Er verschwindet mit dem silbernen Artefakt im Nebel. Deine erste Probe ist gescheitert, aber der Weg bleibt offen. Nur das Zeichen bleibt dir im Kopf, heller als es im grauen Licht gewesen sein dürfte."
          ],
          "passLines": [
            "Du lässt den Mann passieren. Das Silber verschwindet unter seinem Mantel, bevor der Nebel ihn schluckt. Für einen Moment dreht er den Kopf, als hätte er deine Entscheidung trotzdem gehört.",
            "Du hast nichts gewonnen. Aber du hast dich entschieden, nicht jede fremde Not zu deinem Vorteil zu machen. Später wirst du nicht wissen, ob das ein Maßstab oder nur Bequemlichkeit war."
          ]
        }
      ]
    },
    {
      "id": "tal",
      "titel": "Tal und Dorf",
      "quest": "ankunft",
      "datei": "ankunft/tal.json",
      "szenen": [
        {
          "id": "intro-tal",
          "title": "Das Tal",
          "art": "forest",
          "portrait": null,
          "lines": [
            "Der Wald steht dicht an den Hängen. Zwischen den Stämmen hängen Fetzen von Nebel.",
            "Weiter unten siehst du Rauch, der senkrecht steigt. Kein Wind. Kein gutes Zeichen, wenn Rauch so gerade steht.",
            "Jemand hat die Felder abgeerntet. Jemand anderes hat vergessen, die Zäune zu reparieren.",
            "Am Waldrand liegen Bündel aus nassem Reisig, sorgfältig aufgeschichtet und doch unberührt. Daneben steckt ein Kinderschuh im Schlamm.",
            "Kein Vogel ruft. Ein Ast bricht, weit oberhalb des Weges, und danach wartet das Tal wieder auf ein Geräusch von dir.",
            "Du verstehst noch nicht, was hier geschehen ist. Aber du erkennst die Spur einer Gegend, in der Menschen gelernt haben, ihre Fragen leise zu stellen."
          ],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "intro-hang",
          "title": "Am Hang",
          "art": "chapel",
          "portrait": null,
          "lines": [
            "Oberhalb des Dorfes schneidet ein alter Weg den Hang. Dort steht eine Kapelle, deren Dach dunkler ist als der Himmel.",
            "Eine kleine Glocke bewegt sich einmal über dem Geröll.",
            "Du kennst den Weg noch nicht. Du merkst dir nur den Ton.",
            "Unterhalb der Kapelle klafft ein trockener Graben im Hang. Früher muss dort Wasser gelaufen sein. Jetzt liegen darin Knochen von Tieren, ausgebleicht und ordentlich nebeneinander.",
            "Am Türsturz der Kapelle hängt ein Streifen rotes Wachs. Er ist gebrochen, aber nicht alt genug, um von selbst gebrochen zu sein.",
            "Die Glocke schweigt wieder. Trotzdem hast du das Gefühl, dass etwas im Tal nun weiß, dass du angekommen bist."
          ],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "intro-lindendorf",
          "title": "Lindendorf",
          "art": "village",
          "portrait": null,
          "lines": [
            "Häuser drücken sich aneinander, als könnten sie so wärmer bleiben.",
            "Am Brunnen stehen Frauen mit verschränkten Armen. In der Taverne löscht jemand eine Lampe, obwohl es noch nicht ganz dunkel ist.",
            "Das Rathaus hat eine Tür, die zu oft geflickt wurde. Über dem Türsturz klebt altes rotes Wachs.",
            "Ein Gerber zieht eine Plane über seine Ware. Die Plane ist zu klein. Ein Teil des Leders bleibt im Regen liegen, und niemand macht sich die Mühe, es zu retten.",
            "Aus einem offenen Fenster dringt das Husten eines alten Mannes. Eine Stimme zählt dahinter Münzen. Sie kommt immer nur bis vier.",
            "Lindendorf wirkt nicht verlassen. Es wirkt schlimmer: bewohnt von Menschen, die sich daran gewöhnt haben, dass niemand kommt."
          ],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "intro-ankunft",
          "title": "Ankunft",
          "art": "village",
          "portrait": null,
          "lines": [
            "Du bleibst am Rand des Platzes stehen. Niemand fragt, wer du bist.",
            "Das ist zunächst höflich. Dann merkst du, dass es Vorsicht ist.",
            "Du könntest weitergehen. Aber der Weg nach Osten führt am Steinbruch vorbei, und aus dem Steinbruch steigt Rauch.",
            "In Lindendorf wartet niemand auf einen Helden. Trotzdem beginnt hier dein Weg.",
            "Hinter dir schließt sich das Tal wie ein nasser Kragen. Vor dir liegen Türen, hinter denen jeder etwas verloren hat und nicht jeder bereit ist, es beim Namen zu nennen.",
            "Du spürst die Blicke erst, als sie aufhören. Die Leute hier sehen Fremde nicht lange an. Sie wissen, dass man von Gesichtern allein nicht satt wird.",
            "Am Brunnen schlägt ein Tropfen auf Stein. Dann noch einer. So beginnt in diesem Dorf vieles: nicht mit einem Ruf, sondern mit etwas, das nicht aufhört."
          ],
          "choices": [
            "Weiter"
          ]
        }
      ]
    }
  ]
}
```

---

## Datei: `quests/ankunft/fremder.json`

```json
{
  "id": "fremder",
  "titel": "Der Fremde",
  "quest": "ankunft",
  "datei": "ankunft/fremder.json",
  "szenen": [
    {
      "id": "intro-fremder-am-weg",
      "title": "Der Fremde am Weg",
      "art": "stranger",
      "portrait": null,
      "lines": [
        "Etwa fünfzig Schritt voraus taucht eine Gestalt aus dem Regen auf.",
        "Ein Mann. Mager genug, dass der Wind an ihm zerren kann.",
        "Sein Gang ist ungleichmäßig. Nicht das Hinken eines Verletzten. Eher das Stolpern eines Menschen, der zu lange wach geblieben ist oder zu viel Blut verloren hat. Jeder Schritt wirkt, als müsse er sich erst daran erinnern, wie Gehen funktioniert.",
        "Nasses Haar klebt an seiner Stirn. Der linke Ärmel seines Mantels ist dunkel verfärbt. Das Blut darauf ist bereits getrocknet.",
        "Als er kurz ins Straucheln gerät, schlägt der Mantel auseinander.",
        "Etwas Silbernes blitzt darunter hervor.",
        "Ein Artefakt.",
        "Nicht groß. Vielleicht handtellergroß. Doch selbst auf diese Entfernung erkennst du das Zeichen: ein offenes Auge über drei eingeritzten Linien.",
        "\"Kirchensilber\"",
        "Du hast das Symbol schon einmal gesehen.",
        "Am Nordpass. Vor Jahren. Es war in einen Grenzstein geschlagen worden, halb verborgen unter Eis und Schnee. Die Händler hatten damals darüber gespuckt und sich bekreuzigt. Niemand erklärte warum.",
        "Heute gibt es keinen Schnee.",
        "Nur Regen, Schlamm und einen Fremden, der etwas bei sich trägt, das kaum ihm gehören dürfte.",
        "Der Mann hat dich noch nicht bemerkt.",
        "Hinter ihm verschluckt Nebel den Weg.",
        "Vor ihm liegt Lindendorf.",
        "Zwischen euch stehen nur einige Schritte, schlechtes Wetter und die Frage, wem das Blut auf seinem Ärmel gehört."
      ],
      "choices": [
        "(Stärke – mittel) Der Mann wirkt geschwächt. Falls er Widerstand leistet, dürfte der Kampf kurz sein. Dennoch tragen auch Sterbende Messer.",
        "(Geschick – schwer) Der Regen dämpft Geräusche. Der Nebel verbirgt Bewegungen. Doch Kirchenartefakte werden selten achtlos getragen.",
        "(Charisma – mittel) Vielleicht ist er verängstigt. Vielleicht verletzt. Vielleicht sucht er Hilfe mehr als Streit.",
        "Vorübergehen - Manche Dinge bringen Unglück, lange bevor man sie berührt."
      ],
      "successLines": [
        "Du packst den Mann am Mantel und entreißt ihm das Artefakt. Der Stoff reißt mit einem trockenen Laut. Er stolpert zurück, greift nach dem leeren Riemen und verschwindet schließlich im Nebel.",
        "Deine Finger lösen den Riemen, ohne dass der Mann den Verlust bemerkt. Erst im Nebel tastet er vergeblich nach dem Silber. Sein Fluchen wird leiser, bis der Regen es nimmt.",
        "Du sprichst ruhig auf ihn ein. Der Mann senkt den Blick und legt dir das Artefakt in die Hand. Seine Finger bleiben einen Augenblick länger darauf liegen, als würde er sich von etwas verabschieden."
      ],
      "failureLines": [
        "Der Mann bemerkt deine Absicht. Für einen Augenblick wirkt er schwach — dann ist er schneller, als du erwartet hast. Etwas Hartes schlägt gegen deine Hand, und der Schmerz bleibt, obwohl der Mann schon zurückweicht.",
        "Er verschwindet mit dem silbernen Artefakt im Nebel. Deine erste Probe ist gescheitert, aber der Weg bleibt offen. Nur das Zeichen bleibt dir im Kopf, heller als es im grauen Licht gewesen sein dürfte."
      ],
      "passLines": [
        "Du lässt den Mann passieren. Das Silber verschwindet unter seinem Mantel, bevor der Nebel ihn schluckt. Für einen Moment dreht er den Kopf, als hätte er deine Entscheidung trotzdem gehört.",
        "Du hast nichts gewonnen. Aber du hast dich entschieden, nicht jede fremde Not zu deinem Vorteil zu machen. Später wirst du nicht wissen, ob das ein Maßstab oder nur Bequemlichkeit war."
      ]
    }
  ]
}
```

---

## Datei: `quests/ankunft/tal.json`

```json
{
  "id": "tal",
  "titel": "Tal und Dorf",
  "quest": "ankunft",
  "datei": "ankunft/tal.json",
  "szenen": [
    {
      "id": "intro-tal",
      "title": "Das Tal",
      "art": "forest",
      "portrait": null,
      "lines": [
        "Der Wald steht dicht an den Hängen. Zwischen den Stämmen hängen Fetzen von Nebel.",
        "Weiter unten siehst du Rauch, der senkrecht steigt. Kein Wind. Kein gutes Zeichen, wenn Rauch so gerade steht.",
        "Jemand hat die Felder abgeerntet. Jemand anderes hat vergessen, die Zäune zu reparieren.",
        "Am Waldrand liegen Bündel aus nassem Reisig, sorgfältig aufgeschichtet und doch unberührt. Daneben steckt ein Kinderschuh im Schlamm.",
        "Kein Vogel ruft. Ein Ast bricht, weit oberhalb des Weges, und danach wartet das Tal wieder auf ein Geräusch von dir.",
        "Du verstehst noch nicht, was hier geschehen ist. Aber du erkennst die Spur einer Gegend, in der Menschen gelernt haben, ihre Fragen leise zu stellen."
      ],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "intro-hang",
      "title": "Am Hang",
      "art": "chapel",
      "portrait": null,
      "lines": [
        "Oberhalb des Dorfes schneidet ein alter Weg den Hang. Dort steht eine Kapelle, deren Dach dunkler ist als der Himmel.",
        "Eine kleine Glocke bewegt sich einmal über dem Geröll.",
        "Du kennst den Weg noch nicht. Du merkst dir nur den Ton.",
        "Unterhalb der Kapelle klafft ein trockener Graben im Hang. Früher muss dort Wasser gelaufen sein. Jetzt liegen darin Knochen von Tieren, ausgebleicht und ordentlich nebeneinander.",
        "Am Türsturz der Kapelle hängt ein Streifen rotes Wachs. Er ist gebrochen, aber nicht alt genug, um von selbst gebrochen zu sein.",
        "Die Glocke schweigt wieder. Trotzdem hast du das Gefühl, dass etwas im Tal nun weiß, dass du angekommen bist."
      ],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "intro-lindendorf",
      "title": "Lindendorf",
      "art": "village",
      "portrait": null,
      "lines": [
        "Häuser drücken sich aneinander, als könnten sie so wärmer bleiben.",
        "Am Brunnen stehen Frauen mit verschränkten Armen. In der Taverne löscht jemand eine Lampe, obwohl es noch nicht ganz dunkel ist.",
        "Das Rathaus hat eine Tür, die zu oft geflickt wurde. Über dem Türsturz klebt altes rotes Wachs.",
        "Ein Gerber zieht eine Plane über seine Ware. Die Plane ist zu klein. Ein Teil des Leders bleibt im Regen liegen, und niemand macht sich die Mühe, es zu retten.",
        "Aus einem offenen Fenster dringt das Husten eines alten Mannes. Eine Stimme zählt dahinter Münzen. Sie kommt immer nur bis vier.",
        "Lindendorf wirkt nicht verlassen. Es wirkt schlimmer: bewohnt von Menschen, die sich daran gewöhnt haben, dass niemand kommt."
      ],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "intro-ankunft",
      "title": "Ankunft",
      "art": "village",
      "portrait": null,
      "lines": [
        "Du bleibst am Rand des Platzes stehen. Niemand fragt, wer du bist.",
        "Das ist zunächst höflich. Dann merkst du, dass es Vorsicht ist.",
        "Du könntest weitergehen. Aber der Weg nach Osten führt am Steinbruch vorbei, und aus dem Steinbruch steigt Rauch.",
        "In Lindendorf wartet niemand auf einen Helden. Trotzdem beginnt hier dein Weg.",
        "Hinter dir schließt sich das Tal wie ein nasser Kragen. Vor dir liegen Türen, hinter denen jeder etwas verloren hat und nicht jeder bereit ist, es beim Namen zu nennen.",
        "Du spürst die Blicke erst, als sie aufhören. Die Leute hier sehen Fremde nicht lange an. Sie wissen, dass man von Gesichtern allein nicht satt wird.",
        "Am Brunnen schlägt ein Tropfen auf Stein. Dann noch einer. So beginnt in diesem Dorf vieles: nicht mit einem Ruf, sondern mit etwas, das nicht aufhört."
      ],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/ankunft/weg.json`

```json
{
  "id": "weg",
  "titel": "Der Weg",
  "quest": "ankunft",
  "datei": "ankunft/weg.json",
  "szenen": [
    {
      "id": "intro-weg",
      "title": "Der Weg nach Lindendorf",
      "art": "road",
      "portrait": null,
      "lines": [
        "Der Weg ins Tal ist kaum breit genug für zwei Wagen. Wo sich Räder begegnen, muss einer zurücksetzen. Meistens der Schwächere.",
        "Du gehst allein.",
        "Der Regen hat in der Nacht aufgehört, aber er hängt noch immer in der Luft. Jeder Schritt drückt Wasser aus dem Leder deiner Stiefel. Kälte kriecht durch die Nähte und setzt sich in den Knochen fest.",
        "Hinter dir liegt nichts, das auf dich wartet.",
        "Vor dir liegt Lindendorf.",
        "Auf der Karte war es kaum mehr als ein Fleck Tinte am Rand des Tals. Ein Name, zwischen Hügel und Wald gequetscht, als hätte selbst der Kartenschreiber gehofft, niemand müsse jemals dorthin.",
        "In der Dämmerung wirkt es größer.",
        "Oder näher.",
        "Unter deinen Sohlen lockern sich die Steine des Weges. Wasser läuft zwischen ihnen hindurch. Schwarzes Gras wächst aus den Fugen, niedergetreten von Rädern und Hufen. Die Spuren sind alt. Zu alt für die Jahreszeit.",
        "Seit Tagen scheint niemand diesen Weg benutzt zu haben.",
        "Kein Händler.",
        "Kein Bauer.",
        "Nicht einmal ein Bettler.",
        "Nur der Wind zieht durch das Tal. Er streicht über die Hänge und bringt den Geruch von nassem Holz mit sich. Darunter liegt etwas anderes. Schwächer. Süßlich.",
        "Der Geruch von Verwesung reist weit, wenn die Luft feucht genug ist.",
        "Du bleibst nicht stehen.",
        "Umkehren ist keine Richtung. Es ist nur die Entscheidung, dieselbe Strecke noch einmal zu gehen.",
        "Also setzt du einen Fuß vor den anderen.",
        "Manchmal besteht der einzige Unterschied zwischen Mut und Gewohnheit darin, dass niemand mehr weiß, warum er überhaupt weiterläuft."
      ],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/brunnen.json`

```json
{
  "id": "brunnen",
  "titel": "Trübes Wasser",
  "reihe": "Versorgung",
  "datei": "brunnen.json",
  "teile": [
    {
      "id": "platz",
      "titel": "Brunnenplatz",
      "quest": "brunnen",
      "datei": "brunnen/platz.json",
      "szenen": [
        {
          "id": "brunnen-krug",
          "title": "Der bittere Krug",
          "art": "well",
          "portrait": null,
          "lines": [
            "Der Wassereimer am Dorfbrunnen steht halb voll, so wie ihn die Nacht zurückgelassen hat, denn niemand hat sich heute Morgen die Mühe gemacht, ihn zu leeren und neu zu füllen, wie es sonst die erste Pflicht des Tages ist, noch vor dem Brot, noch vor dem Vieh. Das Wasser darin hat die falsche Farbe angenommen, ein trübes Graubraun, das eher an aufgewühlten Teichgrund erinnert als an das, was aus der Tiefe der Erde kommen sollte, klar und kalt und ohne Geschichte.",
            "Vor der Apotheke hustet ein Kind, ein trockenes, hartes Husten, das sich anhört, als sitze ihm etwas Falsches in der Brust fest. Die Mutter hält es fester an sich, fester, als das bloße Husten es eigentlich verlangte, mit jener Art von Griff, die weniger dem Kind gilt als der eigenen Angst, die man damit niederhalten will.",
            "Am Brunnenrand steht Ratsherr Dennek und rührt mit einem Stock im Eimer, langsam, im Kreis, immer wieder, als könnte man ein vergiftetes Wasser durch bloßes Rühren wieder klären, so wie man einen Brei glattstreicht, dem nichts mehr fehlt als ein wenig Geduld. Er sieht dabei nicht auf, weder zum Kind noch zur Mutter noch zu irgendwem, der vorbeigeht — als hoffe er, dass die Bewegung seiner Hand genüge, um auch die Fragen im Kreis zu halten, die man ihm sonst stellen würde."
          ],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "brunnen-hub",
          "title": "Trübes Wasser",
          "art": "well",
          "portrait": null,
          "lines": [
            "Das Wasser im Eimer bleibt trüb bis auf den Grund, gleich wie oft man danach sieht, und es schmeckt nach Eisen, sobald der Wind vom Wald herüberzieht, als trüge er selbst einen Rest der Wahrheit mit sich, die man ihm sonst nirgendwo abringen kann."
          ],
          "choices": [
            "Mit Witwe Kern über das Wasser sprechen",
            "Mit Ratsherr Dennek sprechen",
            "Den Brunnen selbst untersuchen",
            "Den Graben am Brunnenrand verfolgen",
            "Zurück zum Dorfplatz"
          ]
        }
      ]
    },
    {
      "id": "kern",
      "titel": "Witwe Kern",
      "quest": "brunnen",
      "datei": "brunnen/kern.json",
      "szenen": [
        {
          "id": "bei-witwe-kern",
          "title": "Bei Witwe Kern",
          "art": "apothecary",
          "portrait": "kern",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "dennek",
      "titel": "Ratsherr Dennek",
      "quest": "brunnen",
      "datei": "brunnen/dennek.json",
      "szenen": [
        {
          "id": "ratsherr-dennek",
          "title": "Ratsherr Dennek",
          "art": "well",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "schacht",
      "titel": "Schacht und Graben",
      "quest": "brunnen",
      "datei": "brunnen/schacht.json",
      "szenen": [
        {
          "id": "brunnenschacht",
          "title": "Brunnenschacht",
          "art": "well",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "ablaufgraben",
          "title": "Ablaufgraben",
          "art": "ditch",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "zisterne",
      "titel": "Grovins Zisterne",
      "quest": "brunnen",
      "datei": "brunnen/zisterne.json",
      "szenen": [
        {
          "id": "an-der-zisterne",
          "title": "An der Zisterne",
          "art": "well",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "grovins-zisterne",
          "title": "Grovins Zisterne",
          "art": "well",
          "portrait": "grovin",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "ende",
      "titel": "Ausgänge",
      "quest": "brunnen",
      "datei": "brunnen/ende.json",
      "szenen": [
        {
          "id": "zwei-brunnen-ein-dorf",
          "title": "Zwei Brunnen, ein Dorf",
          "art": "well",
          "portrait": "kern",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "wasser-mit-einem-riss",
          "title": "Wasser mit einem Riss",
          "art": "well",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "klares-wasser",
          "title": "Klares Wasser",
          "art": "well",
          "portrait": "kern",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    }
  ]
}
```

---

## Datei: `quests/brunnen/dennek.json`

```json
{
  "id": "dennek",
  "titel": "Ratsherr Dennek",
  "quest": "brunnen",
  "datei": "brunnen/dennek.json",
  "szenen": [
    {
      "id": "ratsherr-dennek",
      "title": "Ratsherr Dennek",
      "art": "well",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/brunnen/ende.json`

```json
{
  "id": "ende",
  "titel": "Ausgänge",
  "quest": "brunnen",
  "datei": "brunnen/ende.json",
  "szenen": [
    {
      "id": "zwei-brunnen-ein-dorf",
      "title": "Zwei Brunnen, ein Dorf",
      "art": "well",
      "portrait": "kern",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "wasser-mit-einem-riss",
      "title": "Wasser mit einem Riss",
      "art": "well",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "klares-wasser",
      "title": "Klares Wasser",
      "art": "well",
      "portrait": "kern",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/brunnen/kern.json`

```json
{
  "id": "kern",
  "titel": "Witwe Kern",
  "quest": "brunnen",
  "datei": "brunnen/kern.json",
  "szenen": [
    {
      "id": "bei-witwe-kern",
      "title": "Bei Witwe Kern",
      "art": "apothecary",
      "portrait": "kern",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/brunnen/platz.json`

```json
{
  "id": "platz",
  "titel": "Brunnenplatz",
  "quest": "brunnen",
  "datei": "brunnen/platz.json",
  "szenen": [
    {
      "id": "brunnen-krug",
      "title": "Der bittere Krug",
      "art": "well",
      "portrait": null,
      "lines": [
        "Der Wassereimer am Dorfbrunnen steht halb voll, so wie ihn die Nacht zurückgelassen hat, denn niemand hat sich heute Morgen die Mühe gemacht, ihn zu leeren und neu zu füllen, wie es sonst die erste Pflicht des Tages ist, noch vor dem Brot, noch vor dem Vieh. Das Wasser darin hat die falsche Farbe angenommen, ein trübes Graubraun, das eher an aufgewühlten Teichgrund erinnert als an das, was aus der Tiefe der Erde kommen sollte, klar und kalt und ohne Geschichte.",
        "Vor der Apotheke hustet ein Kind, ein trockenes, hartes Husten, das sich anhört, als sitze ihm etwas Falsches in der Brust fest. Die Mutter hält es fester an sich, fester, als das bloße Husten es eigentlich verlangte, mit jener Art von Griff, die weniger dem Kind gilt als der eigenen Angst, die man damit niederhalten will.",
        "Am Brunnenrand steht Ratsherr Dennek und rührt mit einem Stock im Eimer, langsam, im Kreis, immer wieder, als könnte man ein vergiftetes Wasser durch bloßes Rühren wieder klären, so wie man einen Brei glattstreicht, dem nichts mehr fehlt als ein wenig Geduld. Er sieht dabei nicht auf, weder zum Kind noch zur Mutter noch zu irgendwem, der vorbeigeht — als hoffe er, dass die Bewegung seiner Hand genüge, um auch die Fragen im Kreis zu halten, die man ihm sonst stellen würde."
      ],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "brunnen-hub",
      "title": "Trübes Wasser",
      "art": "well",
      "portrait": null,
      "lines": [
        "Das Wasser im Eimer bleibt trüb bis auf den Grund, gleich wie oft man danach sieht, und es schmeckt nach Eisen, sobald der Wind vom Wald herüberzieht, als trüge er selbst einen Rest der Wahrheit mit sich, die man ihm sonst nirgendwo abringen kann."
      ],
      "choices": [
        "Mit Witwe Kern über das Wasser sprechen",
        "Mit Ratsherr Dennek sprechen",
        "Den Brunnen selbst untersuchen",
        "Den Graben am Brunnenrand verfolgen",
        "Zurück zum Dorfplatz"
      ]
    }
  ]
}
```

---

## Datei: `quests/brunnen/schacht.json`

```json
{
  "id": "schacht",
  "titel": "Schacht und Graben",
  "quest": "brunnen",
  "datei": "brunnen/schacht.json",
  "szenen": [
    {
      "id": "brunnenschacht",
      "title": "Brunnenschacht",
      "art": "well",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "ablaufgraben",
      "title": "Ablaufgraben",
      "art": "ditch",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/brunnen/zisterne.json`

```json
{
  "id": "zisterne",
  "titel": "Grovins Zisterne",
  "quest": "brunnen",
  "datei": "brunnen/zisterne.json",
  "szenen": [
    {
      "id": "an-der-zisterne",
      "title": "An der Zisterne",
      "art": "well",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "grovins-zisterne",
      "title": "Grovins Zisterne",
      "art": "well",
      "portrait": "grovin",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/dorf.json`

```json
{
  "id": "dorf",
  "titel": "Lindendorf",
  "reihe": "Hauptfluss",
  "datei": "dorf.json",
  "teile": [
    {
      "id": "platz",
      "titel": "Dorfplatz",
      "quest": "dorf",
      "datei": "dorf/platz.json",
      "szenen": [
        {
          "id": "dorf-platz",
          "title": "Dorfplatz",
          "art": "village",
          "portrait": null,
          "lines": [
            "Du stehst jetzt mitten in Lindendorf. Der Platz ist klein genug, dass jedes Gespräch einen Zeugen findet.",
            "Vor dir liegen Rathaus, Taverne, Brunnen, die Mühle und der Weg zum Hang.",
            "Aus dem Osten steigt Rauch. Dort liegt der alte Steinbruch."
          ],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "rathaus",
      "titel": "Rathaus",
      "quest": "dorf",
      "datei": "dorf/rathaus.json",
      "szenen": [
        {
          "id": "rathaus",
          "title": "Rathaus",
          "art": "townhall",
          "portrait": "holm",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "taverne",
      "titel": "Taverne",
      "quest": "dorf",
      "datei": "dorf/taverne.json",
      "szenen": [
        {
          "id": "zum-letzten-fass",
          "title": "Zum letzten Fass",
          "art": "tavern",
          "portrait": "mara",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "handwerk",
      "titel": "Schmiede und Apotheke",
      "quest": "dorf",
      "datei": "dorf/handwerk.json",
      "szenen": [
        {
          "id": "schmiede-apotheke",
          "title": "Schmiede und Apotheke",
          "art": "village",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "beim-schmied",
          "title": "Beim Schmied",
          "art": "smithy",
          "portrait": "smith",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "bei-witwe-kern-dorf",
          "title": "Bei Witwe Kern",
          "art": "apothecary",
          "portrait": "kern",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    }
  ]
}
```

---

## Datei: `quests/dorf/handwerk.json`

```json
{
  "id": "handwerk",
  "titel": "Schmiede und Apotheke",
  "quest": "dorf",
  "datei": "dorf/handwerk.json",
  "szenen": [
    {
      "id": "schmiede-apotheke",
      "title": "Schmiede und Apotheke",
      "art": "village",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "beim-schmied",
      "title": "Beim Schmied",
      "art": "smithy",
      "portrait": "smith",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "bei-witwe-kern-dorf",
      "title": "Bei Witwe Kern",
      "art": "apothecary",
      "portrait": "kern",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/dorf/platz.json`

```json
{
  "id": "platz",
  "titel": "Dorfplatz",
  "quest": "dorf",
  "datei": "dorf/platz.json",
  "szenen": [
    {
      "id": "dorf-platz",
      "title": "Dorfplatz",
      "art": "village",
      "portrait": null,
      "lines": [
        "Du stehst jetzt mitten in Lindendorf. Der Platz ist klein genug, dass jedes Gespräch einen Zeugen findet.",
        "Vor dir liegen Rathaus, Taverne, Brunnen, die Mühle und der Weg zum Hang.",
        "Aus dem Osten steigt Rauch. Dort liegt der alte Steinbruch."
      ],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/dorf/rathaus.json`

```json
{
  "id": "rathaus",
  "titel": "Rathaus",
  "quest": "dorf",
  "datei": "dorf/rathaus.json",
  "szenen": [
    {
      "id": "rathaus",
      "title": "Rathaus",
      "art": "townhall",
      "portrait": "holm",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/dorf/taverne.json`

```json
{
  "id": "taverne",
  "titel": "Taverne",
  "quest": "dorf",
  "datei": "dorf/taverne.json",
  "szenen": [
    {
      "id": "zum-letzten-fass",
      "title": "Zum letzten Fass",
      "art": "tavern",
      "portrait": "mara",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/ende.json`

```json
{
  "id": "ende",
  "titel": "Ende",
  "reihe": "Hauptfluss",
  "datei": "ende.json",
  "teile": [
    {
      "id": "ende",
      "titel": "Ende",
      "quest": "ende",
      "datei": "ende/ende.json",
      "szenen": [
        {
          "id": "ende",
          "title": "Ende",
          "art": "return",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    }
  ]
}
```

---

## Datei: `quests/ende/ende.json`

```json
{
  "id": "ende",
  "titel": "Ende",
  "quest": "ende",
  "datei": "ende/ende.json",
  "szenen": [
    {
      "id": "ende",
      "title": "Ende",
      "art": "return",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/gasse.json`

```json
{
  "id": "gasse",
  "titel": "Das Kesseljahr",
  "reihe": "Erinnerung",
  "datei": "gasse.json",
  "teile": [
    {
      "id": "kirche",
      "titel": "Kirche und Fenn",
      "quest": "gasse",
      "datei": "gasse/kirche.json",
      "szenen": [
        {
          "id": "gasse-kirche",
          "title": "Vor der Kirche",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "gasse-hub",
          "title": "Die leere Gasse",
          "art": "gate",
          "portrait": null,
          "lines": [],
          "choices": [
            "Bei Fenn an der Kirchmauer bleiben",
            "Ratsherr Vahl im Rathaus aufsuchen",
            "Die Gasse hinter der Gerberei ansehen",
            "Zurück zum Dorfplatz"
          ]
        },
        {
          "id": "fenn",
          "title": "Fenn",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "fenn-an-der-kirchmauer",
          "title": "Fenn an der Kirchmauer",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "vahls-stube",
          "title": "Vahls Stube",
          "art": "townhall",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "ratsherr-vahl",
          "title": "Ratsherr Vahl",
          "art": "townhall",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "ort",
      "titel": "Gerbereigasse",
      "quest": "gasse",
      "datei": "gasse/ort.json",
      "szenen": [
        {
          "id": "gerbereigasse",
          "title": "Gerbereigasse",
          "art": "gate",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "grete",
      "titel": "Grete",
      "quest": "gasse",
      "datei": "gasse/grete.json",
      "szenen": [
        {
          "id": "gretes-kate",
          "title": "Gretes Kate",
          "art": "village",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "grete",
          "title": "Grete",
          "art": "village",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "gewoelbe",
      "titel": "Gewölbe",
      "quest": "gasse",
      "datei": "gasse/gewoelbe.json",
      "szenen": [
        {
          "id": "kirchengewoelbe",
          "title": "Kirchengewölbe",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "unter-der-kirche",
          "title": "Unter der Kirche",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "im-gewoelbe",
          "title": "Im Gewölbe",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "hinter-dem-stein",
          "title": "Hinter dem Stein",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "schluss",
      "titel": "Ausgänge",
      "quest": "gasse",
      "datei": "gasse/schluss.json",
      "szenen": [
        {
          "id": "vahls-stube-abend",
          "title": "Vahls Stube, Abend",
          "art": "townhall",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "was-die-liste-wiegt",
          "title": "Was die Liste wiegt",
          "art": "townhall",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "ein-zweites-schweigen",
          "title": "Ein zweites Schweigen",
          "art": "gate",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "was-ausgegraben-bleibt",
          "title": "Was ausgegraben bleibt",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "ein-name-unter-vielen",
          "title": "Ein Name unter vielen",
          "art": "village",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "stille-rechnung",
          "title": "Stille Rechnung",
          "art": "village",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    }
  ]
}
```

---

## Datei: `quests/gasse/gewoelbe.json`

```json
{
  "id": "gewoelbe",
  "titel": "Gewölbe",
  "quest": "gasse",
  "datei": "gasse/gewoelbe.json",
  "szenen": [
    {
      "id": "kirchengewoelbe",
      "title": "Kirchengewölbe",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "unter-der-kirche",
      "title": "Unter der Kirche",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "im-gewoelbe",
      "title": "Im Gewölbe",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "hinter-dem-stein",
      "title": "Hinter dem Stein",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/gasse/grete.json`

```json
{
  "id": "grete",
  "titel": "Grete",
  "quest": "gasse",
  "datei": "gasse/grete.json",
  "szenen": [
    {
      "id": "gretes-kate",
      "title": "Gretes Kate",
      "art": "village",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "grete",
      "title": "Grete",
      "art": "village",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/gasse/kirche.json`

```json
{
  "id": "kirche",
  "titel": "Kirche und Fenn",
  "quest": "gasse",
  "datei": "gasse/kirche.json",
  "szenen": [
    {
      "id": "gasse-kirche",
      "title": "Vor der Kirche",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "gasse-hub",
      "title": "Die leere Gasse",
      "art": "gate",
      "portrait": null,
      "lines": [],
      "choices": [
        "Bei Fenn an der Kirchmauer bleiben",
        "Ratsherr Vahl im Rathaus aufsuchen",
        "Die Gasse hinter der Gerberei ansehen",
        "Zurück zum Dorfplatz"
      ]
    },
    {
      "id": "fenn",
      "title": "Fenn",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "fenn-an-der-kirchmauer",
      "title": "Fenn an der Kirchmauer",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "vahls-stube",
      "title": "Vahls Stube",
      "art": "townhall",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "ratsherr-vahl",
      "title": "Ratsherr Vahl",
      "art": "townhall",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/gasse/ort.json`

```json
{
  "id": "ort",
  "titel": "Gerbereigasse",
  "quest": "gasse",
  "datei": "gasse/ort.json",
  "szenen": [
    {
      "id": "gerbereigasse",
      "title": "Gerbereigasse",
      "art": "gate",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/gasse/schluss.json`

```json
{
  "id": "schluss",
  "titel": "Ausgänge",
  "quest": "gasse",
  "datei": "gasse/schluss.json",
  "szenen": [
    {
      "id": "vahls-stube-abend",
      "title": "Vahls Stube, Abend",
      "art": "townhall",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "was-die-liste-wiegt",
      "title": "Was die Liste wiegt",
      "art": "townhall",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "ein-zweites-schweigen",
      "title": "Ein zweites Schweigen",
      "art": "gate",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "was-ausgegraben-bleibt",
      "title": "Was ausgegraben bleibt",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "ein-name-unter-vielen",
      "title": "Ein Name unter vielen",
      "art": "village",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "stille-rechnung",
      "title": "Stille Rechnung",
      "art": "village",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/lager.json`

```json
{
  "id": "lager",
  "titel": "Banditenlager",
  "reihe": "Hauptfluss",
  "datei": "lager.json",
  "teile": [
    {
      "id": "hub",
      "titel": "Steinbruch",
      "quest": "lager",
      "datei": "lager/hub.json",
      "szenen": [
        {
          "id": "lager-hub",
          "title": "Banditenlager",
          "art": "camp",
          "portrait": "kess",
          "lines": [
            "Der Steinbruch ist eine Wunde im Hügel.",
            "Drei Zelte. Ein Feuer. Eine Kiste mit dem Siegel der Kirche von Lindendorf.",
            "Ein Mann mit einer Narbe über der Lippe — das wird Kess sein — würfelt mit zwei anderen.",
            "Ein vierter steht oben auf dem Felsen und schaut den Weg entlang, den du gekommen bist.",
            "Die Felswand trägt noch die schwarzen Streifen der alten Sprengungen. Zwischen ihnen wachsen dünne weiße Pilze, die im Feuerlicht wie Zähne aussehen.",
            "Neben der Kiste liegt ein Kinderumhang. Er ist zu klein für jeden Menschen hier. Niemand tritt darauf. Niemand hebt ihn auf.",
            "Kess würfelt mit zwei stumpfen Knochen. Einer der Männer lacht zu laut. Der andere hält die Hand auf der Tasche, in der vermutlich das Geld liegt, das dem Dorf fehlt."
          ],
          "choices": [
            "Anschleichen (Geschick)",
            "Heraustreten und reden (Charisma)",
            "Angreifen (Stärke)",
            "Mit dem Schlüssel das Seitentor nutzen"
          ]
        }
      ]
    },
    {
      "id": "schleich",
      "titel": "Schleichen",
      "quest": "lager",
      "datei": "lager/schleich.json",
      "szenen": [
        {
          "id": "lager-schleich",
          "title": "Schleichen",
          "art": "sneak",
          "portrait": null,
          "lines": [
            "Du nimmst das Kirchensilber, zwei Säcke Getreide markierst du dir nur im Kopf.",
            "Kess würfelt eine Acht und flucht über das Glück, das nicht seines ist.",
            "Du bist schon im Gestrüpp, als der Posten endlich blinzelt.",
            "Die Kiste ist schwerer, sobald du sie trägst. Nicht wegen des Silbers, sondern wegen der Namen, die in Lindendorf daran hängen.",
            "Hinter dir lacht einer der Männer über einen schlechten Wurf. Er weiß noch nicht, dass der Einsatz bereits verschwunden ist."
          ],
          "choices": [
            "Jetzt reden",
            "Jetzt kämpfen"
          ]
        }
      ]
    },
    {
      "id": "reden",
      "titel": "Reden",
      "quest": "lager",
      "datei": "lager/reden.json",
      "szenen": [
        {
          "id": "lager-reden",
          "title": "Banditenlager",
          "art": "camp",
          "portrait": "kess",
          "lines": [
            "Kess hat eine Stimme wie ein stumpfer Säbel.",
            "„Lindendorf schickt keine Wache. Lindendorf schickt... dich.“",
            "Er spricht deinen Namen nicht aus. Er hat ihn vielleicht nie gehört. Trotzdem liegt in seiner Pause die Art von Sicherheit, die Menschen nur zeigen, wenn sie vorbereitet sind.",
            "Hinter ihm brennt das Feuer niedrig. Im Rauch hängt der Geruch von nassem Leder und gekochtem Knochen."
          ],
          "choices": [
            "Drohen: Das Dorf hat genug (Charisma)",
            "Handel: Abzug gegen Gold und eine Nacht Vorsprung",
            "Lügen: Hinter dir kommt die Stadtwache"
          ]
        }
      ]
    },
    {
      "id": "kampf",
      "titel": "Kampf",
      "quest": "lager",
      "datei": "lager/kampf.json",
      "szenen": [
        {
          "id": "lager-kampf",
          "title": "Steinbruch",
          "art": "combat",
          "portrait": null,
          "lines": [
            "Kein Duell. Ein Gedränge aus Stahl, Feuerlicht und schlechtem Boden.",
            "Der erste Schlag trifft nicht dort, wo du ihn erwartest. Jemand rutscht im Schlamm aus, ein Zelt kippt, und plötzlich kämpfen alle in einem Raum, der für keinen von euch groß genug ist.",
            "Kess trägt kein Wappen. Er trägt eine Narbe, einen stumpfen Säbel und die Gewissheit, dass derjenige gewinnt, der nach dem Lärm noch zählen kann.",
            "Hinter dir steht die Kirchenkiste. Vor dir stehen Männer, die wissen, dass sie ohne sie nichts mehr haben, was ein Dorf zurückkaufen würde."
          ],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "tor",
      "titel": "Seitentor",
      "quest": "lager",
      "datei": "lager/tor.json",
      "szenen": [
        {
          "id": "lager-tor",
          "title": "Seitentor",
          "art": "gate",
          "portrait": null,
          "lines": [
            "Der Schlüssel dreht sich schwer. Rost redet mit, gibt aber nach.",
            "Du kommst hinter dem Holzstapel raus — näher an der Kiste als am Feuer.",
            "Der Gang hinter dem Tor ist niedrig und riecht nach Moder. An der Wand stehen Zahlen, mit Kreide geschrieben und immer wieder durchgestrichen.",
            "Unter deinen Stiefeln liegen alte Lederriemen und ein verrosteter Meißel. Der Steinbruch war einmal ein Arbeitsplatz. Das Lager hat nur gelernt, seine Knochen zu benutzen.",
            "Durch die Spalten des Holzstapels siehst du Kess am Feuer. Er würfelt nicht mehr. Er wartet."
          ],
          "choices": [
            "Nur die Beute nehmen und verschwinden (Geschick, leicht)",
            "Die Seile der Zelte kappen und Chaos nutzen (Geschick, mittel)",
            "Kess von hinten stellen (Stärke, mittel)"
          ]
        }
      ]
    }
  ]
}
```

---

## Datei: `quests/lager/hub.json`

```json
{
  "id": "hub",
  "titel": "Steinbruch",
  "quest": "lager",
  "datei": "lager/hub.json",
  "szenen": [
    {
      "id": "lager-hub",
      "title": "Banditenlager",
      "art": "camp",
      "portrait": "kess",
      "lines": [
        "Der Steinbruch ist eine Wunde im Hügel.",
        "Drei Zelte. Ein Feuer. Eine Kiste mit dem Siegel der Kirche von Lindendorf.",
        "Ein Mann mit einer Narbe über der Lippe — das wird Kess sein — würfelt mit zwei anderen.",
        "Ein vierter steht oben auf dem Felsen und schaut den Weg entlang, den du gekommen bist.",
        "Die Felswand trägt noch die schwarzen Streifen der alten Sprengungen. Zwischen ihnen wachsen dünne weiße Pilze, die im Feuerlicht wie Zähne aussehen.",
        "Neben der Kiste liegt ein Kinderumhang. Er ist zu klein für jeden Menschen hier. Niemand tritt darauf. Niemand hebt ihn auf.",
        "Kess würfelt mit zwei stumpfen Knochen. Einer der Männer lacht zu laut. Der andere hält die Hand auf der Tasche, in der vermutlich das Geld liegt, das dem Dorf fehlt."
      ],
      "choices": [
        "Anschleichen (Geschick)",
        "Heraustreten und reden (Charisma)",
        "Angreifen (Stärke)",
        "Mit dem Schlüssel das Seitentor nutzen"
      ]
    }
  ]
}
```

---

## Datei: `quests/lager/kampf.json`

```json
{
  "id": "kampf",
  "titel": "Kampf",
  "quest": "lager",
  "datei": "lager/kampf.json",
  "szenen": [
    {
      "id": "lager-kampf",
      "title": "Steinbruch",
      "art": "combat",
      "portrait": null,
      "lines": [
        "Kein Duell. Ein Gedränge aus Stahl, Feuerlicht und schlechtem Boden.",
        "Der erste Schlag trifft nicht dort, wo du ihn erwartest. Jemand rutscht im Schlamm aus, ein Zelt kippt, und plötzlich kämpfen alle in einem Raum, der für keinen von euch groß genug ist.",
        "Kess trägt kein Wappen. Er trägt eine Narbe, einen stumpfen Säbel und die Gewissheit, dass derjenige gewinnt, der nach dem Lärm noch zählen kann.",
        "Hinter dir steht die Kirchenkiste. Vor dir stehen Männer, die wissen, dass sie ohne sie nichts mehr haben, was ein Dorf zurückkaufen würde."
      ],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/lager/reden.json`

```json
{
  "id": "reden",
  "titel": "Reden",
  "quest": "lager",
  "datei": "lager/reden.json",
  "szenen": [
    {
      "id": "lager-reden",
      "title": "Banditenlager",
      "art": "camp",
      "portrait": "kess",
      "lines": [
        "Kess hat eine Stimme wie ein stumpfer Säbel.",
        "„Lindendorf schickt keine Wache. Lindendorf schickt... dich.“",
        "Er spricht deinen Namen nicht aus. Er hat ihn vielleicht nie gehört. Trotzdem liegt in seiner Pause die Art von Sicherheit, die Menschen nur zeigen, wenn sie vorbereitet sind.",
        "Hinter ihm brennt das Feuer niedrig. Im Rauch hängt der Geruch von nassem Leder und gekochtem Knochen."
      ],
      "choices": [
        "Drohen: Das Dorf hat genug (Charisma)",
        "Handel: Abzug gegen Gold und eine Nacht Vorsprung",
        "Lügen: Hinter dir kommt die Stadtwache"
      ]
    }
  ]
}
```

---

## Datei: `quests/lager/schleich.json`

```json
{
  "id": "schleich",
  "titel": "Schleichen",
  "quest": "lager",
  "datei": "lager/schleich.json",
  "szenen": [
    {
      "id": "lager-schleich",
      "title": "Schleichen",
      "art": "sneak",
      "portrait": null,
      "lines": [
        "Du nimmst das Kirchensilber, zwei Säcke Getreide markierst du dir nur im Kopf.",
        "Kess würfelt eine Acht und flucht über das Glück, das nicht seines ist.",
        "Du bist schon im Gestrüpp, als der Posten endlich blinzelt.",
        "Die Kiste ist schwerer, sobald du sie trägst. Nicht wegen des Silbers, sondern wegen der Namen, die in Lindendorf daran hängen.",
        "Hinter dir lacht einer der Männer über einen schlechten Wurf. Er weiß noch nicht, dass der Einsatz bereits verschwunden ist."
      ],
      "choices": [
        "Jetzt reden",
        "Jetzt kämpfen"
      ]
    }
  ]
}
```

---

## Datei: `quests/lager/tor.json`

```json
{
  "id": "tor",
  "titel": "Seitentor",
  "quest": "lager",
  "datei": "lager/tor.json",
  "szenen": [
    {
      "id": "lager-tor",
      "title": "Seitentor",
      "art": "gate",
      "portrait": null,
      "lines": [
        "Der Schlüssel dreht sich schwer. Rost redet mit, gibt aber nach.",
        "Du kommst hinter dem Holzstapel raus — näher an der Kiste als am Feuer.",
        "Der Gang hinter dem Tor ist niedrig und riecht nach Moder. An der Wand stehen Zahlen, mit Kreide geschrieben und immer wieder durchgestrichen.",
        "Unter deinen Stiefeln liegen alte Lederriemen und ein verrosteter Meißel. Der Steinbruch war einmal ein Arbeitsplatz. Das Lager hat nur gelernt, seine Knochen zu benutzen.",
        "Durch die Spalten des Holzstapels siehst du Kess am Feuer. Er würfelt nicht mehr. Er wartet."
      ],
      "choices": [
        "Nur die Beute nehmen und verschwinden (Geschick, leicht)",
        "Die Seile der Zelte kappen und Chaos nutzen (Geschick, mittel)",
        "Kess von hinten stellen (Stärke, mittel)"
      ]
    }
  ]
}
```

---

## Datei: `quests/muehle.json`

```json
{
  "id": "muehle",
  "titel": "Die stumme Mühle",
  "reihe": "Versorgung",
  "datei": "muehle.json",
  "teile": [
    {
      "id": "mahlwerk",
      "titel": "Mahlwerk",
      "quest": "muehle",
      "datei": "muehle/mahlwerk.json",
      "szenen": [
        {
          "id": "muehle-stumm",
          "title": "Die stumme Mühle",
          "art": "mill",
          "portrait": null,
          "lines": [
            "Kein Mehlstaub in der Luft, obwohl das Rad sich dreht.",
            "Vor der Tür lehnt ein leerer Karren, dessen Deichsel schon Moos angesetzt hat.",
            "Bertok steht im Eingang, bevor du klopfen kannst. Seine Hände sind mehlweiß, obwohl seit Tagen nichts gemahlen wurde.",
            "Hinter ihm bewegt sich etwas zwischen den Säcken — zu schnell für eine Ratte."
          ],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "muehle-hub",
          "title": "Mühle",
          "art": "mill",
          "portrait": "miller",
          "lines": [
            "Das Rad schlägt gegen das Wasser und mahlt nichts."
          ],
          "choices": [
            "Mit Bertok am Mahlwerk sprechen",
            "Zu Lene in die Kornkammer gehen",
            "Das Wasserrad und den Uferweg ansehen",
            "Die Mühle verlassen"
          ]
        },
        {
          "id": "bertok-am-mahlwerk",
          "title": "Bertok am Mahlwerk",
          "art": "mill",
          "portrait": "miller",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "kammer",
      "titel": "Kornkammer",
      "quest": "muehle",
      "datei": "muehle/kammer.json",
      "szenen": [
        {
          "id": "kornkammer",
          "title": "Kornkammer",
          "art": "mill",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "lene-in-der-kornkammer",
          "title": "Lene in der Kornkammer",
          "art": "mill",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "hinter-der-nische",
          "title": "Hinter der Nische",
          "art": "mill",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "ufer",
      "titel": "Ufer und Kontor",
      "quest": "muehle",
      "datei": "muehle/ufer.json",
      "szenen": [
        {
          "id": "wasserrad",
          "title": "Wasserrad",
          "art": "mill",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "uferpfad",
          "title": "Uferpfad",
          "art": "ditch",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "morscher-steg",
          "title": "Morscher Steg",
          "art": "ditch",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "lagerhaus-am-fluss",
          "title": "Lagerhaus am Fluss",
          "art": "mill",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "renniks-kontor",
          "title": "Renniks Kontor",
          "art": "mill",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "ende",
      "titel": "Ausgänge",
      "quest": "muehle",
      "datei": "muehle/ende.json",
      "szenen": [
        {
          "id": "sicheres-mehl-leere-blicke",
          "title": "Sicheres Mehl, leere Blicke",
          "art": "mill",
          "portrait": "holm",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "mehl-mit-rauen-haenden",
          "title": "Mehl mit rauen Händen",
          "art": "mill",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "stilles-mehl",
          "title": "Stilles Mehl",
          "art": "mill",
          "portrait": "miller",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    }
  ]
}
```

---

## Datei: `quests/muehle/ende.json`

```json
{
  "id": "ende",
  "titel": "Ausgänge",
  "quest": "muehle",
  "datei": "muehle/ende.json",
  "szenen": [
    {
      "id": "sicheres-mehl-leere-blicke",
      "title": "Sicheres Mehl, leere Blicke",
      "art": "mill",
      "portrait": "holm",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "mehl-mit-rauen-haenden",
      "title": "Mehl mit rauen Händen",
      "art": "mill",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "stilles-mehl",
      "title": "Stilles Mehl",
      "art": "mill",
      "portrait": "miller",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/muehle/kammer.json`

```json
{
  "id": "kammer",
  "titel": "Kornkammer",
  "quest": "muehle",
  "datei": "muehle/kammer.json",
  "szenen": [
    {
      "id": "kornkammer",
      "title": "Kornkammer",
      "art": "mill",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "lene-in-der-kornkammer",
      "title": "Lene in der Kornkammer",
      "art": "mill",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "hinter-der-nische",
      "title": "Hinter der Nische",
      "art": "mill",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/muehle/mahlwerk.json`

```json
{
  "id": "mahlwerk",
  "titel": "Mahlwerk",
  "quest": "muehle",
  "datei": "muehle/mahlwerk.json",
  "szenen": [
    {
      "id": "muehle-stumm",
      "title": "Die stumme Mühle",
      "art": "mill",
      "portrait": null,
      "lines": [
        "Kein Mehlstaub in der Luft, obwohl das Rad sich dreht.",
        "Vor der Tür lehnt ein leerer Karren, dessen Deichsel schon Moos angesetzt hat.",
        "Bertok steht im Eingang, bevor du klopfen kannst. Seine Hände sind mehlweiß, obwohl seit Tagen nichts gemahlen wurde.",
        "Hinter ihm bewegt sich etwas zwischen den Säcken — zu schnell für eine Ratte."
      ],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "muehle-hub",
      "title": "Mühle",
      "art": "mill",
      "portrait": "miller",
      "lines": [
        "Das Rad schlägt gegen das Wasser und mahlt nichts."
      ],
      "choices": [
        "Mit Bertok am Mahlwerk sprechen",
        "Zu Lene in die Kornkammer gehen",
        "Das Wasserrad und den Uferweg ansehen",
        "Die Mühle verlassen"
      ]
    },
    {
      "id": "bertok-am-mahlwerk",
      "title": "Bertok am Mahlwerk",
      "art": "mill",
      "portrait": "miller",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/muehle/ufer.json`

```json
{
  "id": "ufer",
  "titel": "Ufer und Kontor",
  "quest": "muehle",
  "datei": "muehle/ufer.json",
  "szenen": [
    {
      "id": "wasserrad",
      "title": "Wasserrad",
      "art": "mill",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "uferpfad",
      "title": "Uferpfad",
      "art": "ditch",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "morscher-steg",
      "title": "Morscher Steg",
      "art": "ditch",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "lagerhaus-am-fluss",
      "title": "Lagerhaus am Fluss",
      "art": "mill",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "renniks-kontor",
      "title": "Renniks Kontor",
      "art": "mill",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/wald.json`

```json
{
  "id": "wald",
  "titel": "Hang und Wald",
  "reihe": "Hauptfluss",
  "datei": "wald.json",
  "teile": [
    {
      "id": "glockenweg",
      "titel": "Alter Glockenweg",
      "quest": "wald",
      "datei": "wald/glockenweg.json",
      "szenen": [
        {
          "id": "glockenweg",
          "title": "Alter Glockenweg",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "sanna-die-botin",
          "title": "Sanna, die Botin",
          "art": "chapel",
          "portrait": "sanna",
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "jorren-im-geroell",
          "title": "Jorren im Geröll",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        },
        {
          "id": "die-kapellenglocke",
          "title": "Die Kapellenglocke",
          "art": "chapel",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    },
    {
      "id": "wald",
      "titel": "Wald",
      "quest": "wald",
      "datei": "wald/wald.json",
      "szenen": [
        {
          "id": "wald",
          "title": "Wald",
          "art": "forest",
          "portrait": null,
          "lines": [],
          "choices": [
            "Weiter"
          ]
        }
      ]
    }
  ]
}
```

---

## Datei: `quests/wald/glockenweg.json`

```json
{
  "id": "glockenweg",
  "titel": "Alter Glockenweg",
  "quest": "wald",
  "datei": "wald/glockenweg.json",
  "szenen": [
    {
      "id": "glockenweg",
      "title": "Alter Glockenweg",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "sanna-die-botin",
      "title": "Sanna, die Botin",
      "art": "chapel",
      "portrait": "sanna",
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "jorren-im-geroell",
      "title": "Jorren im Geröll",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    },
    {
      "id": "die-kapellenglocke",
      "title": "Die Kapellenglocke",
      "art": "chapel",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `quests/wald/wald.json`

```json
{
  "id": "wald",
  "titel": "Wald",
  "quest": "wald",
  "datei": "wald/wald.json",
  "szenen": [
    {
      "id": "wald",
      "title": "Wald",
      "art": "forest",
      "portrait": null,
      "lines": [],
      "choices": [
        "Weiter"
      ]
    }
  ]
}
```

---

## Datei: `schema.ts`

```ts
import { z } from "zod";

export const SzeneSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  art: z.string().min(1),
  portrait: z.string().nullable().optional(),
  lines: z.array(z.string()),
  choices: z.array(z.string()),
  successLines: z.array(z.string()).optional(),
  failureLines: z.array(z.string()).optional(),
  passLines: z.array(z.string()).optional(),
});

export const TeilSchema = z.object({
  id: z.string().min(1),
  titel: z.string().min(1),
  quest: z.string().min(1),
  datei: z.string().min(1),
  szenen: z.array(SzeneSchema).min(1),
});

export const QuestSchema = z.object({
  id: z.string().min(1),
  titel: z.string().min(1),
  reihe: z.string().min(1),
  datei: z.string().min(1),
  teile: z.array(TeilSchema).min(1),
});

export type SzeneJson = z.infer<typeof SzeneSchema>;
export type TeilJson = z.infer<typeof TeilSchema>;
export type QuestJson = z.infer<typeof QuestSchema>;

export function karte(
  id: string,
  title: string,
  art: string,
  lines: string[] = [],
  choices: string[] = ["Weiter"],
  portrait: string | null = null,
): SzeneJson {
  return { id, title, art, portrait, lines, choices };
}
```

---
