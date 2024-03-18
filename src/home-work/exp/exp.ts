/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the exponential function
 */

/// <reference path='../function/function.ts'/>

class Exponential extends MathFunction {
  private amplitude: number = 1;
  private frequency: number = 5;
  private phase: number = 0;

  /**
   * Constructor of the class. It receives the scale of the graphic
   * representation.
   * @param amplitude The amplitude of the exponential function
   * @param frequency The frequency of the exponential function
   * @param phase The phase of the exponential function
   */
  constructor(amplitude: number = 1,
              frequency: number = 1,
              phase: number = 0) {
    super();
    this.setAmplitude(amplitude);
    this.setFrequency(frequency);
    this.setPhase(phase);
  }

  /**
   * Set the amplitude of the exponential function.
   * @param amplitude The amplitude
   */
  public setAmplitude(amplitude: number): void {
    this.amplitude = amplitude;
  }

  /**
   * Set the frequency of the exponential function.
   * @param frequency The frequency
   */
  public setFrequency(frequency: number): void {
    this.frequency = frequency;
  }

  /**
   * Set the phase of the exponential function.
   * @param phase The phase
   */
  public setPhase(phase: number): void {
    this.phase = phase;
  }

  /**
   * Get the amplitude of the exponential function.
   * @returns The amplitude of the exponential function
   */
  public getAmplitude(): number {
    return this.amplitude;
  }

  /**
   * Get the frequency of the exponential function.
   * @returns The frequency of the exponential function
   */
  public getFrequency(): number {
    return this.frequency;
  }

  /**
   * Get the phase of the exponential function.
   * @returns The phase of the exponential function
   */
  public getPhase(): number {
    return this.phase;
  }

  /**
   * Evaluate the exponential function in a point.
   * @param pointToEvaluate The point to evaluate
   * @returns The value of the exponential function in the point
   */
  public evaluate(pointToEvaluate: number): number {
    return Math.exp(pointToEvaluate);
  }

  /**
   * Draw the exponential function.
   * @param context The context of the canvas
   * @param scale The scale of the graphic representation
   */
  public drawFunction(context: CanvasRenderingContext2D, scale: number): void {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(0, context.canvas.height / 2);
    for (let i = 0; i < context.canvas.width; i += scale) {
      context.lineTo(i, context.canvas.height / 2 - this.evaluate((i - context.canvas.width / 2) / scale) * scale);
    }
    context.stroke();
  }
}