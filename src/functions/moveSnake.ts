import { Snake } from "../interfaces/snake";

export const moveSnake = (
  direction: string | undefined,
  snake: Snake[],
  size: number
) => {
  if (!direction) {
    return;
  }

  const { x, y, head, body } = snake[snake.length - 1];

  if (direction == "right") {
    snake.push({
      x: x + size,
      y: y,
      head: head,
      body: body,
    });
  }

  if (direction == "left") {
    snake.push({
      x: x - size,
      y: y,
      head: head,
      body: body,
    });
  }

  if (direction == "down") {
    snake.push({
      x: x,
      y: y + size,
      head: head,
      body: body,
    });
  }

  if (direction == "up") {
    snake.push({
      x: x,
      y: y - size,
      head: head,
      body: body,
    });
  }

  snake.shift();
};
