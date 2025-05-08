/**
 * Time Complexity: O(n)
 * Space Complexity: O(1) - constant amount of memory regardless of the input size
 */
function findNumbers(nums: number[]): number {
  let count = 0;

  for (const num of nums) {
    let temp = num;
    let numCount = 0;

    while (temp > 0) {
      temp = Math.floor(temp / 10);
      numCount++;
    }

    if (numCount % 2 === 0) {
      count++;
    }
  }
  return count;
}
