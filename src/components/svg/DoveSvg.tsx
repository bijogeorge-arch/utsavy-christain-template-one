type DoveSvgProps = {
    className?: string;
};

export function DoveSvg({ className }: DoveSvgProps) {
    return (
        <svg
            viewBox="0 0 220 160"
            className={className}
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="doveFill" x1="56" y1="38" x2="166" y2="120">
                    <stop offset="0%" stopColor="#FFFDF8" />
                    <stop offset="100%" stopColor="#F1EBDE" />
                </linearGradient>

                <radialGradient id="doveAura" cx="50%" cy="50%" r="56%">
                    <stop offset="0%" stopColor="rgba(255,248,236,0.32)" />
                    <stop offset="74%" stopColor="rgba(245,214,137,0.12)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>
            </defs>

            <ellipse cx="112" cy="82" rx="76" ry="46" fill="url(#doveAura)" />

            <g className="dove-2d-left-wing">
                <path
                    d="M96 82C76 42 42 24 18 34C40 44 58 62 78 88C58 84 40 90 26 104C52 106 76 100 96 88Z"
                    fill="url(#doveFill)"
                    stroke="rgba(232,202,116,0.35)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </g>

            <g className="dove-2d-right-wing">
                <path
                    d="M116 80C138 42 172 26 198 36C176 44 156 62 134 88C154 84 174 88 190 102C164 106 138 102 116 88Z"
                    fill="url(#doveFill)"
                    stroke="rgba(232,202,116,0.35)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </g>

            <g className="dove-2d-body">
                <path
                    d="M74 92C74 68 92 54 118 54C142 54 158 68 158 88C158 110 140 122 116 122C92 122 74 110 74 92Z"
                    fill="url(#doveFill)"
                    stroke="rgba(232,202,116,0.38)"
                    strokeWidth="1.5"
                />

                <path
                    d="M126 56C132 40 148 32 162 34C176 36 186 46 186 58C186 68 176 76 164 76C150 76 136 70 128 60Z"
                    fill="url(#doveFill)"
                    stroke="rgba(232,202,116,0.38)"
                    strokeWidth="1.5"
                />

                <path
                    d="M184 54L202 48L190 62Z"
                    fill="#E8CA74"
                />

                <circle cx="170" cy="52" r="2.5" fill="#16322C" />

                <path
                    d="M76 104C58 114 44 126 34 140C54 134 72 126 90 116Z"
                    fill="url(#doveFill)"
                    stroke="rgba(232,202,116,0.26)"
                    strokeWidth="1.2"
                />
            </g>
        </svg>
    );
}