"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Sun, Moon } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

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

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-background/85 backdrop-blur-md border-b border-border/50 lg:border-transparent lg:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex items-center justify-center border border-gold/40 shadow-gold-sm group-hover:shadow-gold-md transition-all duration-300 bg-card">
                <Image
                  src="/logo.png"
                  alt="Zauq-e-Mutton Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-warm-white text-sm sm:text-base lg:text-lg tracking-wide group-hover:text-gold transition-colors duration-300 leading-tight">
                {BUSINESS.name}
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-xs text-warm-gray uppercase tracking-[0.18em]">
                {BUSINESS.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              const isOrder = link.href === "/order";

              if (isOrder) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                      active
                        ? "bg-gold text-zinc-950 shadow-gold-sm"
                        : "bg-gold/15 text-gold border border-gold/40 hover:bg-gold hover:text-zinc-950"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium py-1 transition-colors duration-200 ${
                    active ? "active text-gold" : "text-warm-gray hover:text-warm-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Theme Switcher & Phone Call CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="relative flex items-center justify-between w-12 sm:w-14 h-7 sm:h-8 px-1 rounded-full bg-card border border-border hover:border-gold/50 transition-colors duration-300 cursor-pointer shadow-inner shrink-0"
            >
              <Moon className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-warm-gray" />
              <Sun className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-warm-gray" />
              <span
                className={`absolute top-0.5 sm:top-1 left-0.5 sm:left-1 w-6 h-6 rounded-full bg-gold-gradient shadow-md flex items-center justify-center transition-transform duration-300 ease-out ${
                  theme === "light" ? "translate-x-5 sm:translate-x-6" : "translate-x-0"
                }`}
              >
                {mounted && (theme === "light" ? (
                  <Sun className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-zinc-950" />
                ) : (
                  <Moon className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-zinc-950" />
                ))}
              </span>
            </button>

            {/* Phone Call Link - Desktop Full Button, Mobile Icon Button */}
            <a
              href={BUSINESS.telLink}
              className="hidden lg:inline-flex btn-gold-outline text-xs py-2 px-3.5 items-center gap-2"
              title="Call Zauq-e-Mutton"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{BUSINESS.phoneFormatted}</span>
            </a>

            <a
              href={BUSINESS.telLink}
              className="lg:hidden w-8 h-8 rounded-xl bg-card border border-border flex items-center justify-center text-gold hover:border-gold/50 transition-colors shrink-0"
              aria-label="Call Us"
              title="Call Us"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Row (Directly visible, horizontally scrollable, zero drawer) */}
        <div className="lg:hidden pb-2.5 pt-0.5 overflow-x-auto scrollbar-none flex items-center gap-1.5 -mx-1 px-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            const isOrder = link.href === "/order";

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 shrink-0 ${
                  active
                    ? isOrder
                      ? "bg-gold text-zinc-950 font-bold shadow-gold-sm"
                      : "bg-gold/15 text-gold border border-gold/40 shadow-sm"
                    : isOrder
                    ? "bg-gold-muted text-gold border border-border-gold hover:bg-gold/20"
                    : "bg-card/90 border border-border text-warm-gray hover:text-warm-white hover:border-gold/30"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
