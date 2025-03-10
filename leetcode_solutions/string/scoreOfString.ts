function scoreString(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const currCharCode = s.charCodeAt(i);
    const nextCharAt = s.charCodeAt(i + 1);

    result += Math.abs(currCharCode - nextCharAt);
  }
  return result;
}
