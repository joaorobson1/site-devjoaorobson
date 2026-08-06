"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/content";
import { whatsappLink } from "@/data/site";

export function Services() {
  const [active, setActive] = useState<string | null>(services[0].index);

  return (
    <section id="servicos" className="relative py-14 sm:py-20">
      <div className="container-grid">
        <SectionHeading
          title={
            <>
              O que eu construo para{" "}
              <span className="text-electric">o seu negócio</span>
            </>
          }
          intro="Da página de captura ao sistema completo — soluções desenhadas para o seu objetivo, não empacotadas em template."
        />

        {/* Editorial expandable list — reveals detail on hover/focus */}
        <ul className="mt-16 border-t border-ink/15">
          {services.map((service) => {
            const isOpen = active === service.index;
            return (
              <li
                key={service.index}
                className="border-b border-ink/15"
                onMouseEnter={() => setActive(service.index)}
                onFocus={() => setActive(service.index)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setActive(isOpen ? null : service.index)
                  }
                  className="group flex w-full items-center gap-6 py-7 text-left transition-colors"
                >
                  <span
                    className={`font-mono text-xs transition-colors duration-300 ${
                      isOpen ? "text-electric" : "text-mist"
                    }`}
                  >
                    {service.index}
                  </span>

                  <span
                    className={`display flex-1 text-2xl transition-all duration-500 ease-editorial sm:text-3xl lg:text-4xl ${
                      isOpen
                        ? "translate-x-2 text-ink"
                        : "text-ink/55 group-hover:text-ink"
                    }`}
                  >
                    {service.title}
                  </span>

                  {/* Plus / minus indicator */}
                  <span className="relative hidden h-5 w-5 shrink-0 sm:block">
                    <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-ink" />
                    <span
                      className={`absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-ink transition-transform duration-500 ease-editorial ${
                        isOpen ? "rotate-90 scale-0" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-8 pl-[3.25rem] sm:grid-cols-[1fr_auto] sm:items-end">
                        <p className="max-w-xl text-base leading-relaxed text-mist">
                          {service.description}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {service.deliverables.map((d) => (
                            <li
                              key={d}
                              className="rounded-full bg-ink/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/70"
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="mt-12">
          <a
            href={whatsappLink(
              "Olá, João! Tenho interesse em um dos seus serviços e gostaria de conversar."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-electric"
          >
            Não encontrou o que precisa? Vamos conversar →
          </a>
        </div>
      </div>
    </section>
  );
}
