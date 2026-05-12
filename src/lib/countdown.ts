export type CountdownParts = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isComplete: boolean;
};

export function getCountdownParts(targetISO: string, now = new Date()): CountdownParts {
    const target = new Date(targetISO).getTime();
    const current = now.getTime();
    const diff = Math.max(0, target - current);

    const seconds = Math.floor(diff / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return {
        days,
        hours,
        minutes,
        seconds: remainingSeconds,
        isComplete: diff === 0,
    };
}

export function padTime(value: number) {
    return String(value).padStart(2, "0");
}