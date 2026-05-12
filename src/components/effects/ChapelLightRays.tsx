export function ChapelLightRays() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="absolute left-[36%] top-0 h-[74%] w-16 origin-top rotate-[11deg] bg-[linear-gradient(180deg,rgba(245,214,137,0.18),transparent)] blur-2xl" />
            <div className="absolute left-[52%] top-0 h-[78%] w-20 origin-top rotate-[-8deg] bg-[linear-gradient(180deg,rgba(255,248,236,0.14),transparent)] blur-2xl" />
            <div className="absolute right-[4%] top-[10%] h-[48%] w-12 origin-top rotate-[-18deg] bg-[linear-gradient(180deg,rgba(28,77,112,0.16),transparent)] blur-2xl" />
        </div>
    );
}