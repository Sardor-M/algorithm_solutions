/**
 * 
 * O copmlexity: O(n)
 * 
 */

function maximumCount(nums: number[]): number {
  let positiveCount = 0;
  let negativeCount = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) positiveCount++;
    if (nums[i] < 0) negativeCount++;
  }
  return (result = Math.max(positiveCount, negativeCount));
}
