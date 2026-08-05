/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Gera HTML puro em ./out para hospedagem compartilhada (Hostinger),
  // que serve arquivos por Apache/LiteSpeed e não roda Node.
  output: "export",

  // Cada rota vira uma pasta com index.html — é o que o Apache resolve
  // sozinho, sem precisar de regra de rewrite.
  trailingSlash: true,

  images: {
    // O otimizador de imagens do Next depende de um servidor Node, que não
    // existe no export estático. As imagens já são servidas prontas.
    unoptimized: true,
  },
};

export default nextConfig;
