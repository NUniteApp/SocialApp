import React from "react";
import Routes from './Routes';
import { AuthContextProvider} from "./AuthContext";
import { AuthHelperContextProvider } from "./AuthHelperContext";

function Providers(props) {
  return (
    <AuthHelperContextProvider>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </AuthHelperContextProvider>


  );
}

export default Providers;
