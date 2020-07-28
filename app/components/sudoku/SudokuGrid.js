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
} from '../../services/SudokuSolver';
import SortableGrid from 'react-native-sortable-grid';

export default class SudokuGrid extends Component {
  
  constructor(props) {
    super(props);
    const {grid} = this.props.navigation.state.params;
    this.state = {
      grid,
      flatGrid: grid.flat(),
    };
  }

  render() {
    const {block, gridLayout, squareLayout, squareText} = styles;
    const {grid} = this.state;
    const flatGrid = grid.flat();
    return (
<View>
      <SortableGrid 
      blockTransitionDuration      = { 400 }
      activeBlockCenteringDuration = { 200 }
      itemsPerRow                  = { 9 }
      dragActivationTreshold       = { 200 }
      onDragRelease                = { (itemOrder) => {
        console.log("Drag was released, the blocks are in the following order: ", itemOrder) 
        this.setState({
          flatGrid: itemOrder
        })}
      }
      onDragStart                  = { () => console.log("Some block is being dragged now!") }
      >
      {
        this.state.flatGrid.map( (number, index) =>

      <View key={index} style={[styles.block, { backgroundColor: "grey" }]}>
        <Text style={{color: 'white', fontSize: 30}}>{ number}</Text>
      </View>

      )
      }
</SortableGrid>
  <View>
  <Button
          title="Solve"
          onPress={() => this.solveGrid(this.state.flatGrid)}
        />
  </View>
</View>  
    );
  }

  solveGrid = flatGrid => {
    let grid = this.convertFlatGridToGrid(flatGrid);
    let startingCoordinates = determineStartingNumbersCoordinates(grid);
    let solvedGrid = solve(grid, startingCoordinates);
    this.setState({
      flatGrid: solvedGrid.flat(),
    });
  };
  convertFlatGridToGrid = flatGrid => {
      let grid = [[]];
      for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
          flatGrid.forEach(e => {
              grid[x][y] = e;
          })
        }
      }
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
