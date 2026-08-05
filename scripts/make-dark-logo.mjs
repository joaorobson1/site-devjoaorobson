import sharp from "sharp";

// Generates a light-theme variant of the logo: white/gray artwork -> dark ink,
// orange artwork preserved. Transparency is kept intact.
const SRC = "public/logomarca.png";
const OUT = "public/logomarca-dark.png";
const INK = [12, 12, 14]; // matches --ink in light theme

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

let recolored = 0;
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
  if (a === 0) continue;
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  // Low saturation => white/gray text & lines. Recolor to ink, keep alpha.
  if (sat < 45) {
    data[i] = INK[0];
    data[i + 1] = INK[1];
    data[i + 2] = INK[2];
    recolored++;
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
  .png()
  .toFile(OUT);

console.log(`Done. ${recolored} pixels recolored -> ${OUT}`);
