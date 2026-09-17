import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/hostel";

export function WhatsAppButton() {
  const href = getWhatsAppUrl();

  return (
    <>
      <Button asChild variant="whatsapp" size="lg" className="fixed bottom-6 right-5 z-40 hidden shadow-glow md:inline-flex" aria-label="Chat with us on WhatsApp">
        <a href={href} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          Chat With Us
        </a>
      </Button>
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-border bg-card/90 p-2 shadow-glow backdrop-blur-xl md:hidden">
        <Button asChild variant="premium" size="lg">
          <a href="#enquiry">Enquire Now</a>
        </Button>
        <Button asChild variant="whatsapp" size="lg">
          <a href={href} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </Button>
      </div>
    </>
  );
}
