# devjoaorobson.com.br

Código do meu site profissional. Sou desenvolvedor full stack e atendo como
freelancer: landing pages, sites institucionais e sistemas web sob medida.

**Site:** [devjoaorobson.com.br](https://devjoaorobson.com.br)

![Página inicial do site](docs/preview.jpg)

## Tecnologias

- [Next.js 15](https://nextjs.org) com App Router, exportado como site estático
- React 19 e TypeScript
- Tailwind CSS 3
- Framer Motion para as animações

Não há back-end. O build gera HTML, CSS e JS puros, que rodam em qualquer
hospedagem compartilhada.

## Rodando localmente

Requer Node.js 18.18 ou mais recente.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:3000`.

| Comando            | O que faz                                        |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Servidor de desenvolvimento                      |
| `npm run build`    | Gera a versão de produção na pasta `out/`        |
| `npm run lint`     | Verifica o código com ESLint                     |
| `npm run shots`    | Tira prints dos projetos do portfólio            |
| `npm run optimize` | Converte os prints em WebP                       |

## Estrutura

```
src/
├── app/            layout, SEO, estilos globais, sitemap e robots
├── components/
│   ├── layout/     cabeçalho e rodapé
│   ├── sections/   seções da página inicial
│   └── ui/         componentes reutilizáveis
└── data/           textos, contatos e projetos
```

Os textos ficam separados dos componentes. Para mudar conteúdo, quase sempre
basta editar um arquivo em `src/data/`:

- `site.ts`: nome, contatos, redes sociais e IDs do Google Ads e do Meta Pixel
- `content.ts`: serviços, etapas do processo, diferenciais e números
- `projects.ts`: projetos do portfólio

### Adicionando um projeto

Inclua um objeto na lista de `src/data/projects.ts`:

```ts
{
  id: "nome-do-projeto",
  name: "Nome do Projeto",
  category: "Landing Page",
  description: "Uma ou duas frases sobre o projeto.",
  technologies: ["Next.js", "Tailwind"],
  image: "/projetos/nome-do-projeto.webp",
  link: "https://exemplo.com.br",
  year: "2026",
  featured: true, // opcional, deixa o título maior
}
```

As categorias do filtro são geradas a partir dos projetos cadastrados. Sem
imagem (`image: ""`), o card mostra as iniciais do projeto no lugar do print.

Como o export estático não otimiza imagens, elas precisam entrar prontas em
`public/projetos/`. O caminho mais rápido é adicionar o endereço do site em
`scripts/capture-shots.mjs` e rodar `npm run shots` e depois `npm run optimize`.

## Publicação

O site está hospedado na Hostinger.

1. Rode `npm run build`.
2. Envie **o conteúdo** da pasta `out/` para `public_html`.

O arquivo `public/.htaccess` vai junto no build e cuida do redirecionamento
para HTTPS, da remoção do `www`, do cache dos arquivos estáticos e da
página 404.

Para publicar na Vercel, remova `output: "export"` e `images.unoptimized` do
`next.config.mjs`.

## Licença

O código pode servir de referência. Textos, imagens, logomarca e os prints de
projetos de clientes não estão liberados para reutilização.
