"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

/**
 * Floating WhatsApp shortcut. Appears once the visitor scrolls past the hero,
 * so it never competes with the main call-to-action above the fold.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.7)] sm:bottom-7 sm:right-7"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" />
          <WhatsAppIcon className="relative h-7 w-7" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-surface px-4 py-2 text-sm text-ink opacity-0 shadow-xl ring-1 ring-line/10 transition-opacity duration-300 group-hover:opacity-100 sm:block">
            Fale comigo agora
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
