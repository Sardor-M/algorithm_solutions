class Solution {
    public int minZeroArray(int[] nums, int[][] queries) {
        int left = 0, right = queries.length + 1;
        // Binary search to find the min of queries
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (isGood(nums, queries, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left == queries.length + 1 ? -1 : left;
    }
    
    private boolean isGood(int[] nums, int[][] queries, int k) {
        int[] sweepLine = new int[nums.length + 1];
        
        for (int i = 0; i < k; i++) {
            int s = queries[i][0];
            int e = queries[i][1];
            int val = queries[i][2];
            
            sweepLine[s] += val;
            sweepLine[e + 1] -= val;
        }
        
        int acc = 0;
        for (int i = 0; i < nums.length; i++) {
            acc += sweepLine[i];
            if (acc < nums[i]) return false;
        }
        
        return true;
    }
}