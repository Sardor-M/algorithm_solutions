function finalValueAfterOperations(operations: string[]): number {
    let result = 0;
    for (const opn of operations) {
        if (opn.includes("++")) {
            result++;
        } else {
            result--;
        }
    }
    return result;
};