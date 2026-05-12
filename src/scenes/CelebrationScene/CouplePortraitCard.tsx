import type { PersonName } from "../../types/wedding";

type CouplePortraitCardProps = {
    person: PersonName;
    role: "Bride" | "Groom";
};

export function CouplePortraitCard({ person, role }: CouplePortraitCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-[32px] border border-[rgba(201,166,70,0.42)] bg-[rgba(255,248,236,0.94)] p-3 text-[var(--color-cathedral-900)] shadow-[0_28px_80px_rgba(0,0,0,0.24)]">
            <span className="absolute inset-y-0 left-0 w-16 animate-[gold-shimmer_3.4s_var(--ease-sacred)_infinite] bg-white/20 blur-md" />

            <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[25px] border border-[rgba(201,166,70,0.34)] bg-[radial-gradient(circle_at_50%_20%,rgba(245,214,137,0.32),rgba(11,47,42,0.12)_48%,rgba(6,27,24,0.16))]">
                <div className="absolute inset-4 rounded-full border border-[rgba(201,166,70,0.28)]" />
                <div className="absolute bottom-0 h-1/2 w-full bg-[linear-gradient(180deg,transparent,rgba(11,47,42,0.14))]" />

                <span className="relative font-[var(--font-display)] text-6xl font-semibold leading-none text-[var(--color-gold-700)]">
                    {person.first[0]}
                </span>
            </div>

            <p className="relative mt-3 font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]">
                {role}
            </p>

            <h2 className="relative mt-1 font-[var(--font-display)] text-2xl font-semibold leading-none">
                {person.first}
            </h2>

            <p className="relative mt-1 text-xs text-[rgba(6,27,24,0.58)]">
                {person.full}
            </p>
        </div>
    );
}