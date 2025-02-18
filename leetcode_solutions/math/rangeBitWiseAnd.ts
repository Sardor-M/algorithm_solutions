/**
 * 
 * @param left 
 * @param right 
 * @returns 
 * 
 * Bit Manipulation Problem
 * 
 */

function rangeBitWiseAnd(left: number, right: number) {
  let leftVal = left;
  let rightVal = right;
  let shift: number = 0;

  while (leftVal < rightVal) {
    leftVal = leftVal >> 1;
    rightVal = rightVal >> 1;
    shift++;
  }
  return leftVal << shift;
}
