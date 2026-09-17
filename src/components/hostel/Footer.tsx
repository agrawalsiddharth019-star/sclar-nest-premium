import { Facebook, Instagram, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hostelConfig } from "@/config/hostel";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const socials = [
    { label: "Instagram", href: hostelConfig.socialLinks.instagram, icon: Instagram },
    { label: "Facebook", href: hostelConfig.socialLinks.facebook, icon: Facebook },
    { label: "YouTube", href: hostelConfig.socialLinks.youtube, icon: Youtube },
  ];

  return (
    <footer className="bg-hero px-4 pb-12 pt-16 text-hero-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-t border-hero-foreground/10 pt-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-3xl font-semibold">{hostelConfig.brand.name}</p>
            <p className="mt-3 text-hero-muted">{hostelConfig.brand.tagline}</p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-hero-muted transition-colors hover:text-hero-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          <div>
            <div className="flex gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                const href = social.href || "#contact";
                return (
                  <Button asChild key={social.label} variant="glassHero" size="icon" aria-label={social.label}>
                    <a href={href} target={social.href ? "_blank" : undefined} rel={social.href ? "noreferrer" : undefined}>
                      <Icon aria-hidden="true" />
                    </a>
                  </Button>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-hero-muted">
              <a href="#contact" className="hover:text-hero-foreground">Privacy Policy</a>
              <a href="#contact" className="hover:text-hero-foreground">Terms & Conditions</a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-hero-muted">© 2026 Sclar Nest Boys Hostel Official. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
