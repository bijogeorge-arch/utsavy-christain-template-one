export function WelcomeChapelInteriorSvg() {
    return (
        <svg
            viewBox="0 0 420 720"
            className="h-full w-full text-[var(--color-gold-500)]"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="welcomeChapelGlow" cx="50%" cy="28%" r="62%">
                    <stop offset="0%" stopColor="rgba(255,248,236,0.22)" />
                    <stop offset="42%" stopColor="rgba(245,214,137,0.12)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>
            </defs>

            <rect width="420" height="720" fill="url(#welcomeChapelGlow)" />

            <g className="welcome-arch-lines" opacity="0.46">
                <path
                    d="M38 720V236C38 118 110 42 210 42C310 42 382 118 382 236V720"
                    stroke="currentColor"
                    strokeWidth="2.5"
                />
                <path
                    d="M76 720V258C76 154 132 88 210 88C288 88 344 154 344 258V720"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path
                    d="M116 720V292C116 196 154 130 210 112C266 130 304 196 304 292V720"
                    stroke="currentColor"
                    strokeWidth="1.4"
                />
            </g>

            <g className="welcome-window" opacity="0.56">
                <path
                    d="M166 270C166 214 184 174 210 154C236 174 254 214 254 270V396H166V270Z"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path d="M210 160V396" stroke="currentColor" strokeWidth="1.2" />
                <path d="M170 282H250" stroke="currentColor" strokeWidth="1.2" />
                <path d="M170 344H250" stroke="currentColor" strokeWidth="1.2" />
            </g>

            <g className="welcome-altar-line" opacity="0.72">
                <path
                    d="M134 578H286"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d="M164 610H256"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <path
                    d="M210 482V548M190 508H230M196 528H224M190 550L232 536"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                />
            </g>

            <g className="welcome-floor-lines" opacity="0.26">
                <path d="M0 720C90 640 144 620 210 620C276 620 330 640 420 720" stroke="currentColor" />
                <path d="M54 720C112 672 156 650 210 650C264 650 308 672 366 720" stroke="currentColor" />
            </g>
        </svg>
    );
}