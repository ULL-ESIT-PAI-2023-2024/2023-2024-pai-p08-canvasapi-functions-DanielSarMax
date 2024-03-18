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
/** @classdesc A class to represent a graph */
var Graph = /** @class */ (function () {
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param scale The scale of the graphic representation
     */
    function Graph(scale) {
        this.scale = 10;
        this.setScale(scale);
    }
    /**
     * Set the scale of the graphic representation.
     * @param scale It has to be a positive number.
     */
    Graph.prototype.setScale = function (scale) {
        if (scale > 0) {
            this.scale = scale;
        }
        else {
            console.log('The scale has to be a positive number');
        }
    };
    /**
     * Get the scale of the graphic representation.
     * @returns {number} The scale of the graphic representation.
     */
    Graph.prototype.getScale = function () {
        return this.scale;
    };
    /**
     * Creates instances of all the objects that are going to be drawn
     * in the graphic representation.
     * @param context
     */
    Graph.prototype.drawGraph = function (context) {
        var axis = new Axis(this.scale);
        axis.drawAxis(context);
    };
    return Graph;
}());
