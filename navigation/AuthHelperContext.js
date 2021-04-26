import React, { useReducer, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt from "react-native-pure-jwt";


export const AuthHelperContext = createContext();

// const initialState = {
//   userTokenForDecryption: "",
// };

export const AuthHelperContextProvider = ({ children }) => {
  const getUserTokenUserId = async (userTokenVal) => {
    let user_id = null;
    let user_name = null;
    try {
      // const userTokenVal = await AsyncStorage.getItem("payment-app-token");

      if (userTokenVal !== null) {
        // console.log(userTokenVal);
        try {
          let res = await jwt.decode(userTokenVal, // the token
            "test", // the secret test value
            {
              skipValidation: true, // to skip signature and exp verification
            },
          );
          user_id = res.payload.user_id;
          user_name = res.payload.username;
          console.log(res);
        } catch (errorInToken) {
          console.log(errorInToken);
        }

      }
    } catch (error) {
      console.log(error);
    }

    let user = {
      user_id: user_id,
      user_name: user_name

    }
    return user;
  };

  const value = { getUserTokenUserId };

  return (
    <AuthHelperContext.Provider value={value} >
      {children}
    </AuthHelperContext.Provider>
  )

};
