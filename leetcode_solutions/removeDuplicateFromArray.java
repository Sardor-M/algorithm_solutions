/**
 *  Remove dupliactes from Sorted Array
 * 
 *  Given an integer array nums sorted in non-decreasing order, 
 *  remove the duplicates in-place such that each unique element 
 *  appears only once. The relative order of the elements should be kept the same. 
 *  Then return the number of unique elements in nums.
 *  Return the result table in any order.
 *
 **/

 class Solution {
    public int removeDuplicates(int[] nums) {
        // as fromt teh description, array is sorted so
        int n = nums.length;
        if (n == 0) {
            return 0;
        }

        // poniter to the unique elements;
        int j = 0;

        // we loop through the array copying the unique elements
        for (int i = 0; i < n - 1; i++) {
            if(nums[i] != nums[i+1]) {
                nums[j++] = nums[i];
            }
        }

        // we copy the last element in the array
        nums[j++] = nums[n-1];

        return j;
    }
 }

