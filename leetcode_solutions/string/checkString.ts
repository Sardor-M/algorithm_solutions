/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function checkString(s: string): boolean {
  let seenB = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      seenB = true;
    } else if (s[i] === "a" && seenB) {
      return false;
    }
  }
  return true;
}
