import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { FamilyTreeSvg } from "../../components/svg/FamilyTreeSvg";
import { Card } from "../../components/ui/Card";
import { itemVariants } from "../../animations/variants";
import { FamilyMemberGroup } from "./FamilyMemberGroup";
import { FamilySideSelector } from "./FamilySideSelector";

type FamilySceneProps = {
    data: WeddingData;
};

type FamilySide = "bride" | "groom";

export function FamilyScene({ data }: FamilySceneProps) {
    const [activeSide, setActiveSide] = useState<FamilySide>("bride");

    const activeFamily = activeSide === "bride" ? data.families.bride : data.families.groom;

    return (
        <SceneShell
            ornament={
                <div className="relative h-full w-full">
                    <div className="absolute inset-y-0 left-[-8%] w-[78%] opacity-95 transition-all duration-700">
                        <FamilyTreeSvg />
                    </div>

                    <div className="absolute left-8 top-[18%] h-24 w-24 rounded-full bg-[rgba(245,214,137,0.12)] blur-2xl" />
                    <div className="absolute bottom-[18%] left-2 h-36 w-36 rounded-full bg-[rgba(255,248,236,0.08)] blur-3xl" />
                </div>
            }
        >
            <RightAlignedContent className="translate-y-0 sm:translate-y-[-2%]">
                <motion.p
                    variants={itemVariants}
                    className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-700)]"
                >
                    Together with their families
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="mt-2 font-[var(--font-display)] text-[clamp(2.8rem,10vw,4.4rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[var(--color-cathedral-950)]"
                >
                    Family
                    <span className="block text-[var(--color-gold-500)]">Blessings</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-3.5 max-w-[280px] text-[13px] leading-relaxed text-[var(--color-cathedral-800)] sm:max-w-[300px]"
                >
                    With grateful hearts, two families come together to bless the sacred
                    beginning of {data.bride.first} and {data.groom.first}.
                </motion.p>

                <motion.div variants={itemVariants} className="mt-6 w-full">
                    <FamilySideSelector activeSide={activeSide} onChange={setActiveSide} />
                </motion.div>

                <motion.div variants={itemVariants} className="mt-4 w-full relative">
                    {/* Reduced max-height on mobile to ensure no overlap with bottom controls */}
                    <Card className="min-h-[280px] max-h-[38dvh] overflow-y-auto no-scrollbar sm:min-h-[400px] sm:max-h-[48dvh]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSide}
                                initial={{ opacity: 0, x: activeSide === "bride" ? -12 : 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: activeSide === "bride" ? 12 : -12 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-6 pb-6"
                            >
                                <FamilyMemberGroup
                                    title="Parents"
                                    names={activeFamily.parents}
                                />

                                <FamilyMemberGroup
                                    title="Grandparents & Elders"
                                    names={activeFamily.elders}
                                />

                                <FamilyMemberGroup
                                    title="Siblings"
                                    names={activeFamily.siblings}
                                />

                                <FamilyMemberGroup
                                    title="Godparents"
                                    names={activeFamily.godparents}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </Card>
                    {/* Fading bottom indicator to represent scroll overflow */}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 rounded-b-[28px] bg-gradient-to-t from-[rgba(var(--color-ivory-50-rgb),0.94)] to-transparent" />
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="mt-4 max-w-[280px] text-[11px] leading-relaxed text-[var(--color-cathedral-800)]/80"
                >
                    {data.copy.familyBlessing}
                </motion.p>
            </RightAlignedContent>
        </SceneShell>
    );
}