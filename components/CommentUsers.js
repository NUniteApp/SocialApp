import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import ProfilePicture from "react-native-profile-picture";
import { windowHeight, windowWidth } from "../utils/DeviceDimensions";

function CommentUsers(props) {
  return (
    <View style={styles.commentStyle} >
      <View>
        <ProfilePicture
          isPicture={false}
          user="FirstName ListName"
          shape='circle'
        />
      </View>
      <View style={styles.commentView} >
        <Text style={styles.textWhite}>Username</Text>
        <Text style={styles.textWhiteSmall} >Helpful post, Thanks...</Text>
      </View>
    </View>
  );
}

export default CommentUsers;
const styles = StyleSheet.create({
  commentStyle: {
    flexDirection: 'row',

    marginTop: (windowHeight * 0.01),
    marginBottom: (windowHeight * 0.01),
    width: (windowWidth * 0.85)
  },
  commentView: {
    marginLeft: (windowWidth * 0.01),
    padding: '2%',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    width: '80%'
  },
  textWhite: {
    color: 'white',
    fontSize: 16
  },
  textWhiteSmall: {
    color: 'white',
    fontSize: 13
  }
})
