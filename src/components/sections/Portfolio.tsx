"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, projectCategories, type Project } from "@/data/projects";

export function Portfolio() {
  const [filter, setFilter] = useState("Todos");

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="portfolio" className="relative py-14 sm:py-20">
      <div className="container-grid">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title={
              <>
                Projetos & <span className="text-electric">cases</span>
              </>
            }
            intro="Uma seleção de soluções entregues. Cada projeto foi desenhado para um objetivo específico de negócio."
          />

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                  filter === cat
                    ? "border-electric bg-electric text-white"
                    : "border-ink/15 text-ink/65 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric grid: featured cards span 2 columns */}
        <motion.ul layout className="mt-16 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/*
          NOTA PARA O DESENVOLVEDOR (não aparece para o cliente):
          Esta área está pronta para receber novos projetos — basta cadastrá-los
          em src/data/projects.ts. Cada objeto vira um card automaticamente.
        */}
        <p className="mt-12 max-w-xl text-sm leading-relaxed text-mist">
          Cada projeto nasce de um objetivo claro: vender mais, organizar a
          operação ou economizar tempo. Quer ver o seu na lista?{" "}
          <a
            href="#contato"
            className="link-underline text-ink"
          >
            Vamos conversar
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const hasLink = project.link && project.link !== "#";
  const Wrapper = hasLink ? "a" : "div";

  return (
    <Wrapper
      {...(hasLink
        ? {
            href: project.link,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="group block h-full overflow-hidden rounded-2xl border border-ink/12 bg-paper transition-colors duration-500 hover:border-electric/60"
    >
      {/* Visual */}
      <div
        className={`relative overflow-hidden ${
          project.featured ? "aspect-[16/8]" : "aspect-[16/10]"
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            quality={90}
            sizes={
              project.featured
                ? "(max-width: 768px) 100vw, 1280px"
                : "(max-width: 768px) 100vw, 640px"
            }
            className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
          />
        ) : (
          <PlaceholderVisual name={project.name} />
        )}

        {/* Year badge */}
        {project.year && (
          <span className="absolute right-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-ink backdrop-blur">
            {project.year}
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-4 p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-electric">
            {project.category}
          </span>
          <Arrow active={!!hasLink} />
        </div>

        <h3 className="display text-2xl text-ink sm:text-3xl">
          {project.name}
        </h3>

        <p className="max-w-prose text-sm leading-relaxed text-mist">
          {project.description}
        </p>

        <ul className="mt-1 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-ink/12 px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-ink/65"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

/** Elegant blueprint placeholder shown until a real image is added. */
function PlaceholderVisual({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="blueprint absolute inset-0 flex items-center justify-center bg-ink/[0.03]">
      <span className="ghost-number display text-6xl">{initials}</span>
      <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-mist">
        preview · em breve
      </span>
    </div>
  );
}

function Arrow({ active }: { active: boolean }) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 ${
        active
          ? "border-ink/15 text-ink group-hover:border-electric group-hover:bg-electric group-hover:text-white"
          : "border-ink/10 text-mist"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M7 17 17 7M9 7h8v8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
