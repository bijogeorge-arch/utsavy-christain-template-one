import type { SceneDefinition } from "../types/scene";

export const scenes: SceneDefinition[] = [
    {
        id: "gate",
        label: "Gate",
        continueLabel: "Enter the Blessing",
        showProgress: false,
    },
    {
        id: "welcome",
        label: "Welcome",
        continueLabel: "Their Story",
        showProgress: false,
    },
    {
        id: "story",
        label: "Story",
        continueLabel: "Celebration View",
        showProgress: false,
    },
    {
        id: "celebration",
        label: "Celebration",
        continueLabel: "View Gallery",
        showProgress: false,
    },
    {
        id: "gallery",
        label: "Gallery",
        continueLabel: "Wedding Events",
        showProgress: false,
    },
    {
        id: "events",
        label: "Events",
        continueLabel: "Meet the Families",
        showProgress: false,
    },
    {
        id: "family",
        label: "Family",
        continueLabel: "Countdown",
        showProgress: false,
    },
    {
        id: "countdown",
        label: "Countdown",
        continueLabel: "RSVP",
        showProgress: false,
    },
    {
        id: "rsvp",
        label: "RSVP",
        continueLabel: "Leave a Blessing",
        showProgress: false,
    },
    {
        id: "wishing",
        label: "Wishing",
        continueLabel: "Contact Families",
        showProgress: false,
    },
    {
        id: "contact-families",
        label: "Contact",
        continueLabel: "Final Thanks",
        showProgress: false,
    },
    {
        id: "thank-you",
        label: "Thank You",
        continueLabel: "Restart",
        showProgress: false,
    },
];