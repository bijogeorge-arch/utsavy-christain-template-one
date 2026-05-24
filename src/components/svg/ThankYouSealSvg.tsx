export function ThankYouSealSvg() {
    return (
        <svg
            viewBox="0 0 340 720"
            className="h-full w-full overflow-visible text-[var(--color-gold-500)]"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="thankYouGlow" cx="50%" cy="34%" r="58%">
                    <stop offset="0%" stopColor="rgba(255,248,236,0.3)" />
                    <stop offset="48%" stopColor="rgba(245,214,137,0.12)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>
            </defs>

            <rect width="340" height="720" fill="url(#thankYouGlow)" />

            <g id="thank-you-seal-rings" className="thank-you-seal-ring" opacity="0.72">
                <circle cx="170" cy="260" r="132" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="170" cy="260" r="104" stroke="currentColor" strokeWidth="1" opacity="0.52" />
                <circle cx="170" cy="260" r="160" stroke="rgba(245,214,137,0.16)" strokeWidth="1" />
            </g>

            <g id="thank-you-seal-cross" opacity="0.88">
                <path
                    d="M170 148V330M132 204H208"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
            </g>

            <g opacity="0.44">
                <path
                    d="M92 434C130 414 152 386 156 346C112 360 88 390 92 434Z"
                    fill="rgba(255,248,236,0.16)"
                    stroke="currentColor"
                />
                <path
                    d="M248 434C210 414 188 386 184 346C228 360 252 390 248 434Z"
                    fill="rgba(255,248,236,0.16)"
                    stroke="currentColor"
                />
            </g>

            <g id="thank-you-seal-bottom-arcs" opacity="0.26">
                <path
                    d="M48 640C90 590 124 570 170 570C216 570 250 590 292 640"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M82 680C112 646 140 632 170 632C200 632 228 646 258 680"
                    stroke="currentColor"
                    strokeWidth="1.3"
                />
            </g>
        </svg>
    );
}