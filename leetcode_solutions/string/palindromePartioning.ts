function partition(s: string): string[][] {
  const result: string[][] = [];
  const current: string[] = [];

  // helper method to check the base palindrome is valid or not
  function isPalinDrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }

  function backtrack(startIndex: number): void {
    // base case:  entire stringni process qip bo'ldik,
    // shunday ekan curr partition valid bo'ladi
    if (startIndex >= s.length) {
      result.push([...current]);
      return;
    }

    for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
      // case: s="aab" -> startIndex = 0, endIndex = 0; substring = "a"
      const subString = s.substring(startIndex, endIndex + 1);
      if (isPalinDrome(subString)) {
        // case: current = [], current=['a'];
        current.push(subString);
        // case: s="aab", endIndex + 1 = 1
        backtrack(endIndex + 1);
        // case: current = ['a'] bo'lsa, current = [] ga qaytaramiz
        // chunki boshqa variantlarni tekshirish uchun oxirgi
        // qo'shilgan substringni olib tashlaymiz
        current.pop();
      }
    }
  }
  // we start from 0
  backtrack(0);
  return result;
}
