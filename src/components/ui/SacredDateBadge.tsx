type SacredDateBadgeProps = {
    date: string;
    venue: string;
};

export function SacredDateBadge({ date, venue }: SacredDateBadgeProps) {
    return (
        <div className="relative overflow-hidden rounded-[26px] border border-[rgba(201,166,70,0.38)] bg-[rgba(6,27,24,0.48)] p-5 text-right shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <span className="absolute inset-y-0 left-0 w-16 animate-[gold-shimmer_3.2s_var(--ease-sacred)_infinite] bg-white/10 blur-md" />

            <p className="relative font-[var(--font-sacred)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-300)]">
                {date}
            </p>

            <p className="relative mt-2 text-sm leading-6 text-[rgba(255,248,236,0.72)]">
                {venue}
            </p>
        </div>
    );
}