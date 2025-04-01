function sortVowels(s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const vowelList: string[] = [];
  const indices: number[] = [];

  // we collect the vowels and its positions
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (vowels.has(char)) {
      vowelList.push(char);
      indices.push(i);
    }
  }

  // then we sort it by ascivalues
  vowelList.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  // then we create arr from original string
  const result = s.split("");
  let vowelIndex = 0;

  for (const idx of indices) {
    result[idx] = vowelList[vowelIndex++];
  }

  return result.join("");
}
