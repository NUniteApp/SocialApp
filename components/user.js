import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePicture from "react-native-profile-picture";
import { windowWidth } from "../utils/DeviceDimensions";


const images = [
  require("../assets/avatarFemale.png"),
  require("../assets/avatarFemale2.png"),
  require("../assets/avatarFemale3.png"),
  require("../assets/avatarMale.png"),
  require("../assets/avatarMale2.png"),
  require("../assets/avatarMale3.png"),
];

const imageMapping = [
  "avatarFemale.png",
  "avatarFemale2.png",
  "avatarFemale3.png",
  "avatarMale.png",
  "avatarMale2.png",
  "avatarMale3.png",
];


function User(props) {

  console.log("From User Component");
  console.log(props.avatar_url);
  console.log(props.post_type);
  return (
    <View style={styles.userView}>
      {
        props.avatar_url === "" ? (<Text> Loading </Text>) :
          (
            imageMapping.map((imgName, i) => {
                if (imgName === props.avatar_url) {
                  return (
                    <ProfilePicture
                      isPicture={true}
                      requirePicture={images[i]}
                      shape="circle"
                      width={windowWidth * 0.12}
                      height={windowWidth * 0.12}
                      key={i}
                    />
                  );
                }
              },
            ))
      }
      <View style={styles.infoForUserPost }>
        <Text> {props.firstname + " " + props.lastname} </Text>
        <Text> {props.post_type }</Text>
      </View>

    </View>


  );
}

export default User;
const styles = StyleSheet.create({
  textColorWhite: {
    color: "white",
  },
  userView: {
    backgroundColor: 'lightgray',
    padding: (windowWidth * 0.03),
    flexDirection: 'row'
  },
  infoForUserPost: {
    flexDirection: 'column'
  }
});
