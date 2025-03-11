function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  const lastSeen = {};

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    // we check if we have seen before;
    if (currNum in lastSeen) {
      // agar distance between curr position va last seen <= k bo'lsa
      const distance = i - lastSeen[currNum];
      if (distance <= k) {
        return true;
      }
    }
    // last seen positionni shu raaqam bilan update qilamiz
    lastSeen[currNum] = i;
  }
  // no duplicate found
  return false;
}
