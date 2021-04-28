import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import ScreenHeading from "../../../components/ScreenHeading";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import RadioInput from "../../../components/radioInput";
import HorizontalRule from "../../../components/HorizontalRule";


function ReportPostScreen(props) {
  return (
    <ScrollView  style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <NuniteLogoTop />
        <View style={styles.headStyle}>
          <ScreenHeading headingVal="Report this Post" />
        </View>
        {/*Horizontal Rule */}
        <HorizontalRule />
        <View >
          <Text style={styles.textWhite}>Please Select a Problem</Text>
        </View>
        <RadioInput />
        <HorizontalRule />
        <View >
          <Text style={styles.textWhite}>Any additional information</Text>
        </View>
        <View style={styles.textAreaContainer} >
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        <HorizontalRule />
      {/* Report Button */}
        <TouchableOpacity style={styles.button} onPress={async () => {
          props.navigation.navigate("Confirm Report");
        }}>
          <Text style={styles.text_black}>Submit Report</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>


  );
}

export default ReportPostScreen;
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
    fontWeight: 'bold'
  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'white'
  },
  textArea: {
    color: 'black',
    height: 100,
    width: (windowWidth * 0.85),
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
// paddingLeft: (windowWidth * .35),
// paddingRight: (windowWidth * .35),
    width: (windowWidth * .60),
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 20,
  },
  text_black: {
    color: "black",
    fontSize: 20,
  },
})
