/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the square root function
 */

/// <reference path='../function/function.ts'/>

/** @classdesc A class to represent the square root function*/
class SquareRoot extends MathFunction {
  private amplitude: number = 1;
  private frequency: number = 5;
  private phase: number = 0;

  /**
   * Constructor of the class. It receives the scale of the graphic
   * representation.
   * @param scale The scale of the graphic representation
   * @param strokeColor The stroke color of the graphic representation
   * @param strokeWidth The stroke width of the graphic representation
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
   * Set the amplitude of the square root function.
   * @param amplitude The amplitude
   */
  public setAmplitude(amplitude: number): void {
    this.amplitude = amplitude;
  }

  /**
   * Set the frequency of the square root function.
   * @param frequency The frequency
   */
  public setFrequency(frequency: number): void {
    this.frequency = frequency;
  }

  /**
   * Set the phase of the square root function.
   * @param phase The phase
   */
  public setPhase(phase: number): void {
    this.phase = phase;
  }

  /**
   * Get the amplitude of the square root function.
   * @returns {number} The amplitude
   */
  public getAmplitude(): number {
    return this.amplitude;
  }

  /**
   * Get the frequency of the square root function.
   * @returns {number} The frequency
   */
  public getFrequency(): number {
    return this.frequency;
  }

  /**
   * Get the phase of the square root function.
   * @returns {number} The phase
   */
  public getPhase(): number {
    return this.phase;
  }

  /**
   * Evaluate the square root function
   * @param pointToEvaluate The point to evaluate
   * @returns {number} The result of the evaluation
   */
  public evaluate(pointToEvaluate: number): number {
    return Math.sqrt(pointToEvaluate);  
  }
}