
/* 
* 
* Nex2t Greater Element I
*
* The next greater element of some element x in an array is the first greater 
* element that is to the right of x in the same array.
* You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
* For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next 
* greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
* 
*/

import java.util.HashMap;

public class nextGreaterElem1 {
    public int[] nextGreaterElem(int[] nums1, int[] nums2){
        HashMap<Integer, Integer> nextGreater = new HashMap<>();

        for(int i = 0; i < nums2.length; i++){
            for(int j = i + 1; j < nums2.length; j++) {
                if(nums2[j] > nums2[i]) {
                    // we store the next greater number
                    nextGreater.put(nums2[i], nums2[j]);
                    // we stop searching once the greater num is found
                    break;
                }
            }
        }
        int[] result = new int[nums1.length];
        for(int i = 0; i < nums1.length; i++){
            result[i] = nextGreater.getOrDefault(nums1[i], -1);
        }
        
        return result;
    }
}
