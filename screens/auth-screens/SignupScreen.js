import React, { useState, useEffect } from "react";
import {
  Text, View, Image, StyleSheet,
  TextInput, ScrollView, TouchableOpacity,
} from "react-native";
import { windowHeight, windowWidth } from "../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";
import { CommonActions } from "@react-navigation/native";


// get the Auth Context
import { AuthContext } from "../../navigation/AuthContext";


function SignupScreen(props) {
  const [signUpState, setSignUpState] = useState({
    userName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    stateStatus: "initial",
  });
  const [errorArray, setErrorArray] = useState([]);

  const hasWhiteSpace = (s) => {
    return /\s/g.test(s);
  };
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const comparePass = (password1, password2) => {
    let res;
    password1 === password2 ? res = true : res = false;
    return res;
  };

  const validateUserInputs = () => {
    console.log(signUpState);
    setErrorArray([]);
    // setSignUpState( prevState => ({ ...prevState, stateStatus: ""})) ;
    let noErrors = false;

    let errorUserNameEmpty = (<Text key="1" style={styles.errorTextStyle}>Please Enter your username </Text>);
    let userNameContainSpace = (
      <Text key="2" style={styles.errorTextStyle}>Your username can not contain spaces </Text>);
    let errorEmailEmpty = (<Text key="3" style={styles.errorTextStyle}>Please Enter your email </Text>);
    let errorPasswordEmpty = (<Text key="4" style={styles.errorTextStyle}>Please set your password </Text>);
    let errorConPassEmpty = (<Text key="5" style={styles.errorTextStyle}>Please confirm your password </Text>);
    let errorEmailValid = (<Text key="6" style={styles.errorTextStyle}>Please enter a valid email</Text>);
    let errorConPassDoNotMatch = (
      <Text key="7" style={styles.errorTextStyle}>Your password and confirm password do not match</Text>);
    let errorNotNorthumbriaEmail = (
      <Text key="8" style={styles.errorTextStyle}>Only Northumbria Students can Register</Text>);

    // Null or Empty Errors  Check
    signUpState.userName === (null || "") ?
      setErrorArray(prevState => [...prevState, errorUserNameEmpty]) : noErrors = true;

    signUpState.emailAddress === (null || "") ?
      setErrorArray(prevState => [...prevState, errorEmailEmpty]) : noErrors = true;

    signUpState.password === (null || "") ?
      setErrorArray(prevState => [...prevState, errorPasswordEmpty]) : noErrors = true;

    signUpState.confirmPassword === (null || "") ?
      setErrorArray(prevState => [...prevState, errorConPassEmpty]) : noErrors = true;


    // User name contains spaces
    let userNameTest = signUpState.userName.trim();
    let userNameTestRes = hasWhiteSpace(userNameTest);
    console.log(userNameTestRes);
    userNameTestRes ? setErrorArray(prevState => [...prevState, userNameContainSpace]) : noErrors = true;

    // Email is not valid i.e. not in northumbria email format
    let emailValidationTest = validateEmail(signUpState.emailAddress);
    !emailValidationTest ? setErrorArray(prevState => [...prevState, errorEmailValid]) : noErrors = true;

    // Passwords not match
    let confirmPassCompare = comparePass(signUpState.password, signUpState.confirmPassword);
    !confirmPassCompare ? setErrorArray(prevState => [...prevState, errorConPassDoNotMatch]) : noErrors = true;

    let northumbriaEmail = false;
    // isNorthumbriaEmailTest
    // trim test sample
    let northumbriaEmailTest = signUpState.emailAddress.trim();
    // split by @ sign
    let emailSplitArr = northumbriaEmailTest.split("@");
    // test first part for
    // starts with w
    let wTest = emailSplitArr[0].startsWith("w");
    wTest ? northumbriaEmail = true : northumbriaEmail = false;
    // is of length 9
    let lengthTest = emailSplitArr[0].length === 9;
    lengthTest ? northumbriaEmail = true : northumbriaEmail = false;
    // test second part for
    // is a northumbria domain in email i.e. northumbria.ac.uk
    let domainTest = emailSplitArr[1] === "northumbria.ac.uk";
    domainTest ? northumbriaEmail = true : northumbriaEmail = false;

    !northumbriaEmail ? setErrorArray(prevState => [...prevState, errorNotNorthumbriaEmail]) : noErrors = true;
    console.log("checkingErrorState " + noErrors);

    let r = Math.random().toString(36).substring(7);
    console.log("random", r);

    setSignUpState(prevState => ({ ...prevState, stateStatus: r }));

    // console.log(errors);
    // if (errorArray.length === 0) {
    //
    //   console.log("I am here");
    //   console.log(noErrors);
    //   console.log("Error Array Length"  +errorArray.length);
    //   props.navigation.navigate('AuthStack', {
    //     screen: 'Create User Profile',
    //     params: {userRegistrationDetails: signUpState},
    //   });
    //
    //
    // };
  };

  useEffect(() => {
    console.log("123");

    console.log("Hello 123");
    if (errorArray.length === 0 && signUpState.stateStatus !== "initial" ) {
      console.log("I am here");
      // console.log(noErrors);
      console.log("Error Array Length" + errorArray.length);
      props.navigation.navigate("AuthStack", {
        screen: "Create User Profile",
        params: { userRegistrationDetails: signUpState },
      });

    }

  }, [signUpState.stateStatus]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* View for the image*/}
        <View style={styles.nunite_logo_view}>
          <Image
            style={styles.nunite_logo}
            source={require("../../assets/Logo_NUnite.png")}
          />
        </View>
        <Text style={[styles.text, { marginTop: 20, marginBottom: 20 }]}> Sign Up</Text>
        <View>
          {errorArray}
        </View>

        <View>
          <Text style={styles.text}>Username</Text>
          <View style={styles.inputSection}>
            <Icon style={styles.inputIcon} name="user" size={20} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              underlineColorAndroid="transparent"
              value={signUpState.userName}
              onChangeText={text => {
                setSignUpState(prevState => ({ ...prevState, userName: text }));
              }}
            />
          </View>

        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={styles.text}>Email Address</Text>
          <View style={styles.inputSection}>
            <Icon style={styles.inputIcon} name="envelope" size={20} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Enter Email Address"
              underlineColorAndroid="transparent"
              value={signUpState.emailAddress}
              onChangeText={text => {
                setSignUpState(prevState => ({ ...prevState, emailAddress: text }));
              }}
            />
          </View>

        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={styles.text}>Password</Text>
          <View style={styles.inputSection}>
            <Icon style={styles.inputIcon} name="key" size={20} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              underlineColorAndroid="transparent"
              secureTextEntry
              value={signUpState.password}
              onChangeText={text => {
                setSignUpState(prevState => ({ ...prevState, password: text }));
              }}
            />
          </View>

        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={styles.text}>Confirm Password</Text>
          <View style={styles.inputSection}>
            <Icon style={styles.inputIcon} name="key" size={20} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              underlineColorAndroid="transparent"
              secureTextEntry
              value={signUpState.confirmPassword}
              onChangeText={text => {
                setSignUpState(prevState => ({ ...prevState, confirmPassword: text }));
              }}
            />
          </View>

        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
          validateUserInputs();
        }}>
          <Text style={styles.text_black}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          props.navigation.navigate("AuthStack", { screen: "LoginScreen", params: { something: "1" } });

        }}>
          <Text style={[styles.text, { textDecorationLine: "underline" }]}>Login instead</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>

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

  errorTextStyle: {
    fontSize: 16,
    color: "#ff6666",
    textAlign: "center",
  },
});
