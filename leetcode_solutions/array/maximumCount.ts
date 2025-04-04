/**
 *
 * O copmlexity: O(log n)
 *
 */

function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}
