import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ThankYouSceneDecor() {
    const containerRef = useRef<HTMLDivElement>(null);
    const dustRef = useRef<HTMLDivElement>(null);
    const lightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !dustRef.current || !lightRef.current) return;

        // Sacred Dust Animation
        const dustParticles = dustRef.current.children;
        gsap.to(dustParticles, {
            y: "random(-100, 100)",
            x: "random(-50, 50)",
            opacity: "random(0.1, 0.4)",
            scale: "random(0.5, 1.2)",
            duration: "random(4, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.2,
                from: "random",
            }
        });

        // Divine Light Pulse
        gsap.to(lightRef.current, {
            scale: 1.2,
            opacity: 0.18,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Subtle rotation for the whole container to create a very slow organic shift
        gsap.to(containerRef.current, {
            rotate: 1,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    const dustCount = 12;

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Divine Light Source */}
            <div 
                ref={lightRef}
                className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(245,214,137,0.15),transparent_70%)] blur-[100px] opacity-10" 
            />

            {/* Sacred Dust Particles */}
            <div ref={dustRef} className="absolute inset-0">
                {Array.from({ length: dustCount }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-[var(--color-gold-300)] opacity-20 shadow-[0_0_8px_rgba(245,214,137,0.5)]"
                        style={{
                            left: `${Math.random() * 80 + 10}%`,
                            top: `${Math.random() * 80 + 10}%`,
                        }}
                    />
                ))}
            </div>

            {/* Slow Floating Orbs */}
            <div className="absolute bottom-[10%] right-[-10%] h-80 w-80 rounded-full bg-[rgba(255,248,236,0.05)] blur-[120px]" />
        </div>
    );
}
