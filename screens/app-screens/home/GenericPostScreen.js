import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import ScreenHeading from "../../../components/ScreenHeading";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import CommentUsers from "../../../components/CommentUsers";
import HorizontalRule from "../../../components/HorizontalRule";
import CreateComment from "../../../components/CreateComment";
import {ApiUrl} from "../../../utils/BackendApi";
import moment from "moment";


function GenericPostScreen(props) {

  console.log(props.route.params.postInfo);
  console.log("From Post Details...");
  const [postInfo, setPostInfo] = useState(props.route.params.postInfo);


  useEffect(() => {

    } , [props.route.params.postInfo.post_id])

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
            source={{uri: ApiUrl + postInfo.post_image_url }}
          />

          {/* Type of Post and Date / Time View */}
          <View style={styles.postInfoView}>
            {/* View for the date / time  */}
            <View style={styles.postDateTimeView}>
              <Text style={styles.postDateTimeText}> {moment(postInfo.post_date).calendar() }</Text>
            </View>
          </View>
          {/*  Post Details */}
          <View style={styles.postDetailsView}>
            <Text style={styles.titleTextWhite}>
              {postInfo.post_title}
            </Text>
            <Text style={styles.descriptionTextWhite}>
              {postInfo.post_description}
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
    fontSize: 14,
    color: "white",
  },
  postDateTimeView: {
    width: "100%",
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
