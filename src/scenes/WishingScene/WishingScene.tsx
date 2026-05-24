import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { RightAlignedContent } from "../../components/layout/RightAlignedContent";
import { LilyVineSvg } from "../../components/svg/LilyVineSvg";
import { Card } from "../../components/ui/Card";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";

type WishingSceneProps = {
    data: WeddingData;
};

type Wish = {
    id: string;
    guest: string;
    message: string;
};

export function WishingScene({ data }: WishingSceneProps) {
    const [message, setMessage] = useState("");
    const [wishes, setWishes] = useState<Wish[]>([
        {
            id: "sample-wish",
            guest: "Family Blessing",
            message: "May God bless this sacred beginning with joy and grace.",
        },
    ]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedMessage = message.trim();

        if (!trimmedMessage) {
            return;
        }

        setWishes((current) => [
            {
                id: crypto.randomUUID(),
                guest: data.guestName,
                message: trimmedMessage,
            },
            ...current,
        ]);

        setMessage("");
    }

    return (
        <SceneShell
            ornament={
                <div className="relative h-full w-full">
                    <div className="absolute inset-y-0 left-[-12%] w-[82%] opacity-90">
                        <LilyVineSvg />
                    </div>

                    <div className="absolute left-8 top-[18%] h-44 w-44 rounded-full bg-[rgba(245,214,137,0.12)] blur-3xl" />
                    <div className="absolute bottom-[14%] left-0 h-52 w-52 rounded-full bg-[rgba(255,248,236,0.08)] blur-3xl" />
                </div>
            }
        >
            <RightAlignedContent className="w-[86%] max-w-[370px] translate-y-[-1%]">
                <motion.p
                    variants={itemVariants}
                    className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.34em] text-[var(--color-gold-700)]"
                >
                    Wishing Wall
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="mt-3 font-[var(--font-display)] text-[clamp(3.05rem,12vw,4.7rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-[var(--color-cathedral-950)]"
                >
                    Leave a
                    <span className="block text-[var(--color-gold-500)]">Blessing</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-4 max-w-[300px] text-sm leading-6 text-[var(--color-cathedral-800)]"
                >
                    Write a blessing for {data.bride.first} and {data.groom.first}. Your
                    words become part of their sacred celebration.
                </motion.p>

                <GoldDivider />

                <motion.div variants={itemVariants} className="w-full">
                    <Card>
                        <form onSubmit={handleSubmit}>
                            <label
                                htmlFor="wish-message"
                                className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]"
                            >
                                Your blessing
                            </label>

                            <textarea
                                id="wish-message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                rows={4}
                                maxLength={180}
                                placeholder="Write your blessing here..."
                                className="mt-3 min-h-28 w-full resize-none rounded-[22px] border border-[rgba(var(--color-gold-500-rgb),0.34)] bg-[rgba(var(--color-ivory-50-rgb),0.74)] p-4 text-sm leading-6 text-[var(--color-cathedral-900)] outline-none transition placeholder:text-[var(--color-cathedral-800)]/40 focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(var(--color-gold-500-rgb),0.24)]"
                            />

                            <div className="mt-3 flex items-center justify-between gap-3">
                                <p className="text-[10px] text-[var(--color-cathedral-800)]/60">
                                    {message.length}/180
                                </p>

                                <button
                                    type="submit"
                                    disabled={!message.trim()}
                                    className="min-h-12 rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] px-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-cathedral-900)] shadow-[0_0_28px_rgba(var(--color-gold-500-rgb),0.18)] transition hover:scale-[1.01] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-45"
                                >
                                    Send Blessing
                                </button>
                            </div>
                        </form>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-4 w-full relative">
                    <div className="max-h-[24dvh] w-full space-y-3 overflow-y-auto pr-1 no-scrollbar pb-6">
                        <AnimatePresence initial={false}>
                            {wishes.map((wish) => (
                                <motion.article
                                    key={wish.id}
                                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative rounded-[24px] border border-[rgba(var(--color-gold-500-rgb),0.38)] bg-[rgba(var(--color-ivory-50-rgb),0.96)] p-4 text-right shadow-[0_12px_36px_rgba(0,0,0,0.04)] overflow-hidden"
                                >
                                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-40" />

                                    <p className="font-[var(--font-display)] text-[1.08rem] italic leading-relaxed text-[var(--color-cathedral-950)] font-medium">
                                        “{wish.message}”
                                    </p>

                                    <div className="mt-3.5 flex items-center justify-end gap-1.5">
                                        <span className="text-[8px] text-[var(--color-gold-700)]">✦</span>
                                        <p className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold-700)]">
                                            {wish.guest}
                                        </p>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>
                    {/* Fading bottom indicator for dark background list */}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[rgba(var(--color-pine-900-rgb),0.95)] to-transparent" />
                </motion.div>
            </RightAlignedContent>
        </SceneShell>
    );
}