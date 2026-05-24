import { motion } from "motion/react";
import { cn } from "../../lib/cn";

type SacredSwitcherProps = {
    activeSide: "Bride" | "Groom";
    onChange: (side: "Bride" | "Groom") => void;
};

export function SacredSwitcher({ activeSide, onChange }: SacredSwitcherProps) {
    return (
        <div className="relative flex w-full items-center justify-between rounded-full border border-[rgba(var(--color-gold-500-rgb),0.32)] bg-[rgba(var(--color-ivory-100-rgb),0.65)] p-1.5 backdrop-blur-md">
            {/* Sliding Background Indicator with Candle Glow */}
            <motion.div
                className="absolute h-[calc(100%-12px)] w-[calc(50%-6px)] rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))]"
                initial={false}
                animate={{
                    x: activeSide === "Bride" ? 0 : "100%",
                }}
                transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 38,
                    mass: 1 
                }}
            >
                {/* Candle Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-[var(--color-gold-400)] blur-md opacity-40 animate-pulse" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(var(--color-gold-500-rgb),0.5),inset_0_1px_2px_rgba(255,255,255,0.4)]" />
            </motion.div>

            {/* Sacred Seal Indicator (Center Decor) */}
            <div className="absolute left-1/2 top-1/2 z-20 h-7 w-7 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                <svg viewBox="0 0 40 40" className="h-full w-full text-[var(--color-gold-500)]">
                    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <path d="M20 10V30M10 20H30" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M15 15L25 25M25 15L15 25" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                </svg>
            </div>

            <button
                onClick={() => onChange("Bride")}
                className={cn(
                    "relative z-10 flex-1 py-3 text-[11px] font-bold uppercase tracking-[0.32em] transition-all duration-500",
                    activeSide === "Bride" 
                        ? "text-[var(--color-cathedral-900)] scale-100" 
                        : "text-[var(--color-cathedral-800)]/60 scale-95 hover:text-[var(--color-cathedral-950)]",
                )}
            >
                Bride's Side
            </button>

            <button
                onClick={() => onChange("Groom")}
                className={cn(
                    "relative z-10 flex-1 py-3 text-[11px] font-bold uppercase tracking-[0.32em] transition-all duration-500",
                    activeSide === "Groom" 
                        ? "text-[var(--color-cathedral-900)] scale-100" 
                        : "text-[var(--color-cathedral-800)]/60 scale-95 hover:text-[var(--color-cathedral-950)]",
                )}
            >
                Groom's Side
            </button>
        </div>
    );
}
