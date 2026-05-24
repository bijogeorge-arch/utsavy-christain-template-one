type ChristianCrossSvgProps = {
    className?: string;
};

export function ChristianCrossSvg({ className }: ChristianCrossSvgProps) {
    return (
        <svg
            viewBox="0 0 120 180"
            className={className}
            role="img"
            aria-label="Christian cross"
            fill="none"
        >
            <path
                d="M60 18V162M30 60H90"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <path
                d="M60 18V162M30 60H90"
                stroke="rgba(245,214,137,0.35)"
                strokeWidth="14"
                strokeLinecap="round"
            />
        </svg>
    );
}
