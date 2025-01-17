/**
 *
 * Given an integer num, return a string of its base 7 representation.
 *
 */

function convertBase7(num: number): string {
  if (num === 0) return "0";
  let result: string = "";
  const isNegative = num < 0;
  num = Math.abs(num);

  while (num != 0) {
    let remainder = num % 7;
    result = remainder + result;

    num = Math.floor(num / 7);
  }
  return isNegative ? "-" + result : result;
}
