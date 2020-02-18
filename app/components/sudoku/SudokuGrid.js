import React, {Component} from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  solve,
  determineStartingNumbersCoordinates,
} from '../sudoku/SudokuSolver';
import SortableGrid from 'react-native-sortable-grid';

export default class SudokuGrid extends Component {
  
  constructor(props) {
    super(props);
    const {grid} = this.props.navigation.state.params;
    //let grid = [
    //  [null, 3, null, null, 8, null, 7, null, null],
    //  [1, null, null, null, 4, 9, null, null, null],
    //  [null, null, null, null, 1, 5, null, 2, null],
    //  [2, 5, null, null, null, null, 9, null, null],
    //  [null, null, 4, 1, null, null, null, null, null],
    //  [9, null, null, null, null, 6, 8, null, null],
    //  [7, 8, 9, null, null, null, null, null, null],
    //  [null, null, 3, null, null, null, null, null, null],
    //  [null, null, null, null, 3, null, null, 4, 8],
    //];
    this.state = {
      grid,
    };
  }

  render() {
    const {block, gridLayout, squareLayout, squareText} = styles;
    const {grid} = this.state;
    const flatGrid = grid.flat();
    return (

      <SortableGrid 
      blockTransitionDuration      = { 400 }
      activeBlockCenteringDuration = { 200 }
      itemsPerRow                  = { 9 }
      dragActivationTreshold       = { 200 }
      onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
      onDragStart                  = { ()          => console.log("Some block is being dragged now!") }
      >
      {
        flatGrid.map( (number, index) =>

      <View key={index} style={[styles.block, { backgroundColor: "grey" }]}>
        <Text style={{color: 'white', fontSize: 30}}>{ number}</Text>
      </View>

      )
      }
</SortableGrid>
    );
  }

  solveGrid = grid => {
    let startingCoordinates = determineStartingNumbersCoordinates(grid);
    this.setState({
      grid: solve(grid, startingCoordinates),
    });
  };
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    margin: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridLayout: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  squareLayout: {
    height: Dimensions.get('window').width * 0.11,
    width: Dimensions.get('window').width * 0.11,
  },
  squareText: {
    color: 'blue',
    fontSize: 22,
  },
});
