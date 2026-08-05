import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const shots = [
  {
    url: "https://sistemadrvet-one.vercel.app/dashboard",
    out: "public/projetos/drvet-painel.png",
  },
  {
    url: "https://drvetluizeduardo.com.br/",
    out: "public/projetos/drvet-institucional.png",
  },
  {
    url: "https://doutormaurobomfim.com.br/",
    out: "public/projetos/metodo-dep.png",
  },
];

await mkdir("public/projetos", { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 3,
});

for (const { url, out } of shots) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  } catch {
    // networkidle can hang on sites with long-polling; fall back to load
    await page.goto(url, { waitUntil: "load", timeout: 60000 });
  }
  await page.waitForTimeout(2500);
  await page.screenshot({ path: out });
  console.log("saved", out);
  await page.close();
}

await browser.close();
