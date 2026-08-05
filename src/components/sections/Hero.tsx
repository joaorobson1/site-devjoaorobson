"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/data/site";
import { MagneticButton } from "@/components/ui/MagneticButton";

const rotatingWords = ["resultados", "vendas", "eficiência", "crescimento"];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-[72px]"
      aria-label="Apresentação"
    >
      {/* Blueprint grid backdrop */}
      <div
        aria-hidden
        className="blueprint blueprint-fade absolute inset-0 -z-10"
      />
      {/* Electric corner accents */}
      <CornerTicks />

      <div className="container-grid grid grid-cols-12 gap-x-6 pb-12 pt-12 sm:pt-16 lg:pt-20">
        {/* Eyebrow row */}
        <div className="col-span-12 mb-10 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            Desenvolvedor Full Stack · Freelancer
          </motion.span>
        </div>

        {/* Headline — asymmetric, oversized */}
        <div className="col-span-12 lg:col-span-9">
          <h1 className="display text-[clamp(2.6rem,8vw,7rem)]">
            <Line delay={0.1}>Transformo ideias</Line>
            <Line delay={0.2}>
              em <span className="text-electric">sistemas</span> que
            </Line>
            <Line delay={0.3}>
              geram{" "}
              <span className="relative inline-block">
                <RotatingWord />
              </span>
            </Line>
          </h1>
        </div>

        {/* Right metadata column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-span-12 mt-10 flex items-end lg:col-span-3 lg:mt-0"
        >
          <div className="w-full border-l border-ink/15 pl-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
              No que eu ajudo
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
              <li>Sites & landing pages</li>
              <li>Sistemas web</li>
              <li>Painéis e dashboards</li>
              <li>Automação</li>
            </ul>
          </div>
        </motion.div>

        {/* Subtitle + CTAs */}
        <div className="col-span-12 mt-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl text-lg leading-relaxed text-mist"
          >
            Desenvolvimento de landing pages, sistemas web e soluções digitais
            sob medida para empresas e empreendedores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={whatsappLink()} external variant="solid">
              Solicitar orçamento
              <Arrow />
            </MagneticButton>
            <MagneticButton href="#portfolio" variant="outline">
              Ver projetos
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="container-grid hidden items-center gap-3 pb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-mist lg:flex"
      >
        <span className="relative flex h-8 w-px overflow-hidden bg-ink/15">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 bg-electric"
          />
        </span>
        Role para explorar
      </motion.div>
    </section>
  );
}

function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    // pb/-mb give the overflow box room for descenders (g, q, p) and the
    // bottom curves of tall letters so the reveal mask never clips them.
    <span className="block overflow-hidden pb-[0.18em] -mb-[0.14em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block pb-[0.04em]"
      >
        {children}
      </motion.span>
    </span>
  );
}

function RotatingWord() {
  return (
    <span className="inline-grid">
      {rotatingWords.map((word, i) => (
        <motion.span
          key={word}
          className="col-start-1 row-start-1 text-electric"
          initial={{ opacity: 0, y: 14 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [14, 0, 0, -14],
          }}
          transition={{
            duration: rotatingWords.length * 2,
            times: [
              i / rotatingWords.length,
              (i + 0.15) / rotatingWords.length,
              (i + 0.85) / rotatingWords.length,
              (i + 1) / rotatingWords.length,
            ],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.span>
      ))}
      {/* invisible spacer to reserve width of the longest word */}
      <span className="invisible col-start-1 row-start-1">crescimento</span>
    </span>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CornerTicks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <span className="absolute left-6 top-[90px] h-3 w-3 border-l border-t border-electric lg:left-14" />
      <span className="absolute right-6 top-[90px] h-3 w-3 border-r border-t border-electric lg:right-14" />
    </div>
  );
}
