import { useRef } from "react";
import type { WeddingData } from "../../types/wedding";
import { OrthodoxGateSvg } from "../../components/svg/OrthodoxGateSvg";
import { ChristianCrossSvg } from "../../components/svg/ChristianCrossSvg";
import { InnerChapelSvg } from "../../components/svg/InnerChapelSvg";
import { GoldParticles } from "../../components/effects/GoldParticles";
import { ForegroundFlorals } from "../../components/effects/ForegroundFlorals";
import { useGateTimeline } from "../../hooks/useGateTimeline";

type GateSceneProps = {
    data: WeddingData;
    onNext: () => void;
};

export function GateScene({ data, onNext }: GateSceneProps) {
    const rootRef = useRef<HTMLElement | null>(null);

    const { isOpening, playGateOpen } = useGateTimeline({
        rootRef,
        onComplete: onNext,
    });

    return (
        <section
            ref={rootRef}
            className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_50%_30%,rgba(var(--color-gold-500-rgb),0.14),transparent_34%),linear-gradient(180deg,var(--color-pine-900)_0%,var(--color-pine-800)_100%)] text-[var(--color-cathedral-900)]"
        >
            <div className="gate-depth-vignette pointer-events-none absolute inset-0 z-50 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(var(--color-cathedral-950-rgb),0.18)_76%)] opacity-0" />

            <div className="gate-light pointer-events-none absolute inset-0 z-20 scale-90 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),rgba(var(--color-gold-300-rgb),0.24)_30%,transparent_62%)] opacity-0 blur-xl" />

            <div className="inner-chapel absolute inset-x-0 top-[1%] z-0 mx-auto flex h-[70%] scale-90 items-center justify-center px-8 opacity-0">
                <InnerChapelSvg />
            </div>

            <div className="gate-particles absolute inset-0 z-10 opacity-0">
                <GoldParticles />
            </div>

            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_92%,rgba(var(--color-gold-500-rgb),0.14),transparent_34%)]" />

            <div className="gate-world absolute inset-x-0 top-[2%] z-30 mx-auto flex h-[68%] items-center justify-center px-8 [transform-style:preserve-3d]">
                <OrthodoxGateSvg />
            </div>

            <div className="absolute left-6 top-7 z-40 h-20 w-14 text-[var(--color-gold-500)]">
                <ChristianCrossSvg />
            </div>

            <ForegroundFlorals />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[46%] bg-[linear-gradient(180deg,transparent_0%,rgba(var(--color-pine-900-rgb),0.72)_28%,rgba(var(--color-pine-900-rgb),0.96)_100%)]" />

            <div className="absolute inset-x-0 bottom-0 z-40 px-6 pb-8 safe-bottom">
                <div className="gate-intro mb-6 ml-auto max-w-[360px] text-right">
                    <p className="font-[var(--font-sacred)] text-[10px] font-semibold uppercase tracking-[0.38em] text-[var(--color-gold-700)]">
                        Dear {data.guestName}
                    </p>

                    <h1 className="mt-3 font-[var(--font-display)] text-[clamp(3.7rem,16vw,5.7rem)] font-semibold leading-[0.78] tracking-[-0.07em]">
                        A Sacred
                        <span className="block text-[var(--color-gold-500)]">Invitation</span>
                    </h1>

                    <p className="mt-4 ml-auto max-w-[250px] text-sm leading-6 text-[var(--color-cathedral-800)]">
                        {data.copy.opening}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={playGateOpen}
                    disabled={isOpening}
                    className="gate-cta seal-pulse ml-auto flex min-h-14 w-full max-w-[360px] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] px-6 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-cathedral-900)] shadow-[0_0_44px_rgba(var(--color-gold-500-rgb),0.34)] transition disabled:pointer-events-none disabled:opacity-80"
                >
                    {isOpening ? "Entering..." : "Enter the Blessing"}
                </button>
            </div>
        </section>
    );
}