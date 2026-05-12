import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { PersonName } from "../../types/wedding";

type ActiveSide = "bride" | "groom";

type SacredSpotlightCardProps = {
    bride: PersonName;
    groom: PersonName;
};

function getInitials(person: PersonName) {
    return `${person.first?.[0] ?? ""}${person.last?.[0] ?? ""}`.toUpperCase();
}

export function SacredSpotlightCard({
    bride,
    groom,
}: SacredSpotlightCardProps) {
    const [activeSide, setActiveSide] = useState<ActiveSide>("bride");

    const active = useMemo(
        () => (activeSide === "bride" ? bride : groom),
        [activeSide, bride, groom],
    );

    const role = activeSide === "bride" ? "Bride" : "Groom";
    const initials = getInitials(active);

    return (
        <div className="relative w-full overflow-hidden rounded-[30px] border border-[rgba(201,166,70,0.34)] bg-[rgba(255,248,236,0.96)] p-3 text-[var(--color-cathedral-900)] shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
            <span className="absolute inset-y-0 left-0 w-16 animate-[gold-shimmer_4s_var(--ease-sacred)_infinite] bg-white/20 blur-md" />

            <div className="relative grid grid-cols-2 gap-1 rounded-full border border-[rgba(201,166,70,0.24)] bg-[rgba(6,27,24,0.06)] p-1">
                <button
                    type="button"
                    onClick={() => setActiveSide("bride")}
                    aria-pressed={activeSide === "bride"}
                    className={`min-h-11 rounded-full px-3 font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.22em] transition ${activeSide === "bride"
                            ? "bg-[var(--color-gold-300)] text-[var(--color-cathedral-950)] shadow-[0_8px_24px_rgba(201,166,70,0.26)]"
                            : "bg-transparent text-[rgba(6,27,24,0.52)]"
                        }`}
                >
                    Bride
                </button>

                <button
                    type="button"
                    onClick={() => setActiveSide("groom")}
                    aria-pressed={activeSide === "groom"}
                    className={`min-h-11 rounded-full px-3 font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.22em] transition ${activeSide === "groom"
                            ? "bg-[var(--color-gold-300)] text-[var(--color-cathedral-950)] shadow-[0_8px_24px_rgba(201,166,70,0.26)]"
                            : "bg-transparent text-[rgba(6,27,24,0.52)]"
                        }`}
                >
                    Groom
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeSide}
                    initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                    transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mt-3"
                >
                    <div className="grid grid-cols-[6.5rem_1fr] gap-3 rounded-[26px] border border-[rgba(201,166,70,0.28)] bg-[linear-gradient(135deg,rgba(245,214,137,0.18),rgba(6,27,24,0.04))] p-3">
                        <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-t-full rounded-b-[24px] border border-[rgba(201,166,70,0.32)] bg-[radial-gradient(circle_at_50%_20%,rgba(255,248,236,0.9),rgba(245,214,137,0.22)_48%,rgba(6,27,24,0.12))]">
                            <div className="grid h-16 w-16 place-items-center rounded-full border border-[rgba(201,166,70,0.34)] bg-[rgba(255,248,236,0.54)]">
                                <span className="font-[var(--font-display)] text-[2.7rem] font-semibold leading-none text-[var(--color-gold-700)]">
                                    {active.first[0]}
                                </span>
                            </div>
                        </div>

                        <div className="flex min-w-0 flex-col justify-center text-right">
                            <p className="font-[var(--font-sacred)] text-[8px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]">
                                {role} Spotlight
                            </p>

                            <h2 className="mt-2 truncate font-[var(--font-display)] text-[clamp(2rem,7vw,2.7rem)] font-semibold leading-none tracking-[-0.05em]">
                                {active.first}
                            </h2>

                            <p className="mt-2 text-sm leading-5 text-[rgba(6,27,24,0.62)]">
                                {active.full}
                            </p>

                            <div className="mt-3 h-px w-full bg-[rgba(201,166,70,0.28)]" />

                            <p className="mt-3 text-xs leading-5 text-[rgba(6,27,24,0.68)]">
                                {activeSide === "bride"
                                    ? "Grace, faith, and joy carried into a sacred promise."
                                    : "Devotion, steadiness, and joy entering holy matrimony."}
                            </p>
                        </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3 rounded-[22px] border border-[rgba(201,166,70,0.24)] bg-[rgba(6,27,24,0.06)] px-4 py-3">
                        <p className="font-[var(--font-sacred)] text-[8px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold-700)]">
                            Couple Seal
                        </p>

                        <p className="font-[var(--font-display)] text-2xl font-semibold leading-none">
                            {initials}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}