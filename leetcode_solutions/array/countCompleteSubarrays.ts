/**
 * Time Complexity: O(n^2) - since we are using a nested loop
 * Space Complexity: O(n): since the k is the number of distinct values in the array,
 * and in the worst case all elements are distinct values : k = n so the space complexity is O(n)
 */

function countCompleteSubarrays(nums: number[]): number {
  const isDistinctVal = new Set(nums).size;
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const windowSlider = new Map<number, number>();
    for (let j = i; j < n; j++) {
      const num = nums[j];
      windowSlider.set(num, (windowSlider.get(num) || 0) + 1);

      if (windowSlider.size === isDistinctVal) {
        count += n - j;
        break;
      }
    }
  }
  return count;
}
