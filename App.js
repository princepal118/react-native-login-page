import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {View, StyleSheet} from 'react-native';
import MyStack from './navigation';
const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});

export default App;
