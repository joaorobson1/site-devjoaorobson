"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";
import { whatsappLink } from "@/data/site";
import { skills } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/ui/Marquee";
import { Icon } from "@/components/ui/Icons";
import { CountUp } from "@/components/ui/CountUp";

const rotatingWords = ["resultados", "vendas", "eficiência", "crescimento"];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  // Normalised cursor position (-0.5…0.5) drives a gentle 3D tilt of the mockup.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);

  function handleMove(e: MouseEvent<HTMLElement>) {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      id="topo"
      onMouseMove={handleMove}
      className="relative isolate overflow-hidden pt-28 sm:pt-32"
      aria-label="Apresentação"
    >
      <Backdrop />

      <div className="container-grid grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-line/10 bg-surface/60 py-1.5 pl-2 pr-4 text-sm text-graphite backdrop-blur"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Disponível
            </span>
            Aceitando novos projetos
          </motion.div>

          <h1 className="display mt-7 text-[clamp(2.7rem,5.6vw,5.2rem)]">
            <Line delay={0.1}>Transformo ideias</Line>
            <Line delay={0.2}>
              em <span className="text-gradient">sistemas</span> que
            </Line>
            <Line delay={0.3}>
              geram <RotatingWord />
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl"
          >
            Landing pages, sistemas web e soluções digitais{" "}
            <span className="text-ink">sob medida</span> para empresas e
            empreendedores que querem vender mais e trabalhar melhor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={whatsappLink()} external variant="solid">
              Solicitar orçamento
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </MagneticButton>
            <MagneticButton href="#portfolio" variant="outline">
              Ver projetos
            </MagneticButton>
          </motion.div>

          {/* Social proof row */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.85 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-5"
          >
            {[
              ["90+", "nota no Google PageSpeed"],
              ["24h", "tempo médio de resposta"],
              ["100%", "projetos sob medida"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col">
                <dt className="display text-3xl text-ink">
                  <CountUp value={value} />
                </dt>
                <dd className="mt-1 text-xs text-mist">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual — floating product mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          className="relative lg:col-span-5 [perspective:1400px]"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative mx-auto aspect-[4/3.6] w-full max-w-[560px]"
          >
            {/* Glow behind the stack */}
            <div className="bg-brand-gradient absolute inset-[12%] -z-10 rounded-full opacity-50 blur-[90px]" />

            {/* Back window */}
            <BrowserWindow
              src="/projetos/drvet-institucional.webp"
              alt="Site institucional Dr.Vet"
              url="drvetluizeduardo.com.br"
              className="absolute right-0 top-0 w-[78%] rotate-[4deg] opacity-90"
            />
            {/* Front window */}
            <BrowserWindow
              src="/projetos/metodo-dep.webp"
              alt="Landing page Método DEP"
              url="doutormaurobomfim.com.br"
              priority
              className="absolute bottom-[6%] left-0 w-[86%] -rotate-[3deg]"
            />

            {/* Floating chips */}
            <FloatChip
              className="-left-2 top-[10%] sm:-left-6"
              delay={0}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500">
                <Icon name="gauge" className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-ink">PageSpeed 90+</span>
                <span className="text-[11px] text-mist">Performance</span>
              </span>
            </FloatChip>
            <FloatChip className="-bottom-2 right-0 sm:-right-4" delay={1.2}>
              <span className="bg-brand-gradient flex h-9 w-9 items-center justify-center rounded-xl text-white">
                <Icon name="chart" className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-ink">+ conversões</span>
                <span className="text-[11px] text-mist">Foco em resultado</span>
              </span>
            </FloatChip>
            <FloatChip className="right-[6%] top-[46%] hidden sm:flex" delay={2.2}>
              <Icon name="code" className="h-4 w-4 text-electric" />
              <span className="font-mono text-xs text-graphite">deploy ✓</span>
            </FloatChip>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech stack ribbon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="border-y border-line/10 bg-surface/30 py-5 backdrop-blur-sm"
      >
        <div className="container-grid flex items-center gap-6">
          <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-mist sm:block">
            Stack
          </span>
          <Marquee items={skills} variant="chip" className="flex-1" />
        </div>
      </motion.div>
    </section>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -left-[10%] -top-[20%] h-[620px] w-[620px] animate-aurora rounded-full bg-electric/25 blur-[120px]" />
      <div className="absolute -right-[10%] top-[5%] h-[520px] w-[520px] animate-aurora-slow rounded-full bg-rose/20 blur-[120px]" />
      <div className="absolute bottom-0 left-[35%] h-[380px] w-[380px] animate-aurora rounded-full bg-amber/15 blur-[110px]" />
    </div>
  );
}

function BrowserWindow({
  src,
  alt,
  url,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  url: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line/15 bg-surface shadow-[0_40px_80px_-30px_rgb(0_0_0/0.65)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line/10 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex-1 truncate rounded-md bg-ink/[0.06] px-2.5 py-1 font-mono text-[10px] text-mist">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 90vw, 480px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function FloatChip({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-10 flex items-center gap-3 rounded-2xl border border-line/10 bg-surface/85 px-3.5 py-2.5 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.6)] backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
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
        transition={{ duration: 0.9, delay, ease }}
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
          className="text-gradient col-start-1 row-start-1"
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [14, 0, 0, -14],
            filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"],
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
