import { motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { CathedralArchSvg } from "../../components/svg/CathedralArchSvg";
import { Card } from "../../components/ui/Card";
import { MapButton } from "../../components/ui/MapButton";
import { itemVariants } from "../../animations/variants";

type HolyMatrimonySceneProps = {
    data: WeddingData;
};

export function HolyMatrimonyScene({ data }: HolyMatrimonySceneProps) {
    const event = data.events.ceremony;

    return (
        <SceneShell ornament={<CathedralArchSvg />}>
            <RightAlignedContent>
                <motion.p variants={itemVariants} className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-300)]">
                    Inside the Church
                </motion.p>

                <motion.h1 variants={itemVariants} className="mt-3 font-[var(--font-display)] text-5xl font-semibold leading-[0.88] tracking-[-0.06em]">
                    Holy Matrimony
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

                <motion.blockquote variants={itemVariants} className="mt-5 max-w-[300px] text-sm italic leading-6 text-[rgba(255,248,236,0.76)]">
                    “{data.verse.text}”
                    <span className="mt-2 block not-italic text-[var(--color-gold-300)]">
                        — {data.verse.reference}
                    </span>
                </motion.blockquote>
            </RightAlignedContent>
        </SceneShell>
    );
}