export const getUnion = (files) => {
  return files
    .reduce((acc, file, index, list) => {
      const isLast = list[list.length - 1] === file;
      acc += `'${file.replace(".svg", "")}'${!isLast ? " | " : ""}`;
      return acc;
    }, "")
    .trim();
};
