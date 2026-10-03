"use client";

import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Heart,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-20 lg:pt-32 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        {/* Top: Contact + Map */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold-sm">
                <span className="text-zinc-950 font-heading font-bold text-xl">
                  Z
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-warm-white">
                  {BUSINESS.name}
                </h3>
                <span className="text-xs text-warm-gray uppercase tracking-[0.2em]">
                  {BUSINESS.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-warm-gray leading-relaxed mb-8 max-w-md">
              Lahore&apos;s most trusted name in premium halal mutton and meat.
              From fresh cuts to traditional specialties — quality you can taste
              in every bite.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={BUSINESS.telLink}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold-muted transition-all duration-300">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-xs text-warm-gray block">Call Us</span>
                  <span className="text-sm font-semibold text-warm-white group-hover:text-gold transition-colors duration-300">
                    {BUSINESS.phoneFormatted}
                  </span>
                </div>
              </a>

              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-green-500/40 group-hover:bg-green-500/10 transition-all duration-300">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <span className="text-xs text-warm-gray block">WhatsApp</span>
                  <span className="text-sm font-semibold text-warm-white group-hover:text-green-400 transition-colors duration-300">
                    Chat with us
                  </span>
                </div>
              </a>

              <a
                href={BUSINESS.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold-muted transition-all duration-300">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-xs text-warm-gray block">Location</span>
                  <span className="text-sm font-semibold text-warm-white group-hover:text-gold transition-colors duration-300">
                    {BUSINESS.location}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-xs text-warm-gray block mb-0.5">
                    Operating Hours
                  </span>
                  <span className="text-sm font-semibold text-warm-white block">
                    8:00 AM - 3:00 PM
                  </span>
                  <span className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-[11px] font-semibold text-red-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    CLOSED on Tuesday &amp; Wednesday
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-warm-gray mr-2">Follow us:</span>
              <a
                href="https://www.instagram.com/zauq_e_mutton?stkn=b3NteGJoZGp6YTZ0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:border-gold/40 hover:bg-gold-muted transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-warm-gray group-hover:text-gold transition-colors duration-300" />
              </a>
              <a
                href="https://www.facebook.com/share/194wWDeVWM/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:border-gold/40 hover:bg-gold-muted transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-warm-gray group-hover:text-gold transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Clickable Map Frame */}
          <a
            href={BUSINESS.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-gold overflow-hidden h-[350px] lg:h-full min-h-[350px] relative group block cursor-pointer transition-all duration-300 hover:border-gold hover:shadow-gold-md"
            title="Open Google Maps — Zauq-e-Mutton Fresh Meat, Nurian Bazaar Inside Akbari Gate Lahore"
          >
            <iframe
              src={BUSINESS.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zauq-e-Mutton Location — Nurian Bazaar Inside Akbari Gate Lahore"
              className="w-full h-full rounded-2xl pointer-events-none group-hover:scale-105 transition-transform duration-500"
            />
            {/* Click overlay badge */}
            <div className="absolute inset-0 bg-background/25 group-hover:bg-background/10 transition-colors duration-300 flex items-end p-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background/90 backdrop-blur-md border border-border-gold text-xs font-semibold text-warm-white group-hover:text-gold shadow-lg transition-colors duration-300">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Click to open in Google Maps</span>
              </div>
            </div>
          </a>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-28 lg:pb-8">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-warm-gray">
            <span>
              © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />{" "}
              in Lahore
            </span>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex items-center gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-warm-gray hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:border-gold/40 hover:bg-gold-muted transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-warm-gray group-hover:text-gold transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
