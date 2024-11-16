package leetcode_solutions.string;

/**
 * 
 * Add Strings
 * 
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
 * You must also not convert the inputs to integers directly.
 * 
 */


public class addStrings {
    public String calculateSum(String num1, String num2) {
        StringBuilder sum = new StringBuilder();
        // to keet track of the num
        int temp = 0;

        // num1 va num2 ning oxiridan boshlab pointer qo'yamiz
        int i = num1.length() - 1, j = num2.length() -1;

        while(i >= 0 || j >= 0 || temp > 0){
            int digit1 = 0;
            int digit2 = 0;

            if(i >= 0){
                // num1 ni oxirgi raqamini olib olamiz
                digit1 = num1.length() - '0';
                // keyingi (num1 dagi) raqamga digitni suramiz
                i--;
            }
            if(j >= 0) {
                // num2 ni oxirgi raqamini olib tashaymiz
                digit2 = num2.charAt(i) - '0';
                // keyingi (num2 dagi) raqamga digitni suramiz
                j--;
            }

            // summa va temp ni hisoblaymiz
            int total = digit1 + digit2 + temp;
            // agar summa 10 dan katta bo'lsa, keyingi raqamga o'tkazamiz
            sum.append(total % 10);
            // keyingi raqamni hisoblash uchun temp ni o'zgartiramiz
            temp = total / 10;
        }
        // natija teskarid tartibda bolgani uchun teskarisiga qaytarib beramiz
        return sum.reverse().toString();
    }
}
