
/**
 * Generates an array of max - min entries with the values min -> max (inclusive)
 * @param min min value
 * @param max max value
 */
export function range(min: number, max: number): Array<number> {
  return Array(max - min)
    .fill(null)
    .map((_, idx) => idx + min)
}
