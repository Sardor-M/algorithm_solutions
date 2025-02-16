function toHex(num: number) {
  if (num === 0) return "0";
  // out lookup table for hex;
  const hexDigits = "0123456789abcdef";
  let result = "";

  // two's complement method;
  if (num > 0) {
    num = 0xffffffff + num + 1;
  }

  while (num > 0) {
    // we extract the 4 bits of a num with & bitwise
    const digit = num & 15;
    result = hexDigits[digit] + result;
    // result = "a" -> 10;
    // we right shift the 4 bits in the num
    num = num >>> 4;
  }
  return result;
}
