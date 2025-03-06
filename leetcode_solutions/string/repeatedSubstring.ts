function repeatedSubstringPattern(s: string): boolean {
  if (s.length <= 1) return false;

  for (let len = 1; len <= s.length / 2; len++) {
    // we skip the length if they dont divide evenly
    if (s.length % len !== 0) continue;

    let substring = s.substring(0, len);

    let isRepated = true;

    for (let i = len; i < s.length; i += len) {
      if (s.substring(i, i + len) !== substring) {
        isRepated = false;
        break;
      }
    }
    if (isRepated) {
      return true;
    }
  }
  return false;
}
