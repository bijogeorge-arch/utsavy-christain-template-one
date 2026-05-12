export function ContactFamiliesSvg() {
    return (
        <svg
            viewBox="0 0 320 720"
            className="h-full w-full overflow-visible text-[var(--color-gold-500)]"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="contactGlow" cx="50%" cy="34%" r="58%">
                    <stop offset="0%" stopColor="rgba(255,248,236,0.24)" />
                    <stop offset="52%" stopColor="rgba(245,214,137,0.1)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>
            </defs>

            <rect width="320" height="720" fill="url(#contactGlow)" />

            <g className="contact-orbit" opacity="0.68">
                <circle cx="160" cy="246" r="122" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="160" cy="246" r="92" stroke="currentColor" strokeWidth="1" opacity="0.48" />
                <circle cx="160" cy="246" r="152" stroke="rgba(245,214,137,0.16)" strokeWidth="1" />
            </g>

            <g opacity="0.82">
                <path
                    d="M160 142C112 142 78 178 78 226C78 292 160 348 160 348C160 348 242 292 242 226C242 178 208 142 160 142Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    d="M160 188V282M130 222H190M136 252H184M130 284L194 260"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </g>

            <g opacity="0.42">
                <path
                    d="M84 438C84 400 112 372 150 372H170C208 372 236 400 236 438"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle cx="120" cy="352" r="28" stroke="currentColor" strokeWidth="2" />
                <circle cx="200" cy="352" r="28" stroke="currentColor" strokeWidth="2" />
            </g>

            <g opacity="0.28">
                <path
                    d="M42 650C82 602 116 582 160 582C204 582 238 602 278 650"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M76 680C106 646 132 632 160 632C188 632 214 646 244 680"
                    stroke="currentColor"
                    strokeWidth="1.3"
                />
            </g>
        </svg>
    );
}