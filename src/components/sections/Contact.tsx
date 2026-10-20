"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { Icon, WhatsAppIcon, type IconName } from "@/components/ui/Icons";
import { site, whatsappLink, mailtoLink } from "@/data/site";

type Channel = {
  key: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
  note: string;
  icon: IconName | "whatsapp";
};

const channels: Channel[] = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: site.whatsappLabel,
    href: whatsappLink(),
    external: true,
    note: "Resposta rápida",
    icon: "whatsapp",
  },
  {
    key: "email",
    label: "E-mail",
    value: site.email,
    href: mailtoLink(),
    external: false,
    note: "Para propostas",
    icon: "mail",
  },
  {
    key: "instagram",
    label: "Instagram",
    value: site.instagramLabel,
    href: site.instagram,
    external: true,
    note: "Bastidores & projetos",
    icon: "instagram",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: site.linkedinLabel,
    href: site.linkedin,
    external: true,
    note: "Trajetória profissional",
    icon: "linkedin",
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-16 sm:py-24">
      <div className="container-grid">
        <SectionHeading
          eyebrow="Contato"
          title={
            <>
              Vamos conversar sobre{" "}
              <span className="text-gradient">o seu projeto</span>
            </>
          }
          intro="Escolha o canal que preferir. O atendimento é direto comigo, sem intermediários."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {channels.map((channel, i) => {
            const primary = channel.key === "whatsapp";
            return (
              <Reveal as="li" key={channel.key} delay={(i % 2) * 0.06}>
                <Spotlight
                  as="a"
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`group flex h-full items-center gap-5 p-6 sm:p-8 ${
                    primary ? "border-[#25d366]/30" : ""
                  }`}
                >
                  <span
                    className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 ease-editorial group-hover:scale-110 ${
                      primary
                        ? "bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)]"
                        : "bg-electric/10 text-electric ring-1 ring-electric/20"
                    }`}
                  >
                    {channel.icon === "whatsapp" ? (
                      <WhatsAppIcon className="h-7 w-7" />
                    ) : (
                      <Icon name={channel.icon} className="h-6 w-6" />
                    )}
                  </span>

                  <span className="relative min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="display text-2xl sm:text-3xl">{channel.label}</span>
                      {primary && (
                        <span className="rounded-full bg-[#25d366]/15 px-2 py-0.5 text-[11px] font-medium text-[#25d366]">
                          Recomendado
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block truncate font-mono text-sm text-graphite">
                      {channel.value}
                    </span>
                    <span className="mt-1 block text-xs text-mist">{channel.note}</span>
                  </span>

                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line/15 text-ink transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-brand-gradient group-hover:text-white">
                    <Icon name="arrowUpRight" className="h-4 w-4" />
                  </span>
                </Spotlight>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
