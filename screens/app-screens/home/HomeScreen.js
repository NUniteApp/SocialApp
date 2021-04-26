import React from "react";
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";


function HomeScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} >
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

        {/*  View for the posts */}
        <ScrollView>
          <View style={styles.postView}>
            {/* View for post options */}
            <TouchableOpacity>
              <View style={styles.optionsIconView}>
                <Icon name="ellipsis-h" size={30} color="gray" />
              </View>
            </TouchableOpacity>
            {/* View for the image */}
            <View style={styles.postImageView}>
              <Image source={require("../../../assets/img.png")} resizeMode="cover" style={styles.postImage} />
            </View>
            {/* Type of Post and Date / Time View */}
            <View style={styles.postInfoView}>
              {/* View for the type of post */}
              <View style={styles.postTypeView}>
                <Text> Generic Post </Text>
              </View>
              {/* View for the date / time  */}
              <View style={styles.postDateTimeView}>
                <Text style={styles.postDateTimeText}> Today 10:30 </Text>
              </View>
            </View>
            {/* View for the post text */}
            <View style={styles.postTextView}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
              </Text>
            </View>
            {/* View for the postRelatedIcons */}
            <View style={styles.postRelatedIconsView}>
              <TouchableOpacity>
                <Icon style={styles.iconViewStyle} name="heart" size={30} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon style={styles.iconViewStyle} name="comments" size={30} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon style={styles.iconViewStyle} name="share" size={30} color="gray" />
              </TouchableOpacity>

            </View>
          </View>

        </ScrollView>

      </View>
    </ScrollView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  iconViewStyle: {
    marginLeft: 20,
  },
  postRelatedIconsView: {
    alignSelf: "center",
    width: "80%",
    flexDirection: "row",
    // backgroundColor: 'coral',
    justifyContent: "flex-end",
    marginTop: "2%",
  },

  postTextView: {
    // backgroundColor: "lightgray",
    width: "80%",
    alignSelf: "center",
  },
  postTypeView: {
    width: "50%",
    // backgroundColor: 'cyan'
  },
  postDateTimeText: {
    fontSize: 10,
  },
  postDateTimeView: {
    width: "50%",
    // backgroundColor: 'pink',
    alignItems: "flex-end",
  },

  postInfoView: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    marginTop: "2%",
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  postImageView: {
    width: "80%",
    height: "50%",
    backgroundColor: "lightpink",
    alignSelf: "center",
    marginTop: "2%",

  },
  optionsIconView: {
    // backgroundColor: "coral",
    alignItems: "flex-end",
    paddingRight: (windowWidth * 0.02),
  },
  postView: {
    marginTop: 20,
    marginBottom: 20,
    width: (windowWidth * 0.80),
    height: (windowHeight * 0.55),
    backgroundColor: "white",
  },
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
