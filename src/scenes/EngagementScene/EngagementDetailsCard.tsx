import { motion } from "motion/react";
import type { WeddingEvent } from "../../types/wedding";
import { itemVariants } from "../../animations/variants";
import { Card } from "../../components/ui/Card";
import { MapButton } from "../../components/ui/MapButton";

type EngagementDetailsCardProps = {
    event: WeddingEvent;
};

export function EngagementDetailsCard({ event }: EngagementDetailsCardProps) {
    return (
        <motion.div variants={itemVariants} className="w-full">
            <Card>
                <div className="space-y-4">
                    <div>
                        <p className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-700)]">
                            {event.displayDate}
                        </p>

                        <p className="mt-3 font-[var(--font-display)] text-4xl font-semibold leading-none text-[var(--color-cathedral-900)]">
                            {event.time}
                        </p>
                    </div>

                    <div className="h-px bg-[rgba(201,166,70,0.34)]" />

                    <div>
                        <p className="font-[var(--font-display)] text-2xl font-semibold leading-tight text-[var(--color-cathedral-900)]">
                            {event.venue}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[rgba(6,27,24,0.66)]">
                            {event.city}
                        </p>
                    </div>

                    <MapButton href={event.mapUrl} />
                </div>
            </Card>
        </motion.div>
    );
}