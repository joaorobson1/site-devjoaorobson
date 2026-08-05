/**
 * Converte as imagens pesadas de /public para WebP redimensionado.
 *
 * Com `output: "export"` o otimizador do next/image fica desligado (ele
 * precisa de um servidor Node), então o navegador baixaria os PNGs originais
 * de 4320px. Este script gera os arquivos já prontos para servir.
 *
 * Usa o Chromium do Playwright (já é devDependency) como encoder WebP —
 * evita adicionar sharp/imagemin só para isto.
 *
 * Uso: node scripts/optimize-images.mjs
 */
import { chromium } from "playwright";
import { readFile, writeFile, stat } from "node:fs/promises";

const targets = [
  // Screenshots do portfólio: o card maior é exibido a no máximo 1280px.
  { in: "public/projetos/drvet-painel.png", maxWidth: 1600, quality: 0.85 },
  { in: "public/projetos/drvet-institucional.png", maxWidth: 1600, quality: 0.85 },
  { in: "public/projetos/metodo-dep.png", maxWidth: 1600, quality: 0.85 },
  // Logomarca: maior uso é no About, a 384px. 1084px cobre telas retina.
  { in: "public/logojrdev.png", maxWidth: 1084, quality: 0.92 },
  { in: "public/logojrdev-dark.png", maxWidth: 1084, quality: 0.92 },
];

const browser = await chromium.launch();
const page = await browser.newPage();

const kb = (n) => `${Math.round(n / 1024)} KB`;

for (const t of targets) {
  const out = t.in.replace(/\.png$/, ".webp");
  const before = (await stat(t.in)).size;
  const dataUrl = `data:image/png;base64,${(await readFile(t.in)).toString("base64")}`;

  const encoded = await page.evaluate(
    async ({ dataUrl, maxWidth, quality }) => {
      const img = new Image();
      img.src = dataUrl;
      await img.decode();

      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);

      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      return {
        data: canvas.toDataURL("image/webp", quality).split(",")[1],
        width: canvas.width,
        height: canvas.height,
      };
    },
    { dataUrl, maxWidth: t.maxWidth, quality: t.quality }
  );

  await writeFile(out, Buffer.from(encoded.data, "base64"));
  const after = (await stat(out)).size;
  console.log(
    `${out}  ${encoded.width}x${encoded.height}  ${kb(before)} -> ${kb(after)}  (-${Math.round(
      (1 - after / before) * 100
    )}%)`
  );
}

await browser.close();
