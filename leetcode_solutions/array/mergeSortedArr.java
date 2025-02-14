/* 
* 
* 88. Merge Sorted Array
*
* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
* and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
* Merge nums1 and nums2 into a single array sorted in non-decreasing order.
* The final sorted array should not be returned by the function, but instead be 
* stored inside the array nums1. To accommodate this, nums1 has a length of m + n, 
* where the first m elements denote the elements that should be merged, and 
* the last n elements are set to 0 and should be ignored. nums2 has a length of n.
* 
*/


public class mergeSortedArr {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1; // pointer to nums1
        int j = n - 1; // pointer to nums2
        int k = m + n - 1; // pointer to the end of merged arr

        for(; i >= 0 && j >=0; k--) {
            // we compare the last elements of both arrays
            if(nums1[i] > nums2[j]){
                nums1[k] = nums1[i];
                i--; // move the pointer to the left
            } else {
                // we copy nums2[j] to nums1[k]     
                nums1[k] = nums2[j];
                j--;
            }
        }

        // we copy the remaining elements from nums2
        for(; j >= 0; k--, j--) {
            nums1[k] = nums2[j];
        }
    }
}
