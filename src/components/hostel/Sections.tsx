import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  UserRound,
  Youtube,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { hostelConfig, getWhatsAppUrl } from "@/config/hostel";
import { cn } from "@/lib/utils";

import buildingImage from "@/assets/sclar-building-exterior.jpg";
import diningImage from "@/assets/sclar-dining.jpg";
import roomImage from "@/assets/sclar-room-interior.jpg";
import studyImage from "@/assets/sclar-study-room.jpg";

import { Room3D, Shield3D } from "./ThreeSection";
import { GlassCard, Magnetic, Reveal, SectionHeading, SectionShell } from "./primitives";

const galleryImages = [
  { title: "Rooms", category: "Rooms", src: roomImage, alt: "Generated visual placeholder of a modern hostel room" },
  { title: "Building", category: "Building", src: buildingImage, alt: "Generated visual placeholder of a modern hostel building exterior" },
  { title: "Dining", category: "Food", src: diningImage, alt: "Generated visual placeholder of a hostel dining area" },
  { title: "Study Area", category: "Facilities", src: studyImage, alt: "Generated visual placeholder of a focused study room" },
  { title: "Common Area", category: "Common Area", src: diningImage, alt: "Generated visual placeholder for a hostel common area" },
  { title: "Surroundings", category: "Surroundings", src: buildingImage, alt: "Generated visual placeholder of hostel surroundings" },
];

export function TrustStats() {
  return (
    <SectionShell className="py-12">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {hostelConfig.trustCards.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.04}>
              <GlassCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                <Icon className="mb-5 size-8 text-primary" aria-hidden="true" />
                <h2 className="font-display text-xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function About() {
  return (
    <SectionShell id="about" className="pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Sclar Nest"
            title="More Than a Hostel. A Place to Belong."
            description="Sclar Nest Boys Hostel Official provides students with a comfortable, secure and productive living environment shaped around everyday student life."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hostelConfig.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 0.035}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 shadow-soft">
                  <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-accent/14 text-accent">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="relative">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" />
          <img
            src={roomImage}
            alt="Generated placeholder showing a modern student hostel room"
            width={1408}
            height={1008}
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-3d"
            loading="lazy"
          />
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function Rooms() {
  return (
    <SectionShell id="rooms" className="bg-surface">
      <SectionHeading
        eyebrow="Rooms"
        title="Choose the Space That Fits You."
        description="Room details are centralized and ready for final pricing, bathroom, fan or AC information once confirmed."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {hostelConfig.roomTypes.map((room, index) => (
          <Reveal key={room.name} delay={index * 0.05}>
            <div className={cn("tilt-card group h-full rounded-3xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-glow", room.featured ? "border-primary/35" : "border-border")}>
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{room.occupancy}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{room.name}</h3>
                </div>
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-6">
                  <BedDouble aria-hidden="true" />
                </span>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{room.description}</p>
              <div className="mt-7 space-y-3">
                {room.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="size-4 text-accent" aria-hidden="true" />
                    {detail}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-secondary p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Price</p>
                <p className="mt-1 font-display text-2xl font-semibold text-foreground">{room.price}</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Button asChild variant="glass" className="w-full">
                  <a href="#room-experience">View Details</a>
                </Button>
                <Button asChild variant="premium" className="w-full">
                  <a href="#enquiry">Enquire About Room</a>
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function RoomExperience() {
  return (
    <SectionShell id="room-experience" dark className="py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="3D Room Experience"
            title="Explore Your Room"
            description="Rotate a lightweight room preview and hover the hotspots for editable accommodation details."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hostelConfig.roomHotspots.map((item) => (
              <GlassCard key={item.label} className="p-4 text-hero-muted">
                <p className="font-semibold text-hero-foreground">{item.label}</p>
                <p className="mt-1 text-sm leading-5">{item.detail}</p>
              </GlassCard>
            ))}
          </div>
        </div>
        <Reveal className="h-[520px] overflow-hidden rounded-[2rem] border border-hero-foreground/10 bg-hero-foreground/5 shadow-3d">
          <Room3D />
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function Facilities() {
  return (
    <SectionShell id="facilities">
      <SectionHeading
        eyebrow="Facilities"
        title="Everything You Need for Student Life."
        description="Facilities are managed from one editable data file so the hostel owner can keep the website accurate."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hostelConfig.facilities.map((facility, index) => {
          const Icon = facility.icon;
          return (
            <Reveal key={facility.name} delay={index * 0.025}>
              <GlassCard className="facility-card group h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/12 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {facility.confirmation}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{facility.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{facility.description}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function Food() {
  const [activeDay, setActiveDay] = useState(hostelConfig.foodMenu[0]?.day ?? "Monday");
  const selected = hostelConfig.foodMenu.find((item) => item.day === activeDay) ?? hostelConfig.foodMenu[0];

  return (
    <SectionShell id="food" className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Dining"
            title="Good Food. Better Days."
            description="Food and dining information is ready for the real weekly menu, meal timings and kitchen notes."
          />
          <Reveal className="mt-8 overflow-hidden rounded-[2rem] shadow-3d">
            <img
              src={diningImage}
              alt="Generated placeholder showing a modern student hostel dining area"
              width={1408}
              height={912}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </Reveal>
        </div>
        <Reveal>
          <GlassCard className="p-5 md:p-7">
            <div className="flex gap-2 overflow-x-auto pb-3">
              {hostelConfig.foodMenu.map((item) => (
                <Button
                  key={item.day}
                  type="button"
                  variant={item.day === activeDay ? "premium" : "glass"}
                  size="sm"
                  onClick={() => setActiveDay(item.day)}
                >
                  {item.day}
                </Button>
              ))}
            </div>
            {selected ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {Object.entries(selected.meals).map(([meal, value]) => (
                  <div key={meal} className="rounded-2xl border border-border bg-card p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{meal}</p>
                    <p className="mt-3 font-display text-xl font-semibold text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function Safety() {
  return (
    <SectionShell id="safety" dark>
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Safety & Security"
            title="Your Safety Comes First."
            description="A parent-focused section for confirmed security processes, hostel management, visitor rules and emergency support."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {hostelConfig.safety.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.035}>
                <GlassCard className="p-5 text-hero-muted">
                  <ShieldCheck className="mb-4 size-6 text-accent" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-hero-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6">{item.description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="h-[420px] overflow-hidden rounded-[2rem] border border-hero-foreground/10 bg-hero-foreground/5 shadow-3d">
          <Shield3D />
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function StudyEnvironment() {
  return (
    <SectionShell id="study">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="overflow-hidden rounded-[2rem] shadow-3d lg:order-1">
          <img
            src={studyImage}
            alt="Generated placeholder showing a quiet modern hostel study room"
            width={1408}
            height={912}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </Reveal>
        <div className="lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Academic Focus"
            title="Built for Students Who Want to Focus."
            description="The experience highlights the environment students need for routines, rest and productive study hours."
          />
          <div className="mt-8 space-y-3">
            {hostelConfig.study.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 shadow-soft">
                <Check className="size-5 text-accent" aria-hidden="true" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Rooms");
  const [activeImage, setActiveImage] = useState<(typeof galleryImages)[number] | null>(null);
  const filtered = useMemo(
    () => galleryImages.filter((image) => image.category === activeCategory),
    [activeCategory],
  );
  const visible = filtered.length > 0 ? filtered : galleryImages;

  return (
    <SectionShell id="gallery" className="bg-surface">
      <SectionHeading
        eyebrow="Gallery"
        title="A Visual Feel for Sclar Nest."
        description="These generated placeholders are structured so real hostel photos can replace them cleanly."
      />
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {hostelConfig.galleryCategories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={category === activeCategory ? "premium" : "glass"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-3">
        {visible.map((image, index) => (
          <button
            key={`${image.title}-${index}`}
            type="button"
            onClick={() => setActiveImage(image)}
            className={cn("group relative overflow-hidden rounded-3xl border border-border bg-card text-left shadow-soft outline-hidden transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring", index === 0 ? "md:col-span-2 md:row-span-2" : "")}
          >
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <span className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/82 px-4 py-3 font-display text-lg font-semibold text-foreground backdrop-blur-xl">
              {image.title}
            </span>
          </button>
        ))}
      </div>
      <Dialog open={Boolean(activeImage)} onOpenChange={(open) => !open && setActiveImage(null)}>
        <DialogContent className="max-w-5xl border-border bg-card/95 p-3 shadow-3d backdrop-blur-2xl">
          <DialogTitle className="sr-only">Gallery image preview</DialogTitle>
          <DialogDescription className="sr-only">Large preview of the selected hostel gallery placeholder.</DialogDescription>
          {activeImage ? (
            <img src={activeImage.src} alt={activeImage.alt} className="max-h-[78vh] w-full rounded-2xl object-cover" />
          ) : null}
        </DialogContent>
      </Dialog>
    </SectionShell>
  );
}

export function Location() {
  const directionsHref = hostelConfig.location.mapUrl || "#enquiry";

  return (
    <SectionShell id="location">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Location"
            title="Conveniently Located for Student Life."
            description="Add verified address, nearby institutions, markets, transport and landmark details before publishing real location claims."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hostelConfig.location.items.map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.label} className="p-4">
                  <Icon className="mb-3 size-5 text-primary" aria-hidden="true" />
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                </GlassCard>
              );
            })}
          </div>
          <Button asChild variant="premium" size="lg" className="mt-8">
            <a href={directionsHref} target={hostelConfig.location.mapUrl ? "_blank" : undefined} rel={hostelConfig.location.mapUrl ? "noreferrer" : undefined}>
              Get Directions
              <ExternalLink aria-hidden="true" />
            </a>
          </Button>
        </div>
        <Reveal>
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-border bg-hero p-8 text-hero-foreground shadow-3d">
            <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-60" />
            <div className="relative z-10 flex h-full min-h-[456px] flex-col justify-between">
              <div>
                <MapPin className="mb-6 size-12 text-accent" aria-hidden="true" />
                <h3 className="font-display text-3xl font-semibold">Map placeholder</h3>
                <p className="mt-4 max-w-md text-hero-muted">
                  Add a Google Maps URL in the hostel configuration to activate directions and embed-ready location details.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <GlassCard className="p-4 text-hero-muted">
                  <p className="font-semibold text-hero-foreground">Address</p>
                  <p className="mt-1 text-sm">{hostelConfig.location.address}</p>
                </GlassCard>
                <GlassCard className="p-4 text-hero-muted">
                  <p className="font-semibold text-hero-foreground">Landmarks</p>
                  <p className="mt-1 text-sm">{hostelConfig.location.landmarks}</p>
                </GlassCard>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function Rules() {
  return (
    <SectionShell id="rules" className="bg-surface py-16">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <SectionHeading
          align="left"
          eyebrow="Hostel Rules"
          title="Simple Rules. Better Living."
          description="Rules are editable from the central hostel configuration."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {hostelConfig.rules.map((rule, index) => (
            <Reveal key={rule} delay={index * 0.03}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary/10 font-display font-semibold text-primary">
                  {index + 1}
                </span>
                <p className="font-medium text-foreground">{rule}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export function ParentsSection() {
  return (
    <SectionShell id="parents" dark className="py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="For Parents"
            title="Peace of Mind for Parents."
            description="Clear hostel information helps families evaluate safety, cleanliness, communication and student support."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {hostelConfig.parents.map((item) => (
              <span key={item} className="rounded-full border border-hero-foreground/10 bg-hero-foreground/7 px-4 py-2 text-sm text-hero-muted backdrop-blur-xl">
                {item}
              </span>
            ))}
          </div>
        </div>
        <GlassCard className="p-7 text-hero-muted">
          <UserRound className="mb-6 size-10 text-accent" aria-hidden="true" />
          <h3 className="font-display text-3xl font-semibold text-hero-foreground">Speak with the hostel team</h3>
          <p className="mt-4 leading-7">Use the enquiry form to request accurate room, food, rules, safety and admission information.</p>
          <Button asChild variant="premium" size="lg" className="mt-7">
            <a href="#enquiry">Talk to Us</a>
          </Button>
        </GlassCard>
      </div>
    </SectionShell>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = hostelConfig.testimonials[active] ?? hostelConfig.testimonials[0];

  return (
    <SectionShell id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Residents Say"
        description="Placeholder testimonials are ready to be replaced with genuine resident feedback."
      />
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <GlassCard className="p-8 text-center md:p-10">
          <p className="mx-auto max-w-2xl font-display text-2xl leading-relaxed text-foreground md:text-3xl">
            “{current?.quote ?? "Testimonial"}”
          </p>
          <div className="mt-8">
            <p className="font-semibold text-foreground">{current?.name ?? "Resident Name"}</p>
            <p className="mt-1 text-sm text-muted-foreground">{current?.context ?? "Course / College"}</p>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <Button type="button" variant="glass" size="icon" onClick={() => setActive((active - 1 + hostelConfig.testimonials.length) % hostelConfig.testimonials.length)} aria-label="Previous testimonial">
              <ChevronLeft aria-hidden="true" />
            </Button>
            <Button type="button" variant="premium" size="icon" onClick={() => setActive((active + 1) % hostelConfig.testimonials.length)} aria-label="Next testimonial">
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>
        </GlassCard>
      </Reveal>
    </SectionShell>
  );
}

export function FAQ() {
  return (
    <SectionShell id="faq" className="bg-surface">
      <SectionHeading
        eyebrow="FAQ"
        title="Answers Before You Visit."
        description="Each answer is editable so the site can stay accurate as hostel policies are finalized."
      />
      <Reveal className="mx-auto mt-12 max-w-4xl">
        <Accordion type="single" collapsible className="space-y-3">
          {hostelConfig.faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="rounded-2xl border border-border bg-card px-5 shadow-soft">
              <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </SectionShell>
  );
}

export function Contact() {
  const whatsappHref = getWhatsAppUrl();

  return (
    <SectionShell id="contact" dark className="pb-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Visit, Call or Send an Enquiry."
            description="Add verified phone, email, address and working hour details in the central configuration."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="premium" size="lg">
              <a href="#enquiry">Send Enquiry</a>
            </Button>
            <Button asChild variant="glassHero" size="lg">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Phone", value: hostelConfig.contact.phone, icon: Phone },
            { label: "WhatsApp", value: hostelConfig.contact.whatsappDisplay, icon: MessageCircle },
            { label: "Email", value: hostelConfig.contact.email, icon: Mail },
            { label: "Address", value: hostelConfig.contact.address, icon: MapPin },
            { label: "Working hours", value: hostelConfig.contact.workingHours, icon: Clock3 },
            { label: "Google Maps", value: "Add Google Maps URL", icon: ExternalLink },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.label} className="p-5 text-hero-muted">
                <Icon className="mb-4 size-6 text-accent" aria-hidden="true" />
                <p className="font-semibold text-hero-foreground">{item.label}</p>
                <p className="mt-1 text-sm">{item.value}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
