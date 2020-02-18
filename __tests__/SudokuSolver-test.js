import {
  solve,
  determineStartingNumbersCoordinates,
} from '../App/components/sudoku/SudokuSolver';

describe('Check Solver can solve Sudoku grids', () => {
  test('Solving hard puzzle', () => {
    let grid = [
      [null, 3, null, null, 8, null, 7, null, null],
      [1, null, null, null, 4, 9, null, null, null],
      [null, null, null, null, 1, 5, null, 2, null],
      [2, 5, null, null, null, null, 9, null, null],
      [null, null, 4, 1, null, null, null, null, null],
      [9, null, null, null, null, 6, 8, null, null],
      [7, 8, 9, null, null, null, null, null, null],
      [null, null, 3, null, null, null, null, null, null],
      [null, null, null, null, 3, null, null, 4, 8],
    ];
    let expectedGrid = [
      [4, 3, 5, 6, 8, 2, 7, 1, 9],
      [1, 2, 6, 7, 4, 9, 3, 8, 5],
      [8, 9, 7, 3, 1, 5, 4, 2, 6],
      [2, 5, 8, 4, 7, 3, 9, 6, 1],
      [3, 6, 4, 1, 9, 8, 5, 7, 2],
      [9, 7, 1, 5, 2, 6, 8, 3, 4],
      [7, 8, 9, 2, 6, 4, 1, 5, 3],
      [6, 4, 3, 8, 5, 1, 2, 9, 7],
      [5, 1, 2, 9, 3, 7, 6, 4, 8],
    ];
    let solvedGrid = solve(grid, determineStartingNumbersCoordinates(grid));
    expect(solvedGrid).toEqual(expectedGrid);
  });
  test('Solving prize puzzle', () => {
    let grid = [
      [2, null, null, null, 5, null, 1, 6, null],
      [null, null, 8, 4, null, null, null, 3, null],
      [5, 7, null, null, 2, null, null, null, null],
      [6, 1, null, null, 3, null, null, 8, null],
      [null, null, null, null, 9, 4, null, 2, 1],
      [null, null, 5, 1, null, null, null, null, 4],
      [7, 9, null, null, null, null, null, null, null],
      [3, null, null, null, null, 5, null, null, 2],
      [null, null, null, 7, null, 8, null, null, null],
    ];
    let expectedGrid = [
      [2, 4, 9, 8, 5, 3, 1, 6, 7],
      [1, 6, 8, 4, 7, 9, 2, 3, 5],
      [5, 7, 3, 6, 2, 1, 4, 9, 8],
      [6, 1, 4, 2, 3, 7, 5, 8, 9],
      [8, 3, 7, 5, 9, 4, 6, 2, 1],
      [9, 2, 5, 1, 8, 6, 3, 7, 4],
      [7, 9, 1, 3, 4, 2, 8, 5, 6],
      [3, 8, 6, 9, 1, 5, 7, 4, 2],
      [4, 5, 2, 7, 6, 8, 9, 1, 3],
    ];
    let solvedGrid = solve(grid, determineStartingNumbersCoordinates(grid));
    expect(solvedGrid).toEqual(expectedGrid);
  });
});
