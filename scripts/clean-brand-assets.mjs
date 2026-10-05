import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const brandDir = path.join(root, "public", "images", "brand");
const productsDir = path.join(root, "public", "images", "products");

async function makeTransparentLogo() {
  const input = path.join(brandDir, "logo.jpg");
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Near-white → transparent
    if (r > 240 && g > 240 && b > 240) {
      data[i + 3] = 0;
    } else if (r > 220 && g > 220 && b > 220) {
      // Soft edge fade
      const whiteness = (r + g + b) / 3;
      data[i + 3] = Math.max(0, Math.round(255 - (whiteness - 220) * (255 / 35)));
    }
  }

  const outPng = path.join(brandDir, "logo-transparent.png");
  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(outPng);

  // Also write as primary logo.png for the site
  await sharp(outPng).png().toFile(path.join(brandDir, "logo.png"));
  console.log("Wrote transparent logo:", outPng);
}

async function cleanProductShadows() {
  const files = fs
    .readdirSync(productsDir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

  let count = 0;
  for (const file of files) {
    const full = path.join(productsDir, file);
    const image = sharp(full);
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const sat = max === 0 ? 0 : (max - min) / max;
      const lum = (r + g + b) / 3;

      // Light gray / soft shadow / mottled bg → pure white
      if (lum > 165 && sat < 0.12) {
        const t = Math.min(1, (lum - 165) / 70);
        data[i] = Math.round(r + (255 - r) * t);
        data[i + 1] = Math.round(g + (255 - g) * t);
        data[i + 2] = Math.round(b + (255 - b) * t);
        data[i + 3] = 255;
      } else if (lum > 210 && sat < 0.18) {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
        data[i + 3] = 255;
      }
    }

    const cleaned = sharp(data, {
      raw: { width: info.width, height: info.height, channels: 4 },
    }).flatten({ background: "#ffffff" });

    const ext = path.extname(file).toLowerCase();
    if (ext === ".png") {
      await cleaned.png({ quality: 90 }).toFile(full + ".tmp");
    } else {
      await cleaned.jpeg({ quality: 92, mozjpeg: true }).toFile(full + ".tmp");
    }
    fs.renameSync(full + ".tmp", full);
    count += 1;
  }
  console.log(`Cleaned shadows on ${count} product images`);
}

await makeTransparentLogo();
await cleanProductShadows();
