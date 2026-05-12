import { motion } from "motion/react";
import { padTime } from "../../lib/countdown";

type CountdownUnitProps = {
    label: string;
    value: number;
};

export function CountdownUnit({ label, value }: CountdownUnitProps) {
    const display = label === "Days" ? String(value) : padTime(value);

    return (
        <motion.div
            layout
            className="relative overflow-hidden rounded-[26px] border border-[rgba(201,166,70,0.38)] bg-[rgba(6,27,24,0.66)] p-4 text-right shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl"
        >
            <span className="absolute inset-y-0 left-0 w-12 animate-[gold-shimmer_3.8s_var(--ease-sacred)_infinite] bg-white/10 blur-md" />

            <motion.div
                key={`${label}-${display}`}
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="relative font-[var(--font-display)] text-[clamp(2.4rem,10vw,3.7rem)] font-semibold leading-none tracking-[-0.06em] text-[var(--color-gold-300)]"
            >
                {display}
            </motion.div>

            <div className="relative mt-2 text-[9px] font-bold uppercase tracking-[0.28em] text-[rgba(255,248,236,0.62)]">
                {label}
            </div>
        </motion.div>
    );
}