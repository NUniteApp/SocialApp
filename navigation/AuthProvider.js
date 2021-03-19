// We need to manage the authentication state such that the authentication state
// available to all the child components.

import React, {createContext, useState} from 'react';
import {Text} from 'react-native';

// Create a dafault empty auth context
export const AuthContext = createContext();

// export const AuthProvider =

