export function StoryPathSvg() {
    return (
        <svg
            viewBox="0 0 320 720"
            className="h-full w-full overflow-visible text-[var(--color-gold-500)]"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="storyGlow" cx="48%" cy="34%" r="58%">
                    <stop offset="0%" stopColor="rgba(255,248,236,0.24)" />
                    <stop offset="52%" stopColor="rgba(245,214,137,0.1)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>
            </defs>

            <rect width="320" height="720" fill="url(#storyGlow)" />

            <path
                d="M158 86C88 152 84 244 152 312C218 378 220 482 132 602"
                stroke="rgba(201,166,70,0.28)"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <path
                d="M158 86C88 152 84 244 152 312C218 378 220 482 132 602"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="[stroke-dasharray:760] [stroke-dashoffset:760] animate-[family-line-draw_3s_var(--ease-sacred)_forwards]"
            />

            <g opacity="0.88">
                <circle cx="158" cy="86" r="34" stroke="currentColor" strokeWidth="2" />
                <circle cx="152" cy="312" r="34" stroke="currentColor" strokeWidth="2" />
                <circle cx="132" cy="602" r="34" stroke="currentColor" strokeWidth="2" />

                <circle cx="158" cy="86" r="6" fill="currentColor" />
                <circle cx="152" cy="312" r="6" fill="currentColor" />
                <circle cx="132" cy="602" r="6" fill="currentColor" />
            </g>

            <g opacity="0.42">
                <path
                    d="M94 172C132 148 148 122 146 84C104 102 88 130 94 172Z"
                    fill="rgba(255,248,236,0.18)"
                    stroke="currentColor"
                />
                <path
                    d="M222 410C182 388 164 358 168 320C210 338 228 368 222 410Z"
                    fill="rgba(255,248,236,0.18)"
                    stroke="currentColor"
                />
                <path
                    d="M74 638C112 620 130 594 128 558C88 572 70 600 74 638Z"
                    fill="rgba(255,248,236,0.18)"
                    stroke="currentColor"
                />
            </g>
        </svg>
    );
}