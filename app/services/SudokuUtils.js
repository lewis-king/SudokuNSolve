export function prettyPrint(grid) {
  console.log('-------------------------');
  for (let x = 0; x < grid.length; x++) {
    let line = '';
    for (let y = 0; y < grid.length; y++) {
      let value = !grid[x][y] ? '?' : grid[x][y];
      if (y === 0) {
        line += '|';
      }
      line += ' ' + value;
      if (y === 8) {
        line += ' |';
      }
      if (y === 2 || y === 5) {
        line += ' |';
      }
      if (y === 8) {
        console.log(line);
      }
    }
    if (x === 2 || x === 5) {
      console.log('|-------|-------|-------|');
    }
    if (x === 8) {
      console.log('-------------------------');
    }
  }
}
