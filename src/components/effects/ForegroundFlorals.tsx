export function ForegroundFlorals() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[34%]"
        >
            <svg
                viewBox="0 0 420 260"
                className="h-full w-full text-[var(--color-gold-500)]"
                fill="none"
            >
                <g className="foreground-florals-left" opacity="0.86">
                    <path
                        d="M12 250C42 210 54 168 44 112C88 144 104 190 84 250"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M46 154C82 138 102 112 108 76C72 88 50 112 46 154Z"
                        fill="rgba(255,248,236,0.22)"
                        stroke="currentColor"
                    />
                    <path
                        d="M76 204C116 196 142 172 154 134C112 138 84 162 76 204Z"
                        fill="rgba(255,248,236,0.18)"
                        stroke="currentColor"
                    />
                    <circle cx="54" cy="150" r="5" fill="currentColor" />
                    <circle cx="84" cy="204" r="4" fill="currentColor" />
                </g>

                <g className="foreground-florals-right" opacity="0.86">
                    <path
                        d="M408 250C378 210 366 168 376 112C332 144 316 190 336 250"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M374 154C338 138 318 112 312 76C348 88 370 112 374 154Z"
                        fill="rgba(255,248,236,0.22)"
                        stroke="currentColor"
                    />
                    <path
                        d="M344 204C304 196 278 172 266 134C308 138 336 162 344 204Z"
                        fill="rgba(255,248,236,0.18)"
                        stroke="currentColor"
                    />
                    <circle cx="366" cy="150" r="5" fill="currentColor" />
                    <circle cx="336" cy="204" r="4" fill="currentColor" />
                </g>

                <path
                    d="M0 258H420"
                    stroke="rgba(245,214,137,0.26)"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}