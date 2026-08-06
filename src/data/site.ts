/**
 * Central source of truth for contact info, social links and SEO.
 * Update the values below once and they propagate across the whole site.
 */

export const site = {
  name: "João Robson Antunes",
  role: "Desenvolvedor Full Stack",
  shortName: "João Robson",
  monogram: "JR",
  // Used for SEO / Open Graph / sitemap. Change after deploying to your domain.
  url: "https://devjoaorobson.com.br",
  locale: "pt_BR",
  email: "joaorobson35@gmail.com",
  // Phone in international format (no symbols) for the WhatsApp deep-link.
  whatsapp: "5538991476450",
  whatsappLabel: "(38) 99147-6450",
  instagram: "https://instagram.com/joaorobson1",
  instagramLabel: "@joaorobson1",
  linkedin: "https://www.linkedin.com/in/joaorobson1/",
  linkedinLabel: "/in/joaorobson1",
  location: "Brasil — atendimento remoto",
  // Tag global do Google Ads (gtag.js). Deixe "" para desativar o script.
  googleAdsId: "AW-18311654258",
  // Pixel do Facebook/Meta. Deixe "" para desativar o script.
  facebookPixelId: "2218978372284252",
  tagline: "Transformo ideias em sistemas que geram resultados.",
  description:
    "Desenvolvimento de landing pages, sistemas web e soluções digitais sob medida para empresas e empreendedores. Full Stack com Next.js, React e diversos bancos de dados.",
} as const;

/**
 * Pre-filled WhatsApp message helper.
 */
export const whatsappLink = (
  message = "Olá, João! Vim pelo seu portfólio e gostaria de solicitar um orçamento."
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (
  subject = "Solicitação de orçamento",
  body = "Olá, João! Gostaria de conversar sobre um projeto."
) =>
  `mailto:${site.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

export const navLinks = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "portfolio", label: "Portfólio" },
  { id: "processo", label: "Processo" },
  { id: "contato", label: "Contato" },
] as const;
