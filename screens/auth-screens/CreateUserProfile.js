import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from "react-native";
import NuniteLogoTop from "../../components/NuniteLogoTop";
import ScreenHeading from "../../components/ScreenHeading";
import { windowHeight, windowWidth } from "../../utils/DeviceDimensions";
import HorizontalRule from "../../components/HorizontalRule";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import CoursesList from "../../utils/courses.json";
import ProfileUrls from "../../utils/profileAvatar.json";
import ProfilePicture from "react-native-profile-picture";
import axios from "axios";
import {ApiUrl} from "../../utils/BackendApi";

const images = [
  require("../../assets/avatarFemale.png"),
  require("../../assets/avatarFemale2.png"),
  require("../../assets/avatarFemale3.png"),
  require("../../assets/avatarMale.png"),
  require("../../assets/avatarMale2.png"),
  require("../../assets/avatarMale3.png"),
];

function CreateUserProfile(props) {

  const [date, setDate] = useState("Select Date of Birth");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState();

  const [errorArray, setErrorArray] = useState([]);

  const [profileInfo, setProfileInfo] = useState({
    firstName: "",
    lastName: "",
    date: "Select Date of Birth",
    studentId: "",
    courseName: "Select your Course",
    bio: "",
    profilePic: "",
    stateStatus: "initial",
  });

  const [registrationDetails, setRegistrationDetails] =
    useState(props.route.params.userRegistrationDetails);

  const validateUserInputs = () => {
    console.log(profileInfo);
    setErrorArray([]);
    let noErrors = false;

    let errorFirstName = (
      <Text key="11" style={styles.errorTextStyle}>Please Enter your first name</Text>
    );
    let errorLastName = (
      <Text key="22" style={styles.errorTextStyle}>Please Enter your last name</Text>
    );
    let errorDate = (
      <Text key="33" style={styles.errorTextStyle}>Please select your date of birth </Text>
    );
    let errorStudentId = (
      <Text key="44" style={styles.errorTextStyle}>Please Enter your student id</Text>
    );
    let errorCourse = (
      <Text key="5" style={styles.errorTextStyle}>Please select your course </Text>
    );
    let errorBio = (
      <Text key="6" style={styles.errorTextStyle}>Please write your bio </Text>
    );
    let errorAvatar = (
      <Text key="7" style={styles.errorTextStyle}>Please select your avatar </Text>
    );


    // Null, Default or Empty checks
    // Null or Empty Errors  Check
    profileInfo.firstName === (null || "") ?
      setErrorArray(prevState => [...prevState, errorFirstName]) : noErrors = true;

    profileInfo.lastName === (null || "") ?
      setErrorArray(prevState => [...prevState, errorLastName]) : noErrors = true;

    profileInfo.date === (null || "Select Date of Birth") ?
      setErrorArray(prevState => [...prevState, errorDate]) : noErrors = true;

    profileInfo.studentId === (null || "") ?
      setErrorArray(prevState => [...prevState, errorStudentId]) : noErrors = true;

    profileInfo.courseName === (null || "Select your Course") ?
      setErrorArray(prevState => [...prevState, errorCourse]) : noErrors = true;

    profileInfo.bio === (null || "") ?
      setErrorArray(prevState => [...prevState, errorBio]) : noErrors = true;

    profileInfo.profilePic === (null || "") ?
      setErrorArray(prevState => [...prevState, errorAvatar]) : noErrors = true;

    // @TODO -- It is a good a practice to trim the inputs
    let r = Math.random().toString(36).substring(7);
    console.log("random", r);

    setProfileInfo(prevState => ({ ...prevState, stateStatus: r }));


  };

  useEffect(() => {
    if (errorArray.length === 0, profileInfo.stateStatus !== "initial") {
      console.log("API call will take place ...  ");
      console.log(profileInfo);
      console.log(props.route.params.userRegistrationDetails);

      let dataRegistration = {
        user_email: registrationDetails.emailAddress,
        username: registrationDetails.userName,
        password: registrationDetails.password,
        firstname: profileInfo.firstName,
        lastname: profileInfo.lastName,
        dob: profileInfo.date,
        avatar_url: profileInfo.profilePic,
        bio: profileInfo.bio,
        course: profileInfo.courseName,
        student_id: profileInfo.studentId,
      };

      const makeAnApiCall = async (data) => {
        let resApiCall = await axios.post(ApiUrl + "api/registration", data);
        console.log(resApiCall.data);
        if(resApiCall.data.count === 0) {
          props.navigation.navigate('AuthStack', {screen: 'LoginScreen', params: {something: "1"},});
        }
      }
      makeAnApiCall(dataRegistration);

    }
  }, [profileInfo.stateStatus]);


  // Event is fired when the user changes the date
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    // setDate(currentDate);
    let formattedDate = moment(new Date(currentDate)).format("LL");

    setProfileInfo(prevState => ({ ...prevState, date: formattedDate }));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };


  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <NuniteLogoTop />
        <View style={styles.headerView}>
          <ScreenHeading headingVal="Create Your Profile" />
        </View>
        <View>
          {errorArray}
        </View>
        <View>
          <Text style={styles.textWhiteNormal}>Full Name</Text>
        </View>
        <View style={styles.nameInputStyle}>
          <TextInput
            style={styles.input}
            placeholder="First Name ..."
            value={profileInfo.firstName}
            onChangeText={text => {
              setProfileInfo(prevState => ({ ...prevState, firstName: text }));
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name ..."
            value={profileInfo.lastName}
            onChangeText={text => {
              setProfileInfo(prevState => ({ ...prevState, lastName: text }));
            }}
          />
        </View>
        <HorizontalRule />
        <View>
          <Text style={styles.textWhiteNormal}>Date of Birth</Text>
        </View>
        <View>
          <TouchableOpacity onPress={showDatepicker}>
            <View style={styles.dateSelectorStyle}>
              <Text style={{ color: (profileInfo.date === "Select Date of Birth" ? "gray" : "black") }}>
                {profileInfo.date === "Select Date of Birth" ? "Select Date of Birth" :
                  moment(new Date(profileInfo.date)).format("LL")}</Text>
              <Icon name="calendar" size={20} color="gray" style={{ marginLeft: (windowWidth * 0.02) }} />
            </View>
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
        <HorizontalRule />
        <View>
          <Text style={styles.textWhiteNormal}>Course Details </Text>
        </View>
        {/* Student ID input */}
        <View style={styles.studentIdView}>
          <TextInput
            style={styles.inputStudentID}
            placeholder="Student ID"
            value={profileInfo.studentId}
            onChangeText={text => {
              setProfileInfo(prevState => ({ ...prevState, studentId: text }));
            }}
          />
        </View>
        {/* Dropdown for courses */}
        <View style={styles.dropdownView}>
          <Picker
            selectedValue={profileInfo.courseName}
            onValueChange={(itemValue, itemIndex) =>
              // setSelectedCourse(itemValue)
              setProfileInfo(prevState => ({ ...prevState, courseName: itemValue }))
            }
            mode="dropdown"
          >
            <Picker.Item label="Select your Course" value="Select your Course"
                         enabled={false} color="gray"
            />
            {CoursesList.courses.map((course, i) =>
              (<Picker.Item label={course} value={course} key={i} />))
            }
          </Picker>
        </View>
        {/* Bio -- Text Area */}
        <View>
          <TextInput
            style={[styles.inputTextArea, { height: (windowHeight * 0.20) }]}
            placeholder="Write briefly about yourself here..."
            numberOfLines={10}
            multiline={true}
            editable
            textAlignVertical="top"
            value={profileInfo.bio}
            onChangeText={text => {
              setProfileInfo(prevState => ({ ...prevState, bio: text }));
            }}
          />
        </View>
        <HorizontalRule />
        <View>
          <Text style={styles.textWhiteNormal}>Choose Profile Avatar</Text>
        </View>
        <View style={styles.avatarsView}>
          {
            ProfileUrls.profile_urls.map((url, i) => {
              return (
                <View style={[styles.singleAvatarView,
                  { borderColor: (url === profileInfo.profilePic ? "green" : "transparent") },

                ]}
                      key={i}
                >
                  <TouchableOpacity onPress={
                    () => {
                      setProfileInfo(prevState => ({ ...prevState, profilePic: url }));
                    }
                  }>
                    <ProfilePicture

                      isPicture={true}
                      requirePicture={images[i]}
                      shape="rounded"
                      width={windowWidth * 0.15}
                      height={windowHeight * 0.1}
                    />
                  </TouchableOpacity>
                </View>

              );
            })
          }
        </View>


        {/*  Create Profile Button */}
        <View>
          <TouchableOpacity style={styles.button} onPress={validateUserInputs}>
            <Text style={styles.text_black}>Create Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default CreateUserProfile;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  headerView: {
    alignSelf: "flex-start",
    marginTop: (windowHeight * 0.02),
    marginLeft: (windowWidth * 0.03),
  },
  textWhiteNormal: {
    textAlign: "center",
    color: "white",
    marginTop: (windowHeight * 0.03),
  },
  nameInputStyle: {
    flexDirection: "row",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "white",
    width: "40%",
  },
  inputTextArea: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "white",
    width: (windowWidth * 0.85),
  },
  inputStudentID: {
    height: 40,
    // margin: 12,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: "white",
    width: "100%",
  },
  datePickerStyle: {
    width: (windowWidth * 0.85),
    marginTop: 20,
  },
  dateSelectorStyle: {
    backgroundColor: "white",
    alignItems: "center",
    padding: (windowHeight * 0.02),
    borderRadius: 20,
    flexDirection: "row",
    marginTop: (windowHeight * 0.02),
    // color: 'gray'
  },
  // dateSelectorText :{
  //
  //   color: ( date === "Select Date of Birth" ? 'gray' : 'black' )
  // }
  studentIdView: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: (windowWidth * 0.85),
  },
  dropdownView: {
    marginTop: (windowHeight * 0.02),
    backgroundColor: "white",
    width: (windowWidth * 0.85),

  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: (windowWidth * .60),
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 20,
  },
  text_black: {
    color: "black",
    fontSize: 20,
  },
  avatarsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: (windowWidth * 0.85),
    justifyContent: "center",
  },
  singleAvatarView: {
    marginRight: (windowWidth * 0.05),
    marginLeft: (windowWidth * 0.05),
    marginBottom: (windowHeight * 0.02),
    marginTop: (windowHeight * 0.02),
    borderWidth: 3,
    borderRadius: 10,
  },
  errorTextStyle: {
    fontSize: 16,
    color: "#ff6666",
    textAlign: "center",
  },
});
