import { INTRO_ARTIFACT_CONTENT, INTRO_WEG_CONTENT } from "../content";
import { karte, type SzeneJson, type TeilJson } from "./schema";
import { wissenDatei } from "./wissen";

export const INTRO_TAL = karte("intro-tal", "Das Tal", "forest", [
  "Der Wald steht dicht an den Hängen, so eng, dass sich die Stämme beinahe berühren und der Weg zu einem schmalen Streifen nasser Erde wird, der sich zwischen ihnen hindurchzwängt wie ein zögerlicher Gedanke.",
  "Zwischen den Bäumen hängen Nebelfetzen, die sich nicht auflösen wollen, so als hielte sie etwas dort fest, das keinen Namen trägt.",
  "Weiter unten steigt Rauch, senkrecht und ohne Neigung — kein Wind fasst ihn an, und ein Rauch, der so gerade steht, ist selten ein gutes Zeichen.",
  "Jemand hat die Felder abgeerntet. Jemand anderes hat vergessen, die Zäune danach zu reparieren, als hätte die Ernte alle Kraft verbraucht, die für die Zukunft übrig gewesen wäre.",
  "Am Waldrand liegen Bündel aus nassem Reisig, sorgfältig geschichtet und doch unberührt, als habe jemand mit dem Sammeln begonnen und mitten im Werk den Grund dafür vergessen. Daneben steckt ein einzelner Kinderschuh im Schlamm.",
  "Kein Vogel ruft. Weit oberhalb des Weges bricht ein Ast, und danach wartet das Tal wieder — geduldig, fast höflich — auf ein Geräusch von dir.",
  "Du verstehst noch nicht, was hier geschehen ist. Aber du erkennst die Handschrift einer Gegend, in der Menschen gelernt haben, ihre Fragen leise zu stellen, aus Angst, eine Antwort könnte lauter zurückkommen als die Frage selbst.",
]);

export const INTRO_HANG = karte("intro-hang", "Am Hang", "chapel", [
  "Oberhalb des Dorfes schneidet ein alter Weg den Hang, hart und schmal. Der Schotter unter deinen Sohlen knirscht nass und gibt bei jedem Schritt ein wenig nach, als traue er deinem Gewicht nicht.",
  "Dort oben steht eine Kapelle, ihr Dach dunkler als der Himmel darüber, als hätte man das Holz eigens gegen das Licht gewählt.",
  "Eine kleine Glocke bewegt sich einmal über dem Geröll. Du kennst den Weg noch nicht. Du merkst dir nur den Ton.",
  "Unterhalb der Kapelle klafft ein trockener Graben im Hang. Einst muss dort Wasser gelaufen sein. Jetzt liegen darin die Knochen von Tieren, ausgebleicht und ordentlich nebeneinander gereiht, als hätte sie jemand dort abgelegt, statt sie verwesen zu lassen.",
  "Über dem Türsturz klebt ein Streifen rotes Wachs, frisch gebrochen — dasselbe Zeichen, das du unten im Dorf wiederfinden wirst. Jemand markiert in dieser Gegend Türen, die niemand öffnen soll.",
  "Die Glocke schweigt wieder. Trotzdem hast du das Gefühl, dass etwas im Tal jetzt weiß, dass du angekommen bist, und dass es diese Kenntnis nicht vergessen wird, nur weil du weitergehst.",
]);

export const INTRO_LINDENDORF = karte("intro-lindendorf", "Lindendorf", "village", [
  "Häuser drücken sich aneinander, als könnten sie so wärmer bleiben, ihre Dächer tief gezogen wie Kapuzen über gesenkte Köpfe.",
  "Am Brunnen halten Frauen die Arme vor der Brust verschränkt und sehen dir nach, bis du vorbei bist — nicht neugierig, sondern prüfend, wie man ein Wetter prüft, das umschlagen könnte.",
  "In der Taverne bläst jemand hastig eine Lampe aus, als koste jede Flamme mehr, als sie an Licht zurückgibt.",
  "Auch über der Rathaustür klebt ein Zeichen aus rotem Wachs, wie du es schon am Hang gesehen hast. Hier ist es alt und unversehrt, ein Siegel, das noch niemand zu brechen wagte.",
  "Ein Gerber deckt seine Ware mit einer zu kleinen Plane ab; ein Teil des Leders bleibt im Regen liegen. Er sieht kurz hin und wendet sich ab — es lohnt sich längst nicht mehr, es zu retten.",
  "Hinter einem offenen Fenster hustet ein alter Mann. Eine Stimme zählt dahinter Münzen, so leise, als könnte lautes Zählen sie kosten.",
  "Lindendorf wirkt nicht verlassen. Es wirkt schlimmer: bewohnt von Menschen, die sich daran gewöhnt haben, dass niemand kommt — und die sich jetzt fragen, was es bedeutet, dass doch jemand gekommen ist.",
]);

export const INTRO_ANKUNFT = karte("intro-ankunft", "Ankunft", "village", [
  "Du bleibst am Rand des Platzes stehen. Niemand fragt, wer du bist.",
  "Das ist zunächst höflich. Dann merkst du, dass es Vorsicht ist — eine Höflichkeit, die man sich antrainiert, wenn Fragen in der Vergangenheit selten gut ausgegangen sind.",
  "Du könntest weitergehen. Der Weg nach Osten führt am Steinbruch vorbei, und aus dem Steinbruch steigt Rauch, der so gerade steht wie der im Tal.",
  "In Lindendorf wartet niemand auf einen Helden. Trotzdem beginnt hier dein Weg, in einem Dorf, das sich längst entschieden hat, keine Wunder mehr zu erwarten.",
  "Hinter dir schließt sich das Tal wie ein nasser Kragen. Vor dir liegen Türen, hinter denen jeder etwas verloren hat und nicht jeder bereit ist, es beim Namen zu nennen.",
  "Du spürst die Blicke erst, als sie aufhören. Die Leute hier sehen Fremde nicht lange an; sie wissen, dass man von Gesichtern allein nicht satt wird.",
  "Am Brunnen schlägt ein Tropfen auf Stein. Dann noch einer. So beginnt in diesem Dorf vieles: nicht mit einem Ruf, sondern mit etwas, das nicht aufhört.",
]);

function ausWissen(id: string, art: string) {
  const datei = wissenDatei(id);
  return karte(id, datei?.title ?? id, art, datei?.lines ?? []);
}

export const INTRO_RAUCH = ausWissen("intro-rauch", "forest");
export const INTRO_KINDERSCHUH = ausWissen("intro-kinderschuh", "forest");
export const INTRO_SIEGEL = ausWissen("intro-siegel", "evidence");
export const INTRO_GRABEN = ausWissen("intro-graben", "ditch");

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
  teil("tal", "Tal und Dorf", [
    INTRO_TAL,
    INTRO_RAUCH,
    INTRO_KINDERSCHUH,
    INTRO_HANG,
    INTRO_SIEGEL,
    INTRO_GRABEN,
    INTRO_LINDENDORF,
    INTRO_ANKUNFT,
  ]),
];
