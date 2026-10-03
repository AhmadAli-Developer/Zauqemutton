"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Shield,
  Leaf,
  Truck,
  Award,
  ChevronDown,
} from "lucide-react";
import { BUSINESS, FEATURES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-[0.07] animate-float"
        style={{
          background:
            "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-[0.05] animate-float"
        style={{
          background:
            "radial-gradient(circle, #E8C547 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, #D4AF37 0%, transparent 60%)",
          transform: `translate(calc(-50% + var(--mouse-x, 0px)), calc(-50% + var(--mouse-y, 0px)))`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto section-padding w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Subtle Announcement Banner */}
          <div className="animate-fade-up opacity-0 mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-gold tracking-wide">
                Note: Only Fresh Goat Items Available.
              </span>
            </div>
          </div>

          {/* Sub-badge: Lahore's Premium Halal Meat Shop (Lowered position) */}
          <div className="animate-fade-up opacity-0 mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-gold bg-gold-muted shadow-sm">
              <div className="gold-dot" />
              <span className="text-xs sm:text-sm font-medium text-gold tracking-wide">
                Lahore&apos;s Premium Halal Meat Shop
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="animate-fade-up opacity-0 stagger-1 font-heading font-bold leading-[1.1] tracking-tight mb-6 lg:mb-8">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-warm-white">
              Fresh, Hygienic &
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gold-gradient mt-1 sm:mt-2">
              100% Halal Meat
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-up opacity-0 stagger-2 text-sm sm:text-base lg:text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed mb-8 lg:mb-10 text-balance">
            From premium mutton cuts to traditional organ specialties — we source
            the freshest, finest quality meat from trusted farms across Punjab.
            Order via WhatsApp for same-day delivery.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up opacity-0 stagger-3 flex flex-col sm:flex-row items-center gap-4 mb-12 lg:mb-16">
            <Link href="#menu" className="btn-gold text-base px-8 py-4 w-full sm:w-auto">
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(
                "Hi Zauq-e-Mutton! I'd like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Order Now
            </a>
          </div>

          {/* Feature pills */}
          <div className="animate-fade-up opacity-0 stagger-4 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 w-full max-w-3xl">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="glass-card group hover:border-border-gold flex flex-col items-center gap-2 p-4 lg:p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-muted flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-zinc-950 transition-all duration-300">
                  {ICON_MAP[feature.icon]}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-warm-white">
                  {feature.title}
                </span>
                <span className="text-[10px] sm:text-xs text-warm-gray text-center leading-tight hidden sm:block">
                  {feature.description}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll indicator with high contrast & clear visibility */}
          <div className="mt-10 sm:mt-14 flex justify-center">
            <Link
              href="#menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 bg-card hover:bg-gold-muted hover:border-gold text-gold font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-gold-sm hover:shadow-gold-md group"
              aria-label="Explore Menu"
            >
              <span>Explore</span>
              <ChevronDown className="w-4 h-4 text-gold group-hover:translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
