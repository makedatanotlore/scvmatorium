export const rollD = (num: number) => {
  if (num < 1) {
    return 0;
  }
  return 1 + Math.floor(Math.random() * num);
};
