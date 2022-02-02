const getArgs = (args) => {
  const result = {};
  const [, , ...rest] = args;

  rest.forEach((value, index, list) => {
    if (value.charAt(0) === "-") {
      if (index === list.length - 1) {
        result[value.substring(1)] = false; // true
      } else if (list[index + 1].charAt(0) !== "-") {
        result[value.substring(1)] = list[index + 1];
      } else {
        result[value.substring(1)] = false; // true
      }
    }
  });
  return result;
};

export { getArgs };
