import type { SceneDefinition, SceneId } from "../types/scene";

export function getSceneIndex(scenes: SceneDefinition[], sceneId: SceneId) {
    return scenes.findIndex((scene) => scene.id === sceneId);
}

export function getNextSceneId(scenes: SceneDefinition[], currentSceneId: SceneId): SceneId {
    const currentIndex = getSceneIndex(scenes, currentSceneId);
    const nextIndex = currentIndex + 1;

    if (nextIndex >= scenes.length) {
        return scenes[0].id;
    }

    return scenes[nextIndex].id;
}

export function getPreviousSceneId(
    scenes: SceneDefinition[],
    currentSceneId: SceneId,
): SceneId {
    const currentIndex = getSceneIndex(scenes, currentSceneId);
    const previousIndex = currentIndex - 1;

    if (previousIndex < 0) {
        return scenes[0].id;
    }

    return scenes[previousIndex].id;
}