import { Snake } from "../interfaces/snake";

export const drawSnake = (
  context: CanvasRenderingContext2D,
  snake: Snake[],
  size: number
) => {
  const { x, y, head, body } = snake[0];

  context.fillStyle = body;
  context.fillRect(x, y, size, size);

  snake.forEach((position, index) => {
    if (index === snake.length - 1) {
      context.shadowColor = head;
      context.shadowBlur = 40;
      context.fillStyle = head;
    }
    context.fillRect(position.x, position.y, size, size);
    context.strokeStyle = "#000"
    context.strokeRect(position.x, position.y, size, size)
    context.shadowBlur = 0;
  });
};
