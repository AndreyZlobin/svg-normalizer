export const svgReplacer = (svg) => {
  const regExp = /fill=(["'])((#[abcdef0-9]{6})|(none))(["'])/gi;
  const replaceTo = 'fill="current"';
  return svg.replaceAll(regExp, replaceTo);
};
