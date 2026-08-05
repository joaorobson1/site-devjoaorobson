/**
 * Editorial content: services, work process, differentials and skills.
 * Kept separate from components so copy can be edited without touching JSX.
 */

export type Service = {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Landing Pages",
    description:
      "Páginas rápidas e persuasivas, feitas para transformar visitantes em clientes.",
    deliverables: ["Foco em vendas", "Aparece no Google", "Carregamento rápido", "Pronta para anúncios"],
  },
  {
    index: "02",
    title: "Sites Institucionais",
    description:
      "Presença digital sólida que passa confiança e profissionalismo para a sua marca.",
    deliverables: ["Design exclusivo", "Você mesmo edita", "Blog e Google", "Vários idiomas"],
  },
  {
    index: "03",
    title: "Sistemas de Estoque",
    description:
      "Controle total de entradas, saídas, alertas e relatórios em tempo real.",
    deliverables: ["Controle de produtos", "Avisos de estoque baixo", "Relatórios", "Vários usuários"],
  },
  {
    index: "04",
    title: "Painéis Administrativos",
    description:
      "Um lugar só para acompanhar números e tomar decisões com clareza.",
    deliverables: ["Números em tempo real", "Acessos por usuário", "Gráficos", "Exportar dados"],
  },
  {
    index: "05",
    title: "Automação de Processos",
    description:
      "Acabo com tarefas repetitivas, fazendo o sistema trabalhar por você.",
    deliverables: ["Tarefas no automático", "Avisos automáticos", "Conexão entre apps", "Agendamentos"],
  },
  {
    index: "06",
    title: "Integrações",
    description:
      "Conecto seu sistema a pagamentos, WhatsApp, e-mail e outras ferramentas.",
    deliverables: ["Pagamentos online", "WhatsApp e e-mail", "Outras ferramentas", "Tudo conectado"],
  },
  {
    index: "07",
    title: "Manutenção de Sistemas",
    description:
      "Suporte contínuo, correções e melhorias para o seu sistema seguir evoluindo.",
    deliverables: ["Correção de erros", "Novas funções", "Acompanhamento", "Atualizações"],
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
  meta: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Briefing",
    description:
      "Conversamos para entender seu negócio, seus objetivos e o problema real a resolver.",
    meta: "Descoberta",
  },
  {
    index: "02",
    title: "Planejamento",
    description:
      "Defino escopo, arquitetura, cronograma e a stack ideal para o seu projeto.",
    meta: "Estratégia",
  },
  {
    index: "03",
    title: "Desenvolvimento",
    description:
      "Construo a solução em ciclos, com entregas visíveis e comunicação constante.",
    meta: "Execução",
  },
  {
    index: "04",
    title: "Testes",
    description:
      "Valido performance, responsividade, segurança e cada fluxo antes de publicar.",
    meta: "Qualidade",
  },
  {
    index: "05",
    title: "Entrega",
    description:
      "Publico, configuro o ambiente e ofereço suporte pós-entrega para você crescer.",
    meta: "Lançamento",
  },
];

export type Differential = {
  title: string;
  description: string;
};

export const differentials: Differential[] = [
  {
    title: "Atendimento direto",
    description: "Você fala comigo, o desenvolvedor — sem intermediários, sem ruído.",
  },
  {
    title: "Soluções sob medida",
    description: "Nada de template engessado. Cada projeto é desenhado para o seu caso.",
  },
  {
    title: "Performance",
    description: "Sites rápidos, leves e otimizados — Lighthouse acima de 90.",
  },
  {
    title: "SEO técnico",
    description: "Estrutura pensada para o Google encontrar e ranquear o seu negócio.",
  },
  {
    title: "Responsividade",
    description: "Experiência impecável do celular ao desktop, em qualquer tela.",
  },
  {
    title: "Suporte pós-entrega",
    description: "Continuo ao seu lado após o lançamento, para evoluir o produto.",
  },
];

export const skills: string[] = [
  "Next.js 15",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "PostgreSQL",
  "Node.js",
  "Framer Motion",
  "REST & APIs",
  "Vercel",
  "UI/UX",
];

export const stats = [
  { value: "100%", label: "Foco em resultado" },
  { value: "90+", label: "Nota de velocidade" },
  { value: "24h", label: "Resposta média" },
  { value: "∞", label: "Suporte pós-entrega" },
];
