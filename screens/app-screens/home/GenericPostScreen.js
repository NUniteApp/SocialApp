import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import ScreenHeading from "../../../components/ScreenHeading";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import CommentUsers from "../../../components/CommentUsers";
import HorizontalRule from "../../../components/HorizontalRule";
import CreateComment from "../../../components/CreateComment";

function GenericPostScreen(props) {
  return (
    <>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View>
            <NuniteLogoTop />
          </View>
          <View style={styles.headerView}>
            <ScreenHeading headingVal="Post Details" />
          </View>
          {/*/!* View for the image *!/*/}
          {/*<View style={styles.postImageView}>*/}
          {/*  <Image source={require("../../../assets/img.png")} resizeMode="cover" style={styles.postImage} />*/}
          {/*</View>*/}
          <Image
            style={styles.imageStyleDet}
            source={require("../../../assets/random-numbers-dice.jpg")}
          />

          {/* Type of Post and Date / Time View */}
          <View style={styles.postInfoView}>
            {/* View for the type of post */}
            <View style={styles.postTypeView}>
              <Text style={styles.postTypeText}> Generic Post </Text>
            </View>
            {/* View for the date / time  */}
            <View style={styles.postDateTimeView}>
              <Text style={styles.postDateTimeText}> Today 10:30 </Text>
            </View>
          </View>
          {/*  Post Details */}
          <View style={styles.postDetailsView}>
            <Text style={styles.titleTextWhite}>
              River Tyne Bridge
            </Text>
            <Text style={styles.descriptionTextWhite}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text style={styles.descriptionTextWhite}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </View>
          <HorizontalRule />
          <View>
            <CommentUsers />
            <CommentUsers />
            <CommentUsers />
            <CommentUsers />
            <CommentUsers />
          </View>
          <HorizontalRule />
          <View>
            <CreateComment />
          </View>
        </View>
      </ScrollView>

    </>

  );
}

export default GenericPostScreen;
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
  imageStyleDet: {
    width: (windowWidth * 0.80),
    height: (windowHeight * 0.35),
  },
  postImageView: {
    width: "80%",
    height: "50%",
    backgroundColor: "lightpink",
    alignSelf: "center",
    marginTop: "2%",

  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  postInfoView: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    marginTop: "2%",
  },
  postTypeView: {
    width: "50%",
    // backgroundColor: 'cyan'
  },
  postDateTimeText: {
    fontSize: 10,
    color: "white",
  },
  postDateTimeView: {
    width: "50%",
    // backgroundColor: 'pink',
    alignItems: "flex-end",
  },
  postTypeText: {
    color: "white",
  },
  postDetailsView: {
    width: "80%",
    borderWidth: 1,
    borderColor: "white",
    // height: "80%",
    marginBottom: (windowHeight * 0.02)
  },
  titleTextWhite: {
    color: "white",
    fontWeight: "bold",
    marginLeft: "2%",
    marginRight: "2%",
    marginBottom: "2%",
  },
  descriptionTextWhite: {
    color: "white",
    marginLeft: "2%",
    marginRight: "2%",
  },
  textWhite: {
    color: "white",
  },

});
