"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { Icon } from "@/components/ui/Icons";
import { differentials } from "@/data/content";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative py-16 sm:py-24"
      aria-label="Diferenciais"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[420px] w-[520px] rounded-full bg-rose/10 blur-[140px]"
      />

      <div className="container-grid">
        <SectionHeading
          eyebrow="Diferenciais"
          title={
            <>
              Por que trabalhar <span className="text-gradient">comigo</span>
            </>
          }
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.06}>
              <Spotlight className="group flex h-full flex-col gap-5 p-8">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric ring-1 ring-electric/20 transition-transform duration-500 ease-editorial group-hover:-rotate-6 group-hover:scale-110">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <div className="relative">
                  <h3 className="display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
