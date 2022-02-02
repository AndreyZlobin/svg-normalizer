import path from "path";
import { promises as fs } from "fs";
import { svgReplacer } from "./svgReplacer.js";
import { writeFile } from "./writeFile.js";
import { readFile } from "./readFile.js";

const PATH_TO_SVG_DIR_TEST = "./public/fake-assets";

async function exists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

export const writeSvg = async (filePath, fileName) => {
  const pathToTargetDir = path.resolve(PATH_TO_SVG_DIR_TEST);
  const pathToFile = path.resolve(pathToTargetDir, fileName);

  const svg = await readFile(filePath);
  if (!svg) return;

  const normalizeSvg = svgReplacer(svg);
  const isExist = await exists(pathToTargetDir);

  if (!isExist) {
    await fs.mkdir(pathToTargetDir);
  }
  await writeFile(pathToFile, normalizeSvg);

  console.log(`[ICON]: ${fileName} normalized`);
};
