import { Menu, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { hostelConfig } from "@/config/hostel";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300",
          scrolled ? "glass-panel shadow-glow" : "border-transparent bg-transparent",
        )}
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="Sclar Nest home">
          <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-glow transition-transform duration-300 group-hover:-translate-y-0.5">
            SN
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-foreground md:text-lg">
              {hostelConfig.brand.shortName}
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {hostelConfig.brand.subName}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {hostelConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild variant="premium" size="lg">
            <a href="#enquiry">
              <MessageCircle aria-hidden="true" />
              Enquire Now
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="glass" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="glass-panel border-border bg-card/95" side="right">
            <SheetTitle className="font-display text-2xl">{hostelConfig.brand.shortName}</SheetTitle>
            <div className="mt-8 grid gap-2">
              {hostelConfig.navigation.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href} className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent/12">
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </div>
            <SheetClose asChild>
              <Button asChild variant="premium" size="lg" className="mt-8 w-full">
                <a href="#enquiry">Enquire Now</a>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
