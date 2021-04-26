import React from "react";
import {Text, View, Image, StyleSheet, TextInput} from "react-native";
import { windowHeight, windowWidth } from "../../utils/DeviceDimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";

// get the Auth Context
import { AuthContext } from "../../navigation/AuthContext";

function SignupScreen(props) {
  return (
    <View style={styles.container} >
      {/* View for the image*/}
      <View style={styles.nunite_logo_view}>
        <Image
          style={styles.nunite_logo}
          source={require("../../assets/Logo_NUnite.png")}
        />
      </View>
      <Text style={[styles.text, {marginTop: 20, marginBottom: 20}]} > Sign Up</Text>

      <View>
        <Text style={styles.text} >Username</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="user" size={20} color="#000"/>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"

            underlineColorAndroid="transparent"
          />
        </View>

      </View>
      <View style={{marginTop: 35}}>
        <Text style={styles.text} >Email Address</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="envelope" size={20} color="#000"/>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            underlineColorAndroid="transparent"
          />
        </View>

      </View>
      <View style={{marginTop: 35}}>
        <Text style={styles.text} >Password</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="key" size={20} color="#000"/>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            underlineColorAndroid="transparent"
            secureTextEntry
          />
        </View>

      </View>
      <View style={{marginTop: 35}}>
        <Text style={styles.text} >Confirm Password</Text>
        <View style={styles.inputSection}>
          <Icon style={styles.inputIcon} name="key" size={20} color="#000"/>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            underlineColorAndroid="transparent"
            secureTextEntry
          />
        </View>

      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
      }}>
        <Text  style={styles.text_black }>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        props.navigation.navigate("LoginScreen");
      }}>
        <Text style={[styles.text, {textDecorationLine: 'underline'} ]}>Login instead</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SignupScreen;
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
    color: '#424242',
    width: (windowWidth * .80),
  }
});
