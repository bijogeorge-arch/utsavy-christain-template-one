import { motion } from "motion/react";

type StoryRoadmapSvgProps = {
    activeIndex: number;
    onNodeClick?: (index: number) => void;
};

const progressMap = [0.18, 0.55, 1];

export function StoryRoadmapSvg({ activeIndex, onNodeClick }: StoryRoadmapSvgProps) {
    const progress = progressMap[activeIndex] ?? 0.18;

    const nodes = [
        { cx: 108, cy: 36, label: "2021", labelX: 148, labelY: 41, name: "The First Meeting" },
        { cx: 114, cy: 228, label: "2023", labelX: 154, labelY: 233, name: "The Journey" },
        { cx: 76, cy: 484, label: "2026", labelX: 116, labelY: 489, name: "The Sacred Promise" }
    ];

    return (
        <svg
            viewBox="0 0 220 520"
            className="h-full w-full overflow-visible text-[var(--color-gold-500)] pointer-events-none"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="storyRoadGlow" cx="50%" cy="36%" r="60%">
                    <stop offset="0%" stopColor="rgba(255,248,236,0.22)" />
                    <stop offset="58%" stopColor="rgba(245,214,137,0.08)" />
                    <stop offset="100%" stopColor="rgba(245,214,137,0)" />
                </radialGradient>

                <filter id="storyRoadBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="8" />
                </filter>
            </defs>

            <rect width="220" height="520" fill="url(#storyRoadGlow)" />

            <path
                d="M108 36C44 92 48 168 114 228C178 286 170 382 76 484"
                stroke="rgba(201,166,70,0.24)"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <motion.path
                d="M108 36C44 92 48 168 114 228C178 286 170 382 76 484"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength="1"
                initial={false}
                animate={{ pathLength: progress }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            />

            {nodes.map((node, index) => {
                const isActive = activeIndex === index;

                return (
                    <g
                        key={node.label}
                        className="pointer-events-auto cursor-pointer focus:outline-none group"
                        role="button"
                        aria-label={`Show milestone of year ${node.label}: ${node.name}`}
                        tabIndex={0}
                        onClick={() => onNodeClick?.(index)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                onNodeClick?.(index);
                                e.preventDefault();
                            }
                        }}
                    >
                        {/* Interactive glow ring */}
                        <motion.circle
                            cx={node.cx}
                            cy={node.cy}
                            r={isActive ? 32 : 22}
                            fill="rgba(var(--color-gold-500-rgb),0.08)"
                            stroke={isActive ? "var(--color-gold-500)" : "currentColor"}
                            strokeWidth={isActive ? "2.5" : "1.5"}
                            className="transition-all duration-300 group-hover:stroke-[var(--color-gold-500)] group-hover:fill-[rgba(var(--color-gold-500-rgb),0.18)]"
                            animate={{ opacity: isActive ? 1 : 0.45 }}
                            transition={{ duration: 0.35 }}
                        />

                        {/* Node Label Text */}
                        <motion.text
                            x={node.labelX}
                            y={node.labelY}
                            className="font-[var(--font-sacred)] text-[10.5px] font-bold tracking-[0.24em] select-none pointer-events-none"
                            animate={{
                                fill: isActive ? "var(--color-gold-600)" : "var(--color-cathedral-800)",
                                opacity: isActive ? 1 : 0.72
                             }}
                            transition={{ duration: 0.35 }}
                        >
                            {node.label}
                        </motion.text>
                    </g>
                );
            })}

            <g className="story-roadmap-glow-dot">
                <circle
                    cx={activeIndex === 0 ? 108 : activeIndex === 1 ? 114 : 76}
                    cy={activeIndex === 0 ? 36 : activeIndex === 1 ? 228 : 484}
                    r="10"
                    fill="var(--color-gold-500)"
                    filter="url(#storyRoadBlur)"
                />
                <circle
                    cx={activeIndex === 0 ? 108 : activeIndex === 1 ? 114 : 76}
                    cy={activeIndex === 0 ? 36 : activeIndex === 1 ? 228 : 484}
                    r="5"
                    fill="var(--color-gold-500)"
                />
            </g>

            <g opacity="0.45">
                <path
                    d="M72 88C100 74 112 54 112 24C82 36 68 58 72 88Z"
                    fill="rgba(255,248,236,0.16)"
                    stroke="currentColor"
                />
                <path
                    d="M160 288C132 274 118 252 118 222C150 234 164 258 160 288Z"
                    fill="rgba(255,248,236,0.16)"
                    stroke="currentColor"
                />
                <path
                    d="M36 500C62 486 76 466 78 438C48 450 34 472 36 500Z"
                    fill="rgba(255,248,236,0.16)"
                    stroke="currentColor"
                />
            </g>
        </svg>
    );
}