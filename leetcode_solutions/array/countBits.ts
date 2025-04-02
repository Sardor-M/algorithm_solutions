function countBits(n: number): number[] {
    // arr size of n + 1
    const bitCounts: number[] = new Array(n + 1).fill(0);
    for(let currNum = 0; currNum <= n; currNum++){
        // count the num of 1s in binary representaion of currNum
        bitCounts[currNum] = countOnesInBinary(currNum);
    }
    return bitCounts;
};

function countOnesInBinary(num: number): number {
    let oneCount = 0;

    while(num !== 0){
        oneCount += num & 1;
        num = Math.floor(num / 2);
    }
    return oneCount;
}

// num    | binary | calc                         | result
// ------------------------
// 0      | 0000   | -                            | 0
// 1      | 0001   | ans[0] + 1                   | 1
// 2      | 0010   | ans[1] + 0                   | 1
// 3      | 0011   | ans[1] + 1                   | 2
// 4      | 0100   | ans[2] + 0                   | 1
// 5      | 0101   | ans[2] + 1                   | 2