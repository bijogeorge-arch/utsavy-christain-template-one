import type { EventKey } from "../../scenes/EventsScene/EventSelector";

type EventTimelineSvgProps = {
    activeKey: EventKey;
};

const positions: Record<EventKey, number> = {
    engagement: 170,
    ceremony: 320,
    minnu: 395,
    reception: 470,
};

export function EventTimelineSvg({ activeKey }: EventTimelineSvgProps) {
    const activeY = positions[activeKey];

    return (
        <svg
            viewBox="0 0 180 640"
            className="h-full w-full overflow-visible text-[var(--color-gold-500)]"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="eventActiveGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(245,214,137,0.38)" />
                    <stop offset="62%" stopColor="rgba(245,214,137,0.08)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>
            </defs>

            <path
                d="M90 84V560"
                stroke="rgba(201,166,70,0.26)"
                strokeWidth="2"
                strokeLinecap="round"
            />

            <path
                d={`M90 84V${activeY}`}
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="[stroke-dasharray:520] animate-[family-line-draw_1.4s_var(--ease-sacred)_forwards]"
            />

            <circle
                cx="90"
                cy={activeY}
                r="64"
                fill="url(#eventActiveGlow)"
                className="animate-[pulse-soft_3.2s_ease-in-out_infinite]"
            />

            <g opacity={activeKey === "engagement" ? 1 : 0.42}>
                <circle cx="90" cy="170" r="27" stroke="currentColor" strokeWidth="2" />
                <circle cx="77" cy="170" r="18" stroke="currentColor" strokeWidth="3" />
                <circle cx="103" cy="170" r="18" stroke="currentColor" strokeWidth="3" />
            </g>

            <g opacity={activeKey === "ceremony" ? 1 : 0.42}>
                <circle cx="90" cy="320" r="30" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M90 292V348M72 310H108M76 330H104M72 350L110 336"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </g>

            <g opacity={activeKey === "minnu" ? 1 : 0.42}>
                <circle cx="90" cy="395" r="30" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M90 382v28M81 392h18M84 400h12M82 411l16-7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
            </g>

            <g opacity={activeKey === "reception" ? 1 : 0.42}>
                <circle cx="90" cy="470" r="30" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M72 482C76 458 84 446 90 438C96 446 104 458 108 482"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <path
                    d="M64 488H116"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle cx="90" cy="428" r="5" fill="currentColor" />
            </g>
        </svg>
    );
}