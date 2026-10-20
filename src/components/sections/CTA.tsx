"use client";

import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon, WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappLink } from "@/data/site";

export function CTA() {
  return (
    <section className="container-grid py-12 sm:py-16" aria-label="Chamada para ação">
      <Reveal>
        {/* Rotating gradient border */}
        <div className="glow-ring shadow-[0_30px_120px_-40px_rgb(var(--electric)/0.7)]">
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-[#0a0a0e] px-6 py-16 text-center text-white sm:px-14 sm:py-24">
            {/* Grid + glow inside the block */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black, transparent)",
                WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black, transparent)",
              }}
            />
            <div
              aria-hidden
              className="bg-brand-gradient absolute left-1/2 top-full h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 animate-aurora rounded-full opacity-60 blur-[110px]"
            />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                Resposta em até 24h
              </span>

              <h2 className="display text-[clamp(2.4rem,6.5vw,5.5rem)]">
                Seu próximo sistema pode{" "}
                <span className="text-gradient">começar hoje.</span>
              </h2>

              <p className="max-w-xl text-lg leading-relaxed text-white/70">
                Conte sua ideia e eu mostro o caminho mais inteligente para
                transformá-la em um produto digital pronto para gerar resultado.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <MagneticButton href={whatsappLink()} external>
                  <WhatsAppIcon className="h-5 w-5" />
                  Solicitar orçamento
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </MagneticButton>
                <a
                  href="#contato"
                  className="rounded-full border border-white/15 px-7 py-4 text-[15px] font-semibold text-white/90 transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  Outros contatos
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
