function getLucky(s: string, k: number): number {
    let converted = '';

    for (let i = 0; i < s.length; i++) {
        // convert the curr char to its position in the alphabet order 
        // example: a=1, b=2, c=3
        const charCode = s[i].charCodeAt(0) - "a".charCodeAt(0) + 1;
        converted += charCode;
    }

    let result = converted;

    for (let i = 0; i < k; i++) {
        // convert into array
        const chars = Array.from(result);
        let sum = 0;

        // calculate the sum of digits
        for (const num of chars) {
            sum += parseInt(num);
        }
        // we update the result for next iteration
        result = sum.toString();
    }
    return Number(result);
};