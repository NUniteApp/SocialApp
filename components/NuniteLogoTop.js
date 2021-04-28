import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { windowWidth } from "../utils/DeviceDimensions";


function NuniteLogoTop(props) {
  return (

    <View style={styles.nunite_logo_view}>
      <Image
        style={styles.nunite_logo}
        source={require("../assets/Logo_NUnite.png")}
      />
    </View>
  );
}

export default NuniteLogoTop;

const styles = StyleSheet.create({
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
});
