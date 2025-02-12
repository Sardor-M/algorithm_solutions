function titleToNumber(columnTitle: string): number {
  let result: number = 0;

  // excel sheet uses a 26 base number for labeling;
  for (let i = 0; i < columnTitle.length; i++) {
    // we get the each char val by its ASCII val;
    const val = columnTitle.charCodeAt(i) - 64;
    // A -> 1, B -> 2, ..., Z -> 26;
    result = result * 26 + val;
  }
  return result;
}
