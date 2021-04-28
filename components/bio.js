import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { windowHeight, windowWidth } from "../utils/DeviceDimensions";

function Bio(props) {
  return (
    <View style={styles.bioViewStyle}>
      <Text style={styles.bioText} >Bio..... </Text>
      <Text style={styles.bioText} >w19024535 </Text>
      <Text style={styles.bioText} >Computer Science </Text>
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
