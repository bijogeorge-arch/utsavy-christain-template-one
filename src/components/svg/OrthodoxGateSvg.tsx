export function OrthodoxGateSvg() {
    return (
        <svg
            viewBox="0 0 420 720"
            className="h-full w-full overflow-visible text-[var(--color-gold-500)]"
            aria-hidden="true"
            fill="none"
        >
            <g className="gate-outer-arch" opacity="0.58">
                <path
                    d="M52 682V240C52 126 122 48 210 48C298 48 368 126 368 240V682"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    d="M82 682V250C82 152 136 90 210 90C284 90 338 152 338 250V682"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M112 682V270C112 182 152 130 210 130C268 130 308 182 308 270V682"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </g>

            <g className="gate-inner-glow" opacity="0">
                <path
                    d="M84 682V256C84 150 138 82 210 82C282 82 336 150 336 256V682Z"
                    fill="rgba(245,214,137,0.18)"
                />
                <path
                    d="M120 682V286C120 196 154 138 210 118C266 138 300 196 300 286V682Z"
                    fill="rgba(255,248,236,0.12)"
                />
            </g>

            <g className="gate-left">
                <path
                    d="M54 682V250C54 150 112 74 208 52V682H54Z"
                    fill="rgba(6,27,24,0.88)"
                    stroke="currentColor"
                    strokeWidth="3"
                />
                <path
                    d="M84 642V278C84 188 128 126 184 98V642H84Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.72"
                />
                <path
                    d="M102 340H190M102 430H190M102 520H190"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.55"
                />
                <path
                    d="M166 684V132"
                    stroke="rgba(245,214,137,0.18)"
                    strokeWidth="2"
                />
            </g>

            <g className="gate-right">
                <path
                    d="M366 682V250C366 150 308 74 212 52V682H366Z"
                    fill="rgba(6,27,24,0.88)"
                    stroke="currentColor"
                    strokeWidth="3"
                />
                <path
                    d="M336 642V278C336 188 292 126 236 98V642H336Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.72"
                />
                <path
                    d="M230 340H318M230 430H318M230 520H318"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.55"
                />
                <path
                    d="M254 684V132"
                    stroke="rgba(245,214,137,0.18)"
                    strokeWidth="2"
                />
            </g>

            <g className="gate-center-seal">
                <circle
                    cx="210"
                    cy="330"
                    r="42"
                    fill="rgba(245,214,137,0.08)"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M210 304V356M194 320H226M198 338H222M196 354L224 344"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
}