import type { KnowledgeKey } from "./knowledge";

/** GM-Fakt. Kein Spielersatz. Hängt nur an den Szenen, auf denen er wahr wird. */
export type LoreFakt = {
  id: string;
  text: string;
  szenen: readonly string[];
  wissen?: readonly KnowledgeKey[];
  figuren?: readonly string[];
};

export const LORE: readonly LoreFakt[] = [
  {
    id: "weg-allein",
    text: "Der Held kommt allein und zu Fuß. Lindendorf ist auf der Karte kaum mehr als ein Tintenfleck.",
    szenen: ["intro-weg"],
    wissen: ["dorf_ankunft"],
  },
  {
    id: "fremder-silber",
    text: "Der Fremde am Weg ist namenlos, mager, der linke Ärmel blutig. Unter dem Mantel trägt er kein Schmuckstück, sondern einen Rest des Siegels, das Ordnung versprach: ein offenes Auge über drei Linien. Dasselbe Zeichen stand vor Jahren an einem Grenzstein am Nordpass.",
    szenen: ["intro-fremder-am-weg"],
    wissen: ["artefakt_gesehen"],
    figuren: ["der Fremde"],
  },
  {
    id: "fremder-ausgang",
    text: "Kampf, Schleichen oder Überreden kann das Silber in die Hand des Helden bringen. Vorübergehen lässt es beim Fremden. Es taucht später in der Kirchenkiste des Steinbruchs wieder auf, mit demselben Siegel.",
    szenen: ["intro-fremder-am-weg"],
    wissen: ["artefakt_erhalten", "artefakt_gesehen"],
    figuren: ["der Fremde"],
  },
  {
    id: "tal-rauch",
    text: "Über dem Tal steht Rauch ohne Wind. Felder sind abgeerntet, Zäune nicht gerichtet. Am Waldrand steckt ein Kinderschuh im Schlamm.",
    szenen: ["intro-tal", "intro-hang", "intro-rauch-graben"],
    wissen: ["hang_hinweis"],
  },
  {
    id: "ankunft-platz",
    text: "Vom Platz aus sind Rathaus, Taverne, Brunnen, Mühle und der Weg zum Hang sichtbar. Im Osten raucht der alte Steinbruch.",
    szenen: ["intro-lindendorf", "intro-ankunft", "dorf-platz"],
    wissen: ["dorf_ankunft", "banditen_bekannt"],
  },
  {
    id: "amt-nennt-nur-banditen",
    text: "Das Amt benennt öffentlich nur die Banditen im Steinbruch. Holm weiß, dass das Kesseljahr kein Unfall war. Wasser, Mehl und die leere Gasse bleiben ungesagt, weil der Pakt nicht laut werden darf.",
    szenen: ["dorf-platz", "rathaus"],
    wissen: ["auftrag_erhalten", "banditen_bekannt"],
    figuren: ["Holm"],
  },
  {
    id: "holm-auftrag",
    text: "Holm sitzt im Rathaus und gibt den Auftrag gegen das Lager im Steinbruch. Er ist der Bürgermeister, nicht Dennek und nicht Vahl.",
    szenen: ["rathaus"],
    wissen: ["holm_besucht", "auftrag_erhalten"],
    figuren: ["Holm"],
  },
  {
    id: "mara-pfad",
    text: "Mara führt „Zum letzten Fass“. Sie kann den schmalen Pfad hinter der Taverne zeigen. Der macht den späteren Zugang zum Steinbruch leichter.",
    szenen: ["zum-letzten-fass", "lager-schleich"],
    figuren: ["Mara"],
  },
  {
    id: "schmied-rand",
    text: "Der Schmied hat in den bestehenden Quests keine eigene Schuld und keinen eigenen Ausgang.",
    szenen: ["beim-schmied", "schmiede-apotheke"],
    figuren: ["der Schmied"],
  },
  {
    id: "kern-dorf",
    text: "Witwe Kern ist die Heilerin, nicht Mirl. Auf dem Dorfplatz ist sie noch nicht die Brunnen-Befragung. Die beginnt erst am trüben Eimer.",
    szenen: ["bei-witwe-kern-dorf"],
    figuren: ["Witwe Kern"],
  },
  {
    id: "mehlsack-falsch",
    text: "Am Brunnen heißt sie die Müllerin. In der Mühle ist sie Lene, Bertoks Tochter. Der Sack selbst nennt den Vornamen nicht. Er riecht nicht nach Mehl, das Mühlenzeichen ist nachgemalt, die Kerben zeigen falsch. Wer ihn findet, bekommt den Hinweis auf den Hang, nicht die Lösung der Mühle.",
    szenen: ["mehlsack-am-brunnen", "lene-in-der-kornkammer"],
    wissen: ["hang_hinweis"],
    figuren: ["Lene"],
  },
  {
    id: "brunnen-not",
    text: "Der Eimer ist graubraun und schmeckt nach Eisen. Kinder husten. Dennek rührt und meidet dabei eine Fuge am Rand. „Trockenes Jahr“ ist sein geübter Satz, nicht die Ursache.",
    szenen: ["brunnen-krug", "brunnen-hub"],
    wissen: ["wasser_truebung"],
    figuren: ["Dennek"],
  },
  {
    id: "kern-befund",
    text: "Kern wiegt seit Tagen dieselbe Mischung ab. Sie nennt Bauch, Fieber, Metall im Mund. Kinder zuerst, dann die Alten. Sie hält es nicht für Krankheit allein: jemand hat den Brunnen angefasst. Frische Zettel nennen Häuser nah am Brunnen.",
    szenen: ["bei-witwe-kern"],
    wissen: ["wasser_truebung"],
    figuren: ["Witwe Kern"],
  },
  {
    id: "dennek-grovin",
    text: "Dennek hat Grovin den Lohn bewusst vorenthalten, damit das Wasser ein Druckmittel bleibt. Nach dem trockenen Jahr gefragt oder an die Mauer gedrückt, kommt der Name Grovin heraus. Seine Stiefel tragen helleren Lehm als der Platz.",
    szenen: ["ratsherr-dennek"],
    wissen: ["dennek_schuld", "grovin_zisterne"],
    figuren: ["Dennek", "Grovin"],
  },
  {
    id: "schacht-fuge",
    text: "Am Schacht ist der Mörtel frisch. Dahinter läuft ein Ablauf, zu gerade für wildes Wasser, Richtung Wald. Ohne die Wahrnehmung muss man den Graben später im Unterholz suchen.",
    szenen: ["brunnenschacht", "ablaufgraben"],
    wissen: ["wasser_truebung"],
  },
  {
    id: "zisterne-gelegt",
    text: "Die Zisterne am Waldrand ist alt, die Fugen nicht. Die Dornen sind gelegt, nicht gewachsen. Das Wasser darin ist klar. Grovin schöpft für sich, nicht für den Eimer im Dorf.",
    szenen: ["ablaufgraben", "an-der-zisterne", "grovins-zisterne"],
    wissen: ["grovin_zisterne"],
    figuren: ["Grovin"],
  },
  {
    id: "grovin-rechnung",
    text: "Grovin hat den Brunnen gebaut und nie Lohn gesehen. Er kennt den alten Wasserlauf und könnte das Dorf ganz vom Wasser nehmen. Er will Anerkennung, nicht Gift. Fünf Gold lassen ihn die Zisterne behalten: das Wasser wird nur teilweise klar. Verhandeln geht nur, wenn zuvor nach seinem Grund gefragt wurde, und legt Holm eine echte Schuld auf. Die Sperre unbemerkt umzulegen klärt das Wasser, ohne dass das Dorf den Grund erfährt. Sie mit Gewalt zu zerstören vertreibt ihn. Dann bleibt er eine Spur am Waldrand.",
    szenen: ["grovins-zisterne"],
    wissen: ["grovin_zisterne", "dennek_schuld"],
    figuren: ["Grovin", "Dennek", "Holm"],
  },
  {
    id: "brunnen-enden",
    text: "Bestechen endet als zwei Brunnen: es reicht nicht für alle, und der Held trägt das Wissen allein. Zerstören ohne entlarvten Dennek endet als Riss: das Wasser läuft, Grovin ist nur für den Tag fort. Verhandeln oder öffnen endet klar. War Dennek entlarvt, meidet er den Rand. Wurde Grovin ein Versprechen gegeben, steht die Zahl noch nicht in Holms Kasse.",
    szenen: ["zwei-brunnen-ein-dorf", "wasser-mit-einem-riss", "klares-wasser"],
    wissen: ["wasser_truebung", "dennek_schuld"],
    figuren: ["Grovin", "Dennek", "Witwe Kern", "Holm"],
  },
  {
    id: "muehle-still",
    text: "Das Rad schlägt, es mahlt nichts. Bertoks Hände sind mehlweiß, obwohl seit Tagen nichts gemahlen wurde. Schlechtes Korn und niedriger Wasserstand sind die Sätze für den ersten Besuch. Die Stille deckt die Kammer.",
    szenen: ["muehle-stumm", "bertok-am-mahlwerk"],
    wissen: ["muehle_stillstand"],
    figuren: ["Bertok"],
  },
  {
    id: "bertok-rennik",
    text: "Vertrauen oder Druck bringt Bertok auf einen Mann am Ufer, dann auf den Namen Rennik. Bei genug Vertrauen zieht er einen Schuldschein aus dem Mahlstein.",
    szenen: ["bertok-am-mahlwerk"],
    wissen: ["renniks_druck"],
    figuren: ["Bertok", "Rennik"],
  },
  {
    id: "lene-nische",
    text: "Lene ist Bertoks Tochter, nicht Sanna. Sie zählt dieselben Säcke und stellt sich vor die hintere Wand. Dahinter sitzen Yorwin, ihr Schwager, und zwei Kinder, Teil der Leute, die das Kesseljahr aus den Listen genommen hat. Lene führt ihre eigenen Namen. Ihre Schwester ist tot. Rennik weiß von ihnen. Deshalb steht die Mühle.",
    szenen: ["lene-in-der-kornkammer", "hinter-der-nische", "kornkammer"],
    wissen: ["fluechtlinge_muehle"],
    figuren: ["Lene", "Yorwin", "Bertok", "Rennik"],
  },
  {
    id: "rad-spur",
    text: "Am Rad liegen Schleifspuren eines gezogenen Sacks und ein Kinderschuh Richtung Ufer. Das widerspricht Bertoks Satz vom niedrigen Wasser.",
    szenen: ["wasserrad"],
    wissen: ["muehle_stillstand", "fluechtlinge_muehle"],
  },
  {
    id: "steg-waechter",
    text: "Der Steg ist morsch. Wer einbricht, fällt ins kalte Wasser und warnt den Wächter am Lagerhaus. Vorbei kommt man schleichend, mit Bertoks Namen oder im Kampf.",
    szenen: ["uferpfad", "morscher-steg", "lagerhaus-am-fluss"],
    wissen: ["renniks_druck"],
  },
  {
    id: "rennik-schein",
    text: "Rennik wiegt fremdes Korn an einem zu feinen Tisch. An der Wand hängt Bertoks Schuldschein. Er sagt den Namen nicht. Der Schein sagt ihn. Die zweite Schuld, die Rennik selbst in einem Nachbarort offen hat, hängt nicht offen daneben. Sie steckt in dem Papier, das Bertok im Mahlstein versteckt, und nur damit lässt er sich stellen.",
    szenen: ["renniks-kontor"],
    wissen: ["renniks_druck"],
    figuren: ["Rennik", "Bertok"],
  },
  {
    id: "muehle-enden",
    text: "Die Familie an Holm zu verraten gibt der Mühle Schutz und pünktliches Mehl. Bertok grüßt danach nur noch kühl. Den Schein zu stehlen oder Rennik mit seiner zweiten Schuld zu stellen löst die Mühle leise. Kampf jagt Rennik fort und lässt Blut am Steg zurück, über das das Dorf redet.",
    szenen: ["sicheres-mehl-leere-blicke", "mehl-mit-rauen-haenden", "stilles-mehl", "renniks-kontor"],
    wissen: ["muehle_stillstand", "renniks_druck", "fluechtlinge_muehle"],
    figuren: ["Bertok", "Lene", "Yorwin", "Rennik", "Holm"],
  },
  {
    id: "gasse-gemieden",
    text: "Hinter der Gerberei liegt die kürzeste Strecke zum Fluss, und niemand geht sie. Vahl will sie in einer Woche als Lagerhaus bebauen.",
    szenen: ["gasse-hub", "gerbereigasse"],
    wissen: ["gasse_leer"],
    figuren: ["Vahl"],
  },
  {
    id: "fenn-kesseljahr",
    text: "Fenn sitzt an der Kirchmauer, nicht am Brunnen, und trägt ein Stück Lattenzaun. Er erzählt nur, wenn man wartet. Als Kind hat er gesehen, wie Menschen aus der Gasse geholt wurden. Die Gasse wurde vernagelt. Das Korn kam nicht, das Fieber schon. Das Land wurde verteilt, bevor die Trauer kam. Vahls Großvater hat zuerst gezeichnet. Den ganzen Pakt sagt er nicht.",
    szenen: ["fenn", "fenn-an-der-kirchmauer", "gasse-kirche"],
    wissen: ["kesseljahr"],
    figuren: ["Fenn", "Vahl"],
  },
  {
    id: "gasse-spuren",
    text: "An einer Hauswand stehen Kratzspuren in Fünfergruppen. Der Ziehbrunnen ist zugewachsen. Unter einem losen Stein liegt ein Holzpferd ohne Beine.",
    szenen: ["gerbereigasse"],
    wissen: ["gasse_leer", "kesseljahr"],
  },
  {
    id: "vahl-ring",
    text: "Vahl dreht einen alten Siegelring und nennt den Bau Ordnung. Nach dem Großvater sagt er „Verantwortung“ und bricht ab, sobald es um die Aufteilung geht.",
    szenen: ["vahls-stube", "ratsherr-vahl"],
    wissen: ["kesseljahr"],
    figuren: ["Vahl"],
  },
  {
    id: "grete-ilse",
    text: "Grete ist fast blind, hört aber, ob jemand Zeit mitbringt. Drängen sperrt sie dauerhaft. Ilse Brandtner war Hebamme und hat die Toten des Kesseljahrs aufgeschrieben. Man fand sie im Mühlbach an einem Abend mit niedrigem Wasser. Die Liste liegt unter der Kirche: dritter Stein von links, Rücken zur Treppe, Wachs aus der Gerberei.",
    szenen: ["grete", "gretes-kate"],
    wissen: ["kesseljahr", "ilses_liste"],
    figuren: ["Grete", "Ilse Brandtner"],
  },
  {
    id: "gewoelbe-zugang",
    text: "Der Pfarrer lässt einen bittenden Helden leichter hinunter, wenn das Kirchensilber vom Weg dabei ist. Nachts schleichen geht. Scheitert es, merkt sich der Küster das Gesicht.",
    szenen: ["kirchengewoelbe", "unter-der-kirche"],
    wissen: ["ilses_liste", "artefakt_erhalten"],
    figuren: ["der Küster"],
  },
  {
    id: "ilse-liste",
    text: "Im Gewölbe liegt Ilses Wachstuch: Namen, Daten, die drei Familien Vahl, Dennek und Holm. Wer sich wehrte, hat keinen Eintrag. Andere wurden in die Mühle, in den Steinbruch und in die Lagerhäuser am Fluss verteilt. Vahls Großvater steht zuerst. Die Häuser der Gasse sind nur noch Fläche. Die Kirche hält, was das Amt nicht zählen will.",
    szenen: ["im-gewoelbe", "hinter-dem-stein"],
    wissen: ["ilses_liste"],
    figuren: ["Ilse Brandtner", "Vahl"],
  },
  {
    id: "liste-ausgang",
    text: "Mit der Liste: vor dem Rat vorlesen nimmt Vahl den Sitz, und Fenn wird gegrüßt. Holm die Liste zustecken lässt den Bauplatz aus „Ordnung“ liegen, die Wahrheit bleibt in der Schublade. Vahl unter vier Augen zwingen stoppt den Bau und lässt ihn im Amt. Die Liste für Fenn zu verbrennen löscht die Namen. Die Gasse wird bebaut. Fenn weiß nur, dass der Held es weiß.",
    szenen: ["vahls-stube-abend", "was-die-liste-wiegt", "ein-zweites-schweigen", "was-ausgegraben-bleibt", "ein-name-unter-vielen", "stille-rechnung"],
    wissen: ["ilses_liste", "kesseljahr"],
    figuren: ["Vahl", "Holm", "Fenn", "Ilse Brandtner"],
  },
  {
    id: "glockenweg-nutzung",
    text: "Der alte Weg über der Kapelle trug Salz, Mehl, Listen und, wenn es niemand sehen sollte, die, die nicht mehr gezählt wurden. Die Glocke ist das Signal dafür, kein Gebet. Heute bewachen die Banditen denselben Weg für jemanden im Dorf.",
    szenen: ["glockenweg", "wald"],
    wissen: ["glockenweg_bekannt"],
  },
  {
    id: "sanna-siegel",
    text: "Sanna hat eine versiegelte Nachricht für Lindendorf im Geröll verloren. Das rote Wachs ist keine Andacht. Es markiert, dass etwas entfernt wurde und nicht zurückkehren darf. Wer die Spur liest oder sie beruhigt und den Inhalt rekonstruiert, kennt im Wald später eine sichere Abzweigung.",
    szenen: ["sanna-die-botin", "glockenweg"],
    wissen: ["glockenweg_bekannt", "rotes_siegel_gesehen"],
    figuren: ["Sanna"],
  },
  {
    id: "jorren-salz",
    text: "Jorren haftet für das Salz, das im Geröll liegt. Stein weg oder Last sichern bringt etwas Gold und später Salzspuren im Wald, die den Transportweg der Bande zeigen.",
    szenen: ["jorren-im-geroell"],
    wissen: ["glockenweg_bekannt"],
    figuren: ["Jorren"],
  },
  {
    id: "glocke-vorwarnung",
    text: "Das morsche Seil der Kapellenglocke zu sichern lässt das Lager unvorbereitet. Scheitert es, läutet die Glocke, und die Banditen wissen, dass jemand kommt. Sie läutet nicht zum Gebet. Sie meldet eine Bewegung auf dem Weg.",
    szenen: ["die-kapellenglocke", "lager-hub"],
    wissen: ["glocke_vorteil", "banditen_gewarnt"],
  },
  {
    id: "pakt-grube",
    text: "Unter der Kapelle liegt keine geweihte Kammer, sondern eine Grube, älter als die Kirche. Ob dort vor dreißig Jahren etwas gebunden wurde, bleibt offen. Seitdem sterben weniger Menschen offiziell. Verschwinden tun mehr.",
    szenen: ["die-kapellenglocke"],
    wissen: ["kesseljahr", "glockenweg_bekannt"],
  },
  {
    id: "lager-kiste",
    text: "Im Steinbruch: Kess, Narbe, kein Wappen, stumpfe Würfel. Sie bewachen den alten Transportweg für jemanden im Dorf. Drei Zelte, ein Feuer, eine Kiste mit dem Siegel der Kirche von Lindendorf. Daneben ein Kinderumhang, den niemand anfasst. Unter dem Silber liegen Listen mit Namen, Mengen und Tagen. Manche Namen sind aus dem Dorf. Neben anderen steht nur ein Kreuz.",
    szenen: ["lager-hub", "lager-schleich", "lager-kampf"],
    wissen: ["banditen_bekannt"],
    figuren: ["Kess"],
  },
  {
    id: "lager-wege",
    text: "Schleichen birgt das Silber unbemerkt, leichter nach Maras Pfad und stiller Glocke. Reden: drohen vertreibt sie, Handel ist Gold gegen Abzug und eine Nacht Vorsprung, Lügen behauptet die Stadtwache. Kess glaubt an Galgen, nicht an Helden, und sagt, das hier habe vor dem Auftrag angefangen. Kampf ist Gedränge zwischen Zelt und Feuer. Kess flieht, wenn er verliert. Das Seitentor braucht den Schlüssel vom Fluss: Beute nehmen, Seile kappen oder Kess von hinten stellen. Er bittet dann um sein Leben und sagt, sein Tod gebe dem Dorf nichts zurück.",
    szenen: ["lager-hub", "lager-schleich", "lager-reden", "lager-kampf", "lager-tor"],
    wissen: ["banditen_bekannt", "glocke_vorteil", "banditen_gewarnt"],
    figuren: ["Kess", "Mara"],
  },
  {
    id: "lager-nachspiel",
    text: "Die Kiste ist leichter, als das Silber vermuten lässt. Im letzten Zelt liegen feuchte Decken und abgenutzte Stiefel, keine Schätze. Die Banditen leben kaum besser als die, die sie bestehlen.",
    szenen: ["lager-hub", "lager-tor"],
    figuren: ["Kess"],
  },
  {
    id: "muster",
    text: "Kein Heilungsende. Die Rückkehr zu Holm zeigt, welchen Zustand die Wege hinterlassen: Ordnung, bei der die Lüge bleibt; Namen, die laut werden; Grovin, der anerkannt wird; oder die Mühle, die ihre Leute weiter versteckt. Eine Reinigung gibt es nicht.",
    szenen: ["ende"],
    wissen: ["versorgung_muster", "kesseljahr", "ilses_liste"],
    figuren: ["Dennek", "Rennik", "Vahl", "Ilse Brandtner"],
  },
];

const NACH_SZENE = new Map<string, LoreFakt[]>();
for (const fakt of LORE) {
  for (const szene of fakt.szenen) {
    const liste = NACH_SZENE.get(szene) ?? [];
    liste.push(fakt);
    NACH_SZENE.set(szene, liste);
  }
}

export function loreFuerSzene(id?: string): LoreFakt[] {
  if (!id) return [];
  return NACH_SZENE.get(id) ?? [];
}

export function loreZeilen(id?: string): string[] {
  return loreFuerSzene(id).map((fakt) => fakt.text);
}

export function loreFuerWissen(key: KnowledgeKey): LoreFakt[] {
  return LORE.filter((fakt) => fakt.wissen?.includes(key));
}

export function loreFuerFigur(name: string): LoreFakt[] {
  const nadel = name.trim().toLocaleLowerCase("de-DE");
  if (!nadel) return [];
  return LORE.filter((fakt) => fakt.figuren?.some((figur) => figur.toLocaleLowerCase("de-DE") === nadel));
}
