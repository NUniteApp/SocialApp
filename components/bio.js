import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { windowHeight, windowWidth } from "../utils/DeviceDimensions";
import isEmpty from "../utils/isEmpty";


function Bio(props) {
  return (
    <View style={styles.bioViewStyle}>
      <Text style={styles.bioText} >{isEmpty(props.profileData) ? ("Bio...") :
        (props.profileData.bio)} </Text>
      <Text style={styles.bioText} >{isEmpty(props.profileData) ? ("Student Id...") :
        (props.profileData.student_id)}</Text>
      <Text style={styles.bioText} >{isEmpty(props.profileData) ? ("Student Id...") :
        (props.profileData.course)} </Text>
    </View>
  );
}

export default Bio;
const styles = StyleSheet.create({
  bioViewStyle: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '85%',
    marginTop: (windowHeight * 0.02),
    padding: '5%'
  },
  bioText: {
    color: 'black',
    fontSize: 18
  }

})
