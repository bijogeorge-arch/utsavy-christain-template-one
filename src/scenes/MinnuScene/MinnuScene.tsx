import { motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { MinnuPendantSvg } from "../../components/svg/MinnuPendantSvg";
import { Card } from "../../components/ui/Card";
import { itemVariants } from "../../animations/variants";

type MinnuSceneProps = {
    data: WeddingData;
};

export function MinnuScene({ data }: MinnuSceneProps) {
    return (
        <SceneShell ornament={<MinnuPendantSvg />}>
            <RightAlignedContent>
                <motion.p variants={itemVariants} className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-300)]">
                    The Sacred Blessing
                </motion.p>

                <motion.h1 variants={itemVariants} className="mt-3 font-[var(--font-display)] text-5xl font-semibold leading-[0.88] tracking-[-0.06em]">
                    Minnu & Manthrakodi
                </motion.h1>

                <motion.div variants={itemVariants} className="mt-6 w-full">
                    <Card>
                        <p className="font-[var(--font-display)] text-3xl font-semibold leading-none">
                            {data.initials}
                        </p>

                        <div className="my-4 h-px bg-[rgba(201,166,70,0.35)]" />

                        <p className="text-sm leading-7 text-[rgba(6,27,24,0.74)]">
                            The Minnu is tied. The Manthrakodi is placed. A new life begins in grace.
                        </p>
                    </Card>
                </motion.div>
            </RightAlignedContent>
        </SceneShell>
    );
}