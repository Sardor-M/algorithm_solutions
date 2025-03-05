function coloredCells(n: number): number {
    let number = Number(n);
    return number * number + ((number - 1) * (number - 1));
}