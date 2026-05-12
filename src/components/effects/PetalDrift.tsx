const petals = Array.from({ length: 14 }, (_, index) => index);

export function PetalDrift() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            {petals.map((petal) => (
                <span
                    key={petal}
                    className="absolute top-[-6%] h-2.5 w-1.5 rounded-full bg-[rgba(245,214,137,0.62)] blur-[0.3px]"
                    style={{
                        right: `${(petal * 17) % 100}%`,
                        animation: `petal-drift ${10 + (petal % 5)}s linear infinite`,
                        animationDelay: `${petal * 0.73}s`,
                    }}
                />
            ))}
        </div>
    );
}