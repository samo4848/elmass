import * as fabric from "fabric";
// Function to add a grid to the canvas
export const addGrid = (
  canvas: fabric.Canvas,
  gridSpacing: number = 50,
  gridColor: string = "black",
  gridOpacity: number = 0.3
): void => {
  const canvasWidth = 10000;
  const canvasHeight = 10000;

  // Clear previous grid lines
  const existingGridLines = canvas.getObjects().filter(obj => obj instanceof fabric.Line);
  canvas.remove(...existingGridLines);

  const gridLines: fabric.Line[] = [];

  // Grid line properties
  const gridLineOptions = {
    stroke: gridColor,
    strokeWidth: 1,
    selectable: false,
    opacity: gridOpacity,
  };

  // Create vertical grid lines
  for (let x = 0; x <= canvasWidth; x += gridSpacing) {
    gridLines.push(new fabric.Line([x, 0, x, canvasHeight], gridLineOptions));
  }

  // Create horizontal grid lines
  for (let y = 0; y <= canvasHeight; y += gridSpacing) {
    gridLines.push(new fabric.Line([0, y, canvasWidth, y], gridLineOptions));
  }

  // Add all grid lines to the canvas
  canvas.add(...gridLines);
  canvas.renderAll();
};
