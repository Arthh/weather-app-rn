// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes/routes'

export default function App() {
  return (
    <NavigationContainer>
      {/* <Provider store={store}> */}
        <Routes />
      {/* </Provider> */}
    </NavigationContainer>
  );
}
