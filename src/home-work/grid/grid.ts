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
class Grid {
  private strokeColor: string = 'grey';
  private strokeWidth: number = 1;
  private scale: number = 10;

  /**
   * Constructor of the class. It receives the scale of the graphic
   * representation.
   * @param scale The scale of the graphic representation
   * @param strokeColor The stroke color of the graphic representation
   * @param strokeWidth The stroke width of the graphic representation
   */
  constructor(scale: number, 
              strokeColor: string = 'grey', 
              strokeWidth: number = 1) {
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
   * Draw the grid of the graphic representation.
   * @param context The context of the canvas
   */
  public drawGrid(context: CanvasRenderingContext2D): void {
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.strokeWidth;
    const CANVAS_WIDTH: number = context.canvas.width;
    const CANVAS_HEIGHT: number = context.canvas.height;
    const SCALE: number = this.scale;
    for (let i = CANVAS_WIDTH / 2; i < CANVAS_WIDTH; i += SCALE) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, CANVAS_HEIGHT);
      context.stroke();
    }
    for (let i = CANVAS_WIDTH / 2; i > 0; i -= SCALE) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, CANVAS_HEIGHT);
      context.stroke();
    }
    for (let i = CANVAS_HEIGHT / 2; i < CANVAS_HEIGHT; i += SCALE) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(CANVAS_WIDTH, i);
      context.stroke();
    }
    for (let i = CANVAS_HEIGHT / 2; i > 0; i -= SCALE) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(CANVAS_WIDTH, i);
      context.stroke();
    }
  }
}