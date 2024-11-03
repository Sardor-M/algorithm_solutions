package array;
/**
 * 
 * Single Number.
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 */

public class singleNumber {
    public int singleNumber(int [] nums) {
        int singleOne = 0;

        // this will give us the only number that appears once
        for(int num: nums) {
            singleOne ^= num;
        }

        return singleOne;
    }
}
