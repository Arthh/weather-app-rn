import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Clime from '../screens/Clime';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: 'transparent'}}} >
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Clime" component={Clime}options={{ headerTitleAlign: 'center' }} />
    </Stack.Navigator>
  );
}

export default Routes;