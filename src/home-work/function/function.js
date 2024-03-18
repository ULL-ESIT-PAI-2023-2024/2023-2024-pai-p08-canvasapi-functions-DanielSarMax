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
var MathFunction = /** @class */ (function () {
    function MathFunction() {
    }
    MathFunction.prototype.draw = function (context, scale) {
        alert('This method has to be implemented');
        var STROKE_STYLE = 'black';
        var LINE_WIDTH = 1;
        context.strokeStyle = STROKE_STYLE;
        context.lineWidth = LINE_WIDTH;
        var MIDDLE_HEIGHT = context.canvas.height / 2;
        var MIDDLE_WIDTH = context.canvas.width / 2;
        context.beginPath();
        for (var i = 0; i < context.canvas.width; i++) {
            var POINT_TO_EVALUATE = (i - MIDDLE_WIDTH) / scale;
            var FUNCTION_RESULT = this.evaluate(POINT_TO_EVALUATE);
            var Y_POSITION = MIDDLE_HEIGHT - FUNCTION_RESULT * scale;
            context.lineTo(i, Y_POSITION);
        }
        context.stroke();
    };
    return MathFunction;
}());
