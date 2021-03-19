import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// here I import the screen for stack navigator
import SignupLoginMainScreen from "../screens/auth-screens/SignupLoginMainScreen";
import LoginScreen from "../screens/auth-screens/LoginScreen";
import SignupScreen from "../screens/auth-screens/SignupScreen";
import PasswordRecoveryScreen from "../screens/auth-screens/PasswordRecoveryScreen";
import UsernameRecoveryScreen from "../screens/auth-screens/UsernameRecoveryScreen";
import EmailConfirmationScreen from "../screens/auth-screens/EmailConfirmationScreen";

const Stack = createStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen" >
      <Stack.Screen name="MainScreen" component={SignupLoginMainScreen} options={{header: () => null }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen }  />
      <Stack.Screen name="SignUpScreen" component={SignupScreen}  />
      <Stack.Screen name="PasswordRecoveryScreen" component={PasswordRecoveryScreen} />
      <Stack.Screen name="UsernameRecoveryScreen" component={UsernameRecoveryScreen} />
      <Stack.Screen name="EmailConfirmationScreen" component={EmailConfirmationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

