import { AnimatePresence, motion, type Variants } from "motion/react";
import type { WeddingData } from "../../types/wedding";
import type { SceneId } from "../../types/scene";

import { GateScene } from "../../scenes/GateScene/GateScene";
import { WelcomeScene } from "../../scenes/WelcomeScene/WelcomeScene";
import { StoryScene } from "../../scenes/StoryScene/StoryScene";
import { CelebrationScene } from "../../scenes/CelebrationScene/CelebrationScene";
import { GalleryScene } from "../../scenes/GalleryScene/GalleryScene";
import { EventsScene } from "../../scenes/EventsScene/EventsScene";
import { FamilyScene } from "../../scenes/FamilyScene/FamilyScene";
import { CountdownScene } from "../../scenes/CountdownScene/CountdownScene";
import { RSVPScene } from "../../scenes/RSVPScene/RSVPScene";
import { WishingScene } from "../../scenes/WishingScene/WishingScene";
import { ContactFamiliesScene } from "../../scenes/ContactFamiliesScene/ContactFamiliesScene";
import { ThankYouScene } from "../../scenes/ThankYouScene/ThankYouScene";

type SceneRendererProps = {
    sceneId: SceneId;
    data: WeddingData;
    onNext: () => void;
};

const chamberVariants: Variants = {
    enter: {
        opacity: 0,
        scale: 0.78,
        y: 46,
        filter: "blur(18px)",
    },
    center: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.82,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
    exit: {
        opacity: 0,
        scale: 1.42,
        y: -54,
        filter: "blur(22px)",
        transition: {
            duration: 0.72,
            ease: [0.76, 0, 0.24, 1] as const,
        },
    },
};

const portalGlowVariants: Variants = {
    enter: {
        opacity: 0.86,
        scale: 0.72,
    },
    center: {
        opacity: 0,
        scale: 1.05,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
    exit: {
        opacity: 0.92,
        scale: 1.48,
        transition: {
            duration: 0.56,
            ease: [0.76, 0, 0.24, 1] as const,
        },
    },
};

function renderScene(sceneId: SceneId, data: WeddingData, onNext: () => void) {
    switch (sceneId) {
        case "gate":
            return <GateScene data={data} onNext={onNext} />;

        case "welcome":
            return <WelcomeScene data={data} />;

        case "story":
            return <StoryScene data={data} />;

        case "celebration":
            return <CelebrationScene data={data} />;

        case "gallery":
            return <GalleryScene data={data} />;

        case "events":
            return <EventsScene data={data} />;

        case "family":
            return <FamilyScene data={data} />;

        case "countdown":
            return <CountdownScene data={data} />;

        case "rsvp":
            return <RSVPScene data={data} />;

        case "wishing":
            return <WishingScene data={data} />;

        case "contact-families":
            return <ContactFamiliesScene data={data} />;

        case "thank-you":
            return <ThankYouScene data={data} />;

        default:
            return null;
    }
}

export function SceneRenderer({ sceneId, data, onNext }: SceneRendererProps) {
    const isGate = sceneId === "gate";

    return (
        <AnimatePresence mode="wait" initial={false}>
            {isGate ? (
                <div key="gate" className="absolute inset-0">
                    {renderScene(sceneId, data, onNext)}
                </div>
            ) : (
                <motion.div
                    key={sceneId}
                    className="journey-chamber absolute inset-0 overflow-hidden"
                    variants={chamberVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                >
                    <motion.div
                        aria-hidden="true"
                        className="journey-portal-glow pointer-events-none absolute inset-0 z-50"
                        variants={portalGlowVariants}
                    />

                    <div className="journey-camera-plane relative z-10 h-full w-full">
                        {renderScene(sceneId, data, onNext)}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}