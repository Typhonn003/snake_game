import { useEffect, useRef } from "react";
import { Canvas } from "./canvas";

interface Snake {
  x: number;
  y: number;
  head: string;
  body: string;
}

interface Food {
  x: number;
  y: number;
  color: string;
}

export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");

      if (context) {
        const size = 30;
        const snake: Snake[] = [
          { x: 270, y: 300, head: "#4bbe25", body: "#60f42f" },
          { x: 300, y: 300, head: "#4bbe25", body: "#60f42f" },
          { x: 330, y: 300, head: "#4bbe25", body: "#60f42f" },
        ];
        const food: Food = { x: 90, y: 90, color: "red" };

        let direction: string, loopId: number;

        const drawFood = () => {
          const { x, y, color } = food;

          context.shadowColor = color;
          context.shadowBlur = 50;
          context.fillStyle = color;
          context.fillRect(x, y, size, size);
          context.shadowBlur = 0;
        };

        const drawSnake = () => {
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
            context.shadowBlur = 0;
          });
        };

        const moveSnake = () => {
          if (!direction) {
            return;
          }

          const head = snake[snake.length - 1];

          if (direction == "right") {
            snake.push({
              x: head.x + size,
              y: head.y,
              head: "#4bbe25",
              body: "#60f42f",
            });
          }

          if (direction == "left") {
            snake.push({
              x: head.x - size,
              y: head.y,
              head: "#4bbe25",
              body: "#60f42f",
            });
          }

          if (direction == "down") {
            snake.push({
              x: head.x,
              y: head.y + size,
              head: "#4bbe25",
              body: "#60f42f",
            });
          }

          if (direction == "up") {
            snake.push({
              x: head.x,
              y: head.y - size,
              head: "#4bbe25",
              body: "#60f42f",
            });
          }

          snake.shift();
        };

        const drawGrid = () => {
          context.lineWidth = 1;
          context.strokeStyle = "#424242";

          for (let i = 30; i < canvas.width; i += 30) {
            context.beginPath();
            context.lineTo(i, 0);
            context.lineTo(i, canvas.height);
            context.stroke();

            context.beginPath();
            context.lineTo(0, i);
            context.lineTo(canvas.width, i);
            context.stroke();
          }
        };

        const gameLoop = () => {
          clearInterval(loopId);
          context.clearRect(0, 0, canvas.width, canvas.height);
          drawGrid();
          drawFood();
          moveSnake();
          drawSnake();

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

  return <Canvas width={600} height={600} ref={canvasRef} />;
};
