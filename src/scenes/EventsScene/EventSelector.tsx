import type { KeyboardEvent } from "react";
import type { WeddingData } from "../../types/wedding";

export type EventKey = keyof WeddingData["events"];

type EventSelectorProps = {
    activeKey: EventKey;
    onChange: (key: EventKey) => void;
};

export const eventOptions: { key: EventKey; label: string; shortLabel: string }[] = [
    { key: "engagement", label: "Engagement", shortLabel: "Engage" },
    { key: "ceremony", label: "Holy Matrimony", shortLabel: "Ceremony" },
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
            className="flex w-full gap-1 rounded-[22px] border border-[rgba(201,166,70,0.22)] bg-[rgba(6,27,24,0.45)] p-1.5 backdrop-blur-xl"
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
                        className={`relative flex min-h-[44px] flex-1 min-w-0 items-center justify-center overflow-hidden rounded-[16px] px-1 text-[10px] font-bold uppercase tracking-[0.06em] transition-all duration-500 ${isActive
                                ? "bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] text-[var(--color-cathedral-950)] shadow-[0_8px_20px_rgba(245,214,137,0.22)]"
                                : "text-[rgba(255,248,236,0.65)] hover:bg-[rgba(255,248,236,0.08)]"
                            }`}
                    >
                        {isActive && (
                            <span className="absolute inset-y-0 left-0 w-8 animate-[gold-shimmer_3s_var(--ease-sacred)_infinite] bg-white/15 blur-sm" />
                        )}
                        <span className="relative z-10 truncate text-center">{option.shortLabel}</span>
                    </button>
                );
            })}
        </div>
    );
}