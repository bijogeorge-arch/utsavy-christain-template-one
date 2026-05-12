import gsap from "gsap";
import { timelineLabels } from "../timelineLabels";

type CreateGateOpenTimelineParams = {
    root: HTMLElement;
    onComplete: () => void;
};

export function createGateOpenTimeline({
    root,
    onComplete,
}: CreateGateOpenTimelineParams) {
    const q = gsap.utils.selector(root);

    const timeline = gsap.timeline({
        paused: true,
        defaults: {
            ease: "power3.inOut",
        },
        onComplete,
    });

    timeline
        .addLabel(timelineLabels.unlock)

        // Remove CTA and seal.
        .to(q(".gate-cta"), {
            autoAlpha: 0,
            y: 18,
            duration: 0.32,
        })
        .to(
            q(".gate-intro"),
            {
                autoAlpha: 0,
                y: 18,
                duration: 0.42,
            },
            "<",
        )
        .to(
            q(".gate-center-seal"),
            {
                scale: 1.35,
                autoAlpha: 0,
                transformOrigin: "50% 50%",
                duration: 0.42,
            },
            "<",
        )

        // First burst of sacred light.
        .to(q(".gate-light"), {
            autoAlpha: 1,
            scale: 1.24,
            duration: 0.75,
        })
        .to(
            q(".gate-inner-glow"),
            {
                autoAlpha: 1,
                duration: 0.7,
            },
            "<",
        )
        .to(
            q(".inner-chapel"),
            {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.85,
            },
            "<",
        )
        .to(
            q(".gate-particles"),
            {
                autoAlpha: 1,
                duration: 0.7,
            },
            "<",
        )

        // Door opening.
        .addLabel(timelineLabels.openGate)
        .to(
            q(".gate-left"),
            {
                xPercent: -52,
                skewY: -3.4,
                scaleX: 0.82,
                autoAlpha: 0.86,
                transformOrigin: "0% 50%",
                duration: 1.45,
            },
            "-=0.18",
        )
        .to(
            q(".gate-right"),
            {
                xPercent: 52,
                skewY: 3.4,
                scaleX: 0.82,
                autoAlpha: 0.86,
                transformOrigin: "100% 50%",
                duration: 1.45,
            },
            "<",
        )
        .to(
            q(".foreground-florals-left"),
            {
                x: -34,
                y: 26,
                rotate: -6,
                transformOrigin: "0% 100%",
                duration: 1.35,
            },
            "<",
        )
        .to(
            q(".foreground-florals-right"),
            {
                x: 34,
                y: 26,
                rotate: 6,
                transformOrigin: "100% 100%",
                duration: 1.35,
            },
            "<",
        )
        .to(
            q(".gate-outer-arch"),
            {
                autoAlpha: 0.36,
                duration: 1,
            },
            "<",
        )

        // Camera push: this is the important part.
        .addLabel(timelineLabels.cameraPush)
        .to(
            q(".gate-world"),
            {
                scale: 1.58,
                y: -74,
                autoAlpha: 0.32,
                duration: 1.16,
                ease: "power4.inOut",
            },
            "-=0.32",
        )
        .to(
            q(".inner-chapel"),
            {
                scale: 1.38,
                y: -54,
                autoAlpha: 1,
                duration: 1.16,
                ease: "power4.inOut",
            },
            "<",
        )
        .to(
            q(".gate-light"),
            {
                scale: 1.72,
                autoAlpha: 0.92,
                duration: 0.96,
                ease: "power4.inOut",
            },
            "<",
        )
        .to(
            q(".gate-depth-vignette"),
            {
                autoAlpha: 0.9,
                duration: 0.75,
            },
            "-=0.78",
        )
        .to(
            q(".gate-particles"),
            {
                scale: 1.2,
                autoAlpha: 0.72,
                duration: 0.8,
            },
            "<",
        )

        // White/gold wash before next scene.
        .addLabel(timelineLabels.exit)
        .to(root, {
            autoAlpha: 0,
            scale: 1.08,
            filter: "blur(14px)",
            duration: 0.54,
            ease: "power3.inOut",
        });

    return timeline;
}