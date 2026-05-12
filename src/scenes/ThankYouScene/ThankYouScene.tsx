import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { ThankYouSealSvg } from "../../components/svg/ThankYouSealSvg";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";
import { ThankYouSceneDecor } from "./ThankYouSceneDecor";

type ThankYouSceneProps = {
    data: WeddingData;
};

export function ThankYouScene({ data }: ThankYouSceneProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const sealRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Continuous Floating for the card
            gsap.to(cardRef.current, {
                y: "-=12",
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Seal Animations
            // 1. Slow rotation of rings
            gsap.to("#thank-you-seal-rings", {
                rotate: 360,
                transformOrigin: "center center",
                duration: 60,
                repeat: -1,
                ease: "none"
            });

            // 2. Pulsing the cross
            gsap.to("#thank-you-seal-cross", {
                opacity: 0.4,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // 3. Drawing animation on arcs
            gsap.fromTo("#thank-you-seal-bottom-arcs path", 
                { strokeDasharray: "0 1000", opacity: 0 },
                { strokeDasharray: "1000 0", opacity: 0.26, duration: 4, ease: "power2.out", stagger: 0.5 }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate tilt
        const xPos = (clientX / innerWidth - 0.5) * 20; // max 20px
        const yPos = (clientY / innerHeight - 0.5) * 20;

        gsap.to(cardRef.current, {
            rotateY: xPos,
            rotateX: -yPos,
            duration: 0.8,
            ease: "power2.out"
        });

        // Parallax effect on seal
        gsap.to(sealRef.current, {
            x: xPos * 0.5,
            y: yPos * 0.5,
            duration: 1.2,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotateY: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)"
        });
        gsap.to(sealRef.current, {
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "power2.out"
        });
    };

    return (
        <SceneShell
            ornament={
                <div ref={containerRef} className="relative h-full w-full overflow-hidden">
                    <div 
                        ref={sealRef}
                        className="absolute inset-y-0 left-[-18%] w-[94%] opacity-95 transition-opacity duration-1000"
                    >
                        <ThankYouSealSvg />
                    </div>

                    <ThankYouSceneDecor />

                    <div className="absolute left-8 top-[18%] h-44 w-44 rounded-full bg-[rgba(245,214,137,0.14)] blur-3xl" />
                    <div className="absolute bottom-[14%] left-0 h-56 w-56 rounded-full bg-[rgba(255,248,236,0.09)] blur-3xl" />
                </div>
            }
        >
            <div 
                className="relative z-30 h-full w-full"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: "1000px" }}
            >
                <RightAlignedContent className="w-[88%] max-w-[400px] translate-y-[-1%]">
                    <motion.div variants={itemVariants} className="space-y-1">
                        <p className="font-[var(--font-sacred)] text-[11px] font-bold uppercase tracking-[0.45em] text-[var(--color-gold-300)]">
                            With grateful hearts
                        </p>

                        <h1 className="font-[var(--font-display)] text-[clamp(3.5rem,15vw,5.8rem)] font-semibold leading-[0.8] tracking-[-0.08em] pt-2">
                            Thank
                            <span className="block text-[var(--color-gold-300)] mt-1">You</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="mt-8 max-w-[320px] text-[15px] leading-relaxed text-[rgba(255,248,236,0.8)] font-medium"
                    >
                        Dear <span className="text-[var(--color-gold-300)]">{data.guestName}</span>, {data.copy.thankYou}
                    </motion.p>

                    <div className="mt-8 mb-4">
                        <GoldDivider />
                    </div>

                    <motion.div
                        ref={cardRef}
                        variants={itemVariants}
                        className="relative overflow-hidden rounded-[32px] border border-[rgba(201,166,70,0.3)] bg-[rgba(6,27,24,0.55)] p-8 text-right shadow-[0_32px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Shimmer effect inside card */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-50" />
                        
                        <div style={{ transform: "translateZ(30px)" }}>
                            <p className="font-[var(--font-display)] text-[2.25rem] font-semibold leading-tight text-[var(--color-ivory-100)] tracking-tight">
                                {data.bride.first} & {data.groom.first}
                            </p>

                            <p className="mt-4 font-[var(--font-sacred)] text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-gold-300)]">
                                {data.events.ceremony.displayDate}
                            </p>

                            <p className="mt-6 text-[14px] leading-relaxed text-[rgba(255,248,236,0.75)] font-medium italic">
                                “May your prayers and blessings remain with the couple as they begin
                                their life together in faith.”
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex flex-col items-end gap-3"
                    >
                        <p className="text-[13px] leading-relaxed text-[rgba(255,248,236,0.65)]">
                            Tap <span className="text-[var(--color-gold-300)] font-bold">Restart</span> below
                            to experience the invitation again.
                        </p>
                        
                        <div className="h-px w-20 bg-gradient-to-l from-[var(--color-gold-500)] to-transparent opacity-40 mt-2" />
                        <p className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-gold-400)] opacity-60">
                            Peace be with you
                        </p>
                    </motion.div>
                </RightAlignedContent>
            </div>
        </SceneShell>
    );
}