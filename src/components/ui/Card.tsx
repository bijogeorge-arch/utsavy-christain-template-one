import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type CardProps = {
    children: ReactNode;
    className?: string;
};

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-[28px] border border-[rgba(201,166,70,0.44)] bg-[rgba(255,248,236,0.94)] p-5 text-[var(--color-cathedral-900)] shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl",
                className,
            )}
        >
            {children}
        </div>
    );
}