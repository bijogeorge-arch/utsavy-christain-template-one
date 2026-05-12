export function StageBackground() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[rgba(245,214,137,0.08)] blur-3xl" />
            <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[rgba(28,77,112,0.16)] blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,0.42)_72%)]" />
        </div>
    );
}