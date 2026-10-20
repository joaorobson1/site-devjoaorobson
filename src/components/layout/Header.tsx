"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { navLinks, site, whatsappLink } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item of the section currently in view.
  useEffect(() => {
    // "topo" (the hero) is observed too, so scrolling back up clears the pill.
    const sections = ["topo", ...navLinks.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "topo" ? null : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`relative mx-auto flex h-16 max-w-grid items-center justify-between overflow-hidden rounded-full border pl-5 pr-2.5 transition-all duration-500 ease-editorial sm:pl-6 ${
          scrolled || menuOpen
            ? "border-line/10 bg-paper/70 shadow-[0_10px_40px_-20px_rgb(0_0_0/0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Scroll progress, drawn along the bottom edge of the pill */}
        <motion.div
          style={{ scaleX: progress }}
          className="bg-brand-gradient absolute inset-x-0 bottom-0 h-[2px] origin-left"
        />

        <a
          href="#topo"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — início`}
        >
          <Logo
            priority
            className="h-10 w-auto select-none object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-line/10 bg-surface/40 p-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                active === link.id ? "text-ink" : "text-mist hover:text-ink"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-ink/[0.08] ring-1 ring-line/10"
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gradient hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgb(var(--electric)/0.8)] transition-all duration-300 hover:brightness-110 md:inline-flex"
          >
            Orçamento
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-line/15 bg-surface/50 lg:hidden"
          >
            <span
              className={`h-[1.5px] w-4 bg-ink transition-all duration-300 ${
                menuOpen ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-4 bg-ink transition-all duration-300 ${
                menuOpen ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-grid overflow-hidden rounded-3xl border border-line/10 bg-paper/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col p-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.4 }}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 transition-colors hover:bg-ink/[0.05]"
                >
                  <span className="display text-3xl">{link.label}</span>
                  <span className="font-mono text-xs text-mist">0{i + 1}</span>
                </motion.a>
              ))}
              <motion.a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-brand-gradient mt-3 inline-flex items-center justify-center rounded-2xl px-7 py-4 font-semibold text-white"
              >
                Solicitar orçamento
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
