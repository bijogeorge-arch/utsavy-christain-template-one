import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { RingsSvg } from "../../components/svg/RingsSvg";
import { Card } from "../../components/ui/Card";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";
import { SacredCelebration } from "./SacredCelebration";

type RSVPSceneProps = {
    data: WeddingData;
};

export function RSVPScene({ data }: RSVPSceneProps) {
    const [accepted, setAccepted] = useState(false);

    return (
        <SceneShell
            ornament={
                <div className="relative h-full w-full">
                    <div className="absolute inset-y-0 left-[-16%] w-[88%] opacity-90">
                        <RingsSvg />
                    </div>

                    <div className="absolute left-8 top-[18%] h-44 w-44 rounded-full bg-[rgba(245,214,137,0.12)] blur-3xl" />
                    <div className="absolute bottom-[18%] left-0 h-48 w-48 rounded-full bg-[rgba(255,248,236,0.08)] blur-3xl" />
                </div>
            }
        >
            <AnimatePresence>
                {accepted && <SacredCelebration key="celebration" />}
            </AnimatePresence>

            <RightAlignedContent className="w-[84%] max-w-[360px] translate-y-[-1%]">
                <motion.p
                    variants={itemVariants}
                    className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-300)]"
                >
                    RSVP
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="mt-3 font-[var(--font-display)] text-[clamp(3.15rem,12vw,4.9rem)] font-semibold leading-[0.86] tracking-[-0.07em]"
                >
                    Your
                    <span className="block text-[var(--color-gold-300)]">Presence</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-4 max-w-[300px] text-sm leading-6 text-[rgba(255,248,236,0.74)]"
                >
                    Dear {data.guestName}, your blessing and presence would make this
                    celebration more meaningful.
                </motion.p>

                <GoldDivider />

                <motion.div variants={itemVariants} className="relative w-full">
                    <AnimatePresence>
                        {accepted && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, filter: "blur(40px)" }}
                                animate={{ 
                                    opacity: [0, 1, 0.7], 
                                    scale: [0.5, 1.4, 1.2],
                                    filter: ["blur(40px)", "blur(20px)", "blur(30px)"]
                                }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(245,214,137,0.45)_0%,transparent_75%)]"
                            />
                        )}
                    </AnimatePresence>

                    <Card>
                        <AnimatePresence mode="wait">
                            {!accepted ? (
                                <motion.div
                                    key="rsvp-question"
                                    initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <p className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]">
                                        Kindly respond
                                    </p>

                                    <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-tight">
                                        {data.copy.rsvpQuestion}
                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-[rgba(6,27,24,0.68)]">
                                        This is a frontend-only RSVP confirmation for the invitation
                                        experience.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setAccepted(true)}
                                        className="mt-6 flex min-h-14 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] px-6 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-cathedral-900)] shadow-[0_0_34px_rgba(245,214,137,0.28)] transition hover:scale-[1.01] active:scale-[0.98]"
                                    >
                                        Accept Invitation
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="rsvp-success"
                                    initial={{ opacity: 0, y: 16, scale: 0.96, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-center"
                                >
                                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-[rgba(201,166,70,0.42)] bg-[rgba(245,214,137,0.18)]">
                                        <motion.span 
                                            initial={{ scale: 0.2, rotate: -90, opacity: 0 }}
                                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                            transition={{ 
                                                type: "spring", 
                                                stiffness: 300, 
                                                damping: 15,
                                                delay: 0.1 
                                            }}
                                            className="text-3xl text-[var(--color-gold-700)]"
                                        >
                                            ✦
                                        </motion.span>
                                    </div>

                                    <p className="mt-5 font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]">
                                        RSVP received
                                    </p>

                                    <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-tight">
                                        Thank you, {data.guestName}
                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-[rgba(6,27,24,0.68)]">
                                        {data.copy.rsvpSuccess}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                </motion.div>

            </RightAlignedContent>
        </SceneShell>
    );
}