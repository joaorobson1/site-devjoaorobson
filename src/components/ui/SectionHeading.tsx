import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** Monospace index, e.g. "01". */
  index: string;
  /** Eyebrow label, e.g. "SOBRE". */
  label: string;
  /** Main heading content. */
  title: ReactNode;
  /** Optional supporting paragraph. */
  intro?: ReactNode;
  align?: "left" | "right";
  className?: string;
};

/**
 * Shared editorial section header: monospace eyebrow + oversized title.
 * Keeps every section visually consistent with the blueprint identity.
 */
export function SectionHeading({
  index,
  label,
  title,
  intro,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "right" ? "items-end text-right" : "items-start"
      } ${className}`}
    >
      <Reveal from="up">
        <span className="eyebrow">
          <span className="text-electric">{index}</span>
          <span className="!ml-0">— {label}</span>
        </span>
      </Reveal>
      <Reveal from="up" delay={0.05}>
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal from="up" delay={0.1}>
          <p className="max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
