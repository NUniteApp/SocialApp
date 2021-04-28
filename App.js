/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';


import Providers from './navigation';

const App: () => React$Node = () => {
  return (
    <PaperProvider>
      <Providers />
    </PaperProvider>

  );
};



export default App;
