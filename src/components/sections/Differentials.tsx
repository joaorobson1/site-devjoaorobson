"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { differentials } from "@/data/content";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative py-14 sm:py-20"
      aria-label="Diferenciais"
    >
      <div className="container-grid">
        <SectionHeading
          index="05"
          label="DIFERENCIAIS"
          title={
            <>
              Por que trabalhar{" "}
              <span className="text-electric">comigo</span>
            </>
          }
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <li key={item.title} className="bg-paper">
              <Reveal from="up" delay={(i % 3) * 0.06}>
                <div className="group relative flex h-full flex-col gap-4 p-8 transition-colors duration-500 hover:bg-ink/[0.02]">
                  <div className="flex items-center justify-between">
                    <Check />
                    <span className="font-mono text-[10px] text-mist">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="display text-xl text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mist">
                    {item.description}
                  </p>
                  {/* Bottom electric reveal line */}
                  <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-electric transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-electric/30 text-electric">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
