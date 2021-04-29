import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import ProfilePicture from "react-native-profile-picture";
import { windowHeight, windowWidth } from "../utils/DeviceDimensions";

function CreateComment(props) {
  return (
    <View style={styles.createCommentView}>
      <View>
        <ProfilePicture
          isPicture={false}
          user="Sohaib Farooq"
          shape="circle"
        />
      </View>
      <View>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          placeholder="Write Comment..."
          placeholderTextColor="white"
          multiline={true}
        />
        <View style={styles.commentBtnStyle} >
          <Button title="Post Comment" />
        </View>

      </View>

    </View>
  );
}

export default CreateComment;
const styles = StyleSheet.create({
  createCommentView: {
    flexDirection: "row",
    width: (windowWidth * 0.85),
    // borderWidth: 1,
    // borderColor: 'white',
    marginBottom: (windowHeight * 0.05),
    marginTop: (windowHeight * 0.01)
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft: (windowWidth * 0.01),
    width: (windowWidth * 0.70),
    color: 'white'
  },
  commentBtnStyle: {
    marginTop: (windowHeight * 0.03),
    borderRadius: 20

  }
});
