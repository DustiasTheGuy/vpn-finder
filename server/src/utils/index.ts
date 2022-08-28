export const cutStr = (str: string, maxLength: number = 120) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...';
  }

  return str;
};
