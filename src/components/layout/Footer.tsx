import { navLinks, site, mailtoLink } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = 2025; // static to keep the build deterministic; update yearly

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="container-grid py-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Wordmark + tagline */}
          <div className="max-w-sm">
            <a href="#topo" className="flex items-center gap-3">
              <Logo className="h-12 w-auto select-none object-contain" />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-mist">
              {site.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            <span className="eyebrow mb-2">Navegação</span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm text-ink/70 transition-colors hover:text-electric"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <nav className="flex flex-col gap-3">
            <span className="eyebrow mb-2">Conexão</span>
            <a
              href={mailtoLink()}
              className="text-sm text-ink/70 transition-colors hover:text-electric"
            >
              E-mail
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/70 transition-colors hover:text-electric"
            >
              Instagram
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/70 transition-colors hover:text-electric"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink/10 pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-mist sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" />
            {site.location}
          </span>
          <span>Feito com Next.js + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
