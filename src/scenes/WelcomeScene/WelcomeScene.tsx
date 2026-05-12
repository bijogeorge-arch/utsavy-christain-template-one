import { motion } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import { SceneShell } from "../../components/layout/SceneShell";
import { WelcomeChapelInteriorSvg } from "../../components/svg/WelcomeChapelInteriorSvg";
import { ChapelLightRays } from "../../components/effects/ChapelLightRays";
import { OrthodoxCrossSvg } from "../../components/svg/OrthodoxCrossSvg";
import { WelcomeDove } from "../../components/effects/WelcomeDove";
import { GoldDivider } from "../../components/ui/GoldDivider";
import { itemVariants } from "../../animations/variants";

type WelcomeSceneProps = {
    data: WeddingData;
};

const dust = Array.from({ length: 16 }, (_, index) => index);

export function WelcomeScene({ data }: WelcomeSceneProps) {
    const ceremony = data.events.ceremony;

    return (
        <SceneShell
            ornament={
                <div className="relative h-full w-full overflow-hidden">
                    <div className="welcome-chapel-art absolute inset-y-0 left-[-20%] w-[96%] opacity-95">
                        <WelcomeChapelInteriorSvg />
                    </div>

                    <ChapelLightRays />

                    <div className="welcome-aisle-light absolute left-[10%] top-[18%] h-[62%] w-[34%] origin-top rounded-full bg-[linear-gradient(180deg,rgba(245,214,137,0.22),rgba(255,248,236,0.08),transparent)] blur-2xl" />

                    <div className="absolute left-[8%] top-[16%] h-44 w-44 rounded-full bg-[rgba(245,214,137,0.12)] blur-3xl" />
                    <div className="absolute bottom-[12%] left-[-8%] h-56 w-56 rounded-full bg-[rgba(255,248,236,0.08)] blur-3xl" />

                    <div aria-hidden="true" className="absolute inset-0">
                        {dust.map((item) => (
                            <span
                                key={item}
                                className="welcome-dust absolute h-1 w-1 rounded-full bg-[var(--color-gold-300)] opacity-50 shadow-[0_0_12px_rgba(245,214,137,0.7)]"
                                style={{
                                    left: `${14 + ((item * 17) % 68)}%`,
                                    top: `${18 + ((item * 23) % 58)}%`,
                                    animationDelay: `${item * 0.32}s`,
                                    animationDuration: `${5.2 + (item % 4) * 0.7}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            }
        >
            <WelcomeDove />


            <div className="relative z-20 flex h-full flex-col px-6 pb-[7.25rem] pt-10 text-right safe-top">
                <motion.div
                    variants={itemVariants}
                    className="ml-auto flex items-center justify-end gap-3"
                >
                    <span className="h-px w-12 bg-[rgba(245,214,137,0.58)]" />
                    <p className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.36em] text-[var(--color-gold-300)]">
                        With God’s Grace
                    </p>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="ml-auto mt-5 max-w-[280px] text-sm leading-6 text-[rgba(255,248,236,0.76)]"
                >
                    With the blessings of our families, we joyfully invite you to witness
                    the Holy Matrimony of
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="welcome-name-lockup sacred-text-shadow ml-auto mt-18 w-full max-w-[330px]"
                >
                    <h1 className="font-[var(--font-display)] text-[clamp(3.35rem,13.2vw,5.15rem)] font-semibold leading-[0.78] tracking-[-0.08em] text-[var(--color-ivory-100)]">
                        <span className="block truncate">{data.bride.first}</span>

                        <span className="my-1 block font-[var(--font-display)] text-[clamp(2.85rem,10.5vw,4.2rem)] leading-none text-[var(--color-gold-300)]">
                            &
                        </span>

                        <span className="block truncate">{data.groom.first}</span>
                    </h1>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="ml-auto mt-6 w-full max-w-[315px]"
                >
                    <GoldDivider />
                </motion.div>

                <motion.blockquote
                    variants={itemVariants}
                    className="welcome-quote-card ml-auto mt-2 max-w-[315px] rounded-[24px] border border-[rgba(201,166,70,0.26)] bg-[rgba(6,27,24,0.42)] p-4 text-right shadow-[0_18px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                >
                    <p className="font-[var(--font-display)] text-[1.12rem] italic leading-6 text-[rgba(255,248,236,0.84)]">
                        “{data.verse.text}”
                    </p>

                    <p className="mt-3 font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.26em] text-[var(--color-gold-300)]">
                        — {data.verse.reference}
                    </p>
                </motion.blockquote>

                <div className="flex-1" />

                <motion.div
                    variants={itemVariants}
                    className="welcome-date-badge ml-auto w-full max-w-[330px] overflow-hidden rounded-[26px] border border-[rgba(201,166,70,0.36)] bg-[rgba(6,27,24,0.52)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                >
                    <span className="absolute inset-y-0 left-0 w-14 animate-[gold-shimmer_3.4s_var(--ease-sacred)_infinite] bg-white/10 blur-md" />

                    <div className="relative flex items-center justify-between gap-4 text-left">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[rgba(201,166,70,0.38)] bg-[rgba(245,214,137,0.1)] text-[var(--color-gold-300)]">
                            <OrthodoxCrossSvg />
                        </div>

                        <div className="min-w-0 text-right">
                            <p className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold-300)]">
                                {ceremony.displayDate}
                            </p>

                            <p className="mt-2 truncate text-sm leading-5 text-[rgba(255,248,236,0.76)]">
                                {ceremony.venue}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SceneShell>
    );
}