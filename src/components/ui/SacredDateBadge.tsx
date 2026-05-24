type SacredDateBadgeProps = {
    date: string;
    venue: string;
};

export function SacredDateBadge({ date, venue }: SacredDateBadgeProps) {
    return (
        <div className="relative overflow-hidden rounded-[26px] border border-[rgba(var(--color-gold-500-rgb),0.22)] bg-[rgba(var(--color-ivory-50-rgb),0.96)] p-5 text-right shadow-[0_24px_70px_rgba(0,0,0,0.04)] backdrop-blur-xl">
            <span className="absolute inset-y-0 left-0 w-16 animate-[gold-shimmer_3.2s_var(--ease-sacred)_infinite] bg-white/10 blur-md" />

            <p className="relative font-[var(--font-sacred)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-600)]">
                {date}
            </p>

            <p className="relative mt-2 text-sm leading-6 text-[var(--color-cathedral-800)]">
                {venue}
            </p>
        </div>
    );
}