/**
 * Time Complexity: O(n)
 * Space Complexity: O(n) since we create an array based on
 * the input size, so it will be O(n)
 */

function buildArray(nums: number[]): number[] {
  const answer = new Array();

  for (let i = 0; i < nums.length; i++) {
    answer[i] = nums[nums[i]];
  }
  return answer;
}
