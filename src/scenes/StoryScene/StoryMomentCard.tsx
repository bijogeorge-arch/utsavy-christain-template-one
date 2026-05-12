import { motion } from "motion/react";
import type { StoryMoment } from "../../types/wedding";

type StoryMomentCardProps = {
    moment: StoryMoment;
    index: number;
};

const motifs = ["✦", "∞", "✚"];

export function StoryMomentCard({ moment, index }: StoryMomentCardProps) {
    return (
        <motion.article
            key={moment.year}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of 3: ${moment.title}`}
            initial={{ opacity: 0, scale: 0.9, y: 22, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.08, y: -18, filter: "blur(12px)" }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-[clamp(14.5rem,34dvh,18.5rem)] flex-col justify-center overflow-hidden rounded-[30px] border border-[rgba(201,166,70,0.34)] bg-[rgba(255,248,236,0.95)] p-5 text-right text-[var(--color-cathedral-900)] shadow-[0_26px_78px_rgba(0,0,0,0.24)]"
        >
            <span className="absolute inset-y-0 left-0 w-14 animate-[gold-shimmer_3.8s_var(--ease-sacred)_infinite] bg-white/20 blur-md" />

            <div className="relative ml-auto grid h-12 w-12 place-items-center rounded-full border border-[rgba(201,166,70,0.4)] bg-[rgba(245,214,137,0.16)] text-xl text-[var(--color-gold-700)]">
                {motifs[index] ?? "✦"}
            </div>

            <p className="relative mt-4 font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-700)]">
                {moment.year}
            </p>

            <h2 className="relative ml-auto mt-2 max-w-[260px] font-[var(--font-display)] text-[clamp(2rem,7.4vw,2.85rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
                {moment.title}
            </h2>

            <div className="relative my-4 ml-auto h-px w-24 bg-[rgba(201,166,70,0.38)]" />

            <p className="relative ml-auto max-w-[270px] text-sm leading-6 text-[rgba(6,27,24,0.68)]">
                {moment.description}
            </p>
        </motion.article>
    );
}