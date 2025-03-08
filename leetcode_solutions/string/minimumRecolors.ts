function minimumRecolors(blocks: string, k: number): number {
  let windowCount = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") {
      windowCount++;
    }
  }

  let minOperations = windowCount;

  for (let i = k; i < blocks.length; i++) {
    if (blocks[i - k] === "W") {
      windowCount--;
    }
    if (blocks[i] === "W") {
      windowCount++;
    }

    minOperations = Math.min(minOperations, windowCount);
  }
  return minOperations;
}

