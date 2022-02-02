import { promises as fs } from "fs";

export const writeFile = async (path, data) => {
  try {
    return await fs.writeFile(path, data);
  } catch (e) {
    console.log(`[ERROR]: Error write file on path ${path}`);
  }
};
