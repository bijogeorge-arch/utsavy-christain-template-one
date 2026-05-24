import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { StoryRoadmapSvg } from "../../components/svg/StoryRoadmapSvg";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";
import { StoryMomentCard } from "./StoryMomentCard";
import { StoryMomentControls } from "./StoryMomentControls";

type StorySceneProps = {
    data: WeddingData;
};

export function StoryScene({ data }: StorySceneProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = data.story.moments.length;
    const activeMoment = data.story.moments[activeIndex];

    function goPrevious() {
        setActiveIndex((current) => (current - 1 + total) % total);
    }

    function goNext() {
        setActiveIndex((current) => (current + 1) % total);
    }

    // Reset scroll position on activeIndex change to keep header visible
    useEffect(() => {
        const scrollContainer = document.querySelector('.overflow-y-auto');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [activeIndex]);

    return (
        <SceneShell
            ornament={
                <div className="relative h-full w-full overflow-hidden">
                    <div className="absolute inset-y-[16%] left-[-19%] w-[60%] opacity-92">
                        <StoryRoadmapSvg activeIndex={activeIndex} onNodeClick={setActiveIndex} />
                    </div>

                    <div className="absolute left-8 top-[18%] h-40 w-40 rounded-full bg-[rgba(245,214,137,0.12)] blur-3xl" />
                    <div className="absolute bottom-[16%] left-0 h-52 w-52 rounded-full bg-[rgba(255,248,236,0.08)] blur-3xl" />
                </div>
            }
        >
            <section
                className="relative z-20 flex w-full flex-col px-2 pt-2 text-right safe-top"
                aria-roledescription="carousel"
                aria-label="Their story roadmap"
            >
                <motion.p
                    variants={itemVariants}
                    className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-700)]"
                >
                    Their Story
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="ml-auto mt-1 max-w-[330px] font-[var(--font-display)] text-[clamp(2.35rem,8.8vw,3.75rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[var(--color-cathedral-950)]"
                >
                    Written
                    <span className="block text-[var(--color-gold-500)]">in Grace</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="ml-auto mt-2 max-w-[300px] text-xs sm:text-sm leading-5 sm:leading-6 text-[var(--color-cathedral-800)]"
                >
                    Tap through the milestones of their journey.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="ml-auto mt-2 w-full max-w-[315px]"
                >
                    <GoldDivider />
                </motion.div>

                <div className="relative mt-4 flex items-center justify-end">
                    <div className="w-full max-w-[315px] sm:max-w-[340px]">
                        <AnimatePresence mode="wait">
                            <StoryMomentCard
                                key={activeMoment.year}
                                moment={activeMoment}
                                index={activeIndex}
                            />
                        </AnimatePresence>

                        <StoryMomentControls
                            activeIndex={activeIndex}
                            total={total}
                            onPrevious={goPrevious}
                            onNext={goNext}
                        />
                    </div>
                </div>
            </section>
        </SceneShell>
    );
}