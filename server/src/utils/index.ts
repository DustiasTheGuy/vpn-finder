export const cutStr = (str: string, maxLength: number = 75) => {
  if (str.length > 75) {
    return str.slice(0, 72) + '...';
  }

  return str;
};
