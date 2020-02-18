export function isValidAndCompleteGrid(grid) {
  return isGridComplete && isAValidGrid(grid);
}

export function isAValidGrid(grid) {
  return (
    identifyRowDuplicates(grid).length === 0 &&
    identifyColumnDuplicates(grid).length === 0 &&
    identifyBlockDuplicates(grid).length === 0
  );
}

function isGridComplete(grid) {
  grid.forEach(numbersInRow => {
    numbersInRow.forEach(numberInRow => {
      if (numberInRow === null) {
        return false;
      }
    });
  });
  return true;
}

function identifyBlockDuplicates(grid) {
  // Validate Block
  // 0,0 0,1 0,2  0,3 0,4 0,5
  // 1,0 1,1 1,2  1,3 1,4 1,5
  // 2,0 2,1 2,2  2,3 2,4 2,5
  let blockDuplicates = [];
  let numbersInBlock = [];
  blockCoordinates().forEach(individualBlockCoordinates => {
    individualBlockCoordinates.forEach(blockCoordinate => {
      //console.log('current block coordinate');
      //console.log(blockCoordinate);
      //console.log('value in grid');
      //console.log(grid[blockCoordinate.x][blockCoordinate.y]);
      let gridVal = grid[blockCoordinate.x][blockCoordinate.y];
      numbersInBlock.push({
        x: blockCoordinate.x,
        y: blockCoordinate.y,
        val: gridVal,
      });
    });
    //console.log('Numbers in block');
    //console.log(numbersInBlock);
    let rowInputValues = numbersInBlock.map(i => i.val);
    let duplicates = duplicatesInArray(rowInputValues);
    numbersInBlock.forEach(number => {
      if (duplicates.includes(number.val) && number.val != null) {
        blockDuplicates.push(number);
      }
      numbersInBlock = [];
    });
  });
  //console.log('Block duplicates');
  //console.log(blockDuplicates);
  return blockDuplicates;
}

function identifyRowDuplicates(grid) {
  let rowDuplicates = [];

  for (let x = 0; x < grid.length; x++) {
    let numbersInRow = [];
    for (let y = 0; y < grid.length; y++) {
      numbersInRow.push({x, y, val: grid[x][y]});
    }
    //console.log('Numbers in row');
    //console.log(numbersInRow);
    let rowInputValues = numbersInRow.map(i => i.val);

    let duplicates = duplicatesInArray(rowInputValues);

    numbersInRow.forEach(number => {
      if (duplicates.includes(number.val) && number.val != null) {
        rowDuplicates.push(number);
      }
    });
  }
  //console.log('Row duplicates');
  //console.log(rowDuplicates);
  return rowDuplicates;
}

function identifyColumnDuplicates(grid) {
  // x = x coordinate y = y coordinate of grid
  let columnDuplicates = [];
  for (let y = 0; y < grid.length; y++) {
    let numbersInColumn = [];
    for (let x = 0; x < grid.length; x++) {
      numbersInColumn.push({x, y, val: grid[x][y]});
    }
    //console.log('Numbers in column');
    //console.log(numbersInColumn);
    let columnInputValues = numbersInColumn.map(i => i.val);

    let duplicates = duplicatesInArray(columnInputValues);

    numbersInColumn.forEach(number => {
      if (duplicates.includes(number.val) && number.val != null) {
        columnDuplicates.push(number);
      }
    });
  }
  //console.log('Column duplicates');
  //console.log(columnDuplicates);
  return columnDuplicates;
}

function duplicatesInArray(originalArr) {
  return originalArr.reduce((acc, currentValue, index, array) => {
    if (array.indexOf(currentValue) != index && !acc.includes(currentValue)) acc.push(currentValue);
    return acc;
  }, []);
}

function blockCoordinates() {
  let blockCoordinates = [];
  let blockCoordinatesTemplate = [
    {x: 0, y: 0},
    {x: 0, y: 3},
    {x: 0, y: 6},
    {x: 3, y: 0},
    {x: 3, y: 3},
    {x: 3, y: 6},
    {x: 6, y: 0},
    {x: 6, y: 3},
    {x: 6, y: 6},
  ];
  blockCoordinatesTemplate.forEach(coors => {
    blockCoordinates.push(buildBlockCoordinates(coors.x, coors.y));
  });
  //console.log('Block coordinates');
  //console.log(blockCoordinates);
  return blockCoordinates;
}

function buildBlockCoordinates(startingX, startingY) {
  let individualBlockCoordinates = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      individualBlockCoordinates.push({x: startingX + i, y: startingY + j});
    }
  }
  return individualBlockCoordinates;
}
