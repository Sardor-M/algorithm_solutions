
package leetcode_solutions.math;

/**
 * 
 * Add Digits
 * 
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 * 
 **/

public class addDigits {
    public int addDigits(int num) {
        int result = 0;
        
        while(num > 0 || result > 9){
            if(num == 0){
                num = result;
                result = 0;
            }
            // add last digit to result
            result += num % 10; 
            // remove last digit input number
            num /= 10;
        }
        return result;
    }
}
