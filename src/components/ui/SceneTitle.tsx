import { motion } from "motion/react";
import { itemVariants } from "../../animations/variants";

type SceneTitleProps = {
    kicker?: string;
    title: string;
    subtitle?: string;
    dark?: boolean;
};

export function SceneTitle({ kicker, title, subtitle, dark = false }: SceneTitleProps) {
    return (
        <div className="space-y-3">
            {kicker && (
                <motion.p
                    variants={itemVariants}
                    className={`font-[var(--font-sacred)] text-[10px] font-semibold uppercase tracking-[0.34em] ${dark ? "text-[var(--color-gold-700)]" : "text-[var(--color-gold-300)]"
                        }`}
                >
                    {kicker}
                </motion.p>
            )}

            <motion.h1
                variants={itemVariants}
                className="sacred-text-shadow font-[var(--font-display)] text-[clamp(3rem,14vw,5.2rem)] font-semibold leading-[0.86] tracking-[-0.06em]"
            >
                {title}
            </motion.h1>

            {subtitle && (
                <motion.p
                    variants={itemVariants}
                    className={`ml-auto max-w-[280px] text-sm leading-6 ${dark ? "text-[rgba(6,27,24,0.76)]" : "text-[rgba(255,248,236,0.76)]"
                        }`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}