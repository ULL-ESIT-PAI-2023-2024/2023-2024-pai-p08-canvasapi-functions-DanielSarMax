/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate multiple figures
 *              It uses graphic capabilities using canvas
 *              [based on: Creating and Drawing on an HTML5 Canvas using JavaScript]
 * @see {@link https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1}
 */

/// <reference path='../axis/axis.ts'/>
/// <reference path='../grid/grid.ts'/>

/** @classdesc A class to represent a graph */
class Graph {
  private scale: number = 10;

  /**
   * Constructor of the class. It receives the scale of the graphic
   * representation.
   * @param scale The scale of the graphic representation
   */
  constructor(scale: number) {
    this.setScale(scale);
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
  public drawGraph(context: CanvasRenderingContext2D): void {
    let axis: Axis = new Axis(this.scale);
    axis.drawAxis(context);
    let grid: Grid = new Grid(this.scale);
    grid.drawGrid(context);
  }
}