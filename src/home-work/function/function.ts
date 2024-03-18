/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Interface to represent a function
 */

/**
 * @description Interface to represent a function
 */
interface DrawFunction {
  draw(context: CanvasRenderingContext2D, scale: number): void;
}

abstract class MathFunction implements DrawFunction {
  abstract evaluate(pointToEvaluate: number): number;

  /**
   * Draw the function in a canvas
   * @param context The context of the canvas
   * @param scale The scale of the graphic representation
   */
  draw(context: CanvasRenderingContext2D, scale: number): void {
    const STROKE_STYLE = 'black';
    const LINE_WIDTH = 1;
    context.strokeStyle = STROKE_STYLE;
    context.lineWidth = LINE_WIDTH;
    const MIDDLE_HEIGHT = context.canvas.height / 2;
    const MIDDLE_WIDTH = context.canvas.width / 2;
    context.beginPath();
    for (let i = 0; i < context.canvas.width; i++) {
      const POINT_TO_EVALUATE = (i - MIDDLE_WIDTH) / scale;
      const FUNCTION_RESULT = this.evaluate(POINT_TO_EVALUATE);
      const Y_POSITION = MIDDLE_HEIGHT - FUNCTION_RESULT * scale;
      context.lineTo(i, Y_POSITION);
    }
    context.stroke();
  }
}