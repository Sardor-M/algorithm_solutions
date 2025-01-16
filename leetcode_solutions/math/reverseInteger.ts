/**
 *
 * Reverse Integer
 *
 */

function reverse(x: number): number {
  let reversed_num: number = 0;
  let num = Math.abs(x);
  let isNegative = x < 0 ? -1 : 1;

  while (num > 0) {
    reversed_num = reversed_num * 10 + (x % 10);
    if (reversed_num > Math.pow(2, 31) - 1) {
      return 0;
    }
    x = Math.floor(x / 10);
  }
  return reversed_num * isNegative;
}
