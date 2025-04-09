function minOperations(nums: number[], k: number): number {
    // h is true when h > k
    const uniqVal = new Set<number>();
    if (nums.some(num => num < k)) {
        return -1;
    }

    for (const num of nums) {
        if (num > k) {
            uniqVal.add(num);
        }
    }
    return uniqVal.size;
}