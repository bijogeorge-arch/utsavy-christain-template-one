import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";
import { EventSelector, type EventKey } from "./EventSelector";
import { EventDetailCard } from "./EventDetailCard";
import { EventVisual } from "./EventVisual";

type EventsSceneProps = {
    data: WeddingData;
};

export function EventsScene({ data }: EventsSceneProps) {
    const [activeKey, setActiveKey] = useState<EventKey>("ceremony");

    const activeEvent = useMemo(
        () => data.events[activeKey],
        [activeKey, data.events],
    );

    return (
        <SceneShell ornament={<EventVisual activeKey={activeKey} />}>
            <RightAlignedContent className="translate-y-0 sm:translate-y-[-1%]">
                <motion.p
                    variants={itemVariants}
                    className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-300)]"
                >
                    Wedding Events
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="mt-3 font-[var(--font-display)] text-[clamp(2.8rem,10vw,4.4rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[var(--color-ivory-100)]"
                >
                    Sacred
                    <span className="block text-[var(--color-gold-300)]">Moments</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-4 max-w-[280px] text-sm leading-relaxed text-[rgba(255,248,236,0.72)] sm:max-w-[300px]"
                >
                    Tap each event to reveal its blessing, time, venue, location, and countdown.
                </motion.p>

                <div className="my-5 w-full sm:my-6">
                    <GoldDivider align="center" className="sm:hidden" />
                    <GoldDivider align="right" className="hidden sm:block" />
                </div>

                <motion.div variants={itemVariants} className="w-full">
                    <EventSelector activeKey={activeKey} onChange={setActiveKey} />
                </motion.div>

                <div className="mt-6 w-full sm:mt-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeKey}
                            initial={{ opacity: 0, y: 18, scale: 0.97, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -12, scale: 0.98, filter: "blur(8px)" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <EventDetailCard event={activeEvent} activeKey={activeKey} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </RightAlignedContent>
        </SceneShell>
    );
}