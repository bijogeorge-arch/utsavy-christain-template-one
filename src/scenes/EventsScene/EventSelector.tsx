import type { KeyboardEvent } from "react";

export type EventKey = "engagement" | "ceremony" | "minnu" | "reception";

type EventSelectorProps = {
    activeKey: EventKey;
    onChange: (key: EventKey) => void;
};

export const eventOptions: { key: EventKey; label: string; shortLabel: string }[] = [
    { key: "engagement", label: "Engagement", shortLabel: "Engage" },
    { key: "ceremony", label: "Holy Matrimony", shortLabel: "Ceremony" },
    { key: "minnu", label: "Minnu Ritual", shortLabel: "Minnu" },
    { key: "reception", label: "Reception", shortLabel: "Reception" },
];

export function EventSelector({ activeKey, onChange }: EventSelectorProps) {
    function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, key: EventKey) {
        const currentIndex = eventOptions.findIndex((option) => option.key === key);

        if (event.key === "ArrowRight") {
            event.preventDefault();
            const next = eventOptions[(currentIndex + 1) % eventOptions.length];
            onChange(next.key);
            document.getElementById(`event-tab-${next.key}`)?.focus();
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            const previous =
                eventOptions[(currentIndex - 1 + eventOptions.length) % eventOptions.length];
            onChange(previous.key);
            document.getElementById(`event-tab-${previous.key}`)?.focus();
        }
    }

    return (
        <div
            role="tablist"
            aria-label="Wedding events"
            className="flex w-full gap-0.5 sm:gap-1 rounded-[18px] sm:rounded-[22px] border border-[rgba(var(--color-gold-500-rgb),0.22)] bg-[rgba(var(--color-ivory-50-rgb),0.65)] p-1 sm:p-1.5 backdrop-blur-xl overflow-x-auto no-scrollbar"
        >
            {eventOptions.map((option) => {
                const isActive = activeKey === option.key;

                return (
                    <button
                        key={option.key}
                        id={`event-tab-${option.key}`}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`event-panel-${option.key}`}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => onChange(option.key)}
                        onKeyDown={(event) => handleKeyDown(event, option.key)}
                        className={`relative flex flex-1 min-h-[36px] sm:min-h-[44px] px-1.5 sm:px-4 items-center justify-center overflow-hidden rounded-[12px] sm:rounded-[16px] text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.04em] sm:tracking-[0.06em] transition-all duration-500 ${isActive
                                ? "bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] text-[var(--color-cathedral-950)] shadow-[0_8px_20px_rgba(var(--color-gold-500-rgb),0.18)]"
                                : "text-[var(--color-cathedral-800)]/60 hover:bg-[rgba(var(--color-gold-500-rgb),0.08)]"
                            }`}
                    >
                        {isActive && (
                            <span className="absolute inset-y-0 left-0 w-8 animate-[gold-shimmer_3s_var(--ease-sacred)_infinite] bg-white/15 blur-sm" />
                        )}
                        <span className="relative z-10 whitespace-nowrap text-center">{option.shortLabel}</span>
                    </button>
                );
            })}
        </div>
    );
}