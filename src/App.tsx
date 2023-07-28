import { useEffect, useRef, useState } from "react";
import { Canvas, Div } from "./style";
import {
  checkEat,
  drawFood,
  drawGrid,
  drawSnake,
  moveSnake,
} from "./functions";
import { Food } from "./interfaces/food";
import { Snake } from "./interfaces/snake";

export const App = () => {
  const [score, setScore] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");

      if (context) {
        const canvasWidth = canvas.width;
        const canvasHeigth = canvas.height;
        const headColor = "#4bbe25";
        const bodyColor = "#60f42f";
        const size = 30;
        const snake: Snake[] = [
          { x: 120, y: 300, head: headColor, body: bodyColor },
          { x: 150, y: 300, head: headColor, body: bodyColor },
        ];
        const food: Food = {
          x: 450,
          y: 300,
          color: "red",
        };
        let loopId: number;
        let direction: string | undefined;

        const checkCollision = () => {
          const { x, y } = snake[snake.length - 1];
          const canvasLimit = canvas.width - size;
          const neckIndex = snake.length - 2;

          const wallCollision =
            x < 0 || x > canvasLimit || y < 0 || y > canvasLimit;

          const selfCollision = snake.find(
            (position, index) =>
              index < neckIndex && position.x === x && position.y === y
          );

          if (wallCollision || selfCollision) {
            gameOver();
          }
        };

        const gameOver = () => {
          direction = undefined;
        };

        const gameLoop = () => {
          clearInterval(loopId);
          context.clearRect(0, 0, canvasWidth, canvasHeigth);
          drawGrid(context, canvasWidth, canvasHeigth);
          drawFood(context, food, size);
          moveSnake(direction, snake, size);
          drawSnake(context, snake, size);
          checkEat(snake, food, canvasWidth, size, setScore);
          checkCollision();

          loopId = setTimeout(() => {
            gameLoop();
          }, 100);
        };

        gameLoop();

        document.addEventListener("keydown", ({ key }) => {
          if (key == "ArrowRight" && direction != "left") {
            direction = "right";
          }
          if (key == "ArrowLeft" && direction != "right") {
            direction = "left";
          }
          if (key == "ArrowDown" && direction != "up") {
            direction = "down";
          }
          if (key == "ArrowUp" && direction != "down") {
            direction = "up";
          }
        });
      }
    }
  }, []);

  return (
    <Div>
      <h2>Score: {score}</h2>
      <Canvas width={600} height={600} ref={canvasRef} />
    </Div>
  );
};
