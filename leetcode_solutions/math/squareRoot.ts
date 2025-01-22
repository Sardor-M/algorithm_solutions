/**
 *
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 *
 */

function mySqrt(x: number): number {
  let leftPointer: number = 0;
  let rightPointer: number = x;
  let result: number = 0;

  // edge case wayerdaki 0 ning ildiz ostisi 0 va 1niki ham 1
  if (x === 0 || x === 1) {
    return x;
  }

  while (leftPointer <= rightPointer) {
    let mid = Math.floor((leftPointer + rightPointer) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid <= x) {
      result = mid;             // bu yerda resultni current midga udpate qilamiz
      leftPointer = mid + 1;    // va left pointerni move qilamiz
    } else if (mid * mid >= x) {
      rightPointer = mid - 1;
    }
  }
  return result;
}
