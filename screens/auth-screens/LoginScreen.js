import React from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      {/* View for the image*/}
      <View style={styles.nunite_logo_view}>
        <Image
          style={styles.nunite_logo}
          source={require("../../assets/Logo_NUnite.png")}
        />
      </View>
      <Text style={[styles.text, { marginTop: 20, marginBottom: 20 }]}>Login </Text>

      <View>
        <Text style={styles.text}>Username</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="user" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Enter Username"

            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity onPress={
          () => {
            props.navigation.navigate("UsernameRecoveryScreen");
          }
        }>
          <Text style={[styles.text, { textDecorationLine: "underline" } ]}>Forgot your username?</Text>
        </TouchableOpacity>

      </View>
      <View style={{ marginTop: 35 }}>
        <Text style={styles.text}>Password</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="key" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"

            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity onPress={
          () => {
            props.navigation.navigate("PasswordRecoveryScreen");
          }
        }>
          <Text style={[styles.text, { textDecorationLine: "underline" } ]}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {
      }}>
        <Text style={styles.text_black}> Login</Text>
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
// justifyContent: 'center',
    alignItems: "center",
// padding: 20,
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
});





