"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarCheck,
  HeartHandshake,
  Baby,
  Truck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-12 lg:py-20 bg-background overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E8C547 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-gold bg-gold-muted mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs sm:text-sm font-medium text-gold tracking-wide">
              Specialized Services
            </span>
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-warm-white mb-3">
            Qurbani, Sadqah &amp; <span className="text-gold-gradient">Islamic Arrangements</span>
          </h1>
          <p className="text-warm-gray text-sm sm:text-base max-w-2xl mx-auto">
            Experience authentic Halal slaughter and custom cutting. Arrange year-round Qurbani, or fulfill your Sadqah and Aqiqa with complete peace of mind.
          </p>
        </div>

        {/* 3 Specialized Service Cards in 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {/* Card 1: Qurbani */}
          <div className="glass-card-gold p-6 sm:p-7 rounded-3xl border border-border hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-zinc-950 transition-all duration-300 shrink-0">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-urdu text-gold/90 font-medium" dir="rtl">
                  سال بھر قربانی و ذبیحہ
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-warm-white mb-2 group-hover:text-gold transition-colors">
                Year-Round Qurbani &amp; Slaughter
              </h3>
              <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-6">
                Goat slaughtering and Qurbani services are available year-round across all 12 months, as well as during Eid-ul-Adha. We select healthy live goats, perform 100% Halal slaughter, and pack custom cuts for pickup.
              </p>

              <div className="space-y-2.5 border-t border-border/70 pt-4 mb-6">
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Available all 12 months (outside Eid as well)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Healthy active live goat selection</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Custom meat cuts according to preference</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Self Pickup or Ride Rider service</span>
                </div>
              </div>
            </div>

            <Link
              href="/order"
              className="btn-gold-outline w-full text-xs sm:text-sm py-3 flex items-center justify-center gap-2 group-hover:bg-gold-gradient group-hover:text-zinc-950 group-hover:border-transparent transition-all duration-300"
            >
              <span>Book Qurbani Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Sadqah */}
          <div className="glass-card-gold p-6 sm:p-7 rounded-3xl border border-border hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-zinc-950 transition-all duration-300 shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="text-xs font-urdu text-gold/90 font-medium" dir="rtl">
                  صدقہ بکرا
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-warm-white mb-2 group-hover:text-gold transition-colors">
                Sadqah Goat Services
              </h3>
              <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-6">
                Fulfill your Sadqah with ease and complete confidence. We perform proper Halal slaughter of healthy goats and distribute fresh meat to verified deserving families on your behalf.
              </p>

              <div className="space-y-2.5 border-t border-border/70 pt-4 mb-6">
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Healthy Sadqah goats of suitable age</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Distribution to verified deserving families</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>100% Halal certified &amp; hygienic process</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Full transparency and confirmation</span>
                </div>
              </div>
            </div>

            <Link
              href="/order"
              className="btn-gold-outline w-full text-xs sm:text-sm py-3 flex items-center justify-center gap-2 group-hover:bg-gold-gradient group-hover:text-zinc-950 group-hover:border-transparent transition-all duration-300"
            >
              <span>Arrange Sadqah Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3: Aqiqa */}
          <div className="glass-card-gold p-6 sm:p-7 rounded-3xl border border-border hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-zinc-950 transition-all duration-300 shrink-0">
                  <Baby className="w-6 h-6" />
                </div>
                <span className="text-xs font-urdu text-gold/90 font-medium" dir="rtl">
                  عقیقہ بکرا
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-warm-white mb-2 group-hover:text-gold transition-colors">
                Aqiqa Goat Arrangements
              </h3>
              <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-6">
                Complete Aqiqa arrangements for newborn boy or girl. From selecting premier goats to precise Halal slaughter, professional cutting, and packaging ready for pickup.
              </p>

              <div className="space-y-2.5 border-t border-border/70 pt-4 mb-6">
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>1 or 2 goat arrangements for newborns</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Hygienic meat cutting &amp; separate packing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Distribution coordination in Lahore</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Self Pickup or Ride Rider service</span>
                </div>
              </div>
            </div>

            <Link
              href="/order"
              className="btn-gold-outline w-full text-xs sm:text-sm py-3 flex items-center justify-center gap-2 group-hover:bg-gold-gradient group-hover:text-zinc-950 group-hover:border-transparent transition-all duration-300"
            >
              <span>Book Aqiqa Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Informational Policy & Guarantee Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Halal Guarantee Banner */}
          <div className="p-6 rounded-3xl bg-card/80 border border-border-gold flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-warm-white mb-1.5">
                100% Halal Zabiha Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-3">
                All goats are inspected for health and vitality. Strict Islamic Zabiha guidelines are observed with recitation of Takbeer at slaughter by practicing Muslims.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-gold/10 text-gold text-[11px] font-semibold border border-gold/20">
                  Takbeer Recited
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-gold/10 text-gold text-[11px] font-semibold border border-gold/20">
                  Hygienic Cutting
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-gold/10 text-gold text-[11px] font-semibold border border-gold/20">
                  Healthy Live Goats
                </span>
              </div>
            </div>
          </div>

          {/* Pickup Method Banner */}
          <div className="p-6 rounded-3xl bg-card/80 border border-border flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold shrink-0 mt-0.5">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-warm-white mb-1.5">
                Self Pickup &amp; Ride Rider Service
              </h4>
              <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-3">
                Pick up your fresh meat or Qurbani cuts directly at our shop in Nurian Bazaar inside Akbari Gate Lahore, or easily send a Bykea / Indrive rider to collect and deliver your order.
              </p>
              <div className="text-xs text-warm-white font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Shop Timings: 8:00 AM – 3:00 PM (Closed Tue &amp; Wed)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-card via-gold-muted/30 to-card border border-border-gold text-center max-w-4xl mx-auto shadow-card">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-warm-white mb-3">
            Ready to Place an Order or Book a Service?
          </h3>
          <p className="text-warm-gray text-sm sm:text-base max-w-xl mx-auto mb-6">
            Head to our dedicated order page to customize your meat cuts or book your Qurbani &amp; Sadqah with instant WhatsApp confirmation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/order" className="btn-gold text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto">
              <span>Go to Order Page</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href={BUSINESS.telLink} className="btn-gold-outline text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto">
              <Phone className="w-4 h-4 mr-2" />
              <span>Call: {BUSINESS.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}