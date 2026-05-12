type ContinueButtonProps = {
    label: string;
    onClick: () => void;
};

export function ContinueButton({ label, onClick }: ContinueButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="relative min-h-12 flex-1 overflow-hidden rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-cathedral-900)] shadow-[0_0_34px_rgba(245,214,137,0.24)] transition hover:scale-[1.01] active:scale-[0.98]"
        >
            <span className="relative z-10">{label}</span>
            <span className="absolute inset-y-0 left-0 w-16 animate-[gold-shimmer_2.6s_var(--ease-sacred)_infinite] bg-white/30 blur-sm" />
        </button>
    );
}