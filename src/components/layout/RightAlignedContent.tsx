import type { ReactNode } from "react";
import { motion } from "motion/react";
import { contentVariants } from "../../animations/variants";
import { cn } from "../../lib/cn";

type RightAlignedContentProps = {
    children: ReactNode;
    className?: string;
};

export function RightAlignedContent({ children, className }: RightAlignedContentProps) {
    return (
        <motion.div
            variants={contentVariants}
            initial="initial"
            animate="animate"
            className={cn(
                "flex w-full flex-col items-center text-center sm:ml-auto sm:w-[86%] sm:max-w-[370px] sm:items-end sm:text-right",
                className,
            )}
        >
            {children}
        </motion.div>
    );
}