export type PersonName = {
    first: string;
    middle?: string;
    last: string;
    full: string;
};

export type FamilyDetails = {
    parents: string[];
    familyName: string;
    elders: string[];
    siblings: string[];
    godparents: string[];
};

export type WeddingEvent = {
    id: string;
    title: string;
    subtitle?: string;
    dateISO: string;
    displayDate: string;
    time: string;
    venue: string;
    city: string;
    mapUrl: string;
};

export type StoryMoment = {
    year: string;
    title: string;
    description: string;
};

export type GalleryItem = {
    id: string;
    title: string;
    caption: string;
};

export type FamilyContact = {
    side: "Bride" | "Groom";
    name: string;
    relation: string;
    phone: string;
    email: string;
};

export type WeddingData = {
    guestName: string;
    bride: PersonName;
    groom: PersonName;
    initials: string;
    monogram: string;
    verse: {
        text: string;
        reference: string;
    };
    story: {
        title: string;
        intro: string;
        moments: StoryMoment[];
    };
    gallery: GalleryItem[];
    contacts: FamilyContact[];
    families: {
        bride: FamilyDetails;
        groom: FamilyDetails;
    };
    events: {
        engagement: WeddingEvent;
        ceremony: WeddingEvent;
        reception: WeddingEvent;
    };
    copy: {
        opening: string;
        familyBlessing: string;
        rsvpQuestion: string;
        rsvpSuccess: string;
        thankYou: string;
    };
};