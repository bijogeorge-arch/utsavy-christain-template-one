const dots = Array.from({ length: 12 }, (_, index) => index);

export function BlessingOrbit() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[36%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
        >
            <div className="blessing-orbit absolute inset-0 rounded-full">
                {dots.map((dot) => {
                    const angle = (360 / dots.length) * dot;

                    return (
                        <span
                            key={dot}
                            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[var(--color-gold-300)] shadow-[0_0_14px_rgba(245,214,137,0.72)]"
                            style={{
                                transform: `rotate(${angle}deg) translateY(-126px)`,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}