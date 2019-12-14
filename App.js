/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Route from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
