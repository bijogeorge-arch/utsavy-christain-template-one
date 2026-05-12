import type { ReactNode } from "react";
import { motion } from "motion/react";
import { sceneVariants } from "../../animations/variants";
import { AmbientMist } from "../effects/AmbientMist";
import { PetalDrift } from "../effects/PetalDrift";
import { StainedGlassSweep } from "../effects/StainedGlassSweep";

type SceneShellProps = {
    children: ReactNode;
    ornament?: ReactNode;
    tone?: "dark" | "ivory" | "warm";
};

export function SceneShell({ children, ornament, tone = "dark" }: SceneShellProps) {
    const background =
        tone === "ivory"
            ? "bg-[linear-gradient(180deg,#fff8ec_0%,#f7ead2_100%)] text-[var(--color-cathedral-900)]"
            : tone === "warm"
                ? "bg-[linear-gradient(180deg,#123c35_0%,#6e1f2d_140%)] text-[var(--color-ivory-100)]"
                : "bg-[radial-gradient(circle_at_70%_18%,rgba(245,214,137,0.20),transparent_32%),linear-gradient(180deg,#0b2f2a_0%,#061b18_100%)] text-[var(--color-ivory-100)]";

    return (
        <motion.section
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`absolute inset-0 overflow-hidden ${background}`}
        >
            <AmbientMist />
            <StainedGlassSweep />
            <PetalDrift />

            {/* Ornament Container */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-full opacity-40 sm:w-[44%] sm:opacity-80">
                {ornament}
            </div>

            {/* Main Content: Scrollable always to handle varying screen heights */}
            <div className="relative z-10 h-full w-full overflow-y-auto scrollbar-none">
                <div className="flex min-h-full w-full flex-col items-center justify-start px-5 pb-[16rem] pt-12 sm:items-end sm:px-10 sm:pb-32 sm:pt-20">
                    {children}
                </div>
            </div>
        </motion.section>
    );
}