import { navLinks, site, mailtoLink, whatsappLink } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = 2026; // static to keep the build deterministic; update yearly

  return (
    <footer className="relative overflow-hidden border-t border-line/10">
      <div
        aria-hidden
        className="bg-brand-gradient pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[70%] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
      />

      <div className="container-grid relative pt-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Wordmark + tagline */}
          <div className="max-w-sm">
            <a href="#topo" className="flex items-center gap-3">
              <Logo className="h-12 w-auto select-none object-contain" />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-mist">
              {site.tagline}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric"
            >
              <span className="link-underline">Iniciar um projeto</span> →
            </a>
          </div>

          <div className="flex gap-16 sm:gap-24">
            {/* Navigation */}
            <nav className="flex flex-col gap-3">
              <span className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                Navegação
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-sm text-graphite transition-colors hover:text-electric"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social */}
            <nav className="flex flex-col gap-3">
              <span className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                Conexão
              </span>
              <a
                href={mailtoLink()}
                className="text-sm text-graphite transition-colors hover:text-electric"
              >
                E-mail
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-graphite transition-colors hover:text-electric"
              >
                Instagram
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-graphite transition-colors hover:text-electric"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>

        {/* Oversized outlined name */}
        <p
          aria-hidden
          className="text-outline display mt-16 select-none whitespace-nowrap text-center text-[13.5vw] leading-[0.85] xl:text-[11.6rem]"
        >
          JOÃO ROBSON
        </p>

        <div className="flex flex-col gap-4 border-t border-line/10 py-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}. Todos os direitos reservados.
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {site.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
