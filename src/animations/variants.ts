import type { Variants } from "motion/react";
import { easings } from "./easings";

export const sceneVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.965,
        filter: "blur(10px)",
    },
    animate: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: easings.sacred,
        },
    },
    exit: {
        opacity: 0,
        scale: 1.035,
        filter: "blur(10px)",
        transition: {
            duration: 0.55,
            ease: easings.ceremonial,
        },
    },
};

export const contentVariants: Variants = {
    initial: {
        opacity: 0,
        y: 28,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.82,
            ease: easings.sacred,
            staggerChildren: 0.09,
        },
    },
};

export const itemVariants: Variants = {
    initial: {
        opacity: 0,
        y: 18,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: easings.sacred,
        },
    },
};