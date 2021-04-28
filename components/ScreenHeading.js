import React from "react";
import { Text, StyleSheet } from "react-native";


function ScreenHeading(props) {
  return (

    <Text style={styles.headingTopText}>{props.headingVal}</Text>

  );
}

export default ScreenHeading;
const styles = StyleSheet.create({
  headingTopText: {
    color: "white",
    fontSize: 16,
  },
});
