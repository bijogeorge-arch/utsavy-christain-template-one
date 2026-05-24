import { motion } from "motion/react";
import type { StoryMoment } from "../../types/wedding";

type StoryMomentCardProps = {
    moment: StoryMoment;
    index: number;
};

const motifs = ["✦", "∞", "✚"];

export function StoryMomentCard({ moment, index }: StoryMomentCardProps) {
    const firstLetter = moment.description.charAt(0);
    const restOfText = moment.description.slice(1);

    return (
        <motion.article
            key={moment.year}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of 3: ${moment.title}`}
            initial={{ opacity: 0, scale: 0.94, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.04, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex min-h-[clamp(13rem,30dvh,17.5rem)] flex-col justify-center overflow-hidden rounded-[26px] border border-[rgba(var(--color-gold-500-rgb),0.34)] bg-gradient-to-br from-[rgba(var(--color-ivory-50-rgb),0.96)] to-[rgba(var(--color-ivory-200-rgb),0.85)] p-5 text-right text-[var(--color-cathedral-900)] shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 hover:border-[rgba(var(--color-gold-500-rgb),0.52)] hover:shadow-[0_24px_58px_rgba(0,0,0,0.09)]"
        >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-y-0 left-0 w-16 -translate-x-[100%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-[var(--ease-sacred)] bg-gradient-to-r from-transparent via-[rgba(var(--color-gold-300-rgb),0.2)] to-transparent pointer-events-none" />

            <div className="relative ml-auto grid h-10 w-10 place-items-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.42)] bg-[rgba(var(--color-ivory-100-rgb),0.65)] text-lg text-[var(--color-gold-700)] shadow-[0_4px_12px_rgba(var(--color-gold-500-rgb),0.12)] transition-transform duration-500 group-hover:scale-110">
                {motifs[index] ?? "✦"}
            </div>

            <p className="relative mt-3.5 font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-700)]">
                {moment.year}
            </p>

            <h2 className="relative ml-auto mt-1 max-w-[260px] font-[var(--font-display)] text-[clamp(1.85rem,6.8vw,2.5rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--color-cathedral-950)]">
                {moment.title}
            </h2>

            <div className="relative my-3.5 ml-auto h-px w-20 bg-[rgba(var(--color-gold-500-rgb),0.38)]" />

            <p className="relative ml-auto max-w-[270px] text-[13px] sm:text-sm leading-[1.65] text-[var(--color-cathedral-900)] text-left">
                <span className="float-left mr-2.5 mt-0.5 font-[var(--font-display)] text-3xl font-extrabold leading-none text-[var(--color-gold-700)]">
                    {firstLetter}
                </span>
                {restOfText}
            </p>
        </motion.article>
    );
}