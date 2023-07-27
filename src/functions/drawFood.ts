import { Food } from "../interfaces/food";

export const drawFood = (
  context: CanvasRenderingContext2D,
  food: Food,
  size: number
) => {
  const { x, y, color } = food;

  context.shadowColor = color;
  context.shadowBlur = 50;
  context.fillStyle = color;
  context.fillRect(x, y, size, size);
  context.shadowBlur = 0;
};
