"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/content";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });

  return (
    <section id="processo" className="relative py-14 sm:py-20">
      <div className="container-grid">
        <SectionHeading
          index="04"
          label="PROCESSO"
          title={
            <>
              Do briefing à{" "}
              <span className="text-electric">entrega</span>
            </>
          }
          intro="Um processo claro e transparente, com comunicação constante em cada etapa do projeto."
        />

        <div ref={ref} className="relative mt-20">
          {/* Vertical rail */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-ink/12 sm:left-[7.5rem] sm:block">
            <motion.div
              style={{ scaleY: lineHeight }}
              className="absolute inset-0 origin-top bg-electric"
            />
          </div>

          <ol className="space-y-px">
            {processSteps.map((step) => (
              <li key={step.index}>
                <Reveal from="up">
                  <div className="group relative grid grid-cols-1 gap-4 py-9 sm:grid-cols-[7.5rem_1fr] sm:gap-10">
                    {/* Index + meta */}
                    <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
                      <span className="display text-3xl text-ink/20 transition-colors duration-500 group-hover:text-electric">
                        {step.index}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                        {step.meta}
                      </span>
                    </div>

                    {/* Node + content */}
                    <div className="relative sm:pl-10">
                      {/* Node dot aligned to the rail */}
                      <span className="absolute -left-[1.55rem] top-1.5 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-paper bg-ink transition-colors duration-500 group-hover:bg-electric sm:block" />
                      <h3 className="display text-2xl text-ink sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-base leading-relaxed text-mist">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
