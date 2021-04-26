import React, { useContext, useEffect, } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import Screens
import SplashScreen from "../screens/auth-screens/SplashScreen";
import SignupLoginMainScreen from "../screens/auth-screens/SignupLoginMainScreen";
import LoginScreen from "../screens/auth-screens/LoginScreen";
import SignupScreen from "../screens/auth-screens/SignupScreen";
import PasswordRecoveryScreen from "../screens/auth-screens/PasswordRecoveryScreen";
import UsernameRecoveryScreen from "../screens/auth-screens/UsernameRecoveryScreen";
import EmailConfirmationScreen from "../screens/auth-screens/EmailConfirmationScreen";

// Imports for main tab screens
import HomeScreen from "../screens/app-screens/home/HomeScreen";
import ChatsScreen from "../screens/app-screens/chat/ChatsScreen";
import ProfileScreen from "../screens/app-screens/profile/ProfileScreen";
import TenancyScreen from "../screens/app-screens/tenancy/TenancyScreen";

// Context Imports
import { AuthContext } from "./AuthContext";


// Initialize Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Routes(props) {

  const { authState, restoreToken } = useContext(AuthContext);

  // Similar to componentDidMount method i.e. useEffect
  useEffect(() => {

    const bootstrapAsync = async () => {
      let userToken;
      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
        userToken = await AsyncStorage.getItem("social-app-token");
        console.log(userToken);
        // Sign out using the code
        // let removeUserToken = await AsyncStorage.removeItem("social-app-token");
        // console.log(userToken);
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.

      restoreToken(userToken);
    };
    bootstrapAsync();

  }, []);


  function StartApp() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#050505',
        }}>
        <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                      tabBarLabel: 'Home',
                      tabBarIcon: () => (
                        <Icon name="home" size={30} color="#050505" />
                      ),
                    }}/>
        <Tab.Screen name="Chat" component={ChatsScreen}
                    options={{
                      tabBarLabel: 'Chat',
                      tabBarIcon: () => (
                        <Icon name="comment" size={30} color="#050505" solid/>
                      ),
                    }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                      tabBarLabel: 'Profile',
                      tabBarIcon: () => (
                        <Icon name="user" size={30} color="#050505" solid/>
                      ),
                    }}/>
        <Tab.Screen name="Tenancy" component={TenancyScreen}
                    options={{
                      tabBarLabel: 'Tenancy',
                      tabBarIcon: () => (
                        <Icon name="door-open" size={30} color="#050505" solid/>
                      ),
                    }}/>
      </Tab.Navigator>
    )
  }

  // Based on the user value -- return the appropriate stack to the user
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {authState.isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : authState.userToken == null ? (

            <>
              <Stack.Screen name="Get Started" component={SignupLoginMainScreen} />
              <Stack.Screen
                name="Sign In"
                component={LoginScreen}
                options={{
                  title: 'Sign in',
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: authState.isSignout ? 'pop' : 'push',
                }}
              />
              <Stack.Screen name="Sign Up" component={SignupScreen}  />
              <Stack.Screen name="Recover Password" component={PasswordRecoveryScreen} />
              <Stack.Screen name="Recover Username" component={UsernameRecoveryScreen} />
              <Stack.Screen name="Email Confirmation" component={EmailConfirmationScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={StartApp} />
            </>
          ) }

        </Stack.Navigator>
      </NavigationContainer>

  );
}

export default Routes;

