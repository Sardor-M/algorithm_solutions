function containsNearbyDuplicate1(nums: number[], k: number): boolean {
  // Map yaratish orqali eng recent bo'lgan har bir
  // raqamni indexini saqlaymiz
  const numberMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // agar bu raqamni ko'rgan bo'lsak, u k position ichida bor
    if (numberMap.has(nums[i]) && i - numberMap.get(nums[i])! <= k) {
      return true;
    }
    // eng yaqin positonni  update qilamiz
    numberMap.set(nums[i], i);
  }
  // duplicate topilmasa false
  return false;
}
