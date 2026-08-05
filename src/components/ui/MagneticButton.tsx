"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

type Variant = "solid" | "outline" | "ghost";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-electric",
  outline:
    "border border-ink/25 text-ink hover:border-electric hover:text-electric",
  ghost: "text-ink hover:text-electric",
};

/**
 * Button/link with a subtle magnetic pull toward the cursor.
 * Falls back to a static element when reduced-motion is requested.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  className = "",
  external,
  ariaLabel,
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMove(e: MouseEvent) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.3);
    y.set(relY * 0.4);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <span className="relative z-10 flex items-center gap-3">{children}</span>
  );

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-flex"
    >
      {href ? (
        <a
          href={href}
          aria-label={ariaLabel}
          className={classes}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {content}
        </a>
      ) : (
        <button
          type="button"
          aria-label={ariaLabel}
          onClick={onClick}
          className={classes}
        >
          {content}
        </button>
      )}
    </motion.div>
  );

  return inner;
}
