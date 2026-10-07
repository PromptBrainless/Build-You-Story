import assert from "node:assert/strict";
import test from "node:test";
import { analyseWorkspaceFlow } from "./analysis.ts";
import { validateWorkspace, type Workspace } from "./model.ts";

function workspaceFixture(): Workspace {
  return {
    id: "workspace-1",
    name: "Maker",
    schemaVersion: 1,
    createdAt: "2026-09-27T00:00:00.000Z",
    updatedAt: "2026-09-27T00:00:00.000Z",
    startSceneId: "scene-a",
    entities: [
      {
        id: "scene-a",
        workspaceId: "workspace-1",
        type: "szene",
        schemaVersion: 1,
        title: "Start",
        data: {
          art: "village",
          lines: ["Du beginnst."],
          choices: ["Weiter", "Später"],
          endingChoices: [],
        },
        tags: [],
        revision: 0,
        createdAt: "2026-09-27T00:00:00.000Z",
        updatedAt: "2026-09-27T00:00:00.000Z",
      },
      {
        id: "scene-b",
        workspaceId: "workspace-1",
        type: "szene",
        schemaVersion: 1,
        title: "Ende",
        data: {
          art: "village",
          lines: ["Hier endet der Weg."],
          choices: ["Schließen"],
          endingChoices: [0],
        },
        tags: [],
        revision: 0,
        createdAt: "2026-09-27T00:00:00.000Z",
        updatedAt: "2026-09-27T00:00:00.000Z",
      },
      {
        id: "scene-c",
        workspaceId: "workspace-1",
        type: "szene",
        schemaVersion: 1,
        title: "Abseits",
        data: {
          art: "village",
          lines: ["Niemand findet diese Szene."],
          choices: ["Offen"],
          endingChoices: [],
        },
        tags: [],
        revision: 0,
        createdAt: "2026-09-27T00:00:00.000Z",
        updatedAt: "2026-09-27T00:00:00.000Z",
      },
      {
        id: "figur-1",
        workspaceId: "workspace-1",
        type: "figur",
        schemaVersion: 1,
        title: "Neue Figur",
        data: { rolle: "", ort: "", weltbild: "", angst: "", ziel: "" },
        tags: [],
        revision: 0,
        createdAt: "2026-09-27T00:00:00.000Z",
        updatedAt: "2026-09-27T00:00:00.000Z",
      },
      {
        id: "wissen-1",
        workspaceId: "workspace-1",
        type: "wissen",
        schemaVersion: 1,
        title: "Offene Tafel",
        data: {},
        tags: [],
        revision: 0,
        createdAt: "2026-09-27T00:00:00.000Z",
        updatedAt: "2026-09-27T00:00:00.000Z",
      },
    ],
    relations: [
      {
        id: "relation-1",
        workspaceId: "workspace-1",
        fromId: "scene-a",
        toId: "scene-b",
        kind: "choice",
        data: { choiceIndex: 0 },
      },
    ],
  };
}

test("Studiofluss meldet offene und unerreichbare Szenen", () => {
  const report = analyseWorkspaceFlow(workspaceFixture());
  assert.equal(report.sceneCount, 3);
  assert.equal(report.linkedChoices, 1);
  assert.equal(report.endingChoices, 1);
  assert.deepEqual(report.unreachableSceneIds, ["scene-c"]);
  assert.deepEqual(report.sourceSceneIds, ["scene-c"]);
  assert.equal(report.incompleteChoices.length, 2);
  assert.equal(report.incompleteChoices[0]?.sceneId, "scene-a");
});

test("Workspace-Prüfung ergänzt Studio-spezifische Warnungen", () => {
  const result = validateWorkspace(workspaceFixture());
  const meldungen = result.findings.map((finding) => finding.message);
  assert.ok(meldungen.includes("Figur braucht noch rolle."));
  assert.ok(meldungen.includes("Wissenstafel hat noch keinen vollständigen Text."));
  assert.ok(meldungen.includes("Wissenstafel ist noch an keine Szene gebunden."));
});

test("Studiofluss ignoriert veraltete Wahl- und Endwahlpositionen", () => {
  const workspace = workspaceFixture();
  const start = workspace.entities.find((entity) => entity.id === "scene-a");
  const ending = workspace.entities.find((entity) => entity.id === "scene-b");
  assert.ok(start && ending);
  start.data.choices = ["Weiter"];
  ending.data.endingChoices = [0, 1];
  workspace.relations.push({
    id: "stale-relation",
    workspaceId: workspace.id,
    fromId: "scene-a",
    toId: "scene-c",
    kind: "choice",
    data: { choiceIndex: 1 },
  });

  const report = analyseWorkspaceFlow(workspace);
  assert.equal(report.linkedChoices, 1);
  assert.equal(report.endingChoices, 1);
  assert.deepEqual(report.unreachableSceneIds, ["scene-c"]);
});

test("Figurenwarnung akzeptiert das gespeicherte role-Feld", () => {
  const workspace = workspaceFixture();
  const figure = workspace.entities.find((entity) => entity.id === "figur-1");
  assert.ok(figure);
  figure.data.role = "Figur aus Lindendorf";

  const findings = validateWorkspace(workspace).findings;
  assert.ok(!findings.some((finding) => finding.message === "Figur braucht noch rolle."));
});
