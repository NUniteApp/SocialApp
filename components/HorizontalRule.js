import React from "react";
import { View } from "react-native";
import { windowHeight } from "../utils/DeviceDimensions";

function HorizontalRule(props) {
  return (

    <View
      style={{
        marginTop: (windowHeight * 0.02),
        width: "85%",
        borderBottomColor: "white",
        borderWidth: 1,
      }}
    />
  );
}

export default HorizontalRule;
