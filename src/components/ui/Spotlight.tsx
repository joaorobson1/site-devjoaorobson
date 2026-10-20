"use client";

import type { ReactNode, MouseEvent, ElementType } from "react";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
} & Record<string, unknown>;

/**
 * Card wrapper whose `.spotlight` glow follows the cursor. It only writes two
 * CSS variables on mousemove, so there is no React re-render per frame.
 */
export function Spotlight({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: SpotlightProps) {
  function handleMove(e: MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Tag
      onMouseMove={handleMove}
      className={`card spotlight ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
