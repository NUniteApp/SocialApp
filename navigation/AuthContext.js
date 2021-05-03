import React, { useReducer, createContext , useContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthHelperContext } from "./AuthHelperContext";


export const AuthContext = createContext();

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
  userId: null,
  userName: null
};


// Name of the actions to avoid the mistake
const RESTORE_TOKEN = "RESTORE_TOKEN";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

// Reducer function
const reducer = (state, action) => {

  if (action.type === RESTORE_TOKEN) {
    return {
      ...state,
      userToken: action.token,
      isLoading: false,
      userId: action.userId,
      userName: action.userName
    };
  }
  if (action.type === SIGN_IN) {
    return {
      ...state,
      isSignout: false,
      userToken: action.token,
      userId: action.userId,
      userName: action.userName
    };
  }
  if (action.type === SIGN_OUT) {
    return {
      ...state,
      isSignout: true,
      userToken: null,
      userId: null,
      userName: null
    };
  }
};

export const AuthContextProvider = ({children}) => {
  const [authState, dispatch] = useReducer(reducer, initialState);
  const { getUserTokenUserId } = useContext(AuthHelperContext);


  const signIn = async (data) => {
    // Persists the token in secure async storage
    let tokenToStore;
    try {
       tokenToStore = await AsyncStorage.setItem("social-app-token", data.authToken);
    } catch (error) {
      console.log(error);
    }
    // Save the token in the state
    let user = await getUserTokenUserId(data.authToken);
    console.log(user.user_id + " 123");
    dispatch({ type: SIGN_IN, token: data.authToken,
      userId: user.user_id , userName: user.user_name});
    return true;
  };

  const signOut = async (data) => {
    // Call dispatch to null the token
    let removeUserToken = await AsyncStorage.removeItem("social-app-token");
    dispatch({ type: SIGN_OUT, token: null, userId: null });
    return true;
  };
  const signUp =  async (data) => {
    // Either redirect to the sign in screen or redirect to the home screen
  };

  const restoreToken = async (userToken) => {

    let user = await getUserTokenUserId(userToken);
    dispatch({ type: RESTORE_TOKEN, token: userToken ,
      userId: user.user_id, userName: user.user_name });
    return true;
  }


  const value= { authState, restoreToken ,signIn, signOut, signUp };

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}

