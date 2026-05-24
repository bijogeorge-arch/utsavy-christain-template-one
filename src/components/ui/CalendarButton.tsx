import type { WeddingEvent } from "../../types/wedding";

type CalendarButtonProps = {
    event: WeddingEvent;
    coupleNames: string;
};

export function getGoogleCalendarLink(event: WeddingEvent, coupleNames: string) {
    const startDate = new Date(event.dateISO);
    
    const formatGCalDate = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    
    const startStr = formatGCalDate(startDate);
    
    // Set typical duration per event type
    const durationHours = event.id === "engagement" ? 2 : event.id === "ceremony" ? 3 : 4;
    const endDate = new Date(startDate.getTime() + durationHours * 60 * 60 * 1000);
    const endStr = formatGCalDate(endDate);

    const dates = `${startStr}/${endStr}`;
    const text = encodeURIComponent(`${coupleNames} - ${event.title}`);
    const details = encodeURIComponent(`You are cordially invited to celebrate the ${event.title} of ${coupleNames}.\nVenue: ${event.venue}\nCity: ${event.city}`);
    const location = encodeURIComponent(`${event.venue}, ${event.city}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}

export function CalendarButton({ event, coupleNames }: CalendarButtonProps) {
    const calendarLink = getGoogleCalendarLink(event, coupleNames);

    return (
        <a
            href={calendarLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(201,166,70,0.5)] bg-transparent px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-gold-700)] transition hover:bg-[rgba(201,166,70,0.06)] active:scale-95 text-center"
        >
            Add to Calendar
        </a>
    );
}
