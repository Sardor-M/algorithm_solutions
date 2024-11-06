import java.util.HashSet;

/**
 * 
 *  N-Repeated Element in Size 2N Array
 * 
 * You are given an integer array nums with the following properties:
 *  - nums.length == 2 * n.
 *  - nums contains n + 1 unique elements.
 *  - Exactly one element of nums is repeated n times.
 * Return the element that is repeated n times.
 * 
 */

 public class nRepeatedElements {
    public int repeatedNTime(int[] nums) {
      HashSet<Integer> tracked = new HashSet<>();
      // we iterate throught the [] if contains repeated num, we return it
      for(int num : nums) {
         if(tracked.contains(num)) {
            return num;
         }

         tracked.add(num);
      }
      throw new IllegalArgumentException("No repeated number found. ")
    }
 }

