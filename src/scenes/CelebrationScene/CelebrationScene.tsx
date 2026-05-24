import { motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { CathedralArchSvg } from "../../components/svg/CathedralArchSvg";
import { ChapelLightRays } from "../../components/effects/ChapelLightRays";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";
import { SacredSpotlightCard } from "./SacredSpotlightCard";

type CelebrationSceneProps = {
    data: WeddingData;
};

export function CelebrationScene({ data }: CelebrationSceneProps) {
    return (
        <SceneShell
            ornament={
                <div className="relative h-full w-full overflow-hidden">
                    <div className="absolute inset-y-[14%] left-[-18%] w-[76%] opacity-65">
                        <CathedralArchSvg />
                    </div>

                    <ChapelLightRays />

                    <div className="absolute left-6 top-[16%] h-40 w-40 rounded-full bg-[rgba(245,214,137,0.1)] blur-3xl" />
                    <div className="absolute bottom-[18%] left-0 h-48 w-48 rounded-full bg-[rgba(255,248,236,0.06)] blur-3xl" />
                </div>
            }
        >
            <section className="relative z-20 flex w-full flex-col px-6 pt-7 text-right safe-top">
                <motion.p
                    variants={itemVariants}
                    className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-700)]"
                >
                    Celebration View
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="ml-auto mt-2 max-w-[300px] font-[var(--font-display)] text-[clamp(2.35rem,8.8vw,3.7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[var(--color-cathedral-950)]"
                >
                    Bride
                    <span className="block text-[var(--color-gold-500)]">& Groom</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="ml-auto mt-2 max-w-[305px] text-sm leading-6 text-[var(--color-cathedral-800)]"
                >
                    Tap to reveal each sacred spotlight.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="ml-auto mt-3 w-full max-w-[315px]"
                >
                    <GoldDivider />
                </motion.div>

                <div className="mt-6 flex items-center justify-end">
                    <motion.div variants={itemVariants} className="w-full max-w-[340px]">
                        <SacredSpotlightCard bride={data.bride} groom={data.groom} />
                    </motion.div>
                </div>
            </section>
        </SceneShell>
    );
}