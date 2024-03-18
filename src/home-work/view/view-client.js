/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 10, 2023
 * @description Client program for the View class
 *              Compile using: tsc --out view.js view-client.ts
 * @see Triple-Slash Directives {@link * https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html}
 */

/// <reference path="./view.ts" />

/**
 * Main function. Creates a view object that draws N random figures
 * specified by the user in the canvas.
 */
var main = function () {
    var myView1 = new View();
    myView1.draw();
};
main();
