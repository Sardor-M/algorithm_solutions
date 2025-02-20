/*
 *
 * Time complexity: O(n^2) -> Worst case scenario, chunki har bir juft 
 * raqamni tekshirib chiqamiz 
 * 
 */

public class isDuplicate1 {
    public boolean hasDuplicate(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                // agar bitta duplicate chiqsa, true qaytaramiz
                if (nums[i] == nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
};


