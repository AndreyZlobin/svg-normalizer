import { promises as fs } from "fs";

export const getAllFilesInDir = async (pathToDir) => {
  try {
    return await fs.readdir(pathToDir);
  } catch (e) {
    console.log("[ERROR]: ошибка чтения директории");
    return null;
  }
};
