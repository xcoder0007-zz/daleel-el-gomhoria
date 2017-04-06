import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Search from './app/components/Search';
import Initial from './app/components/Initial'


export default class Gdlmar extends Component {
  renderScene(route, navigator) {
   if(route.name == 'Initial') {
     return <Initial navigator={navigator} />
   }
   if(route.name == 'Home') {
     return <Home navigator={navigator} />
   }
}


  render() {
    return (

      <View>
            <Navigator
  initialRoute={{ name: 'Initial' }}
  renderScene={ this.renderScene } />

        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('Gdlmar', () => Gdlmar);
