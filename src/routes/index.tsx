import { createFileRoute } from "@tanstack/react-router";

import { EnquiryForm } from "@/components/hostel/EnquiryForm";
import { Footer } from "@/components/hostel/Footer";
import { Hero } from "@/components/hostel/Hero";
import { Navbar } from "@/components/hostel/Navbar";
import {
  About,
  Contact,
  Facilities,
  FAQ,
  Food,
  Gallery,
  Location,
  ParentsSection,
  RoomExperience,
  Rooms,
  Rules,
  StudyEnvironment,
  Testimonials,
  TrustStats,
} from "@/components/hostel/Sections";
import { WhatsAppButton } from "@/components/hostel/WhatsAppButton";
import { seo } from "@/config/hostel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
    ],
    links: [{ rel: "canonical", href: seo.canonical }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Rooms />
        <RoomExperience />
        <Facilities />
        <Food />
        <Safety />
        <StudyEnvironment />
        <Gallery />
        <Location />
        <Rules />
        <ParentsSection />
        <Testimonials />
        <FAQ />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
