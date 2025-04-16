function isPalindrome(s: string): boolean {
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleanString.split("").reverse().join("");
  return cleanString === reversed;
}
