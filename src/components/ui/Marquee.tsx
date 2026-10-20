type MarqueeProps = {
  items: string[];
  className?: string;
  /** "display" = big headline words, "chip" = small tech pills. */
  variant?: "display" | "chip";
  reverse?: boolean;
};

/**
 * Infinite horizontal marquee. The list is duplicated so the CSS
 * translateX(-50%) loop is seamless. Pure CSS — no JS, no jank.
 */
export function Marquee({
  items,
  className = "",
  variant = "display",
  reverse = false,
}: MarqueeProps) {
  const sequence = [...items, ...items];

  return (
    <div
      className={`group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
      aria-hidden
    >
      <div
        className={`flex shrink-0 items-center group-hover:[animation-play-state:paused] ${
          variant === "chip" ? "animate-marquee-fast gap-3 pr-3" : "animate-marquee"
        } ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {sequence.map((item, i) =>
          variant === "chip" ? (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line/10 bg-surface/80 px-4 py-2 font-mono text-xs text-graphite"
            >
              {item}
            </span>
          ) : (
            <span key={i} className="flex items-center">
              <span
                className={`display whitespace-nowrap px-8 text-5xl sm:text-6xl md:text-7xl ${
                  i % 2 ? "text-outline" : "text-ink"
                }`}
              >
                {item}
              </span>
              <Star />
            </span>
          )
        )}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 shrink-0 text-electric drop-shadow-[0_0_12px_rgb(var(--electric))]"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
    </svg>
  );
}
