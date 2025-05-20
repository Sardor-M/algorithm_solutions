/**
 *  Time Complexity: O(n):
 *  - where n is the length of the string s or t.
 *  Space Complexity: O(n):
 *  - for storing the mapping of characters in the map.
 *  - the space complexity is O(n) because we are storing each unique character in the map.
 */

function isIsomorphic(s: string, t: string): boolean {
  /* edge case */
  if (s.length !== t.length) {
    return false;
  }
  const mapStoT = new Map<string, string>();
  const mapTtoS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charFromS = s[i];
    const charFromT = t[i];

    const mappedTChar = mapStoT.get(charFromS);
    const mappedSChar = mapTtoS.get(charFromT);

    if (mappedTChar !== undefined && mappedTChar !== charFromT) {
      return false;
    }

    if (mappedSChar !== undefined && mappedSChar !== charFromS) {
      return false;
    }

    mapStoT.set(charFromS, charFromT);
    mapTtoS.set(charFromT, charFromS);
  }
  /* return once the chars are mapped consistently */
  return true;
}
