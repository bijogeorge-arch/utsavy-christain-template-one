import { weddingData as initialWeddingData } from "../../data/weddingData";
import { useSceneNavigation } from "../../hooks/useSceneNavigation";
import { useSwipeGesture } from "../../hooks/useSwipeGesture";
import { ExperienceStage } from "./ExperienceStage";
import { SceneRenderer } from "./SceneRenderer";
import { SceneControls } from "../navigation/SceneControls";
import { MobileFrame } from "../layout/MobileFrame";
import { AudioPlayer } from "../ui/AudioPlayer";
import { useMemo } from "react";

export function WeddingExperience() {
    const initialScene = useMemo(() => {
        const params = new URLSearchParams(window.location.search);
        const sceneParam = params.get("scene");
        return (sceneParam as any) || "gate";
    }, []);

    const navigation = useSceneNavigation(initialScene);

    const weddingData = useMemo(() => {
        const params = new URLSearchParams(window.location.search);
        const guestParam = params.get("guest") || params.get("name") || params.get("g") || params.get("n");
        if (guestParam) {
            return {
                ...initialWeddingData,
                guestName: decodeURIComponent(guestParam.trim()),
            };
        }
        return {
            ...initialWeddingData,
            guestName: "Guest",
        };
    }, []);

    const swipeHandlers = useSwipeGesture({
        onSwipeUp: navigation.goNext,
        onSwipeDown: navigation.goPrevious,
        onSwipeLeft: navigation.goNext,
        onSwipeRight: navigation.goPrevious,
    });

    return (
        <ExperienceStage>
            <MobileFrame>
                <div
                    className="h-full w-full"
                    onTouchStart={swipeHandlers.onTouchStart}
                    onTouchEnd={swipeHandlers.onTouchEnd}
                >
                    {/* Render AudioPlayer floating inside the viewport */}
                    {navigation.activeSceneId !== "gate" && <AudioPlayer />}

                    <SceneRenderer
                        sceneId={navigation.activeSceneId}
                        data={weddingData}
                        onNext={navigation.goNext}
                    />

                    <SceneControls
                        scenes={navigation.scenes}
                        activeScene={navigation.activeScene}
                        activeIndex={navigation.activeIndex}
                        onNext={navigation.goNext}
                        onPrevious={navigation.goPrevious}
                        onDotClick={navigation.goToScene}
                    />
                </div>
            </MobileFrame>
        </ExperienceStage>
    );
}