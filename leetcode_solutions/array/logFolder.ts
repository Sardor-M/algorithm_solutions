/**
 *
 * The Leetcode file system keeps a log each time some user performs a change folder operation.
 *
 */

function minOperations(logs: string[]): number {
  let currLevel = 0;

  for (const operations of logs) {
    if (operations === "../") {
      currLevel = Math.max(0, currLevel - 1);
    } else if (operations === "./") {
      // do nothing - means the same folder directory
    } else {
      currLevel += 1;
    }
  }
  return currLevel;
}
