import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const embDir = path.join(root, "brochure-pages", "embedded");
const prodDir = path.join(root, "public", "images", "products");
const mapPath = path.join(__dirname, "product-image-map.json");

/**
 * Restore product JPEGs from brochure PDF embeds.
 * Odd-index embed = color photo; even-index = soft mask.
 * Composite onto pure white for clean brochure-quality cutouts.
 */
async function restoreOne(prodName, embedFile) {
  const m = embedFile.match(/p(\d+)-(\d+)-(\d+)x(\d+)/);
  if (!m) throw new Error("bad embed name " + embedFile);

  const page = m[1];
  const idx = Number(m[2]);
  const w = Number(m[3]);
  const h = Number(m[4]);
  const maskIdx = String(idx - 1).padStart(2, "0");
  const maskFile = `p${page}-${maskIdx}-${w}x${h}.jpg`;
  const colorPath = path.join(embDir, embedFile);
  const maskPath = path.join(embDir, maskFile);
  const outPath = path.join(prodDir, prodName);

  if (!fs.existsSync(colorPath)) throw new Error("missing color " + embedFile);

  const color = sharp(colorPath).ensureAlpha();

  if (fs.existsSync(maskPath)) {
    // Soft mask: white = keep, black = discard → use as alpha
    const maskRaw = await sharp(maskPath)
      .resize(w, h, { fit: "fill" })
      .greyscale()
      .raw()
      .toBuffer();

    const { data, info } = await color.raw().toBuffer({ resolveWithObject: true });
    for (let i = 0, p = 0; i < maskRaw.length; i++, p += 4) {
      data[p + 3] = maskRaw[i];
    }

    await sharp(data, {
      raw: { width: info.width, height: info.height, channels: 4 },
    })
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toFile(outPath + ".tmp");
  } else {
    // No mask — copy brochure color as-is onto white canvas
    await sharp(colorPath)
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toFile(outPath + ".tmp");
  }

  fs.renameSync(outPath + ".tmp", outPath);
}

async function main() {
  const map = JSON.parse(fs.readFileSync(mapPath, "utf8"));
  let n = 0;
  for (const [prod, embed] of Object.entries(map)) {
    await restoreOne(prod, embed);
    n += 1;
    console.log("restored", prod, "←", embed);
  }

  console.log("Done. Restored", n, "brochure product images.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
