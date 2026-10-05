import { writeFileSync, readdirSync, mkdirSync } from "fs";
import { join, extname, basename } from "path";
import sharp from "sharp";

const root = join(process.cwd(), "public", "images");
const brandDir = join(root, "brand");
const productsDir = join(root, "products");
const cleanDir = join(root, "products-clean");

/** Turn near-white pixels transparent (logo / cutouts). */
async function toTransparentPng(inputPath, outputPath, threshold = 245) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Near-white → transparent
    if (r >= threshold && g >= threshold && b >= threshold) {
      data[i + 3] = 0;
      continue;
    }
    // Soft gray shadow fringe → fade / remove
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const isGray = max - min < 18;
    if (isGray && max > 170 && max < threshold) {
      const t = (threshold - max) / (threshold - 170);
      data[i + 3] = Math.round(255 * Math.max(0, 1 - t * 1.35));
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(outputPath);
}

async function flattenProductOnWhite(inputPath, outputPath) {
  // Remove soft cutout shadows by compositing cleaned alpha onto pure white
  const tmp = outputPath.replace(/(\.\w+)$/, "-tmp.png");
  await toTransparentPng(inputPath, tmp, 248);
  const meta = await sharp(tmp).metadata();
  await sharp({
    create: {
      width: meta.width,
      height: meta.height,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite([{ input: tmp, blend: "over" }])
    .jpeg({ quality: 92 })
    .toFile(outputPath);

  try {
    const { unlinkSync } = await import("fs");
    unlinkSync(tmp);
  } catch {
    /* ignore */
  }
}

async function main() {
  mkdirSync(cleanDir, { recursive: true });

  // Logo → transparent PNG for header/hero/footer
  const logoSrcJpg = join(brandDir, "logo.jpg");
  const logoSrcPng = join(brandDir, "logo.png");
  const logoIn = logoSrcJpg;
  const logoOut = join(brandDir, "logo-mark.png");
  await toTransparentPng(logoIn, logoOut, 242);
  // Also overwrite logo.png as transparent for any lingering refs
  await toTransparentPng(logoIn, join(brandDir, "logo.png"), 242);
  console.log("Wrote", logoOut);

  // Clean product photos (remove jagged shadow fringes)
  const files = readdirSync(productsDir).filter((f) =>
    [".jpg", ".jpeg", ".png", ".webp"].includes(extname(f).toLowerCase()),
  );

  for (const file of files) {
    const inPath = join(productsDir, file);
    const outName = basename(file, extname(file)) + ".jpg";
    const outPath = join(productsDir, outName);
    // Overwrite in place with cleaned white-backed JPEG
    await flattenProductOnWhite(inPath, join(cleanDir, outName));
    await flattenProductOnWhite(inPath, outPath);
    console.log("Cleaned", file);
  }

  writeFileSync(
    join(cleanDir, "README.txt"),
    "Cleaned product images (shadow fringe removed). Source copies overwritten in products/.\n",
  );
  console.log("Done. Products:", files.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
