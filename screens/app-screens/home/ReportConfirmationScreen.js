import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import ScreenHeading from "../../../components/ScreenHeading";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";

function ReportConfirmationScreen(props) {
  return (
    <View style={styles.container} >
      <NuniteLogoTop />
      <View style={styles.headStyle} >
        <ScreenHeading headingVal="Report Confirmation"/>
      </View>
      <View>
        <Text style={styles.textWhite} >
          The post you have reported has been sent to
          the administrator for further investigation.
          You will not be involved through the
          reporting process unless further investigation
          is required.
        </Text>
        <Text style={styles.textWhite}>
          Please be advised you may receive contact
          from the administrator soon for further
          enquiry. Throughout this process, all users will
          remain anonymous and dealt with directly
          with the administrator.

        </Text>
        <Text style={styles.textWhite}>
          Please do not share any information about
          this incident with other users.
        </Text>
        <Text style={styles.textWhite} >
          Thank you.
        </Text>
      </View>
    </View>
  );
}

export default ReportConfirmationScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  headStyle: {
    alignSelf: 'flex-start',
    marginLeft: (windowWidth * 0.02),
    marginTop: (windowHeight * 0.02)
  },
  textWhite: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    marginLeft: (windowWidth * 0.02),
    marginRight: (windowHeight * 0.02)
    // fontWeight: 'bold'
  },
});
