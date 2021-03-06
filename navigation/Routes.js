import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import Auth Screens
import SplashScreen from "../screens/auth-screens/SplashScreen";
import SignupLoginMainScreen from "../screens/auth-screens/SignupLoginMainScreen";
import LoginScreen from "../screens/auth-screens/LoginScreen";
import SignupScreen from "../screens/auth-screens/SignupScreen";
import PasswordRecoveryScreen from "../screens/auth-screens/PasswordRecoveryScreen";
import UsernameRecoveryScreen from "../screens/auth-screens/UsernameRecoveryScreen";
import EmailConfirmationScreen from "../screens/auth-screens/EmailConfirmationScreen";
import CreateUserProfile from "../screens/auth-screens/CreateUserProfile";

// Context Imports
import { AuthContext } from "./AuthContext";
// Home Screens
import HomeScreen from "../screens/app-screens/home/HomeScreen";
import GenericPostScreen from "../screens/app-screens/home/GenericPostScreen";
import PostOptionsScreen from "../screens/app-screens/home/PostOptionsScreen";
import ReportPostScreen from "../screens/app-screens/home/ReportPostScreen";
import ReportConfirmationScreen from "../screens/app-screens/home/ReportConfirmationScreen";

// Profile Screens
import ProfileScreen from "../screens/app-screens/profile/ProfileScreen";
import EditProfileScreen from "../screens/app-screens/profile/EditProfileScreen";
import FriendsListScreen from "../screens/app-screens/profile/FriendsListScreen";
import DeleteAccountScreen from "../screens/app-screens/profile/DeleteAccountScreen";
import ManagePostsScreen from "../screens/app-screens/profile/ManagePostsScreen";
import SearchProfileScreen from "../screens/app-screens/profile/SearchProfileScreen";
import ProfileSettingsScreen from "../screens/app-screens/profile/ProfileSettingsScreen";
import PostCategories from "../screens/app-screens/profile/PostCategories";
import GenericPostCreationScreen from "../screens/app-screens/profile/GenericPostCreationScreen";
import TenancyPostCreationScreen from "../screens/app-screens/profile/TenancyPostCreationScreen";

//Tenancy Screens
import TenancyPostScreen from "../screens/app-screens/tenancy/TenancyPostScreen";
import TenancyDetailsScreen from "../screens/app-screens/tenancy/TenancyDetailsScreen";

// Initialize Navigators
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const TenancyStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function StackHome() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Generic Post" component={GenericPostScreen} />
      <HomeStack.Screen name="Post Options" component={PostOptionsScreen} />
      <HomeStack.Screen name="Report Post" component={ReportPostScreen} />
      <HomeStack.Screen name="Confirm Report" component={ReportConfirmationScreen} />
    </HomeStack.Navigator>
  );
}

function StackProfile() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="My Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Edit Profile" component={EditProfileScreen} />
      <ProfileStack.Screen name="Friend Lists" component={FriendsListScreen} />
      <ProfileStack.Screen name="Profile Settings" component={ProfileSettingsScreen} />
      <ProfileStack.Screen name="Post Categories" component={PostCategories} />
      <ProfileStack.Screen name="Generic Post Create" component={GenericPostCreationScreen} />
      <ProfileStack.Screen name="Tenancy Post Create" component={TenancyPostCreationScreen} />
      <ProfileStack.Screen name="Manage Posts" component={ManagePostsScreen} />
      <ProfileStack.Screen name="Search Profile" component={SearchProfileScreen} />
      <ProfileStack.Screen name="Delete Account" component={DeleteAccountScreen} />
    </ProfileStack.Navigator>
  );
}

function StackTenancy() {
  return (
    <TenancyStack.Navigator>
      <TenancyStack.Screen name="Tenancy Posts Screen" component={TenancyPostScreen} />
      <TenancyStack.Screen name="Tenancy Details Screen" component={TenancyDetailsScreen} />
    </TenancyStack.Navigator>
  );
}

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
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: "#050505",
        }}>
        <BottomTab.Screen name="Home" children={StackHome}
                          options={{
                            tabBarLabel: "Home",
                            tabBarIcon: () => (
                              <Icon name="home" size={30} color="#050505" />
                            ),
                          }} />
        <BottomTab.Screen name="Profile" component={StackProfile}
                          options={{
                            tabBarLabel: "Profile",
                            tabBarIcon: () => (
                              <Icon name="user" size={30} color="#050505" solid />
                            ),
                          }} />
        <BottomTab.Screen name="Tenancy" component={StackTenancy}
                          options={{
                            tabBarLabel: "Tenancy",
                            tabBarIcon: () => (
                              <Icon name="door-open" size={30} color="#050505" solid />
                            ),
                          }} />
      </BottomTab.Navigator>
    );
  }


  function AuthStackNavi() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="SignupLoginMainScreen" component={SignupLoginMainScreen}
                          options={{
                            title: "Get Started",
                          }}
        />
        <AuthStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Sign in",
            // When logging out, a pop animation feels intuitive
            animationTypeForReplace: authState.isSignout ? "pop" : "push",
          }}
        />
        <AuthStack.Screen name="SignupScreen" component={SignupScreen}
                          options={{
                            title: "Sign Up",
                          }}
                          initialParams={{ name: "123" }}
        />
        <AuthStack.Screen name="Recover Password" component={PasswordRecoveryScreen} />
        <AuthStack.Screen name="Recover Username" component={UsernameRecoveryScreen} />
        <AuthStack.Screen name="Email Confirmation" component={EmailConfirmationScreen} />
        <AuthStack.Screen name="Create User Profile" component={CreateUserProfile} />
      </AuthStack.Navigator>
    );
  }

  // Based on the user value -- return the appropriate stack to the user
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState.isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : authState.userToken == null ? (
          <Stack.Screen name="AuthStack" component={AuthStackNavi} options={navOptionHandler} />
        ) : (
          <Stack.Screen name="StartApp" component={StartApp} options={navOptionHandler} />
        )}

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default Routes;

