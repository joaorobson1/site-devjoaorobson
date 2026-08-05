"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { whatsappLink } from "@/data/site";

export function CTA() {
  return (
    <section className="container-grid py-8 sm:py-12" aria-label="Chamada para ação">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-paper sm:px-14 sm:py-20">
        {/* Blueprint grid inside the dark block */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Electric glow orb */}
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-electric/40 blur-3xl"
        />

        <div className="relative flex flex-col items-start gap-10">
          <Reveal>
            <span className="eyebrow text-paper/60">
              <span className="text-electric">06</span>
              <span className="!ml-0">— VAMOS COMEÇAR</span>
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="display max-w-4xl text-[clamp(2.2rem,6vw,5rem)] text-paper">
              Seu próximo sistema pode{" "}
              <span className="text-electric">começar hoje.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-paper/70">
              Conte sua ideia e eu mostro o caminho mais inteligente para
              transformá-la em um produto digital pronto para gerar resultado.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <MagneticButton
              href={whatsappLink()}
              external
              className="!bg-electric !text-white hover:!bg-paper hover:!text-ink"
            >
              Solicitar orçamento
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
