const randomNumber = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const randomPosition = (width: number, size: number) => {
  const number = randomNumber(0, width - size);
  return Math.round(number / 30) * 30;
};
