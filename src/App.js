// @flow

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Store';
import SensorTag from './SensorTag';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* Code below does not crash when bluetooth permissions were rejected in settings */}
        {/* <SensorTag /> */}
        {/* Code below creates a crash when bluetooth permissions were rejected in settings */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={SensorTag} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
