export const drawGrid = (
  context: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number
) => {
  context.lineWidth = 1;
  context.strokeStyle = "#424242";

  for (let i = 30; i < canvasWidth; i += 30) {
    context.beginPath();
    context.lineTo(i, 0);
    context.lineTo(i, canvasHeight);
    context.stroke();

    context.beginPath();
    context.lineTo(0, i);
    context.lineTo(canvasWidth, i);
    context.stroke();
  }
};
