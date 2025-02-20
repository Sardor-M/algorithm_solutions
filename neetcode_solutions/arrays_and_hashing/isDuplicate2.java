
package neetcode_solutions.arrays_and_hashing;

import java.util.HashSet;

/**
 * 
 * Time Complexity: O(n) -> chunki arrayni faqat bir marta iterate qilamiz
 * 
 */

 public class isDuplicate2{
    public boolean hasDuplicate(int[] nums){
        HashSet<Integer> set = new HashSet<>();

        for(int num: nums){
            if(set.contains(num)){
                // duplicate chiqsa 
                return true;
            }
            set.add(num);
        }
        // duplicate chiqmasa
        return  false;
    }
 }