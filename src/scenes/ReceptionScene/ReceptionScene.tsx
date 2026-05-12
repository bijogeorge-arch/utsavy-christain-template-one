import { motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { LilyVineSvg } from "../../components/svg/LilyVineSvg";
import { Card } from "../../components/ui/Card";
import { MapButton } from "../../components/ui/MapButton";
import { itemVariants } from "../../animations/variants";

type ReceptionSceneProps = {
    data: WeddingData;
};

export function ReceptionScene({ data }: ReceptionSceneProps) {
    const event = data.events.reception;

    return (
        <SceneShell ornament={<LilyVineSvg />} tone="warm">
            <RightAlignedContent>
                <motion.p variants={itemVariants} className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-300)]">
                    Dinner & Celebration
                </motion.p>

                <motion.h1 variants={itemVariants} className="mt-3 font-[var(--font-display)] text-6xl font-semibold leading-[0.82] tracking-[-0.07em]">
                    Reception
                </motion.h1>

                <motion.div variants={itemVariants} className="mt-6 w-full">
                    <Card>
                        <p className="font-[var(--font-sacred)] text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold-700)]">
                            {event.displayDate}
                        </p>
                        <p className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
                            {event.time}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[rgba(6,27,24,0.68)]">
                            {event.venue}
                            <br />
                            {event.city}
                        </p>
                        <MapButton href={event.mapUrl} />
                    </Card>
                </motion.div>

                <motion.p variants={itemVariants} className="mt-5 max-w-[280px] text-sm leading-6 text-[rgba(255,248,236,0.78)]">
                    Dinner, blessings, music, and an evening of celebration.
                </motion.p>
            </RightAlignedContent>
        </SceneShell>
    );
}