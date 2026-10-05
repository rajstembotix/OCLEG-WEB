import { copyFileSync, existsSync } from "fs";
import { resolve, join } from "path";
import sharp from "sharp";

const rootWeb = resolve("..");
const oclegRoot = resolve(".");

const sourceImages = {
  // 1st image: DOL Rocker -> product #3
  rocker: join(rootWeb, "DOL Rocker.jpeg"),
  // 2nd image: 1phase -> product #6
  onePhase: join(rootWeb, "1phase.jpeg"),
  // 3rd image: DOL semi time no5 -> product #5
  dolTimer: join(rootWeb, "DOL semi time no5.jpeg"),
  // 4th image: semi -> product #4
  semi: join(rootWeb, "semi.jpeg"),
};

console.log("Checking sources:");
for (const [k, v] of Object.entries(sourceImages)) {
  console.log(`  ${k}: ${v} exists = ${existsSync(v)}`);
}

const targetDirs = [
  join(oclegRoot, "public", "images", "products"),
  join(oclegRoot, "images", "products"),
  join(oclegRoot, "out", "images", "products"),
];

async function processAndSave(srcPath, baseFilename, alsoNames = []) {
  const allNames = [baseFilename, ...alsoNames];
  // Process with sharp for highest quality sRGB jpeg
  const buffer = await sharp(srcPath)
    .rotate()
    .jpeg({ quality: 95 })
    .toBuffer();

  for (const dir of targetDirs) {
    if (!existsSync(dir)) continue;
    for (const name of allNames) {
      const dest = join(dir, name);
      await sharp(buffer).toFile(dest);
      console.log(`Saved -> ${dest}`);
    }
  }
}

async function run() {
  console.log("Processing Product #3 (DOL Rocker)...");
  await processAndSave(sourceImages.rocker, "auto-dol-rocker.jpg", ["auto-sintec-dol.jpg"]);

  console.log("Processing Product #6 (1 Phase)...");
  await processAndSave(sourceImages.onePhase, "auto-1phase.jpg");

  console.log("Processing Product #5 (DOL Timer)...");
  await processAndSave(sourceImages.dolTimer, "auto-dol-timer.jpg");

  console.log("Processing Product #4 (Semi)...");
  await processAndSave(sourceImages.semi, "auto-semi.jpg");

  console.log("All images processed successfully!");
}

run().catch((err) => {
  console.error("Error updating images:", err);
  process.exit(1);
});
