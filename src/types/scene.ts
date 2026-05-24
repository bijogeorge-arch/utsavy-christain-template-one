export type SceneId =
    | "gate"
    | "welcome"
    | "story"
    | "celebration"
    | "events"
    | "gallery"
    | "family"
    | "countdown"
    | "rsvp"
    | "wishing"
    | "contact-families"
    | "thank-you";

export type SceneDefinition = {
    id: SceneId;
    label: string;
    continueLabel: string;
    showProgress: boolean;
};