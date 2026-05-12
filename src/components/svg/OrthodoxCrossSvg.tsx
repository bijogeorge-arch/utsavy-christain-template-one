type OrthodoxCrossSvgProps = {
    className?: string;
};

export function OrthodoxCrossSvg({ className }: OrthodoxCrossSvgProps) {
    return (
        <svg
            viewBox="0 0 120 180"
            className={className}
            role="img"
            aria-label="Orthodox cross"
            fill="none"
        >
            <path
                d="M60 18V162M30 48H90M38 82H82M34 132L86 112"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <path
                d="M60 18V162M30 48H90M38 82H82M34 132L86 112"
                stroke="rgba(245,214,137,0.35)"
                strokeWidth="14"
                strokeLinecap="round"
            />
        </svg>
    );
}