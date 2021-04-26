import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { windowHeight, windowWidth } from "../utils/DeviceDimensions";

function Post(props) {
  return (
  <ScrollView>
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Generic Post");
      }} >
      <View style={styles.postView}>
        {/* View for post options */}
        <TouchableOpacity>
          <View style={styles.optionsIconView}>
            <Icon name="ellipsis-h" size={30} color="gray" />
          </View>
        </TouchableOpacity>
        {/* View for the image */}
        <View style={styles.postImageView}>
          <Image source={require("../assets/img.png")} resizeMode="cover" style={styles.postImage} />
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
    </TouchableOpacity>
  </ScrollView>
  );
}

export default Post;
const styles = StyleSheet.create({
  postView: {
    marginTop: 20,
    marginBottom: 20,
    width: (windowWidth * 0.80),
    height: (windowHeight * 0.55),
    backgroundColor: "white",
  },
  optionsIconView: {
    // backgroundColor: "coral",
    alignItems: "flex-end",
    paddingRight: (windowWidth * 0.02),
  },
  postImageView: {
    width: "80%",
    height: "50%",
    backgroundColor: "lightpink",
    alignSelf: "center",
    marginTop: "2%",

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
})
