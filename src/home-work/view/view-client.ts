/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Client program for the View class
 *              Compile using: tsc --out view.js view-client.ts
 * @see Triple-Slash Directives {@link * https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html}
 * @see Compiling TypeScript project composed of many files/modules to single file {@link https://stackoverflow.com/q/22336763/12791643}
 */

/// <reference path="./view.ts" />

/**
 * Main function. Creates a view object that draws a graphic
 * representation o a function. Some examples are sin(x), cos(x) 
 * and exp(x).
 */
const main = function (): void {
  let myView1: View = View.getInstance();
  myView1.drawGraph(50);
  let sinFunction: Sin = new Sin();
  let cosFunction: Cos = new Cos();
  let expFunction: Exponential = new Exponential();
  let sqrtFunction: SquareRoot = new SquareRoot();
  let functionsToDraw: MathFunction[] = [sinFunction, cosFunction, expFunction, sqrtFunction];
  myView1.drawFunction(50, functionsToDraw);
}

main();