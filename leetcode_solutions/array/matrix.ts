function findPositionOfSnake(n: number, commands: string[]) {
  const moves: Record<string, [number, number]> = {
    UP: [-1, 0],
    DOWN: [1, 0],
    LEFT: [0, -1],
    RIGHT: [0, 1],
  };

  let row = 0;
  let col = 0;

  for (const command of commands) {
    const [newRow, newCol] = moves[command];
    row += newRow;
    col += newCol;
  }

  const pinCell = row * n + col;
  return pinCell;
}
