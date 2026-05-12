import { weddingData } from "../../data/weddingData";
import { useSceneNavigation } from "../../hooks/useSceneNavigation";
import { ExperienceStage } from "./ExperienceStage";
import { SceneRenderer } from "./SceneRenderer";
import { SceneControls } from "../navigation/SceneControls";

export function WeddingExperience() {
    const navigation = useSceneNavigation("gate");

    return (
        <ExperienceStage>
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
        </ExperienceStage>
    );
}