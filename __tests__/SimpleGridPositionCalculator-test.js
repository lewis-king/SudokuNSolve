import {calculateGridPositions} from '../app/services/SimpleGridPositionCalculator';

describe('Verify calculated grid positions and numbers', () => {
  test('puzzle 1', () => {
    let readGrid = [
      {bounding: {height: 20, left: 176, top: 11, width: 14}, text: "9"},
      {bounding: {height: 51, left: 242, top: 13, width: 14}, text: "4\n6"},
      {bounding: {height: 57, left: 4, top: 49, width: 25}, text: "5\n2"},
      {bounding: {height: 30, left: 127, top: 74, width: 97}, text: "7 3 5"},
      {bounding: {height: 53, left: 79, top: 82, width: 13}, text: "8\n4"},
      {bounding: {height: 19, left: 145, top: 116, width: 13}, text: "9"},
      {bounding: {height: 27, left: 234, top: 143, width: 51}, text: "5 2"},
      {bounding: {height: 20, left: 21, top: 148, width: 42}, text: "7 8"},
      {bounding: {height: 19, left: 212, top: 180, width: 13}, text: "8"},
      {bounding: {height: 53, left: 67, top: 182, width: 93}, text: "1\n2 5 6"},
      {bounding: {height: 49, left: 275, top: 212, width: 13}, text: "9\n7"},
      {bounding: {height: 17, left: 211, top: 214, width: 13}, text: "3"},
      {bounding: {height: 45, left: 57, top: 243, width: 12}, text: "5\n7"},
      {bounding: {height: 17, left: 118, top: 274, width: 11}, text: "4"},
    ];

    let expected = [
      [null, null, null, null, null, 9, null, 4, null],
      [5, null, null, null, null, null, null, 6, null],
      [2, null, 8, null, 7, 3, 5, null, null],
      [null, null, 4, null, 9, null, null, null, null],
      [7, 8, null, null, null, null, null, 5, 2],
      [null, null, null, null, 1, null, 8, null, null],
      [null, null, 2, 5, 6, null, 3, null, 9],
      [null, 5, null, null, null, null, null, null, 7],
      [null, 7, null, 4, null, null, null, null, null],
    ];
    let actual = calculateGridPositions(readGrid);
    expect(actual).toEqual(expected);
  });
});
