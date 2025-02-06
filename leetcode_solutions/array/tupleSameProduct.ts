/**
 *
 * Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such
 * that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.
 *
 */

function tupleSameProduct(nums: number[]): number {
  const productMap = new Map<number, number>();

  // har bir juftlik tuple uchun (a va b) ni ko'rib chiqamiz va ularni * sini save qilamiz
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const resultVal = nums[i] * nums[j];
      // agar resultVal qiymati bo'lsa uni qiymatini olamiz, bo'lmasa 0ga tenglaymiz
      let currCount = productMap.get(resultVal);
      if (!currCount) {
        currCount = 0;
      }
      // juftlik topilganda esa 1 qo'shib yangilaymiz
      let newCount = currCount + 1;
      productMap.set(resultVal, newCount);
    }
  }

  let totalTuple: number = 0;

  for (const count of productMap.values()) {
    if (count > 1) {
      // agar bitta kopaytma bir martadan kop uchrasa,
      // shundan nechta ko'paytma qilish mumkinligini hisoblaymiz
      let combined = (count * (count - 1)) / 2;
      // agar bir combination 8 xil turda tuzila oladi
      totalTuple += combined * 8;
    }
  }
  return totalTuple;
}
