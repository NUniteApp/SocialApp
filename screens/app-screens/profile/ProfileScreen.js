import React, { useEffect, useContext, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, LogBox } from "react-native";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfilePicture from "react-native-profile-picture";
import { AuthContext } from "../../../navigation/AuthContext";
import Bio from "../../../components/bio";
import Friends from "../../../components/Friends";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { ApiUrl } from "../../../utils/BackendApi";
import isEmpty from "../../../utils/isEmpty";


const images = [
  require("../../../assets/avatarFemale.png"),
  require("../../../assets/avatarFemale2.png"),
  require("../../../assets/avatarFemale3.png"),
  require("../../../assets/avatarMale.png"),
  require("../../../assets/avatarMale2.png"),
  require("../../../assets/avatarMale3.png"),
];

const imageMapping = [
  "avatarFemale.png" ,
  "avatarFemale2.png" ,
  "avatarFemale3.png" ,
  "avatarMale.png" ,
  "avatarMale2.png" ,
  "avatarMale3.png" ,
];

function ProfileScreen(props) {

  const { authState } = useContext(AuthContext);
  const [profileInformation, setProfileInformation ] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        let data = {
          user_id: authState.userId,
        };
        let resRq = await axios.post(ApiUrl + "api/userprofile", data);
        // console.log(resRq.data.data[0]);
        setProfileInformation(resRq.data.data[0]);
        console.log(profileInformation);
        console.log(isEmpty(profileInformation));
      };

      fetchData();

    }, []),
  );

  useEffect(() => {
    // console.log("username = " + username);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      {/* Main container view */}
      <View style={styles.container}>
        {/* View for the logo image*/}
        <View style={styles.nunite_logo_view}>
          <Image
            style={styles.nunite_logo}
            source={require("../../../assets/Logo_NUnite.png")}
          />
        </View>
        {/*  Profile Picture enlarged */}
        <View style={styles.mainProfilePicStyle}>
          {
            isEmpty(profileInformation) ? (
              <Text style={styles.textWhite}>Loading</Text>
            ) : (
              imageMapping.map((imgName, i) => {
                  if(imgName === profileInformation.avatar_url) {
                    return(
                      <ProfilePicture
                        isPicture={true}
                        requirePicture={images[i]}
                        shape="circle"
                        width={windowWidth * 0.50}
                        height={windowWidth * 0.50}
                        key={i}
                      />
                    )
                  }
              })
            )


          }


        </View>
        {/*  View for the user name */}
        <View style={styles.userNameView}>
          <View>
            <Text style={styles.userNameText}>{isEmpty(profileInformation) ? (
              "Placeholder"
            ): (
              profileInformation.firstname + " " + profileInformation.lastname
            )
            }</Text>
          </View>
          <View style={styles.userNameIcon}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Profile Settings");
              }}
            >
              <Icon name="cog" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
        {/*  Bio Component */}
        <Bio profileData={profileInformation}/>
        {/*  Horizontal Rule */}
        <View
          style={{
            marginTop: (windowHeight * 0.02),
            width: "85%",
            borderBottomColor: "white",
            borderWidth: 1,
          }}
        />
        {/* Friends Component */}
        <Friends />
        {/*  Horizontal Rule */}
        <View
          style={{
            marginTop: (windowHeight * 0.02),
            width: "85%",
            borderBottomColor: "white",
            borderWidth: 1,
          }}
        />
        <TouchableOpacity style={styles.button} onPress={async () => {
          props.navigation.navigate("Post Categories");
        }}>
          <Text style={styles.text_black}>Post Something... </Text>
        </TouchableOpacity>
      </View>


    </ScrollView>
  );
}

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  nunite_logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.8,
  },
  nunite_logo_view: {
    marginLeft: (windowWidth * .25),
    marginRight: (windowWidth * .25),

    width: (windowWidth * .15),
  },
  mainProfilePicStyle: {
    marginTop: (windowHeight * 0.02),
  },
  userNameView: {
    flexDirection: "row",
    alignItems: "center",
  },
  userNameText: {
    color: "white",
    fontSize: 16,
  },
  userNameIcon: {
    paddingLeft: 10,
  },
  text_black: {
    color: "black",
    fontSize: 20,
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
  textWhite: {
    color: 'white',
    fontSize: 18
  }
});
