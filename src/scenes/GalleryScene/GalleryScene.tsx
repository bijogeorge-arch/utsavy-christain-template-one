import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { GalleryItem, WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { LilyVineSvg } from "../../components/svg/LilyVineSvg";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";
import { GalleryFrame } from "./GalleryFrame";

type GallerySceneProps = {
    data: WeddingData;
};

type GalleryRailProps = {
    items: GalleryItem[];
    direction: "left" | "right";
    variant?: "portrait" | "wide";
    onOpen: (item: GalleryItem) => void;
};

function GalleryRail({
    items,
    direction,
    variant = "portrait",
    onOpen,
}: GalleryRailProps) {
    const repeatedItems = [...items, ...items, ...items];

    return (
        <div className="relative w-full overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent_0%,black_9%,black_91%,transparent_100%)]">
            <motion.div
                className="flex w-max gap-3"
                animate={{
                    x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
                }}
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

type GalleryImageItem = GalleryItem & {
    src?: string;
    image?: string;
    imageUrl?: string;
    url?: string;
    alt?: string;
};

function getGalleryImageSrc(item: GalleryItem) {
    const imageItem = item as GalleryImageItem;

    return (
        imageItem.imageUrl ??
        imageItem.src ??
        imageItem.image ??
        imageItem.url ??
        ""
    );
}

type GalleryLightboxProps = {
    item: GalleryItem;
    onClose: () => void;
};

function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
    const imageSrc = getGalleryImageSrc(item);
    const imageAlt = (item as GalleryImageItem).alt ?? item.title;

    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);

    return (
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={imageAlt}
            className="absolute inset-0 z-[120] grid place-items-center bg-[rgba(3,16,14,0.82)] px-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.72, y: 32, filter: "blur(18px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.86, y: 20, filter: "blur(14px)" }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[78dvh] w-full max-w-[390px] overflow-hidden rounded-[34px] border border-[rgba(201,166,70,0.5)] bg-[rgba(255,248,236,0.98)] p-3 shadow-[0_40px_130px_rgba(0,0,0,0.55)]"
            >
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-full max-h-[72dvh] w-full rounded-[26px] object-cover"
                        draggable={false}
                    />
                ) : (
                    <div className="relative grid h-[min(72dvh,620px)] w-full place-items-center overflow-hidden rounded-[26px] border border-[rgba(201,166,70,0.34)] bg-[radial-gradient(circle_at_50%_24%,rgba(245,214,137,0.38),rgba(255,248,236,0.88)_42%,rgba(6,27,24,0.08)_100%)]">
                        <span className="absolute inset-y-0 left-0 w-24 animate-[gold-shimmer_4s_var(--ease-sacred)_infinite] bg-white/30 blur-md" />
                        <div className="absolute inset-5 rounded-[24px] border border-[rgba(201,166,70,0.24)]" />
                        <span className="relative text-6xl text-[var(--color-gold-700)]">
                            ✦
                        </span>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

export function GalleryScene({ data }: GallerySceneProps) {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    // Split items into 3 rails for a dynamic feel
    const rail1 = data.gallery.slice(0, Math.ceil(data.gallery.length / 3));
    const rail2 = data.gallery.slice(Math.ceil(data.gallery.length / 3), Math.ceil((2 * data.gallery.length) / 3));
    const rail3 = data.gallery.slice(Math.ceil((2 * data.gallery.length) / 3));

    return (
        <SceneShell
            ornament={
                <div className="h-full w-full opacity-40">
                    <LilyVineSvg />
                </div>
            }
        >
            <section className="relative z-20 flex h-full w-full min-h-0 flex-col pb-[5.75rem] pt-7 text-center safe-top">
                <div className="px-6">
                    <motion.p
                        variants={itemVariants}
                        className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.36em] text-[var(--color-gold-300)]"
                    >
                        Gallery Collection
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="mx-auto mt-2 max-w-[300px] font-[var(--font-display)] text-[clamp(2.35rem,8.8vw,3.7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[var(--color-ivory-100)]"
                    >
                        Precious
                        <span className="block text-[var(--color-gold-300)]">Memories</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-2 max-w-[305px] text-sm leading-6 text-[rgba(255,248,236,0.72)]"
                    >
                        A collection of beautiful moments from our journey together.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mx-auto mt-3 w-full max-w-[315px]"
                    >
                        <GoldDivider align="center" />
                    </motion.div>
                </div>

                <div className="mt-8 flex min-h-0 flex-1 flex-col justify-center gap-6 overflow-hidden">
                    <motion.div variants={itemVariants} className="w-full">
                        <GalleryRail items={rail1} direction="left" onOpen={setSelectedItem} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-full">
                        <GalleryRail
                            items={rail2}
                            direction="right"
                            variant="wide"
                            onOpen={setSelectedItem}
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-full">
                        <GalleryRail items={rail3} direction="left" onOpen={setSelectedItem} />
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selectedItem && (
                    <GalleryLightbox
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                    />
                )}
            </AnimatePresence>
        </SceneShell>
    );
}