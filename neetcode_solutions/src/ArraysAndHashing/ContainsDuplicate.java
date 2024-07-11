package ArraysAndHashing;
import java.util.HashSet;

public class ContainsDuplicate {
    public static void main(String[] args){
        ContainsDuplicate containsDuplicate = new ContainsDuplicate();
        int[] nums = {1, 2, 3, 3};
        System.out.println(containsDuplicate.hasDuplicate(nums));
        // returns true
    }
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> hashSet = new HashSet<>();

        for(int n:nums) {
            if(!hashSet.add(n)){
                return true;
            }
        }
        return false;
    }
}