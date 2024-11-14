
/**
 *
 * Climbing Stairs.
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *  
 **/


public class climbingStairs {
    public int climbStairs(int n) {
        int[] c = new int[n + 1];
        c[0] = 1;
        c[1] = 1;

        for(int i = 2; i <= n; i++){
            c[i] = c[i - 1] + c[i -2];
        }
        return c[n];
    }
}