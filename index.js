#!/usr/bin/env node
import path from "path";
import { getArgs } from "./helpers/getArgs.js";
import { getAllFilesInDir } from "./helpers/getAllFilesInDir.js";
import { writeSvg } from "./helpers/writeSvg.js";
import { getUnion } from "./helpers/getUnion.js";

const argv = getArgs(process.argv);

if (!argv.p) {
  console.error("Путь к директории с иконкой не был передан");
  process.exit(0);
}

const PATH_TO_SVG_DIR = argv.p;

const defaultOptions = {
  unions: true,
  unionName: "IconName",
};

async function normalizeSvg(pathToSvgDir, options = defaultOptions) {
  const { unions, unionName } = options;

  const pathToDir = path.resolve(pathToSvgDir);
  const files = await getAllFilesInDir(pathToDir);
  if (!files) return;

  const onlySvgFiles = files.filter((file) => file.includes(".svg"));
  for await (const [_, file] of onlySvgFiles.entries()) {
    if (file.includes(".svg")) {
      await writeSvg(path.resolve(pathToDir, file), file);
    }
  }
  if (unions)
    console.log(`[UNION]: type ${unionName} = ${getUnion(onlySvgFiles)};`);
}

normalizeSvg(PATH_TO_SVG_DIR, {
  unions: true,
  unionName: "Custom",
});
