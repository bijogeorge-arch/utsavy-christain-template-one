const particles = Array.from({ length: 22 }, (_, index) => index);

export function GoldParticles() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            {particles.map((particle) => (
                <span
                    key={particle}
                    className="absolute h-1.5 w-1.5 rounded-full bg-[rgba(245,214,137,0.72)] blur-[0.4px]"
                    style={{
                        left: `${8 + ((particle * 19) % 84)}%`,
                        top: `${12 + ((particle * 29) % 72)}%`,
                        animation: `pulse-soft ${2.8 + (particle % 4) * 0.7}s ease-in-out infinite`,
                        animationDelay: `${particle * 0.18}s`,
                    }}
                />
            ))}
        </div>
    );
}