import React from "react";
import {View, Text, StyleSheet} from "react-native";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import ScreenHeading from "../../../components/ScreenHeading";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import OptionsComp from "../../../components/OptionsComp";

function ProfileSettingsScreen(props) {
  // const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
      <NuniteLogoTop />
      <View style={styles.headerView}>
        <ScreenHeading headingVal="Profile Settings" />
      </View>
      <View style={styles.optionCompCont} >
        <OptionsComp
          titleVal="Edit Profile"
          iconName="pencil" navigation={props.navigation}
          navToScreenName="Edit Profile"
        />
        <OptionsComp
          titleVal="Manage Posts"
          iconName="edit" navigation={props.navigation}
          navToScreenName="Manage Posts"
        />
        <OptionsComp
          titleVal="Search Profile"
          iconName="search" navigation={props.navigation}
          navToScreenName="Search Profile"
        />
        <OptionsComp
          titleVal="Delete Account"
          iconName="trash" navigation={props.navigation}
          navToScreenName="Delete Account"
        />
        <OptionsComp
          titleVal="Log Out"
          iconName="sign-out" navigation={props.navigation}
          // navToScreenName="Log Out"
        />

      </View>
    </View>
  );
}

export default ProfileSettingsScreen;
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
  optionCompCont: {
    marginTop: (windowHeight * 0.02)
  }


});
