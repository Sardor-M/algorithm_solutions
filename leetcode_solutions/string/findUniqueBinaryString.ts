/**
 *
 * Time Complexity: O(n) -> as we only iterate once
 *
 * Space Complexity:
 *    - O(n) -> we are building a result string length of n
 *    - All vars use a constant space
 *
 **/

function findDifferentBinaryString(nums: string[]): string {
  let result = "";

  for (let i = 0; i < nums.length; i++) {
    //we get the bit at the i position of i(th) string[]
    const currBit = nums[i][i];
    let flippedBit = currBit === "0" ? "1" : "0";
    result += flippedBit;
  }
  return result;
}
