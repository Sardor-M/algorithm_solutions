/**
 * Time Complexity: O(n) - proportional to the number of elements visited which is
 * k + (nums.length - k) = nums.length becomes a O(n)
 * Space Complexity: O(1) - constant amount of data
 */
function findMaxAverage(nums: number[], k: number): number {
  let currSum = 0;

  for (let i = 0; i < k; i++) {
    currSum += nums[i];
  }
  let maxAvg = currSum / k;

  // slide the window over the array
  for (let i = k; i < nums.length; i++) {
    // we udpate the currSum by subtracting the elem (i-k)
    // then add it new elem to window (at i)
    currSum = currSum - nums[i - k] + nums[i];
    // calculate the avg of the curr window
    let currWindowAvg = currSum / k;
    // compare the window's avg and maxAvg
    maxAvg = Math.max(maxAvg, currWindowAvg);
  }
  return maxAvg;
}
