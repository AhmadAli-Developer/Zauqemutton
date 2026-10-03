"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Sun, Moon } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {}
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {}
    }
  };

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <Link
            href="#home"
            className="flex items-center gap-3 group"
            onClick={() => setIsMobileOpen(false)}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold-sm group-hover:shadow-gold-md transition-shadow duration-300">
                <span className="text-zinc-950 font-heading font-bold text-lg lg:text-xl">
                  Z
                </span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-warm-white text-base lg:text-lg tracking-wide group-hover:text-gold transition-colors duration-300">
                {BUSINESS.name}
              </span>
              <span className="text-[10px] lg:text-xs text-warm-gray uppercase tracking-[0.2em]">
                {BUSINESS.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium py-1 ${
                  activeSection === link.href.replace("#", "") ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Switch */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="relative flex items-center justify-between w-14 h-8 px-1.5 rounded-full bg-card border border-border hover:border-gold/50 transition-colors duration-300 cursor-pointer shadow-inner"
            >
              <Moon className="w-3.5 h-3.5 text-warm-gray" />
              <Sun className="w-3.5 h-3.5 text-warm-gray" />
              <span
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-gold-gradient shadow-md flex items-center justify-center transition-transform duration-300 ease-out ${
                  theme === "light" ? "translate-x-6" : "translate-x-0"
                }`}
              >
                {mounted && (theme === "light" ? (
                  <Sun className="w-3.5 h-3.5 text-zinc-950" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-zinc-950" />
                ))}
              </span>
            </button>

            <a href={BUSINESS.telLink} className="btn-gold-outline text-xs">
              <Phone className="w-4 h-4" />
              <span>{BUSINESS.phoneFormatted}</span>
            </a>
          </div>

          {/* Mobile Right: Theme Toggle + Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="relative flex items-center justify-between w-13 h-8 px-1.5 rounded-full bg-card border border-border hover:border-gold/50 transition-colors duration-300 shadow-inner"
            >
              <Moon className="w-3 h-3 text-warm-gray" />
              <Sun className="w-3 h-3 text-warm-gray" />
              <span
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-gold-gradient shadow-md flex items-center justify-center transition-transform duration-300 ease-out ${
                  theme === "light" ? "translate-x-5" : "translate-x-0"
                }`}
              >
                {mounted && (theme === "light" ? (
                  <Sun className="w-3 h-3 text-zinc-950" />
                ) : (
                  <Moon className="w-3 h-3 text-zinc-950" />
                ))}
              </span>
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl border border-border hover:border-gold/40 transition-colors duration-300 bg-card"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5 text-gold" />
              ) : (
                <Menu className="w-5 h-5 text-warm-gray" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl transition-all duration-500 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 pb-24">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`text-2xl font-heading font-semibold transition-all duration-300 ${
                isMobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${
                activeSection === link.href.replace("#", "")
                  ? "text-gold"
                  : "text-warm-white hover:text-gold"
              }`}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="gold-divider w-20 my-2" />
          <a
            href={BUSINESS.telLink}
            className="btn-gold text-base"
            onClick={() => setIsMobileOpen(false)}
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
