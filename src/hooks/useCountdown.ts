import { useEffect, useState } from "react";
import { getCountdownParts, type CountdownParts } from "../lib/countdown";

export function useCountdown(targetISO: string) {
    const [parts, setParts] = useState<CountdownParts>(() =>
        getCountdownParts(targetISO),
    );

    useEffect(() => {
        const interval = window.setInterval(() => {
            setParts(getCountdownParts(targetISO));
        }, 1000);

        return () => {
            window.clearInterval(interval);
        };
    }, [targetISO]);

    return parts;
}