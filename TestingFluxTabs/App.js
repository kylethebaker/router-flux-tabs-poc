import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Tabs, Scene } from 'react-native-router-flux';

const createDummyComponent = (key) => (
  () => <View><Text>{`Dummy: ${key}`}</Text></View>
);

const tabProps = {
  tabBarPosition: 'top',
  activeBackgroundColor: '#ff0000',
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <Tabs {...tabProps}>
          <Scene key='s1' tabLabel='one' component={createDummyComponent('one')} />
          <Scene key='s2' tabLabel='two' component={createDummyComponent('two')} />
        </Tabs>
      </Router>
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
