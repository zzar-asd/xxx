/**
 * Calculator module providing basic arithmetic operations.
 */

/**
 * Adds two numbers together.
 * @param left - The first number (augend)
 * @param right - The second number (addend)
 * @returns The sum of left and right
 */
export function add(left: number, right: number): number {
  return left + right;
}

/**
 * Subtracts the right number from the left number.
 * @param left - The number to subtract from (minuend)
 * @param right - The number to subtract (subtrahend)
 * @returns The difference of left and right
 */
export function subtract(left: number, right: number): number {
  return left - right;
}
