/**
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(2^n) - space required to store the result grows exponentially with n
 *
 */

function countAndSay(n: number): string {
  let result = "1";

  for (let i = 1; i < n; i++) {
    result = performRleFormation(result);
  }
  return result;
}
// helper function that performs the RLE transformation
function performRleFormation(s: string): string {
  let result = "";
  let count = 1;
  let currChar = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currChar) {
      count++;
    } else {
      result += count.toString() + currChar;
      count = 1;
      currChar = s[i];
    }
  }
  // add the count and char for the last group
  result += count.toString() + currChar;
  return result;
}
