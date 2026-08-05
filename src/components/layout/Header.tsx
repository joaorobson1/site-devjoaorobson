"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { navLinks, site, whatsappLink } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      {/* Scroll progress hairline */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-electric"
      />

      <div className="container-grid flex h-[72px] items-center justify-between">
        {/* Monogram / wordmark */}
        <a
          href="#topo"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — início`}
        >
          <Logo
            priority
            className="h-11 w-auto select-none object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="group flex items-baseline gap-1.5 text-sm text-ink/80 transition-colors hover:text-ink"
            >
              <span className="font-mono text-[10px] text-electric">
                {link.index}
              </span>
              <span className="link-underline">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-electric md:inline-flex"
          >
            Orçamento
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-px w-5 bg-ink transition-all duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-ink transition-all duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-paper lg:hidden"
          >
            <nav className="container-grid flex flex-col gap-1 pt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.5 }}
                  className="flex items-baseline justify-between border-b border-ink/10 py-5"
                >
                  <span className="display text-3xl">{link.label}</span>
                  <span className="font-mono text-xs text-electric">
                    {link.index}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-paper"
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
