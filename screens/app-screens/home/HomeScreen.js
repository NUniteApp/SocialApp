import React from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";
import Post from "../../../components/post";

function HomeScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* View for the logo image*/}
        <View style={styles.nunite_logo_view}>
          <Image
            style={styles.nunite_logo}
            source={require("../../../assets/Logo_NUnite.png")}
          />
        </View>
        {/* View for the search Input */}
        <View style={styles.searchInputView}>
          <View style={styles.inputSection}>
            <Icon style={styles.inputIcon} name="search" size={20} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        {/*  View for the tags */}
        {/* Tags are supposed to be a loop from the database */}
        <View style={styles.tagView}>
          {/* Individual Tags */}
          <TouchableOpacity>
            <View style={styles.individualTagsView}>
              <Text style={styles.individualTagsText}>Computer Science</Text>
            </View>
          </TouchableOpacity>
          {/* Individual Tags */}
          <TouchableOpacity>
            <View style={styles.individualTagsView}>
              <Text style={styles.individualTagsText}>House Share</Text>
            </View>
          </TouchableOpacity>
          {/* Individual Tags */}
          <TouchableOpacity>
            <View style={styles.individualTagsView}>
              <Text style={styles.individualTagsText}>Study Group</Text>
            </View>
          </TouchableOpacity>
          {/* Individual Tags */}
          <TouchableOpacity>
            <View style={styles.individualTagsView}>
              <Text style={styles.individualTagsText}>Law</Text>
            </View>
          </TouchableOpacity>
          {/* Individual Tags */}
          <TouchableOpacity>
            <View style={styles.individualTagsView}>
              <Text style={styles.individualTagsText}>Library Events</Text>
            </View>
          </TouchableOpacity>
          {/* Individual Tags */}
          <TouchableOpacity>
            <View style={styles.individualTagsView}>
              <Text style={styles.individualTagsText}>Cyber Security</Text>
            </View>
          </TouchableOpacity>
        </View>

      {/*  Post  */}
      <Post navigation={props.navigation} />

      </View>
    </ScrollView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  individualTagsView: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 5,
    marginRight: 5,
    paddingLeft: 4,
    paddingRight: 4,
  },
  individualTagsText: {
    color: "white",
  },
  tagView: {
    flexDirection: "row",
    marginTop: 10,
    width: (windowWidth * 0.90),
    // backgroundColor: "white",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    // height: (windowHeight * 0.10),
  },
  searchInputView: {
    marginTop: 20,
    width: (windowWidth * 0.90),
  },

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
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
  inputSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    width: (windowWidth * .80),
  },

});
