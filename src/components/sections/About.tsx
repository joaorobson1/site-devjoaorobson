"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { Logo } from "@/components/ui/Logo";
import { Spotlight } from "@/components/ui/Spotlight";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icons";
import { skills, stats } from "@/data/content";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="sobre" className="relative py-16 sm:py-24">
      {/* Keyword marquee acts as a section divider */}
      <Marquee
        items={["Sob medida", "Foco em resultado", "Sites rápidos", "Atendimento direto", "Pronto para vender"]}
        className="mb-20 py-2"
      />

      <div className="container-grid">
        <Reveal>
          <span className="eyebrow">Sobre mim</span>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          {/* Narrative */}
          <Reveal className="lg:col-span-8 lg:row-span-2">
            <Spotlight className="flex h-full flex-col justify-between gap-10 p-8 sm:p-10">
              <div className="relative">
                <h2 className="display max-w-3xl text-[clamp(2rem,4.2vw,3.4rem)]">
                  Eu desenho, desenvolvo e entrego soluções digitais{" "}
                  <span className="text-gradient">de ponta a ponta</span>, do
                  primeiro rascunho ao deploy.
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <p className="text-base leading-relaxed text-mist">
                    Trabalho com <strong className="text-ink">Next.js</strong>,{" "}
                    <strong className="text-ink">React</strong> e{" "}
                    <strong className="text-ink">diversos bancos de dados</strong>{" "}
                    para criar desde landing pages de alta conversão até sistemas
                    administrativos completos e dashboards sob medida.
                  </p>
                  <p className="text-base leading-relaxed text-mist">
                    Minha prioridade é unir{" "}
                    <strong className="text-ink">design</strong>,{" "}
                    <strong className="text-ink">performance</strong> e{" "}
                    <strong className="text-ink">estratégia</strong>, entregando
                    produtos rápidos, escaláveis e pensados para gerar resultado
                    desde o primeiro dia.
                  </p>
                </div>
              </div>

              <ul className="relative flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line/10 bg-ink/[0.03] px-3.5 py-1.5 font-mono text-[11px] text-graphite transition-colors duration-300 hover:border-electric/60 hover:text-electric"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Spotlight>
          </Reveal>

          {/* Brand card */}
          <Reveal delay={0.08} className="lg:col-span-4">
            <Spotlight className="flex h-full min-h-[240px] flex-col items-center justify-center p-8">
              <div className="bg-brand-gradient absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl" />
              <Logo className="relative h-auto w-full max-w-[220px] select-none object-contain" />
              <p className="relative mt-4 text-center text-sm text-mist">
                Desenvolvedor full stack focado em produtos que resolvem
                problemas reais de negócio.
              </p>
            </Spotlight>
          </Reveal>

          {/* Location / availability */}
          <Reveal delay={0.14} className="lg:col-span-4">
            <Spotlight className="flex h-full flex-col justify-between gap-6 p-8">
              <div className="relative flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-electric/10 text-electric ring-1 ring-electric/20">
                  <Icon name="pin" />
                </span>
                <span className="flex items-center gap-2 text-xs text-emerald-500">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Online
                </span>
              </div>
              <div className="relative">
                <p className="display text-2xl">{site.location}</p>
                <p className="mt-2 text-sm text-mist">
                  Projetos para todo o Brasil, com reuniões online e contato
                  direto pelo WhatsApp.
                </p>
              </div>
            </Spotlight>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.1} className="lg:col-span-12">
            <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <Spotlight key={stat.label} className="p-6 sm:p-8">
                  <dt className="display relative text-5xl sm:text-6xl">
                    <CountUp value={stat.value} className="text-gradient" />
                  </dt>
                  <dd className="relative mt-3 text-sm text-mist">
                    {stat.label}
                  </dd>
                </Spotlight>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
