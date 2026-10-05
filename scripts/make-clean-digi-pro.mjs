import fs from "fs";
import path from "path";
import sharp from "sharp";

async function processImage() {
  const root = process.cwd();
  const inputPath = path.join(root, "Digi max pro.jpeg");
  const outPublic = path.join(root, "public", "images", "products", "digi-max-pro.jpg");
  const outExport = path.join(root, "out", "images", "products", "digi-max-pro.jpg");

  // Step 1: Rotate by -5.0 degrees so front panel, text, and meter are upright and level
  const rotAngle = -5.0;
  const rotBuf = await sharp(inputPath)
    .rotate(rotAngle, { background: { r: 255, g: 255, b: 255 } })
    .toBuffer();

  const rotMeta = await sharp(rotBuf).metadata();
  const rw = rotMeta.width;
  const rh = rotMeta.height;

  // Coordinate transform from original (1279 x 1212) to rotated (rw x rh)
  const cx = 1279 / 2;
  const cy = 1212 / 2;
  const theta = (rotAngle * Math.PI) / 180;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  const rcx = rw / 2;
  const rcy = rh / 2;

  function mapPt(x, y) {
    const dx = x - cx;
    const dy = y - cy;
    const rx = dx * cos - dy * sin + rcx;
    const ry = dx * sin + dy * cos + rcy;
    return [Math.round(rx), Math.round(ry)];
  }

  // Exact complete perimeter points around the entire product including full top black roof
  const origPoints = [
    // Top-left of black casing roof
    [68, 8],
    [120, 12],
    [200, 18],
    [300, 25],
    [400, 32],
    [500, 40],
    [600, 50],
    [700, 62],
    [800, 76],
    [900, 91],
    [1000, 107],
    [1100, 122],
    [1200, 134],
    [1278, 140], // Top-right corner of black roof
    // Right side of casing & door
    [1278, 175],
    [1254, 250],
    [1245, 350],
    [1236, 450],
    [1226, 550],
    [1215, 650],
    [1205, 750],
    [1195, 850],
    [1188, 890],
    [1193, 910],
    [1188, 930],
    [1184, 950],
    [1173, 1050],
    [1160, 1150],
    [1156, 1198], // Bottom-right corner
    // Bottom edge of door / bottom lip
    [1080, 1187],
    [980, 1173],
    [880, 1159],
    [780, 1145],
    [680, 1131],
    [580, 1117],
    [480, 1102],
    [380, 1088],
    [280, 1074],
    [180, 1059],
    [80, 1044],
    [60, 1042], // Bottom-left corner
    // Left edge & bottom hinge
    [60, 955],
    [35, 948],
    [20, 935],
    [18, 920],
    [18, 905],
    [20, 890],
    [22, 875],
    [20, 860],
    [21, 845],
    [34, 830],
    [45, 815],
    [60, 800],
    // Left edge between hinges
    [60, 700],
    [60, 550],
    [60, 400],
    [60, 290],
    // Top hinge
    [30, 280],
    [16, 265],
    [12, 240],
    [12, 160],
    [16, 140],
    [26, 130],
    [60, 122],
    // Above top hinge to roof
    [60, 50],
    [65, 18],
    [68, 8],
  ];

  const mappedPoints = origPoints.map(([x, y]) => mapPt(x, y));
  const svgPoly = mappedPoints.map((p) => p.join(",")).join(" ");

  const maskSvg = Buffer.from(
    `<svg width="${rw}" height="${rh}"><polygon points="${svgPoly}" fill="white" /></svg>`
  );
  const maskBuf = await sharp(maskSvg).blur(0.8).toBuffer();

  const cutout = await sharp(rotBuf)
    .ensureAlpha()
    .composite([{ input: maskBuf, blend: "dest-in" }])
    .png()
    .toBuffer();

  // Find bounding box of mappedPoints
  let minX = rw, maxX = 0, minY = rh, maxY = 0;
  for (const [x, y] of mappedPoints) {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }

  const cropW = maxX - minX;
  const cropH = maxY - minY;

  const cropped = await sharp(cutout)
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .toBuffer();

  // Add small clean padding of 14px around the product (matching brochure product images)
  const pad = 14;
  const canvasW = cropW + pad * 2;
  const canvasH = cropH + pad * 2;

  // Composite onto pure white studio background
  const onWhite = await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite([{ input: cropped, left: pad, top: pad }])
    .modulate({
      brightness: 1.02,
      saturation: 1.08,
    })
    .sharpen({ sigma: 1.0, m1: 0.9, m2: 0.5 })
    .png()
    .toBuffer();

  // Resize to 600px width for optimal fidelity and scale matching other catalog items
  const finalJpg = await sharp(onWhite)
    .resize(600, null, { fit: "contain" })
    .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toBuffer();

  fs.writeFileSync(outPublic, finalJpg);
  if (fs.existsSync(path.dirname(outExport))) {
    fs.writeFileSync(outExport, finalJpg);
  }

  console.log("Successfully created perfected studio cutout from Digi max pro.jpeg!");
  const metaOut = await sharp(outPublic).metadata();
  console.log("Output size:", metaOut.width, "x", metaOut.height);
}

processImage().catch(console.error);
