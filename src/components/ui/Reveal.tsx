"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Direction the element travels in from. */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Render as a different element if needed. */
  as?: "div" | "section" | "span" | "li" | "ul" | "header" | "footer";
  once?: boolean;
};

const distance = 28;

const offsets: Record<NonNullable<RevealProps["from"]>, { x: number; y: number }> = {
  up: { x: 0, y: distance },
  down: { x: 0, y: -distance },
  left: { x: distance, y: 0 },
  right: { x: -distance, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Lightweight scroll-reveal wrapper. Honors prefers-reduced-motion by
 * rendering instantly with no transform.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, ...offsets[from] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
