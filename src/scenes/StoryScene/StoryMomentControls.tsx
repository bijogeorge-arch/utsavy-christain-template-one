type StoryMomentControlsProps = {
    activeIndex: number;
    total: number;
    onPrevious: () => void;
    onNext: () => void;
};

export function StoryMomentControls({
    activeIndex,
    total,
    onPrevious,
    onNext,
}: StoryMomentControlsProps) {
    return (
        <div className="mt-3 w-full">
            <div className="grid grid-cols-[3.25rem_1fr_3.25rem] items-center gap-3">
                <button
                    type="button"
                    onClick={onPrevious}
                    aria-label="Previous story moment"
                    className="grid min-h-12 place-items-center rounded-full border border-[rgba(201,166,70,0.36)] bg-[rgba(6,27,24,0.56)] text-lg text-[var(--color-gold-300)] backdrop-blur-xl transition active:scale-95"
                >
                    ←
                </button>

                <div className="grid min-h-12 place-items-center rounded-full border border-[rgba(201,166,70,0.28)] bg-[rgba(6,27,24,0.5)] px-4 backdrop-blur-xl">
                    <p className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.24em] text-[rgba(255,248,236,0.68)]">
                        Moment {activeIndex + 1} of {total}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onNext}
                    aria-label="Next story moment"
                    className="grid min-h-12 place-items-center rounded-full border border-[rgba(201,166,70,0.36)] bg-[rgba(6,27,24,0.56)] text-lg text-[var(--color-gold-300)] backdrop-blur-xl transition active:scale-95"
                >
                    →
                </button>
            </div>
        </div>
    );
}