export function AmbientMist() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[-20%] top-[16%] h-52 w-[150%] animate-[mist-drift_9s_ease-in-out_infinite] rounded-full bg-[rgba(255,248,236,0.08)] blur-3xl" />
            <div className="absolute bottom-[8%] right-[-30%] h-60 w-[140%] animate-[mist-drift_11s_ease-in-out_infinite] rounded-full bg-[rgba(245,214,137,0.07)] blur-3xl" />
        </div>
    );
}