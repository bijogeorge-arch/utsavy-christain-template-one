import type { SceneDefinition, SceneId } from "../../types/scene";

type ProgressDotsProps = {
    scenes: SceneDefinition[];
    activeIndex: number;
    onDotClick: (sceneId: SceneId) => void;
};

export function ProgressDots({ scenes, activeIndex, onDotClick }: ProgressDotsProps) {
    return (
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-[rgba(var(--color-gold-500-rgb),0.22)] bg-[rgba(var(--color-ivory-50-rgb),0.85)] px-3 py-2 backdrop-blur-xl">
            {scenes.slice(1).map((scene, index) => {
                const actualIndex = index + 1;
                const isActive = activeIndex === actualIndex;

                return (
                    <button
                        key={scene.id}
                        type="button"
                        onClick={() => onDotClick(scene.id)}
                        className={`h-2 rounded-full transition-all ${isActive
                                ? "w-6 bg-[var(--color-gold-500)]"
                                : "w-2 bg-[rgba(var(--color-cathedral-900-rgb),0.24)]"
                            }`}
                        aria-label={`Go to ${scene.label}`}
                    />
                );
            })}
        </div>
    );
}