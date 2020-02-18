import React, {Component} from 'react';
import {Button, View} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title="Play"
          onPress={() => navigate('SudokuGrid', {type: 'play'})}
        />
        <Button
          title="Solve"
          onPress={() => navigate('CameraTextRecognition', {type: 'solve'})}
        />
      </View>
    );
  }
}
