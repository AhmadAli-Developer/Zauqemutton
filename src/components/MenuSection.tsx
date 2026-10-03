"use client";

import { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { BUSINESS, MENU_ITEMS, MENU_CATEGORIES, type MenuCategory } from "@/lib/constants";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuCategory>("all");

  const filtered =
    activeTab === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeTab);

  const getWhatsAppLink = (itemName: string) => {
    const message = encodeURIComponent(
      `Hi Zauq-e-Mutton, I want to order ${itemName}. Please share the details.`
    );
    return `${BUSINESS.whatsapp}?text=${message}`;
  };

  return (
    <section id="menu" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-gold bg-gold-muted mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs sm:text-sm font-medium text-gold tracking-wide">
              Our Premium Selection
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-warm-white mb-4">
            Fresh Meat{" "}
            <span className="text-gold-gradient">Menu</span>
          </h2>
          <p className="text-warm-gray text-sm sm:text-base max-w-xl mx-auto">
            Hand-selected, premium quality cuts sourced daily from trusted farms
            across Punjab. Every item is 100% Halal certified.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 lg:mb-14 flex-wrap">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`
                px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold
                transition-all duration-300 flex items-center gap-2
                ${
                  activeTab === cat.id
                    ? "bg-gold-gradient text-zinc-950 font-bold shadow-gold-sm"
                    : "bg-card border border-border text-warm-gray hover:text-warm-white hover:border-border-gold"
                }
              `}
            >
              {cat.label}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  activeTab === cat.id
                    ? "bg-zinc-950/20 text-zinc-950"
                    : "bg-background text-warm-gray"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="group glass-card-gold hover:shadow-card-hover p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold text-gold tracking-wider uppercase">
                    Fresh Goat
                  </span>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Name + Urdu */}
                <h3 className="font-heading font-semibold text-lg lg:text-xl text-warm-white mb-1.5 group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="font-urdu text-base lg:text-lg text-gold/80 mb-6" dir="rtl">
                  {item.urduName}
                </p>
              </div>

              {/* Order Button */}
              <div>
                <a
                  href={getWhatsAppLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs w-full py-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
