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
            className="relative overflow-hidden rounded-[26px] border border-[rgba(var(--color-gold-500-rgb),0.38)] bg-[rgba(var(--color-ivory-50-rgb),0.82)] p-4 text-right shadow-[0_24px_70px_rgba(0,0,0,0.05)] backdrop-blur-xl"
        >
            <span className="absolute inset-y-0 left-0 w-12 animate-[gold-shimmer_3.8s_var(--ease-sacred)_infinite] bg-[rgba(var(--color-gold-300-rgb),0.1)] blur-md" />

            <motion.div
                key={`${label}-${display}`}
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="relative font-[var(--font-display)] text-[clamp(2.4rem,10vw,3.7rem)] font-semibold leading-none tracking-[-0.06em] text-[var(--color-gold-700)]"
            >
                {display}
            </motion.div>

            <div className="relative mt-2 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-cathedral-800)]">
                {label}
            </div>
        </motion.div>
    );
}