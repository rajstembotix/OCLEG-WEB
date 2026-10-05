import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = "/Users/raju/Desktop/OclegElectronics";
const assets = "/Users/raju/.cursor/projects/Users-raju-Desktop-OclegElectronics/assets";
const publicDir = path.join(root, "public/images");

async function removeShadow(input, output) {
  const img = sharp(input);
  const { data, info } = await img.ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });
  const { width, height, channels } = info;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const avg = (r + g + b) / 3;
      const sat = max - min;
      const nearEdge =
        x < 22 || y < 22 || x > width - 23 || y > height - 23;
      if (avg >= 228 && sat < 32) {
        data[i] = data[i + 1] = data[i + 2] = 255;
      } else if (avg >= 198 && sat < 24) {
        const t = 0.88;
        data[i] = Math.round(r + (255 - r) * t);
        data[i + 1] = Math.round(g + (255 - g) * t);
        data[i + 2] = Math.round(b + (255 - b) * t);
      } else if (avg >= 170 && sat < 16) {
        const t = nearEdge ? 0.78 : 0.5;
        data[i] = Math.round(r + (255 - r) * t);
        data[i + 1] = Math.round(g + (255 - g) * t);
        data[i + 2] = Math.round(b + (255 - b) * t);
      }
    }
  }
  await sharp(data, { raw: { width, height, channels } })
    .jpeg({ quality: 93, mozjpeg: true })
    .toFile(output);
}

async function copy(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(src).jpeg({ quality: 92 }).toFile(dest);
}

(async () => {
  const lifeDir = path.join(publicDir, "life");
  fs.mkdirSync(lifeDir, { recursive: true });
  fs.mkdirSync(path.join(publicDir, "hero"), { recursive: true });
  fs.mkdirSync(path.join(publicDir, "brand"), { recursive: true });
  fs.mkdirSync(path.join(publicDir, "clients"), { recursive: true });
  const logoSrc = path.join(
    assets,
    "WhatsApp_Image_2026-09-07_at_13.13.20-431660b2-4b96-4603-bad9-7b4f7212a376.jpg",
  );
  const flyerSrc = path.join(
    assets,
    "WhatsApp_Image_2026-09-09_at_16.20.03-4d6bcb72-2392-4d0d-a2b4-0026a6187974.jpg",
  );

  await sharp(logoSrc)
    .trim({ threshold: 18 })
    .png()
    .toFile(path.join(publicDir, "brand/logo.png"));

  const flyer = sharp(flyerSrc);
  const { width: w, height: h } = await flyer.metadata();
  const productPath = path.join(publicDir, "products/voltage-corrector.jpg");
  await flyer
    .clone()
    .extract({
      left: 8,
      top: Math.round(h * 0.24),
      width: Math.round(w * 0.40),
      height: Math.round(h * 0.29),
    })
    .toFile("/tmp/ocleg-stabilizer-raw.jpg");
  await removeShadow("/tmp/ocleg-stabilizer-raw.jpg", productPath);

  const appsLeft = 10;
  const appsTop = Math.round(h * 0.868);
  const appsW = w - 20;
  const appsH = Math.round(h * 0.078);
  const sliceW = Math.floor(appsW / 6);
  const appNames = ["ac", "fridge", "tv", "washer", "pump", "solar"];
  for (let i = 0; i < 6; i++) {
    const raw = `/tmp/ocleg-app-${i}.jpg`;
    await sharp(flyerSrc)
      .extract({
        left: appsLeft + i * sliceW,
        top: appsTop,
        width: sliceW - 2,
        height: appsH,
      })
      .toFile(raw);
    await removeShadow(
      raw,
      path.join(publicDir, `life/appliance-${appNames[i]}.jpg`),
    );
  }

  const generated = [
    ["hero-farm-irrigation.jpg", "hero/slide-farm-1.jpg"],
    ["hero-farm-pump.jpg", "hero/slide-farm-2.jpg"],
    ["hero-city-skyline.jpg", "hero/slide-city-1.jpg"],
    ["hero-commercial.jpg", "hero/slide-city-2.jpg"],
    ["hero-industry-plant.jpg", "hero/slide-industry-1.jpg"],
    ["life-air-conditioner.jpg", "life/ac-room.jpg"],
    ["life-refrigerator.jpg", "life/kitchen.jpg"],
    ["life-water-pump.jpg", "life/rooftop-pump.jpg"],
    ["life-street-lights.jpg", "life/street.jpg"],
    ["life-washing-machine.jpg", "life/laundry.jpg"],
    ["life-television.jpg", "life/tv-room.jpg"],
    ["life-solar.jpg", "life/solar-roof.jpg"],
  ];
  for (const [src, dest] of generated) {
    await copy(path.join(assets, src), path.join(publicDir, dest));
  }

  const cg = path.join(publicDir, "clients/clients-grid.jpg");
  const cm = await sharp(cg).metadata();
  await sharp(cg)
    .extract({
      left: 36,
      top: 250,
      width: cm.width - 72,
      height: cm.height - 340,
    })
    .jpeg({ quality: 93 })
    .toFile(path.join(publicDir, "clients/logos.jpg"));

  const productsDir = path.join(publicDir, "products");
  const files = fs.readdirSync(productsDir).filter((f) => f.endsWith(".jpg"));
  for (const file of files) {
    const full = path.join(productsDir, file);
    const tmp = `/tmp/ocleg-clean-${file}`;
    await removeShadow(full, tmp);
    fs.copyFileSync(tmp, full);
  }

  console.log("processed", files.length, "product photos");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
