/**
 * Utility helpers for the Hafez web app.
 * Add shared pure functions here (formatters, validators, etc.).
 */

/**
 * Clamps a number between a min and max value.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
