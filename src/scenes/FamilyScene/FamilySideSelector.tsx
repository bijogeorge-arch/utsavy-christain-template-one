import type { KeyboardEvent } from "react";

type FamilySide = "bride" | "groom";

type FamilySideSelectorProps = {
    activeSide: FamilySide;
    onChange: (side: FamilySide) => void;
};

export function FamilySideSelector({ activeSide, onChange }: FamilySideSelectorProps) {
    const sides: { id: FamilySide; label: string }[] = [
        { id: "bride", label: "Bride's Family" },
        { id: "groom", label: "Groom's Family" },
    ];

    function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, side: FamilySide) {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            const nextSide = side === "bride" ? "groom" : "bride";
            onChange(nextSide);
            document.getElementById(`family-side-${nextSide}`)?.focus();
        }
    }

    return (
        <div
            role="tablist"
            className="flex w-full gap-1.5 rounded-[22px] border border-[rgba(201,166,70,0.22)] bg-[rgba(6,27,24,0.45)] p-1.5 backdrop-blur-xl"
        >
            {sides.map((side) => {
                const isActive = activeSide === side.id;

                return (
                    <button
                        key={side.id}
                        id={`family-side-${side.id}`}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => onChange(side.id)}
                        onKeyDown={(event) => handleKeyDown(event, side.id)}
                        className={`relative flex min-h-[48px] flex-1 items-center justify-center overflow-hidden rounded-[16px] px-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-500 ${isActive
                                ? "bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] text-[var(--color-cathedral-950)] shadow-[0_8px_24px_rgba(245,214,137,0.24)]"
                                : "text-[rgba(255,248,236,0.68)] hover:bg-[rgba(255,248,236,0.08)]"
                            }`}
                    >
                        {isActive && (
                            <span className="absolute inset-y-0 left-0 w-10 animate-[gold-shimmer_3s_var(--ease-sacred)_infinite] bg-white/20 blur-sm" />
                        )}
                        <span className="relative z-10">{side.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
