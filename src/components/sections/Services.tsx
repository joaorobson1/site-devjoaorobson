"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { Icon } from "@/components/ui/Icons";
import { services, type Service } from "@/data/content";
import { whatsappLink } from "@/data/site";

export function Services() {
  return (
    <section id="servicos" className="relative py-16 sm:py-24">
      {/* Soft glow behind the grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-electric/10 blur-[140px]"
      />

      <div className="container-grid">
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              O que eu construo para{" "}
              <span className="text-gradient">o seu negócio</span>
            </>
          }
          intro="Da página de captura ao sistema completo: soluções desenhadas para o seu objetivo, não empacotadas em template."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.index}
              delay={(i % 3) * 0.06}
              className={i === 0 ? "sm:col-span-2" : ""}
            >
              <ServiceCard service={service} featured={i === 0} />
            </Reveal>
          ))}

          {/* Closing CTA tile completes the grid */}
          <Reveal as="li" delay={0.12}>
            <a
              href={whatsappLink(
                "Olá, João! Tenho interesse em um dos seus serviços e gostaria de conversar."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gradient group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl p-8 text-white shadow-[0_20px_60px_-25px_rgb(var(--electric)/0.9)]"
            >
              <span
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl transition-transform duration-700 group-hover:scale-150"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Icon name="message" className="h-6 w-6" />
              </span>
              <span className="relative">
                <span className="display block text-3xl">
                  Não encontrou o que precisa?
                </span>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">
                  Vamos conversar
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </span>
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  featured,
}: {
  service: Service;
  featured: boolean;
}) {
  return (
    <Spotlight className="group flex h-full min-h-[260px] flex-col justify-between gap-8 p-8">
      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric ring-1 ring-electric/20 transition-all duration-500 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent group-hover:shadow-[0_8px_30px_-6px_rgb(var(--electric)/0.8)]">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <span className="font-mono text-xs text-mist">{service.index}</span>
      </div>

      <div className={`relative ${featured ? "sm:flex sm:items-end sm:justify-between sm:gap-10" : ""}`}>
        <div>
          <h3 className={`display ${featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>
            {service.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-mist sm:text-base">
            {service.description}
          </p>
        </div>

        <ul className={`mt-5 flex flex-wrap gap-2 ${featured ? "sm:mt-0 sm:max-w-[260px] sm:justify-end" : ""}`}>
          {service.deliverables.map((d) => (
            <li
              key={d}
              className="inline-flex items-center gap-1.5 rounded-full bg-ink/[0.05] px-3 py-1 text-xs text-graphite"
            >
              <Icon name="check" className="h-3 w-3 text-electric" strokeWidth={2.5} />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </Spotlight>
  );
}
