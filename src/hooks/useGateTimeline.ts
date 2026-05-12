import { useCallback, useRef, useState, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createGateOpenTimeline } from "../animations/timelines/createGateOpenTimeline";

gsap.registerPlugin(useGSAP);

type UseGateTimelineParams = {
    rootRef: RefObject<HTMLElement | null>;
    onComplete: () => void;
};

export function useGateTimeline({ rootRef, onComplete }: UseGateTimelineParams) {
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const [isOpening, setIsOpening] = useState(false);

    const { contextSafe } = useGSAP(
        () => {
            const root = rootRef.current;

            if (!root) {
                return;
            }

            const q = gsap.utils.selector(root);

            gsap.set(root, {
                autoAlpha: 1,
                scale: 1,
                filter: "blur(0px)",
            });

            gsap.set(q(".gate-light"), {
                autoAlpha: 0,
                scale: 0.9,
            });

            gsap.set(q(".gate-depth-vignette"), {
                autoAlpha: 0,
            });

            gsap.set(q(".gate-inner-glow"), {
                autoAlpha: 0,
            });

            gsap.set(q(".inner-chapel"), {
                autoAlpha: 0,
                scale: 0.9,
                y: 0,
            });

            gsap.set(q(".gate-particles"), {
                autoAlpha: 0,
            });

            gsap.set(q(".gate-left"), {
                xPercent: 0,
                skewY: 0,
                scaleX: 1,
                transformOrigin: "0% 50%",
            });

            gsap.set(q(".gate-right"), {
                xPercent: 0,
                skewY: 0,
                scaleX: 1,
                transformOrigin: "100% 50%",
            });

            gsap.set(q(".gate-center-seal"), {
                autoAlpha: 1,
                scale: 1,
                transformOrigin: "50% 50%",
            });

            gsap.set(q(".foreground-florals-left"), {
                x: 0,
                y: 0,
                rotate: 0,
                transformOrigin: "0% 100%",
            });

            gsap.set(q(".foreground-florals-right"), {
                x: 0,
                y: 0,
                rotate: 0,
                transformOrigin: "100% 100%",
            });

            gsap.fromTo(
                q(".gate-intro"),
                {
                    autoAlpha: 0,
                    y: 24,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.1,
                },
            );

            gsap.to(q(".seal-pulse"), {
                scale: 1.06,
                autoAlpha: 1,
                repeat: -1,
                yoyo: true,
                duration: 1.6,
                ease: "sine.inOut",
            });

            timelineRef.current = createGateOpenTimeline({
                root,
                onComplete: () => {
                    setIsOpening(false);
                    onComplete();
                },
            });

            return () => {
                timelineRef.current?.kill();
                timelineRef.current = null;
            };
        },
        {
            scope: rootRef,
            dependencies: [onComplete],
            revertOnUpdate: true,
        },
    );

    const playGateOpen = useCallback(
        contextSafe(() => {
            if (isOpening) {
                return;
            }

            setIsOpening(true);
            timelineRef.current?.play(0);
        }),
        [contextSafe, isOpening],
    );

    return {
        isOpening,
        playGateOpen,
    };
}