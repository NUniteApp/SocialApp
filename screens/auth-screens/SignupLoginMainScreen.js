import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { windowWidth, windowHeight } from "../../utils/DeviceDimensions";
import { TouchableOpacity } from "react-native-gesture-handler";

// Press CTRL + ALT + L --> To format a file

function SignupLoginMainScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.nunite_logo_view}>
        <Image
          style={styles.nunite_logo}
          source={require("../../assets/Logo_NUnite.png")}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {
        console.log(props);
        props.navigation.navigate('LoginScreen');
      }}>
        <Text  style={styles.text_black }>Login</Text>
      </TouchableOpacity>
      <Text style={styles.text}>OR</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        console.log(props);
        props.navigation.navigate('SignUpScreen');
      }}>
        <Text  style={styles.text_black }>Sign Up</Text>
      </TouchableOpacity>
    </View>

  );
}

export default SignupLoginMainScreen;
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
    marginTop: (windowHeight * .15),
    width: (windowWidth * .50),
    height: (windowHeight * .50),
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
    width: (windowWidth * .80),
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 20,
  },
});
