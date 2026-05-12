import { useState } from "react";
import { motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { ContactFamiliesSvg } from "../../components/svg/ContactFamiliesSvg";
import { itemVariants } from "../../animations/variants";
import { ContactCard } from "./ContactCard";
import { SacredSwitcher } from "./SacredSwitcher";

type ContactFamiliesSceneProps = {
    data: WeddingData;
};

export function ContactFamiliesScene({ data }: ContactFamiliesSceneProps) {
    const [activeSide, setActiveSide] = useState<"Bride" | "Groom">("Bride");

    const activeContact = data.contacts.find((c) => c.side === activeSide) || data.contacts[0];

    return (
        <SceneShell
            ornament={
                <div className="relative h-full w-full">
                    <div className="absolute inset-y-0 left-[-18%] w-[92%] opacity-95">
                        <ContactFamiliesSvg />
                    </div>

                    {/* Dynamic Background Light */}
                    <motion.div 
                        animate={{
                            x: activeSide === "Bride" ? -40 : 40,
                            opacity: [0.12, 0.18, 0.12]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-8 top-[18%] h-64 w-64 rounded-full bg-[rgba(245,214,137,0.15)] blur-[100px]" 
                    />
                    
                    <motion.div 
                        animate={{
                            x: activeSide === "Bride" ? 20 : -20,
                        }}
                        className="absolute bottom-[14%] left-0 h-72 w-72 rounded-full bg-[rgba(255,248,236,0.1)] blur-[120px]" 
                    />
                </div>
            }
        >
            <RightAlignedContent className="w-[90%] max-w-[440px] translate-y-[-2%]">
                <div className="space-y-1">
                    <motion.p
                        variants={itemVariants}
                        className="font-[var(--font-sacred)] text-[11px] font-bold uppercase tracking-[0.45em] text-[var(--color-gold-300)]"
                    >
                        Contact Families
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="font-[var(--font-display)] text-[clamp(2.8rem,11vw,4.4rem)] font-semibold leading-[0.85] tracking-[-0.07em] pt-2"
                    >
                        Need
                        <span className="block text-[var(--color-gold-300)]">Assistance?</span>
                    </motion.h1>
                </div>

                <motion.p
                    variants={itemVariants}
                    className="mt-6 max-w-[340px] text-[14px] leading-relaxed text-[rgba(255,248,236,0.72)] font-medium"
                >
                    For directions, timing, or family coordination, please reach out to the
                    respective family side.
                </motion.p>

                <motion.div 
                    variants={itemVariants}
                    className="mt-10 mb-8 w-full"
                >
                    <SacredSwitcher activeSide={activeSide} onChange={setActiveSide} />
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="w-full"
                >
                    <ContactCard contact={activeContact} />
                </motion.div>
                
                <motion.div
                    variants={itemVariants}
                    className="mt-10 flex flex-col items-center gap-4 opacity-50 sm:items-end sm:text-right"
                >
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent sm:to-[var(--color-gold-500)]" />
                    <p className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.4em]">
                        Grace be with you
                    </p>
                </motion.div>
            </RightAlignedContent>
        </SceneShell>
    );
}