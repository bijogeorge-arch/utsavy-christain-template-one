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
                "rounded-[28px] border border-[rgba(var(--color-gold-500-rgb),0.44)] bg-[rgba(var(--color-ivory-50-rgb),0.94)] p-5 text-[var(--color-cathedral-900)] shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl",
                className,
            )}
        >
            {children}
        </div>
    );
}