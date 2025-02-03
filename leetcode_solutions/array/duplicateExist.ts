/**
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 */

function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>(nums);
  if (set.size !== nums.length) {
    return true;
  }
  return false;
}
