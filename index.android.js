/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class JustCodersNetwork extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Приветствуем в JustCoders Network!
        </Text>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image
            style={{width: 300, height: 300}}
            source={require('./src/images/jc-logo.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('JustCodersNetwork', () => JustCodersNetwork);
