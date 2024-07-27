package ArraysAndHashing;

public class TwoSum {
    public static void main(String[] args) {
        int[] nums = {3,4,5,6,7};
        int target = 7;

        TwoSum twoSum = new TwoSum();

        int[] result = twoSum.solution(nums, target);
        if (result != null) {
            System.out.println("Indices :" + result[0] + "" + result[1]);
        }
    }

    public int[] solution(int[] nums, int target){
        for(int i = 0; i < nums.length; i++){
            for(int j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    return new int[]{i, j};
                }
            }
        }
        return null;
    }
}
