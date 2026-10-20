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
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-4 text-[15px] font-semibold transition-all duration-300 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variants: Record<Variant, string> = {
  solid:
    "bg-brand-gradient text-white shadow-[0_10px_40px_-10px_rgb(var(--electric)/0.8)] hover:shadow-[0_14px_50px_-8px_rgb(var(--electric)/0.95)] hover:brightness-110",
  outline:
    "border border-line/15 bg-surface/50 text-ink backdrop-blur hover:border-electric/60 hover:bg-surface",
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
    <>
      {/* Light sweep across the gradient button */}
      {variant === "solid" && (
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />
      )}
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </>
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
