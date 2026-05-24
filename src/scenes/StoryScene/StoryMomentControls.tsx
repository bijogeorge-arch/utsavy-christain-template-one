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
        <div className="mt-4 w-full">
            <div className="grid grid-cols-[3rem_1fr_3rem] items-center gap-3">
                <button
                    type="button"
                    onClick={onPrevious}
                    aria-label="Previous story moment"
                    className="grid min-h-11 place-items-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.36)] bg-[rgba(var(--color-ivory-50-rgb),0.76)] text-lg text-[var(--color-gold-700)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-gold-500)] hover:bg-[rgba(var(--color-gold-500-rgb),0.08)] hover:text-[var(--color-gold-700)] active:scale-90 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                >
                    ←
                </button>

                <div className="grid min-h-11 place-items-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.28)] bg-[rgba(var(--color-ivory-50-rgb),0.76)] px-4 backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                    <p className="font-[var(--font-sacred)] text-[9.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-cathedral-900)]">
                        Moment {activeIndex + 1} of {total}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onNext}
                    aria-label="Next story moment"
                    className="grid min-h-11 place-items-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.36)] bg-[rgba(var(--color-ivory-50-rgb),0.76)] text-lg text-[var(--color-gold-700)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-gold-500)] hover:bg-[rgba(var(--color-gold-500-rgb),0.08)] hover:text-[var(--color-gold-700)] active:scale-90 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                >
                    →
                </button>
            </div>
        </div>
    );
}