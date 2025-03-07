function reversePrefix(word: string, ch: string): string {
  // we get tje curr index of the string ch
  const index = word.indexOf(ch);
  if (index === -1) {
    return word;
  }

  let prefix = word.substring(0, index + 1);
  let rest = word.substring(index + 1);
  let reversedStr = "";
  let result = "";
  // we reserve the prefix string
  for (let i = prefix.length - 1; i >= 0; i--) {
    reversedStr += prefix[i];
  }
  return (result = reversedStr + rest);
}
