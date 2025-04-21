/**
 *
 * Time Complexity: O(n) - bir marta arrayni traverse qilamiz
 * Space Complexity: O(n) - hashmapda saqlanadigan elementlar soni
 *
 */

function twoSum(nums: number[], target: number): number[] {
  // raqam va uning indiceslari uchun hashmapni ishlatamiz
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const canFit = target - nums[i];
    // canFit ni oldin korgan bolsak, pair topsgan bolamiz
    if (map.has(canFit)) {
      return [map.get(canFit)!, i];
    }
    // yokida hozirgi curr num va uning indexini saqlaymiz
    map.set(nums[i], i);
  }
  return [];
}
