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
    items: GalleryItem[];
    currentIndex: number;
    onClose: () => void;
    onChangeIndex: (index: number) => void;
};

function GalleryLightbox({
    items,
    currentIndex,
    onClose,
    onChangeIndex,
}: GalleryLightboxProps) {
    const activeItem = items[currentIndex];
    if (!activeItem) return null;

    const imageSrc = getGalleryImageSrc(activeItem);
    const imageAlt = (activeItem as GalleryImageItem).alt ?? activeItem.title;

    // Swipe gesture support
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            onChangeIndex((currentIndex + 1) % items.length);
        } else if (isRightSwipe) {
            onChangeIndex((currentIndex - 1 + items.length) % items.length);
        }
    };

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            } else if (event.key === "ArrowRight") {
                onChangeIndex((currentIndex + 1) % items.length);
            } else if (event.key === "ArrowLeft") {
                onChangeIndex((currentIndex - 1 + items.length) % items.length);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex, items.length, onChangeIndex, onClose]);

    return (
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={imageAlt}
            className="fixed inset-0 z-[120] grid place-items-center bg-[rgba(var(--color-pine-900-rgb),0.92)] px-5 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.75, y: 30, filter: "blur(18px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.85, y: 15, filter: "blur(12px)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[82dvh] w-full max-w-[390px] overflow-hidden rounded-[34px] border border-[rgba(var(--color-gold-500-rgb),0.5)] bg-[rgba(var(--color-ivory-50-rgb),0.98)] p-3 shadow-[0_40px_130px_rgba(0,0,0,0.15)] flex flex-col"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.34)] bg-[rgba(var(--color-ivory-50-rgb),0.78)] text-[var(--color-gold-700)] backdrop-blur-md transition hover:scale-105 active:scale-95"
                    aria-label="Close lightbox"
                >
                    ✕
                </button>

                {/* Left Navigation Arrow */}
                <button
                    type="button"
                    onClick={() => onChangeIndex((currentIndex - 1 + items.length) % items.length)}
                    className="absolute left-4 top-[40%] -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.34)] bg-[rgba(var(--color-ivory-50-rgb),0.78)] text-[var(--color-gold-700)] backdrop-blur-md transition hover:scale-105 active:scale-95"
                    aria-label="Previous image"
                >
                    ⟨
                </button>

                {/* Right Navigation Arrow */}
                <button
                    type="button"
                    onClick={() => onChangeIndex((currentIndex + 1) % items.length)}
                    className="absolute right-4 top-[40%] -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.34)] bg-[rgba(var(--color-ivory-50-rgb),0.78)] text-[var(--color-gold-700)] backdrop-blur-md transition hover:scale-105 active:scale-95"
                    aria-label="Next image"
                >
                    ⟩
                </button>

                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[26px] border border-[rgba(var(--color-gold-500-rgb),0.22)] bg-black/40">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeItem.id}
                            src={imageSrc}
                            alt={imageAlt}
                            className="h-full w-full object-cover"
                            draggable={false}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.28 }}
                        />
                    </AnimatePresence>
                </div>

                {/* Caption Details */}
                <div className="mt-4 pb-2 text-center px-3 flex flex-col justify-center flex-1">
                    <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-gold-700)] tracking-wide">
                        {activeItem.title}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--color-cathedral-900)] leading-relaxed italic">
                        {activeItem.caption}
                    </p>
                    <span className="inline-block mt-3.5 font-[var(--font-sacred)] text-[9px] text-[var(--color-gold-700)] tracking-[0.24em] uppercase">
                        ✦ {currentIndex + 1} / {items.length} ✦
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function GalleryScene({ data }: GallerySceneProps) {
    const [activeFilter, setActiveFilter] = useState<"all" | "portraits" | "moments">("all");
    const [activeLayout, setActiveLayout] = useState<"mosaic" | "album">("mosaic");
    const [albumIndex, setAlbumIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Apply filtering based on categories
    const filteredItems = data.gallery.filter((item) => {
        const isPortrait = item.title.toLowerCase().includes("portrait");
        if (activeFilter === "portraits") return isPortrait;
        if (activeFilter === "moments") return !isPortrait;
        return true;
    });

    // Reset album slide index when filter changes
    useEffect(() => {
        setAlbumIndex(0);
    }, [activeFilter]);

    return (
        <SceneShell
            ornament={
                <div className="h-full w-full opacity-40">
                    <LilyVineSvg />
                </div>
            }
        >
            <section className="relative z-20 flex w-full flex-col pt-7 text-center safe-top">
                <div className="px-6">
                    <motion.p
                        variants={itemVariants}
                        className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.36em] text-[var(--color-gold-700)]"
                    >
                        Gallery Collection
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="mx-auto mt-2 max-w-[300px] font-[var(--font-display)] text-[clamp(2.35rem,8.8vw,3.7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[var(--color-cathedral-950)]"
                    >
                        Precious
                        <span className="block text-[var(--color-gold-500)]">Memories</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-2 max-w-[305px] text-sm leading-6 text-[var(--color-cathedral-800)]"
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

                {/* Controls Bar: Layout & Filter Selection */}
                <div className="mx-auto mt-6 flex w-full max-w-[340px] flex-col gap-4 px-4">
                    {/* Filter Tabs */}
                    <div className="flex justify-between items-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.22)] bg-[rgba(var(--color-ivory-50-rgb),0.65)] p-1 backdrop-blur-md">
                        {(["all", "portraits", "moments"] as const).map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`flex-1 rounded-full py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                                    activeFilter === filter
                                        ? "bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] text-[var(--color-cathedral-900)] shadow-[0_2px_8px_rgba(var(--color-gold-500-rgb),0.18)]"
                                        : "text-[var(--color-cathedral-800)]/60 hover:text-[var(--color-cathedral-950)]"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Layout Toggle */}
                    <div className="flex justify-center items-center gap-6">
                        <button
                            onClick={() => setActiveLayout("mosaic")}
                            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                                activeLayout === "mosaic"
                                    ? "text-[var(--color-gold-700)]"
                                    : "text-[var(--color-cathedral-800)]/60 hover:text-[var(--color-cathedral-950)]"
                            }`}
                        >
                            <span className="text-base">⚏</span> Mosaic Collage
                        </button>
                        <div className="h-3 w-[1px] bg-[rgba(var(--color-gold-500-rgb),0.24)]" />
                        <button
                            onClick={() => setActiveLayout("album")}
                            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                                activeLayout === "album"
                                    ? "text-[var(--color-gold-700)]"
                                    : "text-[var(--color-cathedral-800)]/60 hover:text-[var(--color-cathedral-950)]"
                            }`}
                        >
                            <span className="text-base">✦</span> Stage Album
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="mt-8 flex w-full flex-col px-4 pb-28">
                    <AnimatePresence mode="wait">
                        {activeLayout === "mosaic" ? (
                            <motion.div
                                key="mosaic"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="grid grid-cols-2 gap-4 w-full"
                            >
                                {filteredItems.map((item) => {
                                    const isWide = !item.title.toLowerCase().includes("portrait");
                                    return (
                                        <GalleryFrame
                                            key={`mosaic-${item.id}`}
                                            item={item}
                                            variant={isWide ? "wide" : "portrait"}
                                            className={isWide ? "col-span-2 w-full" : "col-span-1 w-full"}
                                            onOpen={(clickedItem) => {
                                                const idx = filteredItems.indexOf(clickedItem);
                                                setLightboxIndex(idx !== -1 ? idx : 0);
                                            }}
                                        />
                                    );
                                })}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="album"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="relative flex flex-col items-center justify-center w-full max-w-[340px] mx-auto py-2"
                            >
                                {filteredItems.length > 0 ? (
                                    <>
                                        <div className="relative w-full max-w-[270px] aspect-[4/5] flex items-center justify-center rounded-[32px] overflow-hidden border border-[rgba(var(--color-gold-500-rgb),0.38)] bg-[rgba(var(--color-ivory-50-rgb),0.5)] p-2">
                                            {/* Left Arrow */}
                                            <button
                                                onClick={() => setAlbumIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.34)] bg-[rgba(var(--color-ivory-50-rgb),0.78)] text-[var(--color-gold-700)] backdrop-blur-md transition hover:scale-105 active:scale-95"
                                            >
                                                ⟨
                                            </button>

                                            {/* Right Arrow */}
                                            <button
                                                onClick={() => setAlbumIndex((prev) => (prev + 1) % filteredItems.length)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(var(--color-gold-500-rgb),0.34)] bg-[rgba(var(--color-ivory-50-rgb),0.78)] text-[var(--color-gold-700)] backdrop-blur-md transition hover:scale-105 active:scale-95"
                                            >
                                                ⟩
                                            </button>

                                            {/* Card View */}
                                            <div className="h-full w-full relative">
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={filteredItems[albumIndex].id}
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="h-full w-full"
                                                        onClick={() => setLightboxIndex(albumIndex)}
                                                    >
                                                        <GalleryFrame
                                                            item={filteredItems[albumIndex]}
                                                            variant={!filteredItems[albumIndex].title.toLowerCase().includes("portrait") ? "wide" : "portrait"}
                                                            className="h-full w-full"
                                                            onOpen={() => setLightboxIndex(albumIndex)}
                                                        />
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        {/* Caption Details */}
                                        <div className="mt-4 text-center px-2">
                                            <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-gold-700)] tracking-wide">
                                                {filteredItems[albumIndex].title}
                                            </h3>
                                            <p className="mt-1 text-xs text-[var(--color-cathedral-900)] leading-relaxed italic">
                                                {filteredItems[albumIndex].caption}
                                            </p>
                                            <span className="inline-block mt-3 font-[var(--font-sacred)] text-[10px] text-[var(--color-gold-700)] tracking-[0.24em] uppercase">
                                                ✦ {albumIndex + 1} / {filteredItems.length} ✦
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="py-20 text-center">
                                        <p className="text-sm text-[var(--color-cathedral-800)]/60">No memories found in this collection.</p>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <AnimatePresence>
                {lightboxIndex !== null && (
                    <GalleryLightbox
                        items={filteredItems}
                        currentIndex={lightboxIndex}
                        onClose={() => setLightboxIndex(null)}
                        onChangeIndex={setLightboxIndex}
                    />
                )}
            </AnimatePresence>
        </SceneShell>
    );
}