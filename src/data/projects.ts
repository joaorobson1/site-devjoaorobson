/**
 * PORTFÓLIO — Área pronta para cadastro de projetos.
 *
 * Para adicionar um novo case, basta copiar um objeto abaixo e preencher
 * os campos. A `image` pode ser uma URL externa ou um arquivo em /public.
 * Deixe `featured: true` para destacar o projeto em tamanho maior no grid.
 *
 * Enquanto não houver imagem, defina `image: ""` que o card exibe um
 * placeholder de blueprint elegante automaticamente.
 */

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  year?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "drvet-painel",
    name: "Dr.Vet — Sistema de Gestão",
    category: "Painel Administrativo",
    description:
      "Painel completo para clínica veterinária: agenda, clientes, pets, anamnese, vacinas, controle financeiro e dashboard com métricas em tempo real.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL"],
    image: "/projetos/drvet-painel.webp",
    link: "https://sistemadrvet-one.vercel.app/dashboard",
    year: "2025",
    featured: true,
  },
  {
    id: "drvet-institucional",
    name: "Dr.Vet — Clínica Veterinária",
    category: "Site Institucional",
    description:
      "Site institucional para clínica veterinária com apresentação de serviços, identidade visual própria e agendamento direto via WhatsApp.",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projetos/drvet-institucional.webp",
    link: "https://drvetluizeduardo.com.br/",
    year: "2025",
  },
  {
    id: "metodo-dep",
    name: "Método DEP — Prof. Mauro Bomfim",
    category: "Landing Page",
    description:
      "Landing page de vendas para formação em direito eleitoral: estrutura do curso em módulos, seção de autoridade do professor, prova social, FAQ e checkout integrado.",
    technologies: ["HTML", "CSS", "JavaScript", "Kiwify"],
    image: "/projetos/metodo-dep.webp",
    link: "https://doutormaurobomfim.com.br/",
    year: "2025",
    featured: true,
  },
];

/** Categorias derivadas dos projetos, usadas no filtro do portfólio. */
export const projectCategories = [
  "Todos",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
