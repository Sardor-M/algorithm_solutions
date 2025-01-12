/**
 * 
 * You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
 * 
 * Return the sum of all the scores on the record after applying all the operations.
 * 
 */


function callPoints(operations: string[]): number{
    const currScores: number[] = [];
    let sum: number = 0;

    for(let i = 0; i < operations.length; i++){
        if(!isNaN(Number(operations[i]))){
            const numValue = parseInt(operations[i]);
            currScores.push(numValue);
        } else if(operations[i] === "C"){
            // this returns the last element
            currScores.pop();
        } else if (operations[i] === "D"){
            const lastVal = currScores[currScores.length - 1];
            currScores.push(lastVal * 2);
        } else if(operations[i] === "+"){
            const lastTwoNums: number[] = currScores.slice(-2)
            let total: number = 0;
            for(let i in lastTwoNums){
                total += lastTwoNums[i];
            }
            currScores.push(total);
        }
    }

    for(let num of currScores){
        sum += num;
    }
    return sum;
}