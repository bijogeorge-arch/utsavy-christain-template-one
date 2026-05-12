import { useCountdown } from "../../hooks/useCountdown";
import { padTime } from "../../lib/countdown";

type EventCountdownMiniProps = {
    targetISO: string;
};

export function EventCountdownMini({ targetISO }: EventCountdownMiniProps) {
    const parts = useCountdown(targetISO);

    return (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {[
                ["Days", parts.days],
                ["Hrs", parts.hours],
                ["Min", parts.minutes],
                ["Sec", parts.seconds],
            ].map(([label, value]) => (
                <div
                    key={label}
                    className="flex flex-col items-center rounded-2xl border border-[rgba(201,166,70,0.18)] bg-[rgba(245,214,137,0.1)] py-3.5 px-1 transition-all hover:bg-[rgba(245,214,137,0.16)]"
                >
                    <p className="font-[var(--font-display)] text-2xl font-bold leading-none tracking-tight text-[var(--color-gold-700)] sm:text-3xl">
                        {label === "Days" ? value : padTime(Number(value))}
                    </p>
                    <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.24em] text-[rgba(6,27,24,0.52)] sm:text-[9px]">
                        {label}
                    </p>
                </div>
            ))}
        </div>
    );
}