type SceneLite = {
    id?: string;
    label?: string;
    continueLabel?: string;
    showProgress?: boolean;
};

type SceneControlsProps = {
    scene?: SceneLite;
    currentScene?: SceneLite;
    activeScene?: SceneLite;
    scenes?: SceneLite[];
    currentIndex?: number;
    activeIndex?: number;
    total?: number;
    onNext?: () => void;
    onPrevious?: () => void;
    onPrev?: () => void;
    [key: string]: unknown;
};

type ProgressIndicatorProps = {
    currentIndex: number;
    total: number;
};

function ProgressIndicator({ currentIndex, total }: ProgressIndicatorProps) {
    return (
        <div className="mx-auto flex min-h-9 w-fit items-center justify-center gap-2 rounded-full border border-[rgba(var(--color-gold-500-rgb),0.22)] bg-[rgba(var(--color-ivory-50-rgb),0.85)] px-4 backdrop-blur-xl">
            {Array.from({ length: total }).map((_, index) => {
                const isActive = index === currentIndex;

                return (
                    <span
                        key={index}
                        className={`h-3 rounded-full transition-all ${isActive
                                ? "w-8 bg-[var(--color-gold-500)] shadow-[0_0_18px_rgba(var(--color-gold-500-rgb),0.3)]"
                                : "w-3 bg-[rgba(var(--color-cathedral-900-rgb),0.24)]"
                            }`}
                    />
                );
            })}
        </div>
    );
}

export function SceneControls(props: SceneControlsProps) {
    const {
        scene,
        currentScene,
        activeScene,
        scenes,
        currentIndex,
        activeIndex,
        total,
        onNext,
        onPrevious,
        onPrev,
    } = props;

    const safeIndex =
        typeof currentIndex === "number"
            ? currentIndex
            : typeof activeIndex === "number"
                ? activeIndex
                : 0;

    const safeTotal =
        typeof total === "number"
            ? total
            : Array.isArray(scenes)
                ? scenes.length
                : 1;

    const safeScene =
        scene ?? currentScene ?? activeScene ?? scenes?.[safeIndex] ?? undefined;

    const showProgress = safeScene?.showProgress ?? true;
    const continueLabel = safeScene?.continueLabel ?? "Continue";

    const handlePrevious = onPrevious ?? onPrev;

    return (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[80] px-6 pb-6 safe-bottom">
            {showProgress && (
                <div className="pointer-events-auto mb-3">
                    <ProgressIndicator currentIndex={safeIndex} total={safeTotal} />
                </div>
            )}

            <div className="pointer-events-auto grid grid-cols-[3.5rem_1fr] items-center gap-3">
                <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Previous screen"
                    className="grid min-h-14 place-items-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.22)] bg-[rgba(var(--color-ivory-50-rgb),0.85)] text-lg text-[var(--color-cathedral-800)] backdrop-blur-xl transition hover:bg-[rgba(var(--color-gold-500-rgb),0.12)] hover:text-[var(--color-gold-600)] active:scale-95"
                >
                    ←
                </button>

                <button
                    type="button"
                    onClick={onNext}
                    className="flex min-h-14 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] px-6 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-cathedral-900)] shadow-[0_0_34px_rgba(245,214,137,0.26)] transition active:scale-[0.98]"
                >
                    {continueLabel}
                </button>
            </div>
        </div>
    );
}

export default SceneControls;