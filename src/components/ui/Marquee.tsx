type MarqueeProps = {
  items: string[];
  className?: string;
};

/**
 * Infinite horizontal marquee of keywords. The list is duplicated so the
 * CSS translateX(-50%) loop is seamless. Pure CSS — no JS, no jank.
 */
export function Marquee({ items, className = "" }: MarqueeProps) {
  const sequence = [...items, ...items];

  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
        {sequence.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="display whitespace-nowrap px-8 text-5xl text-ink/90 sm:text-6xl md:text-7xl">
              {item}
            </span>
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-electric"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
    </svg>
  );
}
