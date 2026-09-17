import { ArrowDown, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hostelConfig } from "@/config/hostel";

import { Building3D } from "./ThreeSection";
import { GlassCard, Magnetic, Reveal } from "./primitives";

const floatingCards = ["24/7 Security", "High-Speed Wi-Fi", "Comfortable Rooms", "Study Friendly", "Healthy Food"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-hero px-4 pb-20 pt-28 text-hero-foreground sm:px-6 lg:px-8">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 particles" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hero-foreground/10 bg-hero-foreground/6 px-4 py-2 text-sm text-hero-muted shadow-soft backdrop-blur-xl">
              <Sparkles className="size-4 text-accent" aria-hidden="true" />
              Premium student living for boys
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display text-5xl font-semibold leading-[0.96] text-hero-foreground md:text-7xl xl:text-8xl">
              Your Space to Live. Learn. Grow.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-hero-muted md:text-xl">
              {hostelConfig.brand.positioning}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <Button asChild variant="premium" size="xl">
                  <a href="#rooms">
                    Explore Rooms
                    <ArrowDown aria-hidden="true" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild variant="glassHero" size="xl">
                  <a href="#enquiry">
                    <MessageCircle aria-hidden="true" />
                    Enquire Now
                  </a>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              {floatingCards.slice(0, 3).map((card) => (
                <GlassCard key={card} className="px-4 py-3 text-sm text-hero-muted">
                  <ShieldCheck className="mb-2 size-4 text-accent" aria-hidden="true" />
                  {card}
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="relative min-h-[460px] lg:min-h-[660px]">
          <div aria-hidden="true" className="absolute inset-8 rounded-full bg-accent/12 blur-3xl" />
          <div className="relative h-[460px] overflow-hidden rounded-[2rem] border border-hero-foreground/10 bg-hero-foreground/5 shadow-3d backdrop-blur-sm lg:h-[660px]">
            <Building3D />
          </div>
          {floatingCards.map((card, index) => (
            <div
              key={card}
              className={`floating-info floating-info-${index + 1} glass-panel rounded-2xl px-4 py-3 text-sm font-medium text-foreground shadow-glow`}
            >
              {card}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
