/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the axis of a graph
 */

/** @classdesc A class to represent the axis of the graph */
class Axis {
  private strokeColor: string = 'black';
  private strokeWidth: number = 2;
  private scale: number = 10;

  /**
   * Constructor of the class. It receives the scale of the graphic
   * representation.
   * @param scale The scale of the graphic representation
   */
  constructor(scale: number, 
              strokeColor: string = 'black', 
              strokeWidth: number = 2) {
    this.setScale(scale);
    this.setStrokeColor(strokeColor);
    this.setStrokeWidth(strokeWidth);
  }

  /**
   * Set the stroke color of the graphic representation.
   * @param strokeColor The stroke color
   */
  public setStrokeColor(strokeColor: string): void {
    this.strokeColor = strokeColor;
  }

  /**
   * Set the stroke width of the graphic representation.
   * @param strokeWidth The stroke width
   */
  public setStrokeWidth(strokeWidth: number): void {
    if (strokeWidth > 0) {
      this.strokeWidth = strokeWidth;
    } else {
      console.log('The stroke width has to be a positive number');
    }
  }

  /**
   * Set the scale of the graphic representation.
   * @param scale It has to be a positive number.
   */
  public setScale(scale: number): void {
    if (scale > 0) {
      this.scale = scale;
    } else {
      console.log('The scale has to be a positive number');
    }
  }

  /**
   * Get the scale of the graphic representation.
   * @returns {number} The scale of the graphic representation.
   */
  public getScale(): number {
    return this.scale;
  }

  /**
   * Creates instances of all the objects that are going to be drawn
   * in the graphic representation.
   * @param context 
   */
  public drawAxis(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(0, context.canvas.height / 2); // Start point of the X axis
    context.lineTo(context.canvas.width, context.canvas.height / 2); // End point of the X axis
    context.moveTo(context.canvas.width / 2, 0); // Start point of the Y axis
    context.lineTo(context.canvas.width / 2, context.canvas.height); // End point of the Y axis
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.strokeWidth;
    context.stroke();
    this.drawRectangles(context);
    this.drawNumbers(context);
  }

  /**
   * Draw the rectangles of the axis with the scale of the graphic representation and a
   * line to make it easier to read the numbers. The starting point is in the middle
   * @param context The context of the canvas
   */
  public drawRectangles(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.strokeWidth;
    const MIDDLE_WIDTH = context.canvas.width / 2;
    const MIDDLE_HEIGHT = context.canvas.height / 2;
    const LINE_HEIGHT = 10;
    for (let i = MIDDLE_WIDTH; i < context.canvas.width; i += this.scale) {
      context.moveTo(i, MIDDLE_HEIGHT - LINE_HEIGHT / 2);
      context.lineTo(i, MIDDLE_HEIGHT + LINE_HEIGHT / 2);
      context.stroke();
    }
    for (let i = MIDDLE_WIDTH; i > 0; i -= this.scale) {
      context.moveTo(i, MIDDLE_HEIGHT - LINE_HEIGHT / 2);
      context.lineTo(i, MIDDLE_HEIGHT + LINE_HEIGHT / 2);
      context.stroke();
    }
    for (let i = MIDDLE_HEIGHT; i < context.canvas.height; i += this.scale) {
      context.moveTo(MIDDLE_WIDTH - LINE_HEIGHT / 2, i);
      context.lineTo(MIDDLE_WIDTH + LINE_HEIGHT / 2, i);
      context.stroke();
    }
    for (let i = MIDDLE_HEIGHT; i > 0; i -= this.scale) {
      context.moveTo(MIDDLE_WIDTH - LINE_HEIGHT / 2, i);
      context.lineTo(MIDDLE_WIDTH + LINE_HEIGHT / 2, i);
      context.stroke();
    }
  }

  /**
   * Draw the numbers of the axis with the scale of the graphic representation. The starting
   * point is in the middle
   * @param context The context of the canvas
   */
  public drawNumbers(context: CanvasRenderingContext2D): void {
    context.font = '10px Arial';
    context.fillStyle = this.strokeColor;
    const MIDDLE_WIDTH = context.canvas.width / 2;
    const MIDDLE_HEIGHT = context.canvas.height / 2;
    const SCALE = this.getScale();
    // Starting point
    context.fillText('0', MIDDLE_WIDTH - 10, MIDDLE_HEIGHT + 15);
    for (let i = MIDDLE_WIDTH + SCALE; i < context.canvas.width; i += SCALE) {
      context.fillText((i - MIDDLE_WIDTH).toString(), i - 10, MIDDLE_HEIGHT + 15);
    }
    for (let i = MIDDLE_HEIGHT + SCALE; i < context.canvas.height; i += SCALE) {
      context.fillText((MIDDLE_HEIGHT - i).toString(), MIDDLE_WIDTH + 5, i + 5);
    }
    for (let i = MIDDLE_WIDTH - SCALE; i > 0; i -= SCALE) {
      context.fillText((i - MIDDLE_WIDTH).toString(), i - 10, MIDDLE_HEIGHT + 15);
    }
    for (let i = MIDDLE_HEIGHT - SCALE; i > 0; i -= SCALE) {
      context.fillText((MIDDLE_HEIGHT - i).toString(), MIDDLE_WIDTH + 5, i + 5);
    }
  }
}