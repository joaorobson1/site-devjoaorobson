# Portfólio — João Robson Antunes

Site pessoal de desenvolvedor full stack freelancer, no ar em
[devjoaorobson.com.br](https://devjoaorobson.com.br).

## Conceito visual

A identidade é um "neon editorial": base escura, tipografia grande e o laranja
da logomarca expandido num gradiente quente (âmbar → laranja → rosa).

- Tema escuro por padrão, com tema claro opcional pelo toggle no header.
- Fundo com grid luminoso, manchas "aurora" animadas e granulação sutil.
- Seções em bento grid; os cards acendem sob o cursor (`Spotlight`).
- Tipografia: Bricolage Grotesque (títulos), Inter (texto corrido) e
  JetBrains Mono (labels técnicos).
- Botão flutuante de WhatsApp após o hero, contadores animados e CTA com
  borda em gradiente giratório.

| Token      | Light     | Dark      |
| ---------- | --------- | --------- |
| `paper`    | `#fafaf8` | `#07070a` |
| `surface`  | `#ffffff` | `#101015` |
| `ink`      | `#0c0c10` | `#f5f5f7` |
| `electric` | `#f04e0c` | `#ff5e1a` |
| `amber`    | `#ec8e00` | `#ffb224` |
| `rose`     | `#e42a60` | `#ff4076` |

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 3.4
- Framer Motion 11

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a versão de produção em out/
```

## Estrutura

```
src/
├─ app/
│  ├─ layout.tsx        # fontes, SEO, JSON-LD, theme script, gtag
│  ├─ page.tsx          # composição das seções
│  ├─ globals.css       # tokens, gradientes, utilitários
│  ├─ sitemap.ts / robots.ts
├─ components/
│  ├─ layout/           # Header, Footer
│  ├─ sections/         # Hero, About, Services, Portfolio, Process,
│  │                    #   Differentials, CTA, Contact
│  └─ ui/               # Reveal, MagneticButton, ThemeToggle, Spotlight,
│                       #   SectionHeading, Marquee, Logo, Icons,
│                       #   CountUp, WhatsAppFab
└─ data/
   ├─ site.ts           # contato, redes sociais, navegação, Google Ads
   ├─ content.ts        # serviços, processo, diferenciais
   └─ projects.ts       # projetos do portfólio
```

## Personalização

**Contato e redes:** [`src/data/site.ts`](src/data/site.ts) — e-mail, WhatsApp
(formato internacional, ex. `5599999999999`), Instagram, LinkedIn, domínio e ID
do Google Ads.

**Projetos do portfólio:** [`src/data/projects.ts`](src/data/projects.ts):

```ts
{
  id: "meu-projeto",
  name: "Nome do Projeto",
  category: "Landing Page",
  description: "Descrição curta do case.",
  technologies: ["Next.js", "Firebase"],
  image: "/projetos/meu-projeto.webp", // vazio = placeholder de blueprint
  link: "https://...",                  // opcional
  year: "2025",
  featured: true,                       // ocupa 2 colunas no grid
}
```

**Serviços, processo e diferenciais:** [`src/data/content.ts`](src/data/content.ts).

## Deploy

O projeto usa `output: "export"` ([`next.config.mjs`](next.config.mjs)): o build
gera HTML estático em `out/`, que roda em hospedagem compartilhada
Apache/LiteSpeed sem precisar de Node no servidor.

```bash
npm run build
```

Depois é só enviar **o conteúdo de `out/`** para `public_html`. O `.htaccess`
mora em `public/` e o build o copia junto — ele cuida do redirecionamento para
HTTPS, do domínio canônico sem `www`, do cache e do MIME de WebP.

### Trocando as imagens do portfólio

Como o export estático não usa o otimizador do `next/image`, as imagens
precisam ir prontas:

```bash
npm run shots      # captura os prints dos sites listados no script
npm run optimize   # converte os PNGs em WebP redimensionado
```

Em seguida aponte `image:` para o `.webp` em `projects.ts` e remova o `.png`
original de `public/`, que serve apenas de intermediário.

### Voltando para a Vercel

Basta remover `output: "export"` e `images.unoptimized` do `next.config.mjs`
para reativar a otimização de imagens sob demanda.
