import { useCountdown } from "../../hooks/useCountdown";
import { CountdownUnit } from "./CountdownUnit";

type CountdownProps = {
    targetISO: string;
};

export function Countdown({ targetISO }: CountdownProps) {
    const parts = useCountdown(targetISO);

    return (
        <div className="grid w-full grid-cols-2 gap-3">
            <CountdownUnit label="Days" value={parts.days} />
            <CountdownUnit label="Hours" value={parts.hours} />
            <CountdownUnit label="Minutes" value={parts.minutes} />
            <CountdownUnit label="Seconds" value={parts.seconds} />
        </div>
    );
}