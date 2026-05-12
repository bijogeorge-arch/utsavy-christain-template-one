import { motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { RingBlessingSvg } from "../../components/svg/RingBlessingSvg";
import { BlessingOrbit } from "../../components/effects/BlessingOrbit";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";
import { EngagementDetailsCard } from "./EngagementDetailsCard";

type EngagementSceneProps = {
    data: WeddingData;
};

export function EngagementScene({ data }: EngagementSceneProps) {
    const event = data.events.engagement;

    return (
        <SceneShell
            ornament={
                <div className="relative h-full w-full">
                    <div className="absolute inset-y-0 left-[-18%] w-[88%] opacity-90">
                        <RingBlessingSvg />
                    </div>

                    <BlessingOrbit />

                    <div className="absolute left-10 top-[20%] h-36 w-36 rounded-full bg-[rgba(245,214,137,0.12)] blur-3xl" />
                    <div className="absolute bottom-[18%] left-2 h-44 w-44 rounded-full bg-[rgba(255,248,236,0.07)] blur-3xl" />
                </div>
            }
        >
            <RightAlignedContent className="w-[82%] max-w-[350px] translate-y-[-1%]">
                <motion.p
                    variants={itemVariants}
                    className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-300)]"
                >
                    Engagement
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="mt-3 max-w-full font-[var(--font-display)] text-[clamp(3.35rem,12vw,4.85rem)] font-semibold leading-[0.82] tracking-[-0.075em]"
                >
                    Ring
                    <span className="block text-[var(--color-gold-300)]">Blessing</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-4 max-w-[300px] text-sm leading-6 text-[rgba(255,248,236,0.74)]"
                >
                    Two families gather in prayer as the rings are blessed, marking the
                    first sacred promise of {data.bride.first} and {data.groom.first}.
                </motion.p>

                <GoldDivider />

                <EngagementDetailsCard event={event} />

                <motion.div
                    variants={itemVariants}
                    className="mt-5 rounded-[24px] border border-[rgba(201,166,70,0.28)] bg-[rgba(6,27,24,0.48)] p-4 text-right backdrop-blur-xl"
                >
                    <p className="font-[var(--font-display)] text-xl italic leading-6 text-[rgba(255,248,236,0.84)]">
                        “Two rings are blessed.
                        <br />
                        One promise begins.”
                    </p>
                </motion.div>
            </RightAlignedContent>
        </SceneShell>
    );
}