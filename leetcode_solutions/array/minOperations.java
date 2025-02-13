import java.util.PriorityQueue;

class Solution {
    public int mintOperations(int[] nums, int k){
        // Katta K raqamlar uchun long ishlatamiz
        PriorityQueue<Long> heap = new PriorityQueue<>();
        for(int num: nums){
            heap.add((long) num);
        }

        int operations = 0;
        while(heap.size() >= 2 && heap.peek() < k){
            long x = heap.poll(); // remove  the smallest elem
            long y = heap.poll(); // remove second smallest elem

            // we combine both smallest elems
            long newVal = x * 2 + y;
            heap.add(newVal);
            operations++;
        }
        return operations;
    }
}