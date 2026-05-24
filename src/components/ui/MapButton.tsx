type MapButtonProps = {
    href: string;
};

export function MapButton({ href }: MapButtonProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.5)] bg-[var(--color-cathedral-900)] px-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-gold-300)] transition hover:bg-[var(--color-cathedral-800)]"
        >
            View Location
        </a>
    );
}