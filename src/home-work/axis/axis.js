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
/** @classdesc A class to represent multiple figures */
var Axis = /** @class */ (function () {
    /**
     * Constructor of the class. It receives the scale of the graphic
     * representation.
     * @param scale The scale of the graphic representation
     */
    function Axis(scale, strokeColor, strokeWidth) {
        if (strokeColor === void 0) { strokeColor = 'black'; }
        if (strokeWidth === void 0) { strokeWidth = 2; }
        this.strokeColor = 'black';
        this.strokeWidth = 2;
        this.scale = 10;
        this.setScale(scale);
        this.setStrokeColor(strokeColor);
        this.setStrokeWidth(strokeWidth);
    }
    /**
     * Set the stroke color of the graphic representation.
     * @param strokeColor The stroke color
     */
    Axis.prototype.setStrokeColor = function (strokeColor) {
        this.strokeColor = strokeColor;
    };
    /**
     * Set the stroke width of the graphic representation.
     * @param strokeWidth The stroke width
     */
    Axis.prototype.setStrokeWidth = function (strokeWidth) {
        if (strokeWidth > 0) {
            this.strokeWidth = strokeWidth;
        }
        else {
            console.log('The stroke width has to be a positive number');
        }
    };
    /**
     * Set the scale of the graphic representation.
     * @param scale It has to be a positive number.
     */
    Axis.prototype.setScale = function (scale) {
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
    Axis.prototype.getScale = function () {
        return this.scale;
    };
    /**
     * Creates instances of all the objects that are going to be drawn
     * in the graphic representation.
     * @param context
     */
    Axis.prototype.drawAxis = function (context) {
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
    };
    /**
     * Draw the rectangles of the axis with the scale of the graphic representation and a
     * line to make it easier to read the numbers. The starting point is in the middle
     * @param context The context of the canvas
     */
    Axis.prototype.drawRectangles = function (context) {
        context.beginPath();
        context.strokeStyle = this.strokeColor;
        context.lineWidth = this.strokeWidth;
        for (var i = 0; i < context.canvas.width; i += this.scale) {
            context.moveTo(i, context.canvas.height / 2 - 5);
            context.lineTo(i, context.canvas.height / 2 + 5);
            context.stroke();
        }
        for (var i = 0; i < context.canvas.height; i += this.scale) {
            context.moveTo(context.canvas.width / 2 - 5, i);
            context.lineTo(context.canvas.width / 2 + 5, i);
            context.stroke();
        }
    };
    /**
     * Draw the numbers of the axis with the scale of the graphic representation. The starting
     * point is in the middle
     * @param context The context of the canvas
     */
    Axis.prototype.drawNumbers = function (context) {
        context.beginPath();
        context.fillStyle = this.strokeColor;
        context.font = '10px Arial';
        for (var i = 0; i < context.canvas.width; i += this.scale) {
            context.fillText(String(i - context.canvas.width / 2), i, context.canvas.height / 2 + 10);
        }
        for (var i = 0; i < context.canvas.height; i += this.scale) {
            context.fillText(String(context.canvas.height / 2 - i), context.canvas.width / 2 + 10, i);
        }
    };
    return Axis;
}());
