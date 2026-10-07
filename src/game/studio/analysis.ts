import type { Entity, Workspace } from "./model";
import { MakerSceneDataSchema } from "./runner";

export type StudioChoiceGap = {
  sceneId: string;
  title: string;
  choiceIndex: number;
  label: string;
};

export type StudioFlowNode = {
  sceneId: string;
  title: string;
  isStart: boolean;
  incoming: number;
  outgoing: number;
  endings: number;
  missingTargets: number;
};

export type StudioFlowReport = {
  startSceneId: string | null;
  sceneCount: number;
  linkedChoices: number;
  endingChoices: number;
  incompleteChoices: StudioChoiceGap[];
  deadEndSceneIds: string[];
  unreachableSceneIds: string[];
  sourceSceneIds: string[];
  nodes: StudioFlowNode[];
};

function szenen(workspace: Workspace) {
  return workspace.entities.filter((entity): entity is Entity & { type: "szene" } => entity.type === "szene");
}

export function analyseWorkspaceFlow(workspace: Workspace): StudioFlowReport {
  const scenes = szenen(workspace);
  const sceneIds = new Set(scenes.map((scene) => scene.id));
  const scenesById = new Map(scenes.map((scene) => [scene.id, scene]));
  const validChoiceRelations = workspace.relations.filter((relation) => {
    if (relation.kind !== "choice" || !sceneIds.has(relation.toId)) return false;
    const source = scenesById.get(relation.fromId);
    if (!source) return false;
    const parsed = MakerSceneDataSchema.safeParse(source.data);
    const choiceIndex = relation.data.choiceIndex;
    return parsed.success
      && typeof choiceIndex === "number"
      && Number.isInteger(choiceIndex)
      && choiceIndex >= 0
      && choiceIndex < parsed.data.choices.length;
  });
  const eingehend = new Map<string, number>();
  const ausgehend = new Map<string, number>();
  const endings = new Map<string, number>();
  const luecken: StudioChoiceGap[] = [];
  let linkedChoices = 0;
  let endingChoices = 0;

  for (const relation of validChoiceRelations) {
    linkedChoices += 1;
    ausgehend.set(relation.fromId, (ausgehend.get(relation.fromId) ?? 0) + 1);
    eingehend.set(relation.toId, (eingehend.get(relation.toId) ?? 0) + 1);
  }

  for (const scene of scenes) {
    const parsed = MakerSceneDataSchema.safeParse(scene.data);
    if (!parsed.success) continue;
    const validEndings = parsed.data.endingChoices.filter(
      (choiceIndex) => choiceIndex < parsed.data.choices.length,
    );
    validEndings.forEach(() => {
      endingChoices += 1;
      endings.set(scene.id, (endings.get(scene.id) ?? 0) + 1);
    });
    parsed.data.choices.forEach((choice, index) => {
      const hatEnde = validEndings.includes(index);
      const hatZiel = validChoiceRelations.some(
        (relation) => relation.fromId === scene.id && relation.data.choiceIndex === index,
      );
      if (!hatEnde && !hatZiel) {
        luecken.push({
          sceneId: scene.id,
          title: scene.title,
          choiceIndex: index,
          label: choice,
        });
      }
    });
  }

  const reachable = new Set<string>();
  const stack = workspace.startSceneId && sceneIds.has(workspace.startSceneId) ? [workspace.startSceneId] : [];
  while (stack.length) {
    const sceneId = stack.pop()!;
    if (reachable.has(sceneId)) continue;
    reachable.add(sceneId);
    validChoiceRelations.forEach((relation) => {
      if (relation.fromId !== sceneId) return;
      stack.push(relation.toId);
    });
  }

  const nodes = scenes.map((scene) => ({
    sceneId: scene.id,
    title: scene.title,
    isStart: workspace.startSceneId === scene.id,
    incoming: eingehend.get(scene.id) ?? 0,
    outgoing: ausgehend.get(scene.id) ?? 0,
    endings: endings.get(scene.id) ?? 0,
    missingTargets: luecken.filter((gap) => gap.sceneId === scene.id).length,
  }));

  return {
    startSceneId: workspace.startSceneId && sceneIds.has(workspace.startSceneId) ? workspace.startSceneId : null,
    sceneCount: scenes.length,
    linkedChoices,
    endingChoices,
    incompleteChoices: luecken,
    deadEndSceneIds: nodes
      .filter((node) => !node.missingTargets && !node.outgoing && !node.endings)
      .map((node) => node.sceneId),
    unreachableSceneIds: workspace.startSceneId ? nodes.filter((node) => !reachable.has(node.sceneId)).map((node) => node.sceneId) : [],
    sourceSceneIds: nodes.filter((node) => !node.isStart && node.incoming === 0).map((node) => node.sceneId),
    nodes,
  };
}
