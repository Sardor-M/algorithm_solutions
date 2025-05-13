/**
 * Time Complexity: O(n):
 *  - as we are iterating through the words in the sentences
 * and storing them in a map.
 * - the split operation takes O(n) time, where n is the total number of characters in both sentences.
 *
 * Space Complexity: O(n):
 *  - for storing the words in the map.
 *  - space complexity is O(n) because we are storing each unique word in the map.
 */
function uncommonFromSentences(s1: string, s2: string): string[] {
  const totalWord = s1 + " " + s2;
  const words = totalWord.split(" ");

  // created a map to count the word occurrence
  const wordCount = new Map<string, number>();

  for (const word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  const uncommon: string[] = [];

  for (const [word, count] of wordCount.entries()) {
    if (count === 1) {
      uncommon.push(word);
    }
  }

  return uncommon;
}
