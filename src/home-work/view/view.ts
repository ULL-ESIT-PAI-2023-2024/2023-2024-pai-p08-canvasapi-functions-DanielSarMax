/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to manage the view of the application.
 *              From this class, we can draw a graph with the
 *              x and y axis, and also draw a function.
 */

/// <reference path='../graph/graph.ts' />
/// <reference path='../sin/sin.ts' />
/// <reference path='../cos/cos.ts' />
/// <reference path='../exp/exp.ts' />
/// <reference path='../sqrt/sqrt.ts' />

/** @classdesc A class to represent a graph */
class View {
  private static viewInstance: View;
  private static canvas: HTMLCanvasElement = document.getElementById('functions') as HTMLCanvasElement;
  private static context: CanvasRenderingContext2D = View.canvas.getContext('2d')!;
	
  /**
   * If the instance of the class does not exist, it creates a new one.
   * Otherwise, it returns the existing instance.
   * @returns {View} The instance of the class.
   */
  public static getInstance(): View {
    if (!View.viewInstance) {
      View.viewInstance = new View();
    }
    return this.viewInstance;
  }

  /**
   * Private constructor to avoid multiple instances of the View class.
   * @returns The instance of the class.
   */
  private constructor() {}

  /**
   * Draws the graphic. It includes the x and y axis,
   * each one with marked numbers depending on the scale. It also
   * draws a grid to make it easier to read the result.
   * @param graphicScale The scale of the graphic representation
   */
  public drawGraph(graphicScale: number): void {
    let graph: Graph = new Graph(graphicScale);
    graph.drawGraph(View.context);
  }

  /**
   * Draw the graphic representation of a function. It uses the
   * canvas to draw the function.
   * @param graphicScale The scale of the graphic representation
   */
  public drawFunction(graphicScale: number, functionsToDraw: MathFunction[]): void {
    for (let i = 0; i < functionsToDraw.length; i++) {
      functionsToDraw[i].draw(View.context, graphicScale);
    }
  }
}