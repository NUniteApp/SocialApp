import React from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";

function PasswordRecoveryScreen(props) {
  return (
    <View style={styles.container}>
      {/* View for the image*/}
      <View style={styles.nunite_logo_view}>
        <Image
          style={styles.nunite_logo}
          source={require("../../assets/Logo_NUnite.png")}
        />
      </View>
      <Text style={[styles.text, { marginTop: 20, marginBottom: 20 }]}>Password Recovery</Text>

      <View style={{width: (windowWidth * .90)}}>
        <Text style={styles.text}>University Email</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="envelope" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Email"

            underlineColorAndroid="transparent"
          />
        </View>

          <Text style={[styles.text, {} ]}>* We will send you a link to change your password to your university email. </Text>


      </View>
      <View style={{ marginTop: 35 }}>
        <Text style={styles.text}>Username</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="key" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Username"

            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity onPress={
          () => {
            props.navigation.navigate('AuthStack', {screen: 'Recover Username', params: {something: "1"},});
          }
        }>
          <Text style={[styles.text, { textDecorationLine: "underline" } ]}>Forgot your username?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {
        props.navigation.navigate("EmailConfirmationScreen");
      }}>
        <Text style={styles.text_black}> Send Email </Text>
      </TouchableOpacity>

    </View>


  );
};
export default PasswordRecoveryScreen;

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





