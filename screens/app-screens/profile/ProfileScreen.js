import React, { useEffect, useContext, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfilePicture from "react-native-profile-picture";
import axios from "axios";
import { AuthContext } from "../../../navigation/AuthContext";
import { ApiUrl } from "../../../utils/BackendApi";

function ProfileScreen(props) {

  const { authState } = useContext(AuthContext);
  const [username, setUserName] = useState(authState.userName);


  useEffect(() => {
    console.log("username = " + username);
    // if(authState.userId === null ) return
    // console.log("123");
    // // Make an axios request function
    // const fetchUserName = async () => {
    //   let data = {
    //     user_id: authState.userId
    //   }
    //
    //   let reqRes = await axios.post(ApiUrl + "api/username", data);
    //   console.log(reqRes.data);
    // }
    // fetchUserName();


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
          <ProfilePicture
            isPicture={true}
            requirePicture={require("../../../assets/icons8-name-160.png")}
            shape="circle"
            width={windowWidth * 0.50}
            height={windowWidth * 0.50}
          />
        </View>
        {/*  View for the user name */}
        <View style={styles.userNameView } >
          <View>
            <Text style={styles.userNameText } >{username}</Text>
          </View>
          <View style={styles.userNameIcon }>
            <TouchableOpacity>
              <Icon name="cog" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  userNameText: {
    color: 'white',
    fontSize: 16
  },
  userNameIcon: {
    paddingLeft: 10
  }

});
