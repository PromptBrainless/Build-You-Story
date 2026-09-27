import { rohQuellen, rohSzenen } from "./json/baum";
import { vergleicheText } from "./textvergleich";

/** Karte, KI-Kanon und Volltext — die Quellen, aus denen der Spieltext gewählt wird. */
export function vergleicheLaufzeit() {
  return rohSzenen().map(({ id, titel }) => {
    const quellen = rohQuellen(id);
    return vergleicheText(id, titel, [
      { quelle: "Karte", lines: quellen.karte },
      { quelle: "KI", lines: quellen.ki },
      { quelle: "Volltext", lines: quellen.volltext },
    ]);
  });
}
