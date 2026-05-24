export function InnerChapelSvg() {
    return (
        <svg
            viewBox="0 0 420 720"
            className="h-full w-full text-[var(--color-gold-300)]"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="altarGlow" cx="50%" cy="48%" r="48%">
                    <stop offset="0%" stopColor="rgba(255,248,236,0.58)" />
                    <stop offset="42%" stopColor="rgba(245,214,137,0.22)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>
            </defs>

            <rect width="420" height="720" fill="url(#altarGlow)" opacity="0.86" />

            <g opacity="0.72">
                <path
                    d="M74 682V260C74 140 132 74 210 74C288 74 346 140 346 260V682"
                    stroke="currentColor"
                    strokeWidth="2.5"
                />
                <path
                    d="M112 682V286C112 190 150 132 210 112C270 132 308 190 308 286V682"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    opacity="0.7"
                />
                <path
                    d="M150 682V330C150 244 174 188 210 164C246 188 270 244 270 330V682"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    opacity="0.55"
                />
            </g>

            <g opacity="0.38">
                <path d="M96 310H324" stroke="currentColor" strokeWidth="1" />
                <path d="M116 382H304" stroke="currentColor" strokeWidth="1" />
                <path d="M136 454H284" stroke="currentColor" strokeWidth="1" />
            </g>

            <g className="inner-altar">
                <path
                    d="M148 590H272"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <path
                    d="M170 620H250"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <path
                    d="M210 482V566M188 512H232"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle
                    cx="210"
                    cy="524"
                    r="74"
                    stroke="rgba(245,214,137,0.18)"
                    strokeWidth="2"
                />
            </g>

            <g opacity="0.42">
                <path
                    d="M40 700C90 642 132 628 210 628C288 628 330 642 380 700"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M72 700C110 668 150 654 210 654C270 654 310 668 348 700"
                    stroke="currentColor"
                    strokeWidth="1.4"
                />
            </g>
        </svg>
    );
}