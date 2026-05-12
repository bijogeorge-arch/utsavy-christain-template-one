import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { PersonName } from "../../types/wedding";

type ActivePerson = "bride" | "groom";

type CoupleSpotlightProps = {
    bride: PersonName;
    groom: PersonName;
};

function getInitials(person: PersonName) {
    return `${person.first[0]}${person.last[0]}`;
}

export function CoupleSpotlight({ bride, groom }: CoupleSpotlightProps) {
    const [activePerson, setActivePerson] = useState<ActivePerson>("bride");

    const active = activePerson === "bride" ? bride : groom;
    const activeRole = activePerson === "bride" ? "Bride" : "Groom";

    return (
        <div className="w-full">
            <div className="relative overflow-hidden rounded-[34px] border border-[rgba(201,166,70,0.38)] bg-[rgba(255,248,236,0.94)] p-4 text-[var(--color-cathedral-900)] shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
                <span className="absolute inset-y-0 left-0 w-20 animate-[gold-shimmer_4s_var(--ease-sacred)_infinite] bg-white/20 blur-md" />

                <div className="relative grid grid-cols-[1fr_3.4rem_1fr] items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setActivePerson("bride")}
                        aria-pressed={activePerson === "bride"}
                        className={`group min-h-[10.8rem] overflow-hidden rounded-[28px] border p-3 text-center transition ${activePerson === "bride"
                                ? "border-[rgba(201,166,70,0.68)] bg-[rgba(245,214,137,0.18)] shadow-[0_0_34px_rgba(245,214,137,0.18)]"
                                : "border-[rgba(201,166,70,0.24)] bg-[rgba(6,27,24,0.06)]"
                            }`}
                    >
                        <div className="mx-auto grid aspect-[4/5] w-full max-w-[6.4rem] place-items-center rounded-[24px] border border-[rgba(201,166,70,0.28)] bg-[radial-gradient(circle_at_50%_22%,rgba(245,214,137,0.34),rgba(11,47,42,0.1)_50%,rgba(6,27,24,0.14))]">
                            <span className="font-[var(--font-display)] text-[clamp(2.7rem,9vw,4.2rem)] font-semibold leading-none text-[var(--color-gold-700)]">
                                {bride.first[0]}
                            </span>
                        </div>

                        <p className="mt-3 font-[var(--font-sacred)] text-[8px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold-700)]">
                            Bride
                        </p>

                        <p className="mt-1 truncate font-[var(--font-display)] text-[clamp(1.25rem,4vw,1.75rem)] font-semibold leading-none">
                            {bride.first}
                        </p>
                    </button>

                    <div className="relative grid place-items-center">
                        <div className="absolute h-[12.5rem] w-px bg-[linear-gradient(180deg,transparent,rgba(201,166,70,0.54),transparent)]" />

                        <div className="relative grid h-14 w-14 place-items-center rounded-full border border-[rgba(201,166,70,0.48)] bg-[rgba(245,214,137,0.2)] shadow-[0_0_34px_rgba(245,214,137,0.24)]">
                            <p className="font-[var(--font-sacred)] text-[10px] font-bold tracking-[0.14em] text-[var(--color-gold-700)]">
                                ED
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setActivePerson("groom")}
                        aria-pressed={activePerson === "groom"}
                        className={`group min-h-[10.8rem] overflow-hidden rounded-[28px] border p-3 text-center transition ${activePerson === "groom"
                                ? "border-[rgba(201,166,70,0.68)] bg-[rgba(245,214,137,0.18)] shadow-[0_0_34px_rgba(245,214,137,0.18)]"
                                : "border-[rgba(201,166,70,0.24)] bg-[rgba(6,27,24,0.06)]"
                            }`}
                    >
                        <div className="mx-auto grid aspect-[4/5] w-full max-w-[6.4rem] place-items-center rounded-[24px] border border-[rgba(201,166,70,0.28)] bg-[radial-gradient(circle_at_50%_22%,rgba(245,214,137,0.34),rgba(11,47,42,0.1)_50%,rgba(6,27,24,0.14))]">
                            <span className="font-[var(--font-display)] text-[clamp(2.7rem,9vw,4.2rem)] font-semibold leading-none text-[var(--color-gold-700)]">
                                {groom.first[0]}
                            </span>
                        </div>

                        <p className="mt-3 font-[var(--font-sacred)] text-[8px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold-700)]">
                            Groom
                        </p>

                        <p className="mt-1 truncate font-[var(--font-display)] text-[clamp(1.25rem,4vw,1.75rem)] font-semibold leading-none">
                            {groom.first}
                        </p>
                    </button>
                </div>

                <div className="relative mt-4 rounded-[24px] border border-[rgba(201,166,70,0.28)] bg-[rgba(6,27,24,0.06)] p-4 text-right">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePerson}
                            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p className="font-[var(--font-sacred)] text-[8px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]">
                                {activeRole} Spotlight
                            </p>

                            <div className="mt-2 flex items-end justify-between gap-4">
                                <p className="font-[var(--font-display)] text-[clamp(2rem,7vw,2.8rem)] font-semibold leading-none">
                                    {active.first}
                                </p>

                                <p className="shrink-0 font-[var(--font-sacred)] text-[10px] font-bold tracking-[0.18em] text-[rgba(6,27,24,0.5)]">
                                    {getInitials(active)}
                                </p>
                            </div>

                            <p className="mt-2 text-sm leading-5 text-[rgba(6,27,24,0.62)]">
                                {active.full}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <p className="mt-4 rounded-[24px] border border-[rgba(201,166,70,0.24)] bg-[rgba(6,27,24,0.46)] p-4 text-right font-[var(--font-display)] text-[clamp(1.15rem,4.4vw,1.45rem)] italic leading-6 text-[rgba(255,248,236,0.84)] backdrop-blur-xl">
                “Two lives, one blessing, one sacred beginning.”
            </p>
        </div>
    );
}