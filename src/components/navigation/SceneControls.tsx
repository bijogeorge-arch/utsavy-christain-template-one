import type { SceneDefinition, SceneId } from "../../types/scene";
import { ContinueButton } from "./ContinueButton";
import { ProgressDots } from "./ProgressDots";

type SceneControlsProps = {
    scenes: SceneDefinition[];
    activeScene: SceneDefinition;
    activeIndex: number;
    onNext: () => void;
    onPrevious: () => void;
    onDotClick: (sceneId: SceneId) => void;
};

export function SceneControls({
    scenes,
    activeScene,
    activeIndex,
    onNext,
    onPrevious,
    onDotClick,
}: SceneControlsProps) {
    const isGate = activeScene.id === "gate";

    if (isGate) {
        return null;
    }

    return (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 flex flex-col items-center gap-4 px-6 pb-5 safe-bottom">
            <ProgressDots scenes={scenes} activeIndex={activeIndex} onDotClick={onDotClick} />

            <div className="pointer-events-auto flex w-full max-w-[360px] items-center gap-3">
                <button
                    type="button"
                    onClick={onPrevious}
                    className="grid min-h-12 min-w-12 place-items-center rounded-full border border-[rgba(201,166,70,0.35)] bg-[rgba(6,27,24,0.72)] text-[var(--color-gold-300)] backdrop-blur-xl transition hover:bg-[rgba(201,166,70,0.14)]"
                    aria-label="Previous scene"
                >
                    ←
                </button>

                <ContinueButton label={activeScene.continueLabel} onClick={onNext} />
            </div>
        </div>
    );
}