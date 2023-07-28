import { randomPosition } from ".";
import { Food } from "../interfaces/food";
import { Snake } from "../interfaces/snake";

export const checkEat = (
  snake: Snake[],
  food: Food,
  width: number,
  size: number,
  score: (value: (value: number) => number) => void
) => {
  const head = snake[snake.length - 1];

  if (head.x == food.x && head.y == food.y) {
    snake.push(head);

    let x = randomPosition(width, size);
    let y = randomPosition(width, size);

    while (snake.find((position) => position.x == x && position.y == y)) {
      x = randomPosition(width, size);
      y = randomPosition(width, size);
    }

    food.x = x;
    food.y = y;
    score((prevScore: number) => prevScore + 10);
  }
};
