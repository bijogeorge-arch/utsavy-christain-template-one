import type { FamilyContact } from "../../types/wedding";
import { Card } from "../../components/ui/Card";
import { motion, AnimatePresence, type Variants } from "motion/react";

type ContactCardProps = {
    contact: FamilyContact;
};

function cleanPhoneHref(phone: string) {
    return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function ContactCard({ contact }: ContactCardProps) {
    const containerVariants: Variants = {
        initial: { opacity: 0, scale: 0.96, filter: "blur(15px)" },
        animate: { 
            opacity: 1, 
            scale: 1, 
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        },
        exit: { 
            opacity: 0, 
            scale: 1.04, 
            filter: "blur(15px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    const childVariants: Variants = {
        initial: { opacity: 0, y: 12, filter: "blur(4px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={contact.side}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Card className="border-[rgba(201,166,70,0.22)] bg-[rgba(255,248,236,0.96)] px-6 py-6 shadow-[0_32px_120px_rgba(0,0,0,0.18)] relative overflow-hidden">
                    {/* Subtle Background Glow */}
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[rgba(201,166,70,0.06)] blur-2xl" />
                    
                    <address className="flex flex-col items-center text-center not-italic relative z-10">
                        {/* Sacred Icon Decor */}
                        <motion.div variants={childVariants} className="mb-4 h-9 w-9 text-[var(--color-gold-500)] opacity-60">
                            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
                                <circle cx="24" cy="24" r="20" />
                                <path d="M24 12V36M12 24H36" />
                                <path d="M18 18L30 30M30 18L18 30" opacity="0.4" />
                            </svg>
                        </motion.div>

                        <motion.p variants={childVariants} className="font-[var(--font-sacred)] text-[10px] font-bold uppercase tracking-[0.42em] text-[var(--color-gold-700)]">
                            {contact.side} Side
                        </motion.p>

                        <motion.h2 variants={childVariants} className="mt-3 font-[var(--font-display)] text-[clamp(2rem,8vw,2.8rem)] font-semibold leading-tight text-[var(--color-cathedral-900)] tracking-tight">
                            {contact.relation}
                        </motion.h2>

                        <motion.div variants={childVariants} className="mt-6 grid w-full grid-cols-2 gap-3">
                            <a
                                href={cleanPhoneHref(contact.phone)}
                                className="group relative overflow-hidden rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] p-[1px] shadow-[0_8px_32px_rgba(201,166,70,0.28)] transition-all hover:scale-[1.03] active:scale-[0.97]"
                            >
                                <div className="flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-300))] px-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-cathedral-900)] relative overflow-hidden">
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                                    <span className="relative z-10">Call</span>
                                </div>
                            </a>

                            <a
                                href={`mailto:${contact.email}`}
                                className="flex min-h-12 items-center justify-center rounded-full border border-[rgba(201,166,70,0.44)] px-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-cathedral-900)] transition-all hover:bg-[rgba(201,166,70,0.08)] active:scale-[0.97]"
                            >
                                Email
                            </a>
                        </motion.div>

                        <motion.div variants={childVariants} className="mt-5 space-y-1 text-[13px] tracking-wide text-[rgba(6,27,24,0.64)]">
                            <p className="font-semibold">{contact.phone}</p>
                            <p className="text-[11px] font-medium opacity-70">{contact.email}</p>
                        </motion.div>
                    </address>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}