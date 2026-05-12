import type { WeddingEvent } from "../../types/wedding";
import { Card } from "../../components/ui/Card";
import { MapButton } from "../../components/ui/MapButton";
import { EventCountdownMini } from "./EventCountdownMini";

type EventDetailCardProps = {
    event: WeddingEvent;
    activeKey: string;
};

export function EventDetailCard({ event, activeKey }: EventDetailCardProps) {
    return (
        <Card className="p-6 sm:p-7">
            <section
                id={`event-panel-${activeKey}`}
                role="tabpanel"
                aria-labelledby={`event-tab-${activeKey}`}
                className="flex flex-col items-center text-center sm:items-end sm:text-right"
            >
                <p className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--color-gold-700)]">
                    {event.subtitle}
                </p>

                <h2 className="mt-2 font-[var(--font-display)] text-[clamp(2.2rem,10vw,2.8rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--color-cathedral-950)]">
                    {event.title}
                </h2>

                <div className="my-5 h-px w-24 bg-[rgba(201,166,70,0.28)] sm:w-full" />

                <div className="flex flex-col gap-1.5">
                    <p className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold-700)]">
                        {event.displayDate}
                    </p>

                    <p className="font-[var(--font-display)] text-3xl font-semibold leading-none text-[var(--color-cathedral-900)] sm:text-4xl">
                        {event.time}
                    </p>
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-[rgba(6,27,24,0.78)]">
                    {event.venue}
                    <br />
                    <span className="text-[var(--color-gold-700)] font-semibold">{event.city}</span>
                </p>

                <div className="mt-8 w-full">
                    <EventCountdownMini targetISO={event.dateISO} />
                </div>

                <div className="mt-7 w-full">
                    <MapButton href={event.mapUrl} />
                </div>
            </section>
        </Card>
    );
}