import { motion } from "motion/react";

type FamilyMemberGroupProps = {
    title: string;
    names: string[];
};

export function FamilyMemberGroup({ title, names }: FamilyMemberGroupProps) {
    if (!names || names.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <p className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.32em] text-[var(--color-gold-700)]">
                {title}
            </p>

            <div className="mt-3 space-y-1.5">
                {names.map((name, index) => (
                    <motion.p
                        key={name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="font-[var(--font-display)] text-[1.2rem] font-semibold leading-tight text-[var(--color-cathedral-900)] sm:text-[1.5rem]"
                    >
                        {name}
                    </motion.p>
                ))}
            </div>
        </motion.div>
    );
}