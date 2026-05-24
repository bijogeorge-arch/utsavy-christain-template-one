import type { WeddingEvent } from "../../types/wedding";
import { Card } from "../../components/ui/Card";
import { MapButton } from "../../components/ui/MapButton";
import { EventCountdownMini } from "./EventCountdownMini";

type EventDetailCardProps = {
    event: WeddingEvent;
    activeKey: string;
    initials?: string;
};

export function EventDetailCard({ event, activeKey, initials }: EventDetailCardProps) {
    return (
        <Card className="p-4 sm:p-7">
            <section
                id={`event-panel-${activeKey}`}
                role="tabpanel"
                aria-labelledby={`event-tab-${activeKey}`}
                className="flex flex-col items-center text-center sm:items-end sm:text-right"
            >
                <p className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--color-gold-700)]">
                    {event.subtitle}
                </p>

                <h2 className="mt-1.5 sm:mt-2 font-[var(--font-display)] text-[clamp(1.75rem,7vw,2.4rem)] sm:text-[clamp(2.2rem,10vw,2.8rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--color-cathedral-950)]">
                    {event.title}
                </h2>

                <div className="my-3.5 sm:my-5 h-px w-24 bg-[rgba(var(--color-gold-500-rgb),0.28)] sm:w-full" />

                {activeKey === "minnu" ? (
                    <div className="flex flex-col items-center w-full text-center sm:items-end sm:text-right">
                        <p className="font-[var(--font-display)] text-2xl sm:text-4xl font-semibold leading-none text-[var(--color-cathedral-900)]">
                            {initials}
                        </p>
                        <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm leading-relaxed text-[var(--color-cathedral-800)] italic">
                            The Minnu is tied. The Manthrakodi is placed.
                            <br />
                            A new life begins in grace.
                        </p>
                        
                        <div className="mt-4 sm:mt-6 w-full text-center sm:text-right border-t border-[rgba(var(--color-gold-500-rgb),0.18)] pt-3 sm:pt-4">
                            <p className="font-[var(--font-sacred)] text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold-700)]">
                                Part of Holy Matrimony
                            </p>
                            <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-[13px] leading-relaxed text-[var(--color-cathedral-800)]">
                                {event.venue}, {event.city}
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-6 w-full">
                            <MapButton href={event.mapUrl} />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col gap-1 sm:gap-1.5">
                            <p className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold-700)]">
                                {event.displayDate}
                            </p>

                            <p className="font-[var(--font-display)] text-2xl sm:text-4xl font-semibold leading-none text-[var(--color-cathedral-900)]">
                                {event.time}
                            </p>
                        </div>

                        <p className="mt-3.5 sm:mt-5 text-[13px] sm:text-[15px] leading-relaxed text-[var(--color-cathedral-900)]">
                            {event.venue}
                            <br />
                            <span className="text-[var(--color-gold-700)] font-semibold">{event.city}</span>
                        </p>

                        <div className="mt-5 sm:mt-8 w-full">
                            <EventCountdownMini targetISO={event.dateISO} />
                        </div>

                        <div className="mt-4 sm:mt-7 w-full">
                            <MapButton href={event.mapUrl} />
                        </div>
                    </>
                )}
            </section>
        </Card>
    );
}