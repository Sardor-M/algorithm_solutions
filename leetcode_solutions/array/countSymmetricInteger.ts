/**
 * 
 * Time Complexity: O(n * D) -> So it becomes O(n) 
 * since the D is constant(at most 5)
 * 
 * Space Complexity: O(1)
 * since the space used is constant and small
 * 
 */

function countSymmetricIntegers(low: number, high: number): number {
    let count = 0;
    // edge case handling
    if (low < 0) return 0;

    for (let i = low; i <= high; i++) {
        const strVal = i.toString();

        if (strVal.length % 2 === 0) {
            const mid = strVal.length / 2;
            const firstHalf = strVal.slice(0, mid);
            const secondHalf = strVal.slice(mid);
            const sum1 = sumDigits(firstHalf);
            const sum2 = sumDigits(secondHalf);
            if (sum1 === sum2) {
                count++;
            }
        }
    }
    // helper method to sum the digits
    function sumDigits(s: string): number {
        let sum = 0;
        for (const char of s) {
            sum += Number(char);
        }
        return sum;
    }
    return count;
};