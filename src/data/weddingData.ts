import type { WeddingData } from "../types/wedding";

export const weddingData: WeddingData = {
    guestName: "{guest_name}",
    bride: {
        first: "Elina",
        middle: "Mariam",
        last: "Thomas",
        full: "Elina Mariam Thomas",
    },
    groom: {
        first: "Daniel",
        middle: "Varghese",
        last: "Mathew",
        full: "Daniel Varghese Mathew",
    },
    initials: "E & D",
    monogram: "ED",
    verse: {
        text: "Therefore what God has joined together, let no one separate.",
        reference: "Mark 10:9",
    },
    story: {
        title: "A Promise Written in Grace",
        intro:
            "What began as a quiet conversation became a journey of prayer, patience, family blessings, and a promise before God.",
        moments: [
            {
                year: "2021",
                title: "The First Meeting",
                description:
                    "Their families introduced them with a simple prayer and a hopeful beginning.",
            },
            {
                year: "2023",
                title: "The Journey",
                description:
                    "Friendship grew into trust, and trust became a love carried by faith.",
            },
            {
                year: "2026",
                title: "The Sacred Promise",
                description:
                    "Now they step into Holy Matrimony with the blessings of both families.",
            },
        ],
    },
    gallery: [
        {
            id: "gallery-1",
            title: "Bride Portrait",
            caption: "A graceful placeholder for the bride’s portrait.",
        },
        {
            id: "gallery-2",
            title: "Groom Portrait",
            caption: "A refined placeholder for the groom’s portrait.",
        },
        {
            id: "gallery-3",
            title: "Together",
            caption: "A cinematic frame for the couple’s photo.",
        },
        {
            id: "gallery-4",
            title: "Family Blessing",
            caption: "A warm placeholder for family memories.",
        },
    ],
    contacts: [
        {
            side: "Bride",
            name: "Mr. Thomas Kurian",
            relation: "Bride’s Father",
            phone: "+91 98765 43210",
            email: "bride.family@example.com",
        },
        {
            side: "Groom",
            name: "Mr. Varghese Mathew",
            relation: "Groom’s Father",
            phone: "+91 98765 12345",
            email: "groom.family@example.com",
        },
    ],
    families: {
        bride: {
            parents: ["Mr. Thomas Kurian", "Mrs. Annamma Thomas"],
            familyName: "The Kurian Family",
            elders: ["Mr. K. M. Kurian", "Mrs. Mariamma Kurian"],
            siblings: ["Anita Thomas", "Kevin Thomas"],
            godparents: ["Mr. George Philip", "Mrs. Elizabeth Philip"],
        },
        groom: {
            parents: ["Mr. Varghese Mathew", "Mrs. Susan Varghese"],
            familyName: "The Mathew Family",
            elders: ["Mr. P. V. Mathew", "Mrs. Rachel Mathew"],
            siblings: ["Rachel Mathew", "Michael Mathew"],
            godparents: ["Mr. Abraham Joseph", "Mrs. Lissy Abraham"],
        },
    },
    events: {
        engagement: {
            id: "engagement",
            title: "Engagement",
            subtitle: "The Blessing of Rings",
            dateISO: "2026-02-13T18:30:00+05:30",
            displayDate: "Friday, 13 February 2026",
            time: "6:30 PM",
            venue: "The Kurian Residence",
            city: "Kottayam, Kerala",
            mapUrl: "https://maps.google.com",
        },
        ceremony: {
            id: "ceremony",
            title: "Holy Matrimony",
            subtitle: "Inside the Church",
            dateISO: "2026-02-14T10:00:00+05:30",
            displayDate: "Saturday, 14 February 2026",
            time: "10:00 AM",
            venue: "St. George Orthodox Church",
            city: "Kottayam, Kerala",
            mapUrl: "https://maps.google.com",
        },
        reception: {
            id: "reception",
            title: "Wedding Reception",
            subtitle: "Dinner & Celebration",
            dateISO: "2026-02-14T18:30:00+05:30",
            displayDate: "Saturday, 14 February 2026",
            time: "6:30 PM",
            venue: "The Emerald Courtyard",
            city: "Kottayam, Kerala",
            mapUrl: "https://maps.google.com",
        },
    },
    copy: {
        opening: "A sacred invitation awaits you.",
        familyBlessing:
            "With the blessings of grandparents, godparents, siblings, uncles, aunts, and all family elders.",
        rsvpQuestion: "Will you join us for this blessed celebration?",
        rsvpSuccess: "Your presence will make our celebration even more blessed.",
        thankYou:
            "With grateful hearts, we thank you for being part of our blessed beginning.",
    },
};