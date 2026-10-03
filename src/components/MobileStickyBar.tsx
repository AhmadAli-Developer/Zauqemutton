"use client";

import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Gradient fade above bar */}
      <div className="h-6 bg-gradient-to-t from-background to-transparent" />

      <div className="bg-background/95 backdrop-blur-xl border-t border-border px-4 py-3">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <a
            href={BUSINESS.telLink}
            className="btn-gold-outline flex-1 text-sm py-3"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
              "Hi Zauq-e-Mutton! I'd like to place an order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-1 text-sm py-3 animate-pulse-gold"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
