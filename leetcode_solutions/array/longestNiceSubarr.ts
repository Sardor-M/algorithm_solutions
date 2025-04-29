/**
 * Time Complexity: O(n) - since total operations are linear so it will be O(n)
 * Space Complexity: O(1) - meaning that we do not need a more memory regardless of input size
 */
function longestNiceSubarray(nums: number[]): number {
  // var to store the max length
  let maxLength = 0;
  let left = 0;
  let currWindowOR = 0;

  for (let right = 0; right < nums.length; right++) {
    // num at the curr right pointer
    const currNum = nums[right];

    // when adding currNum breaks the nice property and
    // we shrink the window from the left
    while ((currWindowOR & currNum) !== 0) {
      // the number at the current left pointer
      const leftNum = nums[left];
      currWindowOR ^= leftNum;
      // shrink the window from the left
      left++;
    }
    // we add the nums[right] to currWindow
    currWindowOR |= nums[right];

    const currLength = right - left + 1;
    maxLength = Math.max(maxLength, currLength);
  }
  return maxLength;
}
