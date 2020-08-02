import {prettyPrint} from '../services/SudokuUtils';

export const calculateGridPositions = readGrid => {
  let gridPositions = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
  ];
  // example of a grid position
  //gridPositions.push({pos: {x: 2, y: 1}, number: 9});
  console.log(readGrid);
  console.log('about to print grid numbers');

  let leftMax = readGrid
    .map(o => o.bounding.left)
    .reduce((max, currentVal) => Math.max(max, currentVal));
  let leftMin = readGrid
    .map(o => o.bounding.left)
    .reduce((min, currentVal) => Math.min(min, currentVal));
  let topMax = readGrid
    .map(o => o.bounding.top)
    .reduce((max, currentVal) => Math.max(max, currentVal));
  let topMin = readGrid
    .map(o => o.bounding.top)
    .reduce((min, currentVal) => Math.min(min, currentVal));

  let leftMostPosition = leftMin;
  let leftLeastPosition = leftMax;
  let topMostPosition = topMax;
  let topLeastPosition = topMin;

  let verticalGridMargin = leftMax / 9;
  let horizontalGridMargin = topMax / 9;

  readGrid.forEach(e => {
    let position = e.bounding;
    let numbers = e.text;
    console.log(position);
    console.log(numbers);

    let parsedNumbers = numbers.split(' ');

    parsedNumbers.forEach((num, i) => {
      let determineGridVerticalPosition =
        Math.floor(position.left / verticalGridMargin) + i;
      
      let determineGridHorizontalPosition = Math.floor(
        position.top / horizontalGridMargin,
      );
      //num.replace(new RegExp('\n', 'g'), '')
      let isThereANumberBelow = num.includes('\n');
      let belowNum = num.split('\n')[1];
      num = isThereANumberBelow ? num[0] : num;

      determineGridVerticalPosition =
        determineGridVerticalPosition === 9 ? 8 : determineGridVerticalPosition;
      determineGridHorizontalPosition =
        determineGridHorizontalPosition === 9 ? 8 : determineGridHorizontalPosition;
  
      gridPositions[determineGridHorizontalPosition][determineGridVerticalPosition] = Number(num);
      if (isThereANumberBelow) {
        gridPositions[determineGridHorizontalPosition === 8 ? 8 : determineGridHorizontalPosition + 1][determineGridVerticalPosition] = Number(belowNum);
      }
    });
  });
  prettyPrint(gridPositions);
  console.log("in simple grid position:")
  console.log(gridPositions)
  return gridPositions;
};
