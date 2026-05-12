export function RingBlessingSvg() {
    return (
        <svg
            viewBox="0 0 320 720"
            className="h-full w-full overflow-visible text-[var(--color-gold-500)]"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="ringBlessingGlow" cx="50%" cy="38%" r="52%">
                    <stop offset="0%" stopColor="rgba(255,248,236,0.28)" />
                    <stop offset="48%" stopColor="rgba(245,214,137,0.12)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>
            </defs>

            <rect width="320" height="720" fill="url(#ringBlessingGlow)" />

            <g className="ring-blessing-halo" opacity="0.7">
                <circle cx="160" cy="260" r="118" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="160" cy="260" r="92" stroke="currentColor" strokeWidth="1" opacity="0.48" />
                <circle cx="160" cy="260" r="148" stroke="rgba(245,214,137,0.16)" strokeWidth="1" />
            </g>

            <g className="ring-blessing-rays" opacity="0.42">
                <path d="M160 70V126" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M160 394V450" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M0 260H58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M262 260H320" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M70 170L110 210" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M250 170L210 210" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M70 350L110 310" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M250 350L210 310" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </g>

            <g className="ring-blessing-rings">
                <circle
                    className="ring-path-draw"
                    cx="128"
                    cy="276"
                    r="52"
                    stroke="currentColor"
                    strokeWidth="9"
                />
                <circle
                    className="ring-path-draw ring-delay"
                    cx="192"
                    cy="276"
                    r="52"
                    stroke="currentColor"
                    strokeWidth="9"
                />
                <circle
                    cx="128"
                    cy="276"
                    r="66"
                    stroke="rgba(245,214,137,0.18)"
                    strokeWidth="2"
                />
                <circle
                    cx="192"
                    cy="276"
                    r="66"
                    stroke="rgba(245,214,137,0.18)"
                    strokeWidth="2"
                />
            </g>

            <g opacity="0.58">
                <path
                    d="M160 446V526M138 474H182M144 498H176M138 526L184 508"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle cx="160" cy="490" r="72" stroke="rgba(245,214,137,0.16)" strokeWidth="1.5" />
            </g>

            <g opacity="0.28">
                <path
                    d="M42 650C80 604 112 586 160 586C208 586 240 604 278 650"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M76 674C104 646 128 634 160 634C192 634 216 646 244 674"
                    stroke="currentColor"
                    strokeWidth="1.3"
                />
            </g>
        </svg>
    );
}