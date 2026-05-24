import { useCountdown } from "../../hooks/useCountdown";
import { padTime } from "../../lib/countdown";

type EventCountdownMiniProps = {
    targetISO: string;
};

export function EventCountdownMini({ targetISO }: EventCountdownMiniProps) {
    const parts = useCountdown(targetISO);

    return (
        <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
            {[
                ["Days", parts.days],
                ["Hrs", parts.hours],
                ["Min", parts.minutes],
                ["Sec", parts.seconds],
            ].map(([label, value]) => (
                <div
                    key={label}
                    className="flex flex-col items-center rounded-xl sm:rounded-2xl border border-[rgba(var(--color-gold-500-rgb),0.18)] bg-[rgba(var(--color-gold-500-rgb),0.06)] py-2 sm:py-3.5 px-0.5 sm:px-1 transition-all hover:bg-[rgba(var(--color-gold-500-rgb),0.1)]"
                >
                    <p className="font-[var(--font-display)] text-lg sm:text-3xl font-bold leading-none tracking-tight text-[var(--color-gold-700)]">
                        {label === "Days" ? value : padTime(Number(value))}
                    </p>
                    <p className="mt-1 sm:mt-2 text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.24em] text-[var(--color-cathedral-800)]/60">
                        {label}
                    </p>
                </div>
            ))}
        </div>
    );
}