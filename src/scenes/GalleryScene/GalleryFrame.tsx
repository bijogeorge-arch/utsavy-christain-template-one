import type { GalleryItem } from "../../types/wedding";

type GalleryFrameProps = {
    item: GalleryItem;
    variant?: "portrait" | "wide";
    onOpen: (item: GalleryItem) => void;
};

export function GalleryFrame({
    item,
    variant = "portrait",
    onOpen,
}: GalleryFrameProps) {
    return (
        <button
            type="button"
            onClick={(event) => {
                event.stopPropagation();
                onOpen(item);
            }}
            aria-label={`Open ${item.title}`}
            className={`group relative shrink-0 overflow-hidden rounded-[26px] border border-[rgba(201,166,70,0.38)] bg-[rgba(255,248,236,0.96)] p-2 text-[var(--color-cathedral-900)] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition active:scale-[0.98] ${variant === "wide" ? "w-[15rem]" : "w-[10rem]"
                }`}
        >
            <div
                className={`relative grid place-items-center overflow-hidden rounded-[21px] border border-[rgba(201,166,70,0.28)] bg-[radial-gradient(circle_at_50%_20%,rgba(245,214,137,0.36),rgba(11,47,42,0.1)_48%,rgba(6,27,24,0.14))] ${variant === "wide" ? "aspect-[16/8]" : "aspect-[4/5]"
                    }`}
            >
                <span className="absolute inset-y-0 left-0 w-12 animate-[gold-shimmer_4s_var(--ease-sacred)_infinite] bg-white/20 blur-md" />
                <div className="absolute inset-2 rounded-[16px] border border-[rgba(201,166,70,0.22)]" />

                <span className="relative text-3xl text-[var(--color-gold-700)]">
                    ✦
                </span>

                <div className="absolute inset-x-2 bottom-2 rounded-full border border-[rgba(201,166,70,0.28)] bg-[rgba(6,27,24,0.56)] px-3 py-2 backdrop-blur-xl">
                    <p className="truncate text-center font-[var(--font-sacred)] text-[8px] font-bold uppercase tracking-[0.18em] text-[var(--color-gold-300)]">
                        {item.title}
                    </p>
                </div>
            </div>
        </button>
    );
}