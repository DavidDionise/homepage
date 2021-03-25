/**
 * Returns a random integer between min and max (inclusive)
 * @param min min value
 * @param max max value
 */
export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns a random number between min and max (inclusive)
 * @param min min value
 * @param max max value
 */
export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
