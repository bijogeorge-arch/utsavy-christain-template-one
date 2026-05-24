import type { ReactNode } from "react";

type MobileFrameProps = {
    children: ReactNode;
};

export function MobileFrame({ children }: MobileFrameProps) {
    return (
        <div className="relative h-full w-full flex items-center justify-center">
            {/* Top notch detail for desktop */}
            <div className="pointer-events-none absolute left-1/2 top-4 z-50 hidden h-1.5 w-24 -translate-x-1/2 rounded-full bg-[var(--color-gold-500)] opacity-35 sm:block animate-pulse" />
            
            {/* Left side button details for desktop */}
            <div className="pointer-events-none absolute -left-[3px] top-28 z-50 hidden h-12 w-[3px] rounded-r bg-[var(--color-gold-500)] opacity-30 sm:block animate-pulse" />
            <div className="pointer-events-none absolute -left-[3px] top-44 z-50 hidden h-16 w-[3px] rounded-r bg-[var(--color-gold-500)] opacity-30 sm:block animate-pulse" />
            
            {/* Right side button details for desktop */}
            <div className="pointer-events-none absolute -right-[3px] top-36 z-50 hidden h-16 w-[3px] rounded-l bg-[var(--color-gold-500)] opacity-30 sm:block animate-pulse" />
            
            {/* Inner Content Stage */}
            <div className="relative h-full w-full overflow-hidden">
                {children}
            </div>

            {/* Desktop Gold Outer Rim */}
            <div className="pointer-events-none absolute inset-0 z-40 hidden rounded-[var(--stage-radius)] border-[3px] border-[rgba(201,166,70,0.52)] shadow-[inset_0_0_18px_rgba(245,214,137,0.22)] sm:block" />
        </div>
    );
}
