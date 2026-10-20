import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** Small pill label above the title. */
  eyebrow?: string;
  /** Main heading content. */
  title: ReactNode;
  /** Optional supporting paragraph. */
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Shared section header: pill eyebrow, oversized title, optional intro.
 * Keeps every section visually consistent.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      {eyebrow ? (
        <Reveal from="up">
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal from="up" delay={0.05}>
        <h2 className="display max-w-4xl text-[clamp(2.3rem,5.5vw,4.5rem)]">
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
