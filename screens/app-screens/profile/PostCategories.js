import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import ScreenHeading from "../../../components/ScreenHeading";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import { TouchableOpacity } from "react-native-gesture-handler";

function PostCategories(props) {
  return (
    <View style={styles.container}>
      <NuniteLogoTop />
      <View style={styles.headerView}>
        <ScreenHeading headingVal="Choose Post Category" />
      </View>
      {/* View Btn */}
      <TouchableOpacity onPress={() => {
        props.navigation.navigate("Generic Post Create");
      }}>
        <View style={styles.customBtnStyle}>
          <Text style={styles.textWhiteStrong}> Generic Post </Text>
          <View style={styles.textViewDesc}>
            <Text style={styles.textWhiteStrong}> Tap here to start a generic post </Text>
            <Text style={styles.textWhiteNormal}> A generic post is anything that is not related to
              tenancy or sponsorships </Text>
          </View>

        </View>
      </TouchableOpacity>

      {/* View Btn */}
      <TouchableOpacity onPress={() => {
        props.navigation.navigate("Tenancy Post Create");
      }}>
        <View style={styles.customBtnStyle}>
          <Text style={styles.textWhiteStrong}> Tenancy Post </Text>
          <View style={styles.textViewDesc}>
            <Text style={styles.textWhiteStrong}> Tap here to start a tenancy post </Text>
            <Text style={styles.textWhiteNormal}> A tenancy post is anything that is specifically related to
              tenancy </Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );
}

export default PostCategories;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  headerView: {
    alignSelf: "flex-start",
    marginTop: (windowHeight * 0.02),
    marginLeft: (windowWidth * 0.03),
  },
  textWhiteStrong: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: (windowHeight * 0.03),
  },

  textWhiteNormal: {
    textAlign: "center",
    color: "white",
    marginTop: (windowHeight * 0.03),
  },
  textViewDesc: {
    marginRight: (windowWidth * 0.07),
    marginLeft: (windowWidth * 0.07),
  },
  customBtnStyle: {
    borderWidth: 1,
    borderColor: "white",
    marginRight: (windowWidth * 0.07),
    marginLeft: (windowWidth * 0.07),
    paddingBottom: (windowHeight * 0.07),
  },
});
