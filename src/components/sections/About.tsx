"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { Logo } from "@/components/ui/Logo";
import { skills, stats } from "@/data/content";

export function About() {
  return (
    <section id="sobre" className="relative py-14 sm:py-20">
      {/* Keyword marquee acts as a section divider */}
      <Marquee
        items={["Sob medida", "Foco em resultado", "Sites rápidos", "Atendimento direto", "Pronto para vender"]}
        className="mb-14 border-y border-ink/10 py-5"
      />

      <div className="container-grid grid grid-cols-12 gap-x-6 gap-y-14">
        {/* Left — logo + short intro */}
        <div className="col-span-12 lg:col-span-4">
          <Reveal>
            <Logo className="h-auto w-full max-w-sm select-none object-contain" />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              Desenvolvedor full stack focado em construir produtos digitais que
              resolvem problemas reais de negócio.
            </p>
          </Reveal>
        </div>

        {/* Right — narrative */}
        <div className="col-span-12 lg:col-span-8">
          <Reveal from="up">
            <h2 className="display max-w-3xl text-3xl sm:text-4xl lg:text-[2.9rem]">
              Eu desenho, desenvolvo e entrego soluções digitais{" "}
              <span className="text-electric">de ponta a ponta</span> — do
              primeiro rascunho ao deploy.
            </h2>
          </Reveal>

          <Reveal from="up" delay={0.1}>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
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
          </Reveal>

          {/* Skill chips */}
          <Reveal from="up" delay={0.15}>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-ink/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/75 transition-colors duration-300 hover:border-electric hover:text-electric"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Stats */}
          <Reveal from="up" delay={0.2}>
            <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-paper p-6">
                  <dt className="display text-4xl text-ink">{stat.value}</dt>
                  <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
