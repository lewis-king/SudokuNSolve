import React, {Component} from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  solve,
  determineStartingNumbersCoordinates,
} from '../../services/SudokuSolver';

export default class SudokuGrid extends Component {
  constructor(props) {
    super(props);
    let {grid} = this.props.navigation.state.params;
    console.log(grid)
    if (!grid) {
      grid = [
        [2, null, null, null, 5, null, 1, 6, null],
        [null, null, 8, 4, null, null, null, 3, null],
        [5, 7, null, null, 2, null, null, null, null],
        [6, 1, null, null, 3, null, null, 8, null],
        [null, null, null, null, 9, 4, null, 2, 1],
        [null, null, 5, 1, null, null, null, null, 4],
        [7, 9, null, null, null, null, null, null, null],
        [3, null, null, null, null, 5, null, null, 2],
        [null, null, null, 7, null, 8, null, null, null],
      ]
    }
    this.state = {
      grid,
      selectedSquareCoordinates: {x: -1, y: -1},
      isSolved: false,
    };
  }

  render() {
    const {gridStyle, gridSquareTouchable, selectNumberSquare, selectedSquare, selectableNumbers, selectNumberTxt, solveBtn, squareLayout, squareText} = styles;
    const {grid} = this.state;
    console.log(this.state.selectedSquareCoordinates)
    console.log(this.state.selectedSquareCoordinates)
    return (
      <View>
        <View>
          <View style={gridStyle}>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 0 && this.state.selectedSquareCoordinates.y === 0 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 0, y: 0})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[0][0] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 0 && this.state.selectedSquareCoordinates.y === 1 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 0, y: 1})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[0][1] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 0 && this.state.selectedSquareCoordinates.y === 2 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 0, y: 2})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[0][2] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 0 && this.state.selectedSquareCoordinates.y === 3 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 0, y: 3})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[0][3] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 0 && this.state.selectedSquareCoordinates.y === 4 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 0, y: 4})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[0][4] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 0 && this.state.selectedSquareCoordinates.y === 5 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 0, y: 5})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[0][5] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 0 && this.state.selectedSquareCoordinates.y === 6 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 0, y: 6})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[0][6] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 0 && this.state.selectedSquareCoordinates.y === 7 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 0, y: 7})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[0][7] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 0 && this.state.selectedSquareCoordinates.y === 8 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 0, y: 8})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[0][8] || '')}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={gridStyle}>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 1 && this.state.selectedSquareCoordinates.y === 0 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 1, y: 0})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[1][0] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 1 && this.state.selectedSquareCoordinates.y === 1 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 1, y: 1})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[1][1] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 1 && this.state.selectedSquareCoordinates.y === 2 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 1, y: 2})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[1][2] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 1 && this.state.selectedSquareCoordinates.y === 3 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 1, y: 3})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[1][3] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 1 && this.state.selectedSquareCoordinates.y === 4 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 1, y: 4})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[1][4] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 1 && this.state.selectedSquareCoordinates.y === 5 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 1, y: 5})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[1][5] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 1 && this.state.selectedSquareCoordinates.y === 6 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 1, y: 6})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[1][6] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 1 && this.state.selectedSquareCoordinates.y === 7 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 1, y: 7})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[1][7] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 1 && this.state.selectedSquareCoordinates.y === 8 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 1, y: 8})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[1][8] || '')}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={gridStyle}>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 2 && this.state.selectedSquareCoordinates.y === 0 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 2, y: 0})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[2][0] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 2 && this.state.selectedSquareCoordinates.y === 1 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 2, y: 1})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[2][1] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 2 && this.state.selectedSquareCoordinates.y === 2 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 2, y: 2})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[2][2] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 2 && this.state.selectedSquareCoordinates.y === 3 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 2, y: 3})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[2][3] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 2 && this.state.selectedSquareCoordinates.y === 4 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 2, y: 4})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[2][4] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 2 && this.state.selectedSquareCoordinates.y === 5 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 2, y: 5})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[2][5] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 2 && this.state.selectedSquareCoordinates.y === 6 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 2, y: 6})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[2][6] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 2 && this.state.selectedSquareCoordinates.y === 7 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 2, y: 7})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[2][7] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 2 && this.state.selectedSquareCoordinates.y === 8 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 2, y: 8})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[2][8] || '')}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={gridStyle}>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 3 && this.state.selectedSquareCoordinates.y === 0 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 3, y: 0})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[3][0] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 3 && this.state.selectedSquareCoordinates.y === 1 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 3, y: 1})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[3][1] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 3 && this.state.selectedSquareCoordinates.y === 2 ? selectedSquare : "", {borderTopWidth: 2}, {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 3, y: 2})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[3][2] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 3 && this.state.selectedSquareCoordinates.y === 3 ? selectedSquare : "", {borderTopWidth: 2}, {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 3, y: 3})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[3][3] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 3 && this.state.selectedSquareCoordinates.y === 4 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 3, y: 4})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[3][4] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 3 && this.state.selectedSquareCoordinates.y === 5 ? selectedSquare : "", {borderTopWidth: 2}, {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 3, y: 5})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[3][5] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 3 && this.state.selectedSquareCoordinates.y === 6 ? selectedSquare : "", {borderTopWidth: 2}, {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 3, y: 6})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[3][6] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 3 && this.state.selectedSquareCoordinates.y === 7 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 3, y: 7})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[3][7] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 3 && this.state.selectedSquareCoordinates.y === 8 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 3, y: 8})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[3][8] || '')}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={gridStyle}>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 4 && this.state.selectedSquareCoordinates.y === 0 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 4, y: 0})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[4][0] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 4 && this.state.selectedSquareCoordinates.y === 1 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 4, y: 1})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[4][1] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 4 && this.state.selectedSquareCoordinates.y === 2 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 4, y: 2})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[4][2] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 4 && this.state.selectedSquareCoordinates.y === 3 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 4, y: 3})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[4][3] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 4 && this.state.selectedSquareCoordinates.y === 4 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 4, y: 4})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[4][4] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 4 && this.state.selectedSquareCoordinates.y === 5 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 4, y: 5})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[4][5] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 4 && this.state.selectedSquareCoordinates.y === 6 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 4, y: 6})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[4][6] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 4 && this.state.selectedSquareCoordinates.y === 7 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 4, y: 7})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[4][7] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 4 && this.state.selectedSquareCoordinates.y === 8 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 4, y: 8})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[4][8] || '')}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={gridStyle}>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 5 && this.state.selectedSquareCoordinates.y === 0 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 5, y: 0})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[5][0] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 5 && this.state.selectedSquareCoordinates.y === 1 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 5, y: 1})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[5][1] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 5 && this.state.selectedSquareCoordinates.y === 2 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 5, y: 2})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[5][2] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 5 && this.state.selectedSquareCoordinates.y === 3 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 5, y: 3})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[5][3] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 5 && this.state.selectedSquareCoordinates.y === 4 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 5, y: 4})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[5][4] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 5 && this.state.selectedSquareCoordinates.y === 5 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 5, y: 5})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[5][5] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 5 && this.state.selectedSquareCoordinates.y === 6 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 5, y: 6})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[5][6] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 5 && this.state.selectedSquareCoordinates.y === 7 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 5, y: 7})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[5][7] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 5 && this.state.selectedSquareCoordinates.y === 8 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 5, y: 8})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[5][8] || '')}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={gridStyle}>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 6 && this.state.selectedSquareCoordinates.y === 0 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 6, y: 0})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[6][0] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 6 && this.state.selectedSquareCoordinates.y === 1 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 6, y: 1})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[6][1] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 6 && this.state.selectedSquareCoordinates.y === 2 ? selectedSquare : "", {borderTopWidth: 2}, {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 6, y: 2})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[6][2] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 6 && this.state.selectedSquareCoordinates.y === 3 ? selectedSquare : "", {borderTopWidth: 2}, {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 6, y: 3})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[6][3] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 6 && this.state.selectedSquareCoordinates.y === 4 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 6, y: 4})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[6][4] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 6 && this.state.selectedSquareCoordinates.y === 5 ? selectedSquare : "", {borderTopWidth: 2}, {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 6, y: 5})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[6][5] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 6 && this.state.selectedSquareCoordinates.y === 6 ? selectedSquare : "", {borderTopWidth: 2}, {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 6, y: 6})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[6][6] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 6 && this.state.selectedSquareCoordinates.y === 7 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 6, y: 7})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[6][7] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 6 && this.state.selectedSquareCoordinates.y === 8 ? selectedSquare : "", {borderTopWidth: 2}]} onPress={() => this.setSelectedSquare({x: 6, y: 8})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[6][8] || '')}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={gridStyle}>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 7 && this.state.selectedSquareCoordinates.y === 0 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 7, y: 0})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[7][0] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 7 && this.state.selectedSquareCoordinates.y === 1 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 7, y: 1})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[7][1] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 7 && this.state.selectedSquareCoordinates.y === 2 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 7, y: 2})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[7][2] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 7 && this.state.selectedSquareCoordinates.y === 3 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 7, y: 3})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[7][3] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 7 && this.state.selectedSquareCoordinates.y === 4 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 7, y: 4})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[7][4] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 7 && this.state.selectedSquareCoordinates.y === 5 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 7, y: 5})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[7][5] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 7 && this.state.selectedSquareCoordinates.y === 6 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 7, y: 6})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[7][6] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 7 && this.state.selectedSquareCoordinates.y === 7 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 7, y: 7})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[7][7] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 7 && this.state.selectedSquareCoordinates.y === 8 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 7, y: 8})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[7][8] || '')}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={gridStyle}>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 8 && this.state.selectedSquareCoordinates.y === 0 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 8, y: 0})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[8][0] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 8 && this.state.selectedSquareCoordinates.y === 1 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 8, y: 1})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[8][1] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 8 && this.state.selectedSquareCoordinates.y === 2 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 8, y: 2})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[8][2] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 8 && this.state.selectedSquareCoordinates.y === 3 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 8, y: 3})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[8][3] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 8 && this.state.selectedSquareCoordinates.y === 4 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 8, y: 4})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[8][4] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 8 && this.state.selectedSquareCoordinates.y === 5 ? selectedSquare : "", {borderRightWidth: 2}]} onPress={() => this.setSelectedSquare({x: 8, y: 5})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[8][5] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 8 && this.state.selectedSquareCoordinates.y === 6 ? selectedSquare : "", {borderLeftWidth: 2}]} onPress={() => this.setSelectedSquare({x: 8, y: 6})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[8][6] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 8 && this.state.selectedSquareCoordinates.y === 7 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 8, y: 7})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[8][7] || '')}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[gridSquareTouchable, this.state.selectedSquareCoordinates.x === 8 && this.state.selectedSquareCoordinates.y === 8 ? selectedSquare : ""]} onPress={() => this.setSelectedSquare({x: 8, y: 8})}>
              <View style={squareLayout}>
                <Text style={squareText}>{'' + (grid[8][8] || '')}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={[selectableNumbers, this.state.selectedSquareCoordinates.x != -1 && this.state.selectedSquareCoordinates.y != -1 ? {backgroundColor: '#A0D1E4'} : '']}>
        <TouchableOpacity style={selectNumberSquare} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(1)}><Text style={selectNumberTxt}>1</Text></TouchableOpacity>
        <TouchableOpacity style={selectNumberSquare} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(2)}><Text style={selectNumberTxt}>2</Text></TouchableOpacity>
        <TouchableOpacity style={selectNumberSquare} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(3)}><Text style={selectNumberTxt}>3</Text></TouchableOpacity>
        <TouchableOpacity style={selectNumberSquare} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(4)}><Text style={selectNumberTxt}>4</Text></TouchableOpacity>
        <TouchableOpacity style={selectNumberSquare} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(5)}><Text style={selectNumberTxt}>5</Text></TouchableOpacity>
        <TouchableOpacity style={selectNumberSquare} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(6)}><Text style={selectNumberTxt}>6</Text></TouchableOpacity>
        <TouchableOpacity style={selectNumberSquare} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(7)}><Text style={selectNumberTxt}>7</Text></TouchableOpacity>
        <TouchableOpacity style={selectNumberSquare} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(8)}><Text style={selectNumberTxt}>8</Text></TouchableOpacity>
        <TouchableOpacity style={selectNumberSquare} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(9)}><Text style={selectNumberTxt}>9</Text></TouchableOpacity>
        <TouchableOpacity style={[selectNumberSquare, {fontSize: 10}]} disabled={this.state.selectedSquareCoordinates.x === -1 && this.state.selectedSquareCoordinates.y === -1} onPress={() => this.setNumberInSelectedSquare(null)}><Text style={selectNumberTxt}>BLANK</Text></TouchableOpacity>
        </View>
        <Button style={solveBtn} title='Solve' onPress={() => this.solveGrid(this.state.grid)} />
      </View>
    );
  }

  setSelectedSquare = coordinates => {
    const {grid, selectedSquareCoordinates} = this.state;
    if (selectedSquareCoordinates.x !== -1 && selectedSquareCoordinates.y !== -1) {
      grid[coordinates.x][coordinates.y] = grid[selectedSquareCoordinates.x][selectedSquareCoordinates.y];
      grid[selectedSquareCoordinates.x][selectedSquareCoordinates.y] = null;
      this.setState({
        selectedSquareCoordinates: {x: -1, y: -1},
      });
    } else {
      this.setState({
        selectedSquareCoordinates: coordinates,
      });
    }
  };

  setNumberInSelectedSquare = number => {
    const {grid, selectedSquareCoordinates} = this.state;
    grid[selectedSquareCoordinates.x][selectedSquareCoordinates.y] = number;
    this.setState({
      grid,
      selectedSquareCoordinates: {x: -1, y: -1},
    });
  };

  solveGrid = grid => {
    let startingCoordinates = determineStartingNumbersCoordinates(grid);
    console.log("starting coors")
    console.log(startingCoordinates)
    console.log("grid to be solved:")
    console.log(grid)
    let solvedGrid = solve(grid, startingCoordinates);
    this.setState({
      grid: solvedGrid,
    });
  };
}

const styles = StyleSheet.create({
  solveBtn: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  gridStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  gridSquareTouchable: {
    backgroundColor: "beige",
  },
  selectNumberSquare: {
  },
  selectedSquare: {
    backgroundColor: "#A0D1E4",
  },
  selectableNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  selectNumberTxt: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  squareLayout: {
    borderWidth: 0.5,
    height: Dimensions.get('window').width * 0.11,
    width: Dimensions.get('window').width * 0.11,
    margin: 0,
  },
  squareText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 20
  },
});
