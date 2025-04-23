/**
 *  Time Complexity: O(n * k log k) where n is the number of strings
 *  and k is the maximum length of a string
 *
 *  Space Complexity: O(n * k) - where n is the number of strings
 *  and k is the maximum length of a string
 */

function groupAnagrams(strs: string[]): string[][] {
  const isAnagramGrouped = new Map<string, string[]>();

  for (const str of strs) {
    const sortedArr = str.split("").sort();
    const key = sortedArr.join("");

    if (isAnagramGrouped.has(key)) {
      const existingGroup = isAnagramGrouped.get(key);
      existingGroup.push(str);
      isAnagramGrouped.set(key, existingGroup);
    } else {
      isAnagramGrouped.set(key, [str]);
    }
  }
  return Array.from(isAnagramGrouped.values());
}
