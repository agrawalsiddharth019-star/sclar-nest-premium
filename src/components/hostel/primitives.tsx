import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("glass-panel rounded-2xl", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{description}</p> : null}
    </Reveal>
  );
}

export function SectionShell({
  id,
  children,
  className,
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8",
        dark ? "bg-hero text-hero-foreground" : "bg-background text-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      {children}
    </motion.div>
  );
}

export function CursorGlow() {
  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden cursor-glow lg:block" />;
}
