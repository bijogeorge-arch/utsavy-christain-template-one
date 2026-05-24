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

type RSVPStep = "decision" | "submitting" | "success";

export function RSVPScene({ data }: RSVPSceneProps) {
    const [step, setStep] = useState<RSVPStep>("decision");
    const [showPopup, setShowPopup] = useState(false);

    const handleAccept = () => {
        setStep("submitting");
        setTimeout(() => {
            setStep("success");
            setShowPopup(true);
        }, 1200);
    };

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
                {step === "success" && <SacredCelebration key="celebration" />}
            </AnimatePresence>

            <RightAlignedContent className="w-[88%] max-w-[370px] translate-y-[-1%]">
                <motion.p
                    variants={itemVariants}
                    className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-700)]"
                >
                    RSVP Response
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="mt-3 font-[var(--font-display)] text-[clamp(3.15rem,12vw,4.9rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-[var(--color-cathedral-950)]"
                >
                    Your
                    <span className="block text-[var(--color-gold-500)]">Presence</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-4 max-w-[300px] text-sm leading-6 text-[var(--color-cathedral-800)]"
                >
                    Dear {data.guestName}, your blessing and presence would make this
                    celebration more meaningful.
                </motion.p>

                <GoldDivider />

                <motion.div variants={itemVariants} className="relative w-full">
                    <AnimatePresence>
                        {step === "success" && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, filter: "blur(40px)" }}
                                animate={{ 
                                    opacity: [0, 1, 0.7], 
                                    scale: [0.5, 1.4, 1.2],
                                    filter: ["blur(40px)", "blur(20px)", "blur(30px)"]
                                }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(var(--color-gold-500-rgb),0.35)_0%,transparent_75%)]"
                            />
                        )}
                    </AnimatePresence>

                    <Card className="min-h-[290px] flex flex-col justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            {/* initial decision */}
                            {step === "decision" && (
                                <motion.div
                                    key="decision"
                                    initial={{ opacity: 0, x: -16, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, x: 16, filter: "blur(8px)" }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <p className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]">
                                        Kindly respond
                                    </p>
                                    <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold leading-tight text-[var(--color-cathedral-950)]">
                                        Will you join us for this blessed celebration?
                                    </h2>

                                    <div className="mt-6">
                                        <button
                                            type="button"
                                            onClick={handleAccept}
                                            className="flex min-h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] px-6 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-cathedral-950)] shadow-[0_4px_18px_rgba(var(--color-gold-500-rgb),0.18)] transition hover:scale-[1.01] active:scale-[0.98]"
                                        >
                                            Accept Invitation
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* submitting */}
                            {step === "submitting" && (
                                <motion.div
                                    key="submitting"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center py-6"
                                >
                                    <div className="h-10 w-10 animate-spin rounded-full border-2 border-[rgba(var(--color-gold-500-rgb),0.26)] border-t-[var(--color-gold-500)]" />
                                    <p className="mt-4 font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold-700)] animate-pulse">
                                        Sending response...
                                    </p>
                                </motion.div>
                            )}

                            {/* success confirmation inside card */}
                            {step === "success" && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.42)] bg-[rgba(var(--color-gold-500-rgb),0.1)]">
                                        <motion.span
                                            initial={{ scale: 0.2, rotate: -90, opacity: 0 }}
                                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                                            className="text-2xl text-[var(--color-gold-700)]"
                                        >
                                            ✦
                                        </motion.span>
                                    </div>

                                    <p className="mt-4 font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]">
                                        RSVP Accepted
                                    </p>
                                    <h2 className="mt-1.5 font-[var(--font-display)] text-2xl font-semibold leading-tight text-[var(--color-cathedral-950)]">
                                        Thank you, {data.guestName}
                                    </h2>

                                    <p className="mt-3 text-xs leading-5 text-[var(--color-cathedral-800)]">
                                        Your response has been received. We are excited to celebrate this joy with you!
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setShowPopup(true)}
                                        className="mt-5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-gold-700)] hover:underline"
                                    >
                                        Show Celebration
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                </motion.div>
            </RightAlignedContent>

            {/* Popup Modal for Accept Confirmation */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(var(--color-pine-900-rgb),0.85)] backdrop-blur-md p-4"
                        onClick={() => setShowPopup(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 350 }}
                            className="relative w-full max-w-[340px] rounded-3xl border border-[rgba(var(--color-gold-500-rgb),0.35)] bg-[rgba(var(--color-ivory-50-rgb),0.98)] p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden text-[var(--color-cathedral-900)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Inner ambient glow */}
                            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--color-gold-300-rgb),0.18)_0%,transparent_70%)] pointer-events-none" />

                            {/* Decorative Corner Ornaments */}
                            <div className="absolute top-3 left-3 text-[var(--color-gold-500)] opacity-40 text-xs">✦</div>
                            <div className="absolute top-3 right-3 text-[var(--color-gold-500)] opacity-40 text-xs">✦</div>
                            <div className="absolute bottom-3 left-3 text-[var(--color-gold-500)] opacity-40 text-xs">✦</div>
                            <div className="absolute bottom-3 right-3 text-[var(--color-gold-500)] opacity-40 text-xs">✦</div>

                            {/* Ring / Cross Animated Icon */}
                            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.42)] bg-[rgba(var(--color-gold-500-rgb),0.1)]">
                                <motion.span
                                    initial={{ scale: 0.2, rotate: -90, opacity: 0 }}
                                    animate={{ scale: [0.2, 1.2, 1], rotate: 360, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                    className="text-3xl text-[var(--color-gold-700)]"
                                >
                                    ✦
                                </motion.span>
                            </div>

                            <h3 className="font-[var(--font-display)] text-3xl font-semibold leading-tight text-[var(--color-gold-700)]">
                                Thanks for joining!
                            </h3>

                            <p className="mt-4 text-xs leading-5 text-[var(--color-cathedral-800)]">
                                Dear {data.guestName}, we are absolutely thrilled to celebrate this sacred day with you. Your presence is our greatest blessing.
                            </p>

                            <button
                                type="button"
                                onClick={() => setShowPopup(false)}
                                className="mt-8 flex min-h-11 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] px-6 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-cathedral-950)] shadow-[0_4px_12px_rgba(var(--color-gold-500-rgb),0.18)] transition hover:scale-[1.01] active:scale-[0.98]"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SceneShell>
    );
}