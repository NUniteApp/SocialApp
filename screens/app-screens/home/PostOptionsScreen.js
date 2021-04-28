import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import ScreenHeading from "../../../components/ScreenHeading";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import OptionsComp from "../../../components/OptionsComp";

function PostOptionsScreen(props) {
  return (
    <View style={styles.container}>
      <NuniteLogoTop />
      <View style={styles.headerView}>
        <ScreenHeading headingVal="Post Options" />
      </View>
      <View style={styles.optionCompCont}>
        <OptionsComp
          titleVal="Report Post" descriptionVal="I'm concerned about this post"
          iconName="exclamation-triangle" navigation={props.navigation}
          navToScreenName="Report Post"
        />
      </View>


    </View>


  );
};

export default PostOptionsScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  headerView: {
    alignSelf: "flex-start",
    marginTop: (windowHeight * 0.02),
    marginLeft: (windowWidth * 0.03),
  },
  optionCompCont: {
    marginTop: (windowHeight * 0.02)
  }



});
