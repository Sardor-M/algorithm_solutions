function minimumMoves(s: string): number {
    // return the min num of moves
    let moves = 0;
    let index = 0;
    
    while(index < s.length){
        if(s[index] === "X"){
            moves++;
            index += 3;
        } else {
            index++;
        }
    }
    return moves;
};