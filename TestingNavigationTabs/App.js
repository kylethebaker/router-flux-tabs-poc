import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

const createDummyComponent = (key) => (
  () => <View><Text>{`Dummy: ${key}`}</Text></View>
);

const screens = {
  S1: { screen: createDummyComponent('one'), path: 'one', },
  S2: { screen: createDummyComponent('two'), path: 'two', },
};

const tabProps = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeBackgroundColor: '#ff0000',
  }
};

const Tabs = TabNavigator(screens, tabProps);

export default class App extends Component {
  render() {
    return (
      <Tabs />
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
