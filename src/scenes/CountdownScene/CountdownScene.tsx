import { motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { CountdownHaloSvg } from "../../components/svg/CountdownHaloSvg";
import { CountdownSparkles } from "../../components/effects/CountdownSparkles";
import { Countdown } from "../../components/countdown/Countdown";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";

type CountdownSceneProps = {
    data: WeddingData;
};

export function CountdownScene({ data }: CountdownSceneProps) {
    const ceremony = data.events.ceremony;

    return (
        <SceneShell
            ornament={
                <div className="relative h-full w-full">
                    <div className="absolute inset-y-0 left-[-18%] w-[92%] opacity-95">
                        <CountdownHaloSvg />
                    </div>

                    <CountdownSparkles />

                    <div className="absolute left-8 top-[16%] h-40 w-40 rounded-full bg-[rgba(245,214,137,0.13)] blur-3xl" />
                    <div className="absolute bottom-[18%] left-0 h-48 w-48 rounded-full bg-[rgba(255,248,236,0.08)] blur-3xl" />
                </div>
            }
        >
            <RightAlignedContent className="w-[84%] max-w-[360px] translate-y-[-1%]">
                <motion.p
                    variants={itemVariants}
                    className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-700)]"
                >
                    Final countdown
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="mt-2 sm:mt-3 font-[var(--font-display)] text-[clamp(2.2rem,9vw,4.8rem)] sm:text-[clamp(3.05rem,12vw,4.8rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-[var(--color-cathedral-950)]"
                >
                    To Holy
                    <span className="block text-[var(--color-gold-500)]">Matrimony</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-2 sm:mt-4 max-w-[300px] text-xs sm:text-sm leading-5 sm:leading-6 text-[var(--color-cathedral-800)]"
                >
                    The sacred hour draws near as {data.bride.first} and{" "}
                    {data.groom.first} prepare to receive the blessing of marriage.
                </motion.p>

                <GoldDivider />

                <motion.div variants={itemVariants} className="w-full">
                    <Countdown targetISO={ceremony.dateISO} />
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-4 sm:mt-5 rounded-[20px] sm:rounded-[26px] border border-[rgba(var(--color-gold-500-rgb),0.28)] bg-[rgba(var(--color-ivory-50-rgb),0.78)] p-4 sm:p-5 text-right shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                >
                    <p className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]">
                        {ceremony.displayDate}
                    </p>

                    <p className="mt-2 font-[var(--font-display)] text-3xl font-semibold leading-none text-[var(--color-cathedral-900)]">
                        {ceremony.time}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-[var(--color-cathedral-800)]">
                        {ceremony.venue}
                        <br />
                        {ceremony.city}
                    </p>
                </motion.div>
            </RightAlignedContent>
        </SceneShell>
    );
}