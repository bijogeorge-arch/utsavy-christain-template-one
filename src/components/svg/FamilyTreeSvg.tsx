export function FamilyTreeSvg() {
    return (
        <svg
            viewBox="0 0 260 720"
            className="h-full w-full text-[var(--color-gold-500)]"
            fill="none"
            aria-hidden="true"
        >
            <g opacity="0.22">
                <path
                    d="M130 700V108"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="[stroke-dasharray:620] [stroke-dashoffset:620] animate-[family-line-draw_2.8s_var(--ease-sacred)_forwards]"
                />

                <path
                    d="M130 228C88 222 58 194 42 152"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="[stroke-dasharray:180] [stroke-dashoffset:180] animate-[family-line-draw_2.4s_var(--ease-sacred)_0.4s_forwards]"
                />

                <path
                    d="M130 312C182 306 214 274 230 228"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="[stroke-dasharray:180] [stroke-dashoffset:180] animate-[family-line-draw_2.4s_var(--ease-sacred)_0.6s_forwards]"
                />

                <path
                    d="M130 414C84 408 54 374 38 330"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="[stroke-dasharray:180] [stroke-dashoffset:180] animate-[family-line-draw_2.4s_var(--ease-sacred)_0.8s_forwards]"
                />

                <path
                    d="M130 524C182 520 218 486 238 438"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="[stroke-dasharray:180] [stroke-dashoffset:180] animate-[family-line-draw_2.4s_var(--ease-sacred)_1s_forwards]"
                />
            </g>

            <g opacity="0.72">
                <circle
                    cx="130"
                    cy="108"
                    r="8"
                    fill="currentColor"
                    className="animate-[pulse-soft_3s_ease-in-out_infinite]"
                />
                <circle
                    cx="42"
                    cy="152"
                    r="5"
                    fill="currentColor"
                    className="animate-[pulse-soft_3.4s_ease-in-out_infinite]"
                />
                <circle
                    cx="230"
                    cy="228"
                    r="5"
                    fill="currentColor"
                    className="animate-[pulse-soft_3.7s_ease-in-out_infinite]"
                />
                <circle
                    cx="38"
                    cy="330"
                    r="5"
                    fill="currentColor"
                    className="animate-[pulse-soft_4s_ease-in-out_infinite]"
                />
                <circle
                    cx="238"
                    cy="438"
                    r="5"
                    fill="currentColor"
                    className="animate-[pulse-soft_4.2s_ease-in-out_infinite]"
                />
            </g>

            <g opacity="0.46">
                <path
                    d="M46 152C78 136 96 112 100 78C68 90 50 112 46 152Z"
                    fill="rgba(255,248,236,0.18)"
                    stroke="currentColor"
                />
                <path
                    d="M224 228C190 214 172 188 166 154C202 164 222 190 224 228Z"
                    fill="rgba(255,248,236,0.18)"
                    stroke="currentColor"
                />
                <path
                    d="M44 330C78 314 96 288 102 254C68 266 48 292 44 330Z"
                    fill="rgba(255,248,236,0.18)"
                    stroke="currentColor"
                />
                <path
                    d="M232 438C196 424 176 396 168 360C206 372 228 400 232 438Z"
                    fill="rgba(255,248,236,0.18)"
                    stroke="currentColor"
                />
            </g>

            <g opacity="0.38">
                <path
                    d="M130 86V140M114 104H146M118 122H142M116 144L146 132"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
}