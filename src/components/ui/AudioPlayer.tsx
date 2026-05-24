import { useEffect, useRef, useState } from "react";

export function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

    useEffect(() => {
        // Canon in D - Johann Pachelbel is the quintessential wedding classical track.
        const audio = new Audio("https://www.mfiles.co.uk/mp3-downloads/johann-pachelbel-canon-in-d.mp3");
        audio.loop = true;
        audio.volume = 0.35; // Soft ambient volume
        audioRef.current = audio;

        const handlePlayEvent = () => {
            audio.play().then(() => {
                setIsPlaying(true);
                setIsBlocked(false);
            }).catch((err) => {
                console.warn("Autoplay blocked. Waiting for manual play.", err);
                setIsBlocked(true);
            });
        };

        window.addEventListener("play-wedding-music", handlePlayEvent);

        return () => {
            window.removeEventListener("play-wedding-music", handlePlayEvent);
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                setIsBlocked(false);
            }).catch((err) => {
                console.error("Playback failed:", err);
            });
        }
    };

    return (
        <div className="absolute right-4 top-4 z-50 pointer-events-auto">
            <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Mute background music" : "Play background music"}
                className={`flex items-center justify-center gap-2 rounded-full border border-[rgba(var(--color-gold-500-rgb),0.22)] bg-[rgba(var(--color-ivory-50-rgb),0.85)] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-cathedral-800)] backdrop-blur-xl transition hover:bg-[rgba(var(--color-gold-500-rgb),0.12)] hover:text-[var(--color-gold-600)] active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${
                    isBlocked && !isPlaying ? "ring-2 ring-[var(--color-gold-500)] animate-pulse" : ""
                }`}
            >
                <div className="flex h-3 items-end gap-0.5">
                    <span
                        className={`w-0.5 bg-current transition-all rounded-full ${
                            isPlaying ? "animate-[soundwave_0.8s_ease-in-out_infinite]" : "h-1"
                        }`}
                        style={{ animationDelay: "0.1s" }}
                    />
                    <span
                        className={`w-0.5 bg-current transition-all rounded-full ${
                            isPlaying ? "animate-[soundwave_0.8s_ease-in-out_infinite]" : "h-1"
                        }`}
                        style={{ animationDelay: "0.3s" }}
                    />
                    <span
                        className={`w-0.5 bg-current transition-all rounded-full ${
                            isPlaying ? "animate-[soundwave_0.8s_ease-in-out_infinite]" : "h-1"
                        }`}
                        style={{ animationDelay: "0.5s" }}
                    />
                    <span
                        className={`w-0.5 bg-current transition-all rounded-full ${
                            isPlaying ? "animate-[soundwave_0.8s_ease-in-out_infinite]" : "h-1"
                        }`}
                        style={{ animationDelay: "0.2s" }}
                    />
                </div>
                <span className="text-[9px]">
                    {isPlaying ? "Music On" : "Music Off"}
                </span>
            </button>
        </div>
    );
}
