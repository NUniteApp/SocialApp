import React, { useEffect, useContext, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfilePicture from "react-native-profile-picture";
import { AuthContext } from "../../../navigation/AuthContext";
import Bio from "../../../components/bio";
import Friends from "../../../components/Friends";


function ProfileScreen(props) {

  const { authState } = useContext(AuthContext);
  const [username, setUserName] = useState(authState.userName);


  useEffect(() => {
    console.log("username = " + username);
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
        <View style={styles.userNameView}>
          <View>
            <Text style={styles.userNameText}>{username}</Text>
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
        <Bio />
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

});
