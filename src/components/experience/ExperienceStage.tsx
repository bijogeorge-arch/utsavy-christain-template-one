import type { ReactNode } from "react";
import { StageBackground } from "./StageBackground";

type ExperienceStageProps = {
    children: ReactNode;
};

export function ExperienceStage({ children }: ExperienceStageProps) {
    return (
        <main className="stage-perspective relative grid min-h-dvh w-full place-items-center overflow-hidden bg-[var(--color-cathedral-900)]">
            <StageBackground />

            <section className="mobile-stage-shell relative overflow-hidden bg-[var(--color-cathedral-950)] shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:rounded-[var(--stage-radius)]">
                {children}
            </section>
        </main>
    );
}