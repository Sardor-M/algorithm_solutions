function checkPowerOfThree(n: number): boolean {
    let num  = n;

    while (num > 0){
        if(num % 3 === 2){
            return false;
        }
        num = Math.floor( num / 3);
    } 
    return true;
}