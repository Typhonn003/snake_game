import { Snake } from "../interfaces/snake";

const gameOver = (direction: string | undefined) => {
  direction = undefined;
};

export const checkCollision = (
  snake: Snake[],
  width: number,
  size: number,
  direction: string | undefined
) => {
  const { x, y } = snake[snake.length - 1];
  const canvasLimit = width - size;
  const neckIndex = snake.length - 2;

  const wallCollision = x < 0 || x > canvasLimit || y < 0 || y > canvasLimit;

  const selfCollision = snake.find(
    (position, index) =>
      index < neckIndex && position.x === x && position.y === y
  );

  if (wallCollision || selfCollision) {
    gameOver(direction);
  }
};
