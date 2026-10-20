"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { processSteps } from "@/data/content";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });

  return (
    <section id="processo" className="relative py-16 sm:py-24">
      <div className="container-grid">
        <SectionHeading
          eyebrow="Processo"
          align="center"
          className="mx-auto"
          title={
            <>
              Do briefing à <span className="text-gradient">entrega</span>
            </>
          }
          intro="Um processo claro e transparente, com comunicação constante em cada etapa do projeto."
        />

        <div ref={ref} className="relative mt-16">
          {/* Rail: horizontal on desktop, vertical on mobile */}
          <div className="absolute left-[27px] top-0 h-full w-[2px] rounded-full bg-line/10 lg:left-0 lg:top-[27px] lg:h-[2px] lg:w-full">
            <motion.div
              style={{ scaleY: progress }}
              className="bg-brand-gradient absolute inset-0 origin-top rounded-full lg:hidden"
            />
            <motion.div
              style={{ scaleX: progress }}
              className="bg-brand-gradient absolute inset-0 hidden origin-left rounded-full lg:block"
            />
          </div>

          <ol className="relative grid gap-6 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.index} delay={i * 0.08}>
                <div className="flex gap-5 lg:flex-col">
                  {/* Node */}
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line/10 bg-paper font-mono text-sm font-semibold text-electric shadow-[0_0_0_6px_rgb(var(--paper))]">
                    <span className="bg-brand-gradient absolute inset-0 rounded-2xl opacity-15" />
                    {step.index}
                  </span>

                  <Spotlight className="flex-1 p-6">
                    <span className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                      {step.meta}
                    </span>
                    <h3 className="display relative mt-2 text-2xl">{step.title}</h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-mist">
                      {step.description}
                    </p>
                  </Spotlight>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
