/**
 *
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 *
 */

function missingNumber(nums: number[]): number {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  let currentSum = nums.reduce((acc, curr) => acc + curr, 0);
  // returns the missing number
  return total - currentSum;
}
