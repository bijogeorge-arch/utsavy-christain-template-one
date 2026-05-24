import { motion, AnimatePresence } from "motion/react";
import type { EventKey } from "./EventSelector";
import { RingBlessingSvg } from "../../components/svg/RingBlessingSvg";
import { WelcomeChapelInteriorSvg } from "../../components/svg/WelcomeChapelInteriorSvg";
import { LilyVineSvg } from "../../components/svg/LilyVineSvg";
import { MinnuPendantSvg } from "../../components/svg/MinnuPendantSvg";
import { EventTimelineSvg } from "../../components/svg/EventTimelineSvg";
import { CountdownSparkles } from "../../components/effects/CountdownSparkles";

type EventVisualProps = {
    activeKey: EventKey;
};

export function EventVisual({ activeKey }: EventVisualProps) {
    return (
        <div className="relative h-full w-full overflow-hidden">
            {/* Timeline: Only visible on larger mobile and desktop */}
            <div className="absolute inset-y-0 left-[-8%] z-20 w-[65%] opacity-70 transition-all sm:left-[-5%] sm:w-[62%] sm:opacity-95">
                <EventTimelineSvg activeKey={activeKey} />
            </div>

            <CountdownSparkles />

            <AnimatePresence mode="wait">
                {activeKey === "engagement" && (
                    <motion.div
                        key="engagement-visual"
                        initial={{ opacity: 0, scale: 0.9, x: -20, filter: "blur(12px)" }}
                        animate={{ opacity: 0.65, scale: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, x: -20, filter: "blur(12px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-y-0 left-[-32%] z-10 w-[100%] sm:left-[-28%] sm:opacity-82 sm:w-[94%]"
                    >
                        <RingBlessingSvg />
                    </motion.div>
                )}

                {activeKey === "ceremony" && (
                    <motion.div
                        key="ceremony-visual"
                        initial={{ opacity: 0, scale: 0.9, x: -20, filter: "blur(12px)" }}
                        animate={{ opacity: 0.65, scale: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, x: -20, filter: "blur(12px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-y-0 left-[-30%] z-10 w-[100%] sm:left-[-26%] sm:opacity-82 sm:w-[96%]"
                    >
                        <WelcomeChapelInteriorSvg />
                    </motion.div>
                )}

                {activeKey === "minnu" && (
                    <motion.div
                        key="minnu-visual"
                        initial={{ opacity: 0, scale: 0.9, x: -20, filter: "blur(12px)" }}
                        animate={{ opacity: 0.65, scale: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, x: -20, filter: "blur(12px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-y-0 left-[-22%] z-10 w-[90%] sm:left-[-18%] sm:opacity-82 sm:w-[85%]"
                    >
                        <MinnuPendantSvg />
                    </motion.div>
                )}

                {activeKey === "reception" && (
                    <motion.div
                        key="reception-visual"
                        initial={{ opacity: 0, scale: 0.9, x: -20, filter: "blur(12px)" }}
                        animate={{ opacity: 0.65, scale: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, x: -20, filter: "blur(12px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-y-0 left-[-15%] z-10 w-[85%] sm:left-[-12%] sm:opacity-82 sm:w-[78%]"
                    >
                        <LilyVineSvg />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Ambient Glows */}
            <div className="absolute left-6 top-[15%] h-48 w-48 rounded-full bg-[rgba(245,214,137,0.12)] blur-[60px]" />
            <div className="absolute bottom-[15%] left-0 h-56 w-56 rounded-full bg-[rgba(255,248,236,0.06)] blur-[70px]" />
        </div>
    );
}