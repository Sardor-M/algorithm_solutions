/**
 *
 * Time Complexity: O(n^2) - har bir elementni boshqa elementlar bilan solishtiramiz
 * Space Complexity: O(1) - faqat counterni valuesini saqlaymiz
 *
 */

function countPairs(nums: number[], k: number): number {
  let counter = 0;
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        // (i * j) divisible by k ekanligini tekshiramiz
        if ((i * j) % k === 0) {
          counter++;
        }
      }
    }
  }
  return counter;
}
