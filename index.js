import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class ChillestMonkey extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 1, width: 0 };
  }

  get isPortrait() {
    return this.state.height > this.state.width;
  }

  get isLandscape() {
    return !this.isPortrait;
  }

  render() {
    if (this.isLandscape) {
      return this.renderLandscape();
    } else {
      return this.renderPortrait();
    }
  }

  renderPortrait() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }} onLayout={ (e)=> this.setState(e.nativeEvent.layout)}>
        <Image
          style={{flex: 1}}
          source={require('./monkey.gif')}/>
      </View>
    );
  }

  renderLandscape() {
    return (
      <View style={{ flex: 1, flexDirection: 'row'}} onLayout={ (e)=> this.setState(e.nativeEvent.layout)}>
        <Image
          style={{flex: 1}}
          source={require('./monkey.gif')}/>
      </View>
    );
  }
}
