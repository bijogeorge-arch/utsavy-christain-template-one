import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { DoveSvg } from "../svg/DoveSvg";

export function WelcomeDove() {
    const [visible, setVisible] = useState(false);
    const [landed, setLanded] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setVisible(true);
        }, 1550);

        return () => window.clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
            <motion.div
                initial={{
                    opacity: 0,
                    x: -260,
                    y: -110,
                    scale: 0.52,
                    rotate: -16,
                }}
                animate={{
                    opacity: 1,
                    x: [-260, -150, -70, 0],
                    y: [-110, -10, -30, 0],
                    scale: [0.52, 0.76, 0.94, 1],
                    rotate: [-16, 8, -4, 0],
                }}
                transition={{
                    duration: 2.2,
                    ease: [0.22, 1, 0.36, 1],
                    times: [0, 0.4, 0.75, 1],
                }}
                onAnimationComplete={() => setLanded(true)}
                className="absolute left-[28%] top-[18.6%] w-[clamp(4.8rem,15vw,6.6rem)] -translate-x-1/2"
            >
                <motion.div
                    animate={
                        landed
                            ? {
                                y: [0, -4, 0],
                                rotate: [-1, 1, -1],
                            }
                            : {
                                y: [0, -8, 0],
                            }
                    }
                    transition={
                        landed
                            ? {
                                duration: 4.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }
                            : {
                                duration: 1.2,
                                ease: "easeInOut",
                            }
                    }
                    className="dove-2d-shell"
                >
                    <DoveSvg className="h-auto w-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.24)]" />
                </motion.div>
            </motion.div>
        </div>
    );
}