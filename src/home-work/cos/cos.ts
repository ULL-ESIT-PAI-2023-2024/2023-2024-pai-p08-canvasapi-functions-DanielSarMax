/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel David Sarmiento Barrera
 * @since Mar 19 2024
 * @description Class to illustrate the cosine function
 */

/// <reference path='../function/function.ts'/>

class Cos extends MathFunction {
  private amplitude: number = 1;
  private frequency: number = 5;
  private phase: number = 0;

  /**
   * Constructor of the class. It receives the scale of the graphic
   * representation.
   * @param amplitude The amplitude of the cos function
   * @param frequency The frequency of the cos function
   * @param phase The phase of the cos function
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
   * Set the amplitude of the sen function.
   * @param amplitude The amplitude of the sen function
   */
  public setAmplitude(amplitude: number): void {
    this.amplitude = amplitude;
  }

  /**
   * Set the frequency of the sen function.
   * @param frequency The frequency of the sen function
   */
  public setFrequency(frequency: number): void {
    this.frequency = frequency;
  }

  /**
   * Set the phase of the sen function.
   * @param phase The phase of the sen function
   */
  public setPhase(phase: number): void {
    this.phase = phase;
  }

  /**
   * Get the amplitude of the sen function.
   * @returns {number} The amplitude of the sen function.
   */
  public getAmplitude(): number {
    return this.amplitude;
  }

  /**
   * Get the frequency of the sen function.
   * @returns {number} The frequency of the sen function.
   */
  public getFrequency(): number {
    return this.frequency;
  }

  /**
   * Get the phase of the sen function.
   * @returns {number} The phase of the sen function.
   */
  public getPhase(): number {
    return this.phase;
  }

  /**
   * Evaluate the cos function in a given point.
   * @param pointToEvaluate The point to evaluate the cos function.
   * @returns The value of the cos function in the given point.
   */
  public evaluate(pointToEvaluate: number): number {
    return Math.cos(pointToEvaluate);
  }
}