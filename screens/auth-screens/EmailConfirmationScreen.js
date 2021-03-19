import React from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";

function EmailConfirmationScreen(props) {
  return (
    <View style={styles.container}>
      {/* View for the image*/}
      <View style={styles.nunite_logo_view}>
        <Image
          style={styles.nunite_logo}
          source={require("../../assets/Logo_NUnite.png")}
        />
      </View>
      <Text style={[styles.text, { marginTop: 20, marginBottom: 20 }]}>Email Confirmation</Text>

      <View style={{marginLeft: (windowWidth * .05), marginRight: (windowWidth * .05) }}>
        <Text style={[styles.text, {marginBottom: 20}]}>We have sent you an email with a link
          that will take you to a page where you
          can change the details you have forgotten.
        </Text>
        <Text style={styles.text}>
          Once you have changed them, use the back
          arrow to return to the login page and enter
          your new details.
        </Text>

      </View>

    </View>


  );
};
export default EmailConfirmationScreen;

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





