function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }
  return -1;
}
