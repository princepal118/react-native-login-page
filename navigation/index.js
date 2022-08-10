import {createStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createStackNavigator();

import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';

const MyStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="Quiz" component={Quiz} />
    <Stack.Screen name="Result" component={Result} />
  </Stack.Navigator>
);

export default MyStack;
