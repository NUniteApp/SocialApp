import React from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import {ApiUrl} from "../../utils/BackendApi";

// get the Auth Context
import { AuthContext } from "../../navigation/AuthContext";

function LoginScreen(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signIn } = React.useContext(AuthContext);
  // Error Handling State from server side
  // Case --- when the user enters an email that is not registered
  const [errorLogin, setErrorLogin] = React.useState({
    errorStatus: false,
    errorMsg: "",
  });
  // Error Handling State from client side
  // Case --- when the inputs are not valid or empty
  const [emptyInputMsg, setEmptyInputMsg] = React.useState({
    emptyEmail: "",
    emptyPassword: "",
  });

  const Login = async ({ email, password }) => {
    // Check for empty values
    let isEmptyEmail = false;
    let isEmptyPassword = false;

    if (email !== null) {
      // Sanitize the user email
      email = email.trim();
      if (email === "") {
        console.log("The email is empty");
        isEmptyEmail = true;
      }
      // @TODO
      // Validate Email input


    }
    if (password !== null) {

      if (password === "") {
        console.log("The password is empty");
        isEmptyPassword = true;
      }
    }

    // Set error messages accordingly
    if (isEmptyEmail && !isEmptyPassword) {
      console.log("Email Error");
      setEmptyInputMsg({
        emptyEmail: "Error: Email is Required",
        emptyPassword: "",
      });
    }
    if (!isEmptyEmail && isEmptyPassword) {
      console.log("Password Error ");
      setEmptyInputMsg({
        emptyEmail: "",
        emptyPassword: "Error: Password is Required",
      });
    }
    if (isEmptyEmail && isEmptyPassword) {
      console.log("Email and Password Error");
      setEmptyInputMsg({
        emptyEmail: "Error: Email is Required",
        emptyPassword: "Error: Password is Required",
      });
    }


    if (!isEmptyEmail && !isEmptyPassword) {
      const user = {
        "user_email": email,
        "password": password,
      };


      let message = await axios.post(ApiUrl + 'api/login', user);

      console.log(message.data);
      let messageServer = message.data.message;
      let statusCode = message.data.status;
      let authToken = message.data.token;
      //
      // let statusCode = 200;
      // let authToken = "123";

      if (statusCode === 401) {
        setErrorLogin({
          errorStatus: true,
          errorMsg: messageServer,
        });

      }
      if (statusCode === 200) {

        // The last step on Successful Login
        // Save the token in the context
        signIn({ authToken });
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* View for the image*/}
      <View style={styles.nunite_logo_view}>
        <Image
          style={styles.nunite_logo}
          source={require("../../assets/Logo_NUnite.png")}
        />
      </View>
      <Text style={[styles.text, { marginTop: 20, marginBottom: 20 }]}>Login</Text>

      {/* Error from server side View */}
      <View style={styles.errorLoginMsgView} >
        <Text style={styles.errorLoginMsgText} >{errorLogin.errorMsg} </Text>
      </View>

      {/* Email error view */}
      <View style={styles.errorMsgView}>
        <Text style={styles.errorMsgText}>{emptyInputMsg.emptyEmail}</Text>
      </View>

      <View>
        <Text style={styles.text}>Email</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="user" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {/*<TouchableOpacity onPress={*/}
        {/*  () => {*/}
        {/*    props.navigation.navigate("UsernameRecoveryScreen");*/}
        {/*  }*/}
        {/*}>*/}
        {/*  <Text style={[styles.text, { textDecorationLine: "underline" }]}>Forgot your username?</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>

      {/* Password error view */}
      <View style={styles.errorMsgView}>
        <Text style={styles.errorMsgText}>{emptyInputMsg.emptyPassword} </Text>
      </View>

      <View style={{ marginTop: 35 }}>
        <Text style={styles.text}>Password</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="key" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={
          () => {
            props.navigation.navigate("PasswordRecoveryScreen");
          }
        }>
          <Text style={[styles.text, { textDecorationLine: "underline" }]}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={async () => {
        try {
          await Login({ email, password });
        } catch (error) {
          console.log(error);
        }
      }}>
        <Text style={styles.text_black}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        props.navigation.navigate("SignUpScreen");
      }}>
        <Text style={[styles.text, { textDecorationLine: "underline" }]}>Sign Up instead</Text>
      </TouchableOpacity>
    </View>

  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  text_black: {
    color: "black",
    fontSize: 20,
  },
  nunite_logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.8,
  },
  nunite_logo_view: {
    marginLeft: (windowWidth * .25),
    marginRight: (windowWidth * .25),
// marginTop: (windowHeight * .15),
    width: (windowWidth * .15),
// height: (windowHeight * .20),
  },
  auth_btn_style: {
    backgroundColor: "white",
    color: "black",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
// paddingLeft: (windowWidth * .35),
// paddingRight: (windowWidth * .35),
    width: (windowWidth * .60),
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 20,
  },
  inputSection: {
// flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputIcon: {
    padding: 10,
  },
  input: {
// flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    width: (windowWidth * .80),
  },
  errorMsgView: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMsgText: {
    color: "lightcoral",
    fontSize: 14,
    fontWeight: "bold",
  },
  errorLoginMsgView: {
    marginLeft: (windowWidth * 0.05),
    marginRight: (windowWidth * 0.05),
  },
  errorLoginMsgText: {
    color: "lightcoral",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'center'
  }

});





