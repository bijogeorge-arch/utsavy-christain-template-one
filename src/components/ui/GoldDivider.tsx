type GoldDividerProps = {
    className?: string;
    align?: "center" | "right" | "left";
};

export function GoldDivider({ className, align = "right" }: GoldDividerProps) {
    const alignmentClass =
        align === "center"
            ? "justify-center"
            : align === "left"
                ? "justify-start"
                : "justify-end";

    return (
        <div className={`my-5 flex w-full items-center ${alignmentClass} gap-3 ${className}`}>
            <span className={`h-px flex-1 bg-[linear-gradient(90deg,transparent,var(--color-gold-500))] ${align === "center" ? "max-w-[120px]" : ""}`} />
            <span className="text-[var(--color-gold-300)]">✦</span>
            <span className={`h-px bg-[var(--color-gold-500)] ${align === "center" ? "w-[120px] max-w-[120px]" : "w-12"}`} />
        </div>
    );
}