import { useMemo } from "react";
import { motion } from "motion/react";

const PETAL_COUNT = 15;
const STAR_COUNT_PER_SIDE = 16;

const PETAL_PATHS = [
    "M10,0 C15,5 20,15 15,25 C10,35 0,35 5,25 C10,15 5,5 10,0 Z",
    "M12,0 C18,8 18,20 12,28 C6,20 6,8 12,0 Z",
    "M10,0 C16,4 20,12 16,20 C12,28 4,24 8,16 C12,8 4,4 10,0 Z"
];

// Sacred Star (✦)
const STAR_PATH = "M12,2 L14.5,10.5 L22,12 L14.5,13.5 L12,22 L9.5,13.5 L2,12 L9.5,10.5 Z";

export function SacredCelebration() {
    // Generate Stars for both sides
    const stars = useMemo(() => {
        const leftStars = Array.from({ length: STAR_COUNT_PER_SIDE }, (_, i) => ({
            id: `star-l-${i}`,
            side: "left" as const,
            size: 12 + Math.random() * 14,
            delay: i * 0.04,
            duration: 2.5 + Math.random() * 1.5,
            targetX: 20 + Math.random() * 30, // Shoots toward center
            targetY: 10 + Math.random() * 30, // Shoots toward top
            rotation: Math.random() * 360,
        }));

        const rightStars = Array.from({ length: STAR_COUNT_PER_SIDE }, (_, i) => ({
            id: `star-r-${i}`,
            side: "right" as const,
            size: 12 + Math.random() * 14,
            delay: i * 0.04,
            duration: 2.5 + Math.random() * 1.5,
            targetX: 50 + Math.random() * 30, // Shoots toward center
            targetY: 10 + Math.random() * 30, // Shoots toward top
            rotation: Math.random() * 360,
        }));

        return [...leftStars, ...rightStars];
    }, []);

    // Keep some drifting petals for atmosphere
    const petals = useMemo(() => 
        Array.from({ length: PETAL_COUNT }, (_, i) => ({
            id: `petal-${i}`,
            path: PETAL_PATHS[i % PETAL_PATHS.length],
            size: 14 + Math.random() * 10,
            x: Math.random() * 100,
            delay: 0.5 + Math.random() * 3,
            duration: 8 + Math.random() * 6,
            rotation: Math.random() * 360,
        }))
    , []);

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {/* Star Fountain */}
            {stars.map((s) => (
                <motion.svg
                    key={s.id}
                    viewBox="0 0 24 24"
                    style={{
                        position: "absolute",
                        left: s.side === "left" ? "-5%" : "105%",
                        bottom: "-5%",
                        width: s.size,
                        height: s.size,
                        fill: "var(--color-gold-300)",
                        filter: "drop-shadow(0 0 8px rgba(245, 214, 137, 0.8)) blur(0.2px)",
                    }}
                    initial={{ scale: 0, opacity: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{
                        x: s.side === "left" ? [`0%`, `${s.targetX}vw`, `${s.targetX + 10}vw`] : [`0%`, `-${100 - s.targetX}vw`, `-${100 - s.targetX + 10}vw`],
                        y: [`0%`, `-${100 - s.targetY}vh`, `20vh`],
                        scale: [0, 1.8, 1, 0.5],
                        opacity: [0, 1, 1, 0],
                        rotate: s.rotation + 720,
                    }}
                    transition={{
                        duration: s.duration,
                        delay: s.delay,
                        ease: [0.16, 1, 0.3, 1], // Fast start, smooth arc
                    }}
                >
                    <path d={STAR_PATH} />
                </motion.svg>
            ))}

            {/* Drifting Petals */}
            {petals.map((p) => (
                <motion.svg
                    key={p.id}
                    viewBox="0 0 24 36"
                    style={{
                        position: "absolute",
                        left: `${p.x}%`,
                        top: "-40px",
                        width: p.size,
                        height: p.size * 1.5,
                        fill: "rgba(255, 248, 236, 0.8)",
                        filter: "blur(0.4px)",
                    }}
                    initial={{ y: -50, opacity: 0, rotate: p.rotation }}
                    animate={{
                        y: "110vh",
                        rotate: p.rotation + 360,
                        opacity: [0, 0.8, 0.8, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <path d={p.path} />
                </motion.svg>
            ))}
        </div>
    );
}
