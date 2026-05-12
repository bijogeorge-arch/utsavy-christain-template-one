import { motion } from "motion/react";
import type { GalleryItem } from "../../types/wedding";
import { GalleryFrame } from "./GalleryFrame";

type MovingGalleryTrackProps = {
    items: GalleryItem[];
    direction: "left" | "right";
    variant?: "portrait" | "wide";
    paused?: boolean;
    onOpen?: (item: GalleryItem) => void;
};

export function MovingGalleryTrack({
    items,
    direction,
    variant = "portrait",
    paused = false,
    onOpen = () => { },
}: MovingGalleryTrackProps) {
    const repeatedItems = [...items, ...items, ...items];

    return (
        <div className="relative w-full overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent_0%,black_9%,black_91%,transparent_100%)]">
            <motion.div
                className="flex w-max gap-3"
                animate={
                    paused
                        ? undefined
                        : {
                            x:
                                direction === "left"
                                    ? ["0%", "-33.333%"]
                                    : ["-33.333%", "0%"],
                        }
                }
                transition={{
                    duration: direction === "left" ? 22 : 26,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {repeatedItems.map((item, index) => (
                    <GalleryFrame
                        key={`${direction}-${item.id}-${index}`}
                        item={item}
                        variant={variant}
                        onOpen={onOpen}
                    />
                ))}
            </motion.div>
        </div>
    );
}