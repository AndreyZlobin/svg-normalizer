import { promises as fs } from "fs";

export const readFile = async (path) => {
  try {
    return await fs.readFile(path, { encoding: "utf8" });
  } catch (e) {
    console.log(`[ERROR]: Error read file on path ${path}`);
    return null;
  }
};
