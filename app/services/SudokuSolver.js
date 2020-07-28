import {getSudokuNumber} from './SudokuNumberGenerator';
import {isAValidGrid} from './SudokuValidator';
import {prettyPrint} from './SudokuUtils';

export function solve(grid, startingCoordinates) {
  console.log('About to solve...');
  let exhaustedNumbers = new Map();
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      //console.log('X is: ' + x + ', Y is: ' + y);
      //console.log('grid is now...');
      let isAStartingNumber = false;
      startingCoordinates.forEach(e => {
        if (e.x === x && e.y === y) {
          isAStartingNumber = true;
        }
      });
      if (isAStartingNumber) {
        //console.log('This is a starting number!');
        continue;
      }
      grid[x][y] = null;
      let invalidNumberPlacement = true;
      while (invalidNumberPlacement) {
        let attemptedNumbers = exhaustedNumbers.get(`${x}${y}`);
        if (!attemptedNumbers) {
          attemptedNumbers = new Set();
        }
        //console.log('Attempted Numbers');
        //console.log(attemptedNumbers);
        let contents = '';
        attemptedNumbers.forEach(e => {
          contents += contents + e + ', ';
        });
        //console.log(`contents size: ${contents.length}  contents: ${contents}`);

        let proposedNumber = getSudokuNumber();
        if (
          attemptedNumbers.has(proposedNumber) &&
          attemptedNumbers.size !== 9
        ) {
          continue;
        }
        attemptedNumbers.add(proposedNumber);
        exhaustedNumbers.set(`${x}${y}`, attemptedNumbers);
        grid[x][y] = proposedNumber;
        //console.log('Proposed Number: ' + proposedNumber);
        let isGridValid = isAValidGrid(grid);
        if (isGridValid) {
          //console.log('Is a valid grid after placement');
          invalidNumberPlacement = false;
        } else if (attemptedNumbers.size === 9) {
//          if (x !== 0 && y !== 0) {
          exhaustedNumbers.set(`${x}${y}`, null);
//          }
          //Need to go back one more if one back is a starting number as we don't touch those
          let steppedBackOnToStartingNumber = true;
          grid[x][y] = null;
          while (steppedBackOnToStartingNumber) {
            steppedBackOnToStartingNumber = false;
            let {newX, newY} = stepBackwards(x, y);
            x = newX;
            y = newY;
            //console.log('X is: ' + x + ', Y is: ' + y);
            startingCoordinates.forEach(e => {
              if (e.x === x && e.y === y) {
                steppedBackOnToStartingNumber = true;
              }
            });
            if (!steppedBackOnToStartingNumber) {
              grid[x][y] = null;
            }
          }
          //step backwards once more here as the loop will iterate forward after breaking
          let {newX, newY} = stepBackwards(x, y);
          x = newX;
          y = newY;
          //console.log('new X is: ' + x);
          //console.log('new Y is: ' + y);
          //console.log('breaking');
          break;
        }
      }
      prettyPrint(grid);
    }
  }
  return grid;
}

function stepBackwards(x, y) {
  if (y === 0) {
    x--;
    y = 8;
  } else {
    y--;
  }
  return {newX: x, newY: y};
}

function stepForwards(x, y) {
  let fwdX = x;
  let fwdY = y;
  if (y === 8) {
    fwdX = x + 1;
    fwdY = 7;
  } else {
    fwdY = y + 1;
  }
  return {fwdX, fwdY};
}

export function determineStartingNumbersCoordinates(grid) {
  let startingCoordinates = [];
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[x][y] !== null) {
        startingCoordinates.push({x, y});
      }
    }
  }
  //console.log('Starting coordinates are');
  //console.log(startingCoordinates);
  return startingCoordinates;
}
