export function CountdownHaloSvg() {
    return (
        <svg
            viewBox="0 0 320 720"
            className="h-full w-full overflow-visible text-[var(--color-gold-500)]"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="countdownGlow" cx="50%" cy="34%" r="54%">
                    <stop offset="0%" stopColor="rgba(255,248,236,0.28)" />
                    <stop offset="48%" stopColor="rgba(245,214,137,0.12)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>
            </defs>

            <rect width="320" height="720" fill="url(#countdownGlow)" />

            <g className="countdown-halo-main" opacity="0.68">
                <circle cx="160" cy="246" r="126" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="160" cy="246" r="96" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <circle cx="160" cy="246" r="154" stroke="rgba(245,214,137,0.18)" strokeWidth="1" />
            </g>

            <g className="countdown-ticks" opacity="0.56">
                {Array.from({ length: 24 }).map((_, index) => {
                    const angle = (360 / 24) * index;
                    const isMajor = index % 6 === 0;

                    return (
                        <line
                            key={index}
                            x1="160"
                            y1={isMajor ? "88" : "102"}
                            x2="160"
                            y2={isMajor ? "112" : "118"}
                            stroke="currentColor"
                            strokeWidth={isMajor ? "2.2" : "1.2"}
                            strokeLinecap="round"
                            transform={`rotate(${angle} 160 246)`}
                        />
                    );
                })}
            </g>

            <g className="countdown-bell" opacity="0.76">
                <path
                    d="M122 430C122 390 138 366 160 366C182 366 198 390 198 430"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d="M110 430H210"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <path
                    d="M136 448H184"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <circle cx="160" cy="462" r="8" fill="currentColor" />
                <path
                    d="M160 330V360"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </g>

            <g opacity="0.34">
                <path
                    d="M160 506V584M138 536H182M144 558H176M138 586L184 568"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle cx="160" cy="546" r="72" stroke="rgba(245,214,137,0.16)" strokeWidth="1.5" />
            </g>

            <g opacity="0.24">
                <path
                    d="M38 682C82 626 116 604 160 604C204 604 238 626 282 682"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M72 708C104 670 130 654 160 654C190 654 216 670 248 708"
                    stroke="currentColor"
                    strokeWidth="1.3"
                />
            </g>
        </svg>
    );
}