import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** Main heading content. */
  title: ReactNode;
  /** Optional supporting paragraph. */
  intro?: ReactNode;
  align?: "left" | "right";
  className?: string;
};

/**
 * Shared editorial section header: oversized title with optional intro.
 * Keeps every section visually consistent.
 */
export function SectionHeading({
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
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal from="up" delay={0.05}>
          <p className="max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
