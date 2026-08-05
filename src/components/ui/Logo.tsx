import Image from "next/image";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Brand logomark (JR Dev). Swaps between the dark-on-light and light-on-dark artwork
 * based on the active theme (the `.dark` class on <html>), keeping it legible
 * on both the paper and ink backgrounds. Pure CSS toggle — no hydration flash.
 */
export function Logo({ className = "", priority = false }: LogoProps) {
  const common = {
    alt: `${site.name} — logomarca`,
    width: 1084,
    height: 753,
    priority,
    draggable: false as const,
  };

  return (
    <>
      {/* Light theme → black-ink lettering */}
      <Image
        src="/logojrdev.webp"
        {...common}
        className={`${className} block dark:hidden`}
      />
      {/* Dark theme → paper-white lettering */}
      <Image
        src="/logojrdev-dark.webp"
        {...common}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
