import { Input } from "@/components/ui/input";
import type { Entity, Workspace } from "@/game/studio/model";
import { lindendorfLibrary } from "@/game/studio/library";

const bibliothek = lindendorfLibrary();
const bildMedien = bibliothek.filter((entry) => entry.category === "medium" && entry.mediaType === "image");
const hintergruende = bildMedien.filter((entry) => entry.data.assetKind !== "portraet");
const portraets = bildMedien.filter((entry) => entry.data.assetKind === "portraet");
const audioMedien = bibliothek.filter((entry) => entry.category === "medium" && entry.mediaType === "audio");

type EditorProps = {
  entity: Entity;
  workspace: Workspace;
  onData: (patch: Record<string, unknown>) => void;
};

export function StudioEntityEditor({ entity, workspace, onData }: EditorProps) {
  switch (entity.type) {
    case "figur":
      return <FigurenEditor entity={entity} onData={onData} />;
    case "wissen":
      return <WissensEditor entity={entity} workspace={workspace} onData={onData} />;
    case "gegenstand":
      return <GegenstandsEditor entity={entity} onData={onData} />;
    case "ort":
      return <OrtsEditor entity={entity} workspace={workspace} onData={onData} />;
    case "medium":
      return <MedienEditor entity={entity} onData={onData} />;
    case "abschnitt":
      return <AbschnittEditor entity={entity} workspace={workspace} onData={onData} />;
    case "notiz":
      return <NotizEditor entity={entity} onData={onData} />;
    default:
      return <GenerischerEditor entity={entity} onData={onData} />;
  }
}

function FigurenEditor({ entity, onData }: Omit<EditorProps, "workspace">) {
  const data = entity.data;
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Feld label="Kennung" value={text(data.sourceId)} onChange={(value) => onData({ sourceId: value })} />
        <Auswahl
          label="Porträt"
          value={text(data.portraitSrc)}
          onChange={(value) => {
            const medium = portraets.find((entry) => entry.preview === value);
            onData({
              portraitSrc: value || undefined,
              portrait: typeof medium?.data.assetKey === "string" ? medium.data.assetKey : undefined,
            });
          }}
          optionen={portraets.map((entry) => ({ value: entry.preview ?? "", label: entry.title }))}
          leer="Kein Porträt"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Feld label="Rolle" value={text(data.rolle)} onChange={(value) => onData({ rolle: value })} />
        <Feld label="Ort" value={text(data.ort)} onChange={(value) => onData({ ort: value })} />
      </div>
      <Textfeld label="Weltbild" value={text(data.weltbild)} onChange={(value) => onData({ weltbild: value })} />
      <div className="grid gap-3 sm:grid-cols-2">
        <Textfeld label="Angst" value={text(data.angst)} onChange={(value) => onData({ angst: value })} />
        <Textfeld label="Ziel" value={text(data.ziel)} onChange={(value) => onData({ ziel: value })} />
      </div>
      <Auswahl
        label="Stimme"
        value={text(data.stimmeSrc)}
        onChange={(value) => onData({ stimmeSrc: value || undefined })}
        optionen={audioMedien.map((entry) => ({ value: entry.preview ?? "", label: `${entry.title} · ${entry.sourceLabel}` }))}
        leer="Keine Stimme"
      />
      <Textfeld label="Notizen" value={text(data.notizen)} onChange={(value) => onData({ notizen: value })} />
    </div>
  );
}

function WissensEditor({ entity, workspace, onData }: EditorProps) {
  const data = entity.data;
  const szenen = workspace.entities.filter((candidate) => candidate.type === "szene");
  const ausgewaehlt = list(data.sourceSceneIds);
  const textwert = text(data.text) || list(data.lines).join("\n\n");
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Feld label="Kennung" value={text(data.sourceId)} onChange={(value) => onData({ sourceId: value })} />
        <Auswahl
          label="Bild"
          value={text(data.bild)}
          onChange={(value) => onData({ bild: value || undefined })}
          optionen={hintergruende.map((entry) => ({ value: entry.preview ?? "", label: entry.title }))}
          leer="Kein Bild"
        />
      </div>
      <Auswahl
        label="Stimme"
        value={text(data.stimmeSrc)}
        onChange={(value) => onData({ stimmeSrc: value || undefined })}
        optionen={audioMedien.map((entry) => ({ value: entry.preview ?? "", label: `${entry.title} · ${entry.sourceLabel}` }))}
        leer="Keine Stimme"
      />
      <Textfeld
        label="Wissenstext"
        value={textwert}
        onChange={(value) =>
          onData({
            text: value,
            lines: absatzListe(value),
          })}
        minHeight="min-h-40"
      />
      <Szenenwahl
        label="An Szenen binden"
        szenen={szenen.map((szene) => ({ id: szene.id, title: szene.title }))}
        ausgewaehlt={ausgewaehlt}
        onToggle={(sceneId) => {
          const next = toggleListe(ausgewaehlt, sceneId);
          onData({ sourceSceneIds: next, szenen: next.join(", ") });
        }}
      />
    </div>
  );
}

function GegenstandsEditor({ entity, onData }: Omit<EditorProps, "workspace">) {
  const data = entity.data;
  return (
    <div className="space-y-4">
      <Feld label="Kennung" value={text(data.sourceId)} onChange={(value) => onData({ sourceId: value })} />
      <Textfeld label="Beschreibung" value={text(data.beschreibung)} onChange={(value) => onData({ beschreibung: value })} minHeight="min-h-32" />
    </div>
  );
}

function OrtsEditor({ entity, workspace, onData }: EditorProps) {
  const data = entity.data;
  const szenen = workspace.entities.filter((candidate) => candidate.type === "szene");
  const sceneIds = list(data.sceneIds);
  return (
    <div className="space-y-4">
      <Auswahl
        label="Ortsbild"
        value={text(data.bild)}
        onChange={(value) => onData({ bild: value || undefined })}
        optionen={hintergruende.map((entry) => ({ value: entry.preview ?? "", label: entry.title }))}
        leer="Kein Bild"
      />
      <Textfeld label="Beschreibung" value={text(data.beschreibung)} onChange={(value) => onData({ beschreibung: value })} minHeight="min-h-32" />
      <Szenenwahl
        label="Szenen dieses Orts"
        szenen={szenen.map((szene) => ({ id: szene.id, title: szene.title }))}
        ausgewaehlt={sceneIds}
        onToggle={(sceneId) => onData({ sceneIds: toggleListe(sceneIds, sceneId) })}
      />
    </div>
  );
}

function MedienEditor({ entity, onData }: Omit<EditorProps, "workspace">) {
  const data = entity.data;
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Auswahl
          label="Medientyp"
          value={text(data.mediaType) || "image"}
          onChange={(value) => onData({ mediaType: value })}
          optionen={[
            { value: "image", label: "Bild" },
            { value: "audio", label: "Audio" },
            { value: "video", label: "Video" },
          ]}
        />
        <Auswahl
          label="Rolle"
          value={text(data.assetKind) || "buehnenbild"}
          onChange={(value) => onData({ assetKind: value })}
          optionen={[
            { value: "buehnenbild", label: "Bühnenbild" },
            { value: "portraet", label: "Porträt" },
            { value: "stimme", label: "Stimme" },
            { value: "lage", label: "Lagebild" },
            { value: "zusatzmedium", label: "Zusatzmedium" },
          ]}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Feld label="Asset-Key" value={text(data.assetKey)} onChange={(value) => onData({ assetKey: value })} />
        <Feld label="Format" value={text(data.format)} onChange={(value) => onData({ format: value })} />
      </div>
      <Feld label="Quelle" value={text(data.src)} onChange={(value) => onData({ src: value })} />
      <Feld label="Asset-ID" value={text(data.assetId)} onChange={(value) => onData({ assetId: value })} />
    </div>
  );
}

function AbschnittEditor({ entity, workspace, onData }: EditorProps) {
  const data = entity.data;
  const sceneIds = list(data.sourceSceneIds);
  const fehlende = sceneIds.filter((sceneId) => !workspace.entities.some((candidate) => candidate.id === sceneId));
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Feld label="Quest" value={text(data.sourceQuest)} onChange={(value) => onData({ sourceQuest: value })} />
        <Feld label="Abschnitts-Kennung" value={text(data.sourceSectionId)} onChange={(value) => onData({ sourceSectionId: value })} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Feld label="Quell-Quest-ID" value={text(data.sourceQuestId)} onChange={(value) => onData({ sourceQuestId: value })} />
        <Feld
          label="Szenenzahl"
          value={String(number(data.sceneCount))}
          onChange={(value) => onData({ sceneCount: Math.max(0, Number.parseInt(value || "0", 10) || 0) })}
        />
      </div>
      <Textfeld
        label="Szenen in diesem Abschnitt · eine ID pro Zeile"
        value={sceneIds.join("\n")}
        onChange={(value) => {
          const ids = value.split("\n").map((item) => item.trim()).filter(Boolean);
          onData({ sourceSceneIds: ids, sceneCount: ids.length });
        }}
      />
      {fehlende.length ? <p className="rounded-sm border border-warn/30 bg-warn/10 px-3 py-2 text-xs text-warn">Noch nicht im Projekt: {fehlende.join(", ")}</p> : null}
    </div>
  );
}

function NotizEditor({ entity, onData }: Omit<EditorProps, "workspace">) {
  return <Textfeld label="Text" value={text(entity.data.text)} onChange={(value) => onData({ text: value })} minHeight="min-h-48" />;
}

function GenerischerEditor({ entity, onData }: Omit<EditorProps, "workspace">) {
  return (
    <div className="space-y-3">
      {Object.entries(entity.data).map(([feld, wert]) => {
        const istListe = Array.isArray(wert);
        return (
          <Textfeld
            key={feld}
            label={feld}
            value={istListe ? wert.join("\n") : typeof wert === "string" ? wert : JSON.stringify(wert, null, 2)}
            onChange={(value) => onData({ [feld]: istListe ? value.split("\n").filter(Boolean) : value })}
          />
        );
      })}
    </div>
  );
}

function Feld({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-xs uppercase tracking-wide text-subtle-fg">{label}</span>
      <Input value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function Auswahl({
  label,
  value,
  onChange,
  optionen,
  leer = "Keine Auswahl",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  optionen: Array<{ value: string; label: string }>;
  leer?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-xs uppercase tracking-wide text-subtle-fg">{label}</span>
      <select className="h-11 w-full rounded-sm border border-border bg-surface px-3 text-sm" value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">{leer}</option>
        {optionen.map((option) => <option key={`${label}-${option.value || option.label}`} value={option.value}>{option.label}</option>)}
      </select>
    </label>
  );
}

function Textfeld({
  label,
  value,
  onChange,
  minHeight = "min-h-24",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  minHeight?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-xs uppercase tracking-wide text-subtle-fg">{label}</span>
      <textarea
        className={`${minHeight} w-full rounded-sm border border-border bg-ink/70 p-3 text-sm leading-relaxed text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function Szenenwahl({
  label,
  szenen,
  ausgewaehlt,
  onToggle,
}: {
  label: string;
  szenen: Array<{ id: string; title: string }>;
  ausgewaehlt: string[];
  onToggle: (sceneId: string) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-wide text-subtle-fg">{label}</p>
      <div className="flex flex-wrap gap-2">
        {szenen.length === 0 ? <span className="text-sm text-muted-fg">Lege zuerst Studioszenen an.</span> : null}
        {szenen.map((scene) => {
          const aktiv = ausgewaehlt.includes(scene.id);
          return (
            <button
              key={scene.id}
              type="button"
              className={`rounded-sm border px-3 py-1.5 text-left text-xs ${aktiv ? "border-accent bg-accent text-accent-fg" : "border-border text-muted-fg hover:bg-surface-2"}`}
              onClick={() => onToggle(scene.id)}
            >
              {scene.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function text(value: unknown) {
  return typeof value === "string" ? value : "";
}

function list(value: unknown) {
  return Array.isArray(value) ? value.filter((entry): entry is string => typeof entry === "string" && entry.trim().length > 0) : [];
}

function number(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function absatzListe(value: string) {
  return value.split(/\n\s*\n/).map((absatz) => absatz.replace(/\n/g, " ").trim()).filter(Boolean);
}

function toggleListe(liste: string[], id: string) {
  return liste.includes(id) ? liste.filter((eintrag) => eintrag !== id) : [...liste, id];
}
