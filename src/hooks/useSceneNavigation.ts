import { useCallback, useMemo, useState } from "react";
import { scenes } from "../config/scenes";
import { getNextSceneId, getPreviousSceneId, getSceneIndex } from "../lib/scene";
import type { SceneId } from "../types/scene";

export function useSceneNavigation(initialScene: SceneId = "gate") {
    const [activeSceneId, setActiveSceneId] = useState<SceneId>(initialScene);

    const activeScene = useMemo(
        () => scenes.find((scene) => scene.id === activeSceneId) ?? scenes[0],
        [activeSceneId],
    );

    const activeIndex = useMemo(
        () => getSceneIndex(scenes, activeSceneId),
        [activeSceneId],
    );

    const goNext = useCallback(() => {
        setActiveSceneId((current) => getNextSceneId(scenes, current));
    }, []);

    const goPrevious = useCallback(() => {
        setActiveSceneId((current) => getPreviousSceneId(scenes, current));
    }, []);

    const goToScene = useCallback((sceneId: SceneId) => {
        setActiveSceneId(sceneId);
    }, []);

    return {
        scenes,
        activeScene,
        activeSceneId,
        activeIndex,
        goNext,
        goPrevious,
        goToScene,
    };
}