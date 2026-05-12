const sparkles = Array.from({ length: 18 }, (_, index) => index);

export function CountdownSparkles() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[34%] h-72 w-72 -translate-x-1/2 -translate-y-1/2"
        >
            <div className="countdown-sparkle-orbit absolute inset-0 rounded-full">
                {sparkles.map((sparkle) => {
                    const angle = (360 / sparkles.length) * sparkle;

                    return (
                        <span
                            key={sparkle}
                            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[var(--color-gold-300)] shadow-[0_0_16px_rgba(245,214,137,0.72)]"
                            style={{
                                transform: `rotate(${angle}deg) translateY(-142px)`,
                                opacity: sparkle % 3 === 0 ? 0.9 : 0.46,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}