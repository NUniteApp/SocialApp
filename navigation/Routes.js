import React, {useContext, useState, useEffect} from 'react';
import {Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

function Routes(props) {

  const [user, setUser] = useState(null);

  // Similar to componentDidMount method i.e. useEffect
  useEffect( () => {
    AsyncStorage.getItem('jwt-token').then((value) => {
      if(value === null) {
        setUser(null);
      } else {
        // Decode the token value
        // store info of it inside the user with setUser
        setUser("true");
      }
    });
  }, []);

  // Based on the user value -- return the appropriate stack to the user
  return (
    <NavigationContainer>
      { user ? <AppStack /> : <AuthStack /> }
    </NavigationContainer>
  );
}

export default Routes;
