"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { Icon } from "@/components/ui/Icons";
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
    <section id="portfolio" className="relative py-16 sm:py-24">
      <div className="container-grid">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfólio"
            title={
              <>
                Projetos & <span className="text-gradient">cases</span>
              </>
            }
            intro="Uma seleção de soluções entregues. Cada projeto foi desenhado para um objetivo específico de negócio."
          />

          {/* Category filter — animated pill tabs */}
          <div className="flex flex-wrap gap-1 self-start rounded-3xl border border-line/10 bg-surface/60 p-1 backdrop-blur lg:self-end">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  filter === cat ? "text-white" : "text-mist hover:text-ink"
                }`}
              >
                {filter === cat && (
                  <motion.span
                    layoutId="portfolio-filter"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="bg-brand-gradient absolute inset-0 rounded-full"
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.ul layout className="mt-14 grid gap-5">
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
              >
                <ProjectCard project={project} flip={i % 2 === 1} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-12 max-w-xl text-base leading-relaxed text-mist">
          Cada projeto nasce de um objetivo claro: vender mais, organizar a
          operação ou economizar tempo. Quer ver o seu na lista?{" "}
          <a href="#contato" className="link-underline font-medium text-electric">
            Vamos conversar
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const hasLink = !!project.link && project.link !== "#";
  const linkProps = hasLink
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Spotlight
      as={hasLink ? "a" : "div"}
      {...linkProps}
      className={`group grid h-full p-3 sm:p-4 lg:items-center lg:gap-6 ${
        flip ? "lg:grid-cols-[1fr_1.45fr]" : "lg:grid-cols-[1.45fr_1fr]"
      }`}
    >
      {/* Visual inside a browser frame */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-line/10 bg-paper ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <div className="flex items-center gap-1.5 border-b border-line/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-ink/20" />
          <span className="h-2 w-2 rounded-full bg-ink/20" />
          <span className="h-2 w-2 rounded-full bg-ink/20" />
          {project.link && (
            <span className="ml-2 truncate font-mono text-[10px] text-mist">
              {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          )}
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-top transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.05]"
            />
          ) : (
            <PlaceholderVisual name={project.name} />
          )}
          {/* Hover veil with call-to-action */}
          {hasLink && (
            <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="inline-flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-transform duration-500 ease-editorial group-hover:translate-y-0">
                Ver projeto
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="relative flex flex-col gap-4 px-3 pb-4 pt-6 sm:px-4 lg:px-6 lg:py-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric ring-1 ring-electric/20">
            {project.category}
          </span>
          {project.year && (
            <span className="font-mono text-xs text-mist">{project.year}</span>
          )}
        </div>

        <h3
          className={`display ${
            project.featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {project.name}
        </h3>

        <p className="text-sm leading-relaxed text-mist sm:text-base">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line/10 px-2.5 py-1 font-mono text-[11px] text-graphite"
            >
              {tech}
            </li>
          ))}
        </ul>

        {hasLink && (
          <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-electric">
            Acessar site
            <Icon
              name="arrowUpRight"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        )}
      </div>
    </Spotlight>
  );
}

/** Placeholder shown until a real image is added. */
function PlaceholderVisual({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink/[0.03]">
      <div className="grid-bg absolute inset-0" />
      <span className="text-outline display relative text-7xl">{initials}</span>
      <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
        preview · em breve
      </span>
    </div>
  );
}
