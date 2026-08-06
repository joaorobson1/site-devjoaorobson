"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, whatsappLink, mailtoLink } from "@/data/site";

const channels = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: site.whatsappLabel,
    href: whatsappLink(),
    external: true,
    note: "Resposta rápida",
  },
  {
    key: "email",
    label: "E-mail",
    value: site.email,
    href: mailtoLink(),
    external: false,
    note: "Para propostas",
  },
  {
    key: "instagram",
    label: "Instagram",
    value: site.instagramLabel,
    href: site.instagram,
    external: true,
    note: "Bastidores & projetos",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: site.linkedinLabel,
    href: site.linkedin,
    external: true,
    note: "Trajetória profissional",
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-14 sm:py-20">
      <div className="container-grid">
        <SectionHeading
          title={
            <>
              Vamos conversar sobre{" "}
              <span className="text-electric">o seu projeto</span>
            </>
          }
          intro="Escolha o canal que preferir. O atendimento é direto comigo, sem intermediários."
        />

        <ul className="mt-16 border-t border-ink/15">
          {channels.map((channel) => (
            <li key={channel.key} className="border-b border-ink/15">
              <a
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group grid grid-cols-1 items-center gap-2 py-7 sm:grid-cols-[14rem_1fr_auto] sm:gap-6"
              >
                <span className="display text-2xl text-ink/60 transition-all duration-500 ease-editorial group-hover:translate-x-2 group-hover:text-ink sm:text-3xl">
                  {channel.label}
                </span>
                <span className="font-mono text-sm text-mist transition-colors group-hover:text-electric">
                  {channel.value}
                </span>
                <span className="flex items-center justify-between gap-4 sm:justify-end">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
                    {channel.note}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-500 group-hover:border-electric group-hover:bg-electric group-hover:text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M7 17 17 7M9 7h8v8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <Reveal from="up">
          <p className="mt-12 max-w-lg text-base leading-relaxed text-mist">
            Prefere escrever agora?{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-ink"
            >
              Chame no WhatsApp
            </a>{" "}
            e receba uma resposta em até 24h.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
