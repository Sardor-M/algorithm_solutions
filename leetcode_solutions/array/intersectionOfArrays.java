package array;

import java.util.HashSet;

/**
 * 
 * Intersection of two Arrays
 * 
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must be unique and you may return the result in any order.
 * 
 **/

public class intersectionOfArrays {
    public int [] intersection(int[] nums1, int[] nums2){
        HashSet<Integer> set = new HashSet<>();
        HashSet<Integer> result = new HashSet<>();

        for(int num: nums1){
            set.add(num);
        }

        for(int num: nums2){
            if(set.contains(num)){
                result.add(num);
            }
        }

        // we covert the result set to int array;
        int[] resultArr = new int[result.size()];
        int index = 0;
        for(int num: result){
            resultArr[index++] = num;
        }
        return resultArr;
    }
}
