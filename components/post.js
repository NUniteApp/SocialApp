import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { windowHeight, windowWidth } from "../utils/DeviceDimensions";
import { ApiUrl } from "../utils/BackendApi";
import moment from "moment";
import User from "./user";
function Post(props) {

  // let someText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  // if (someText.length > 150) someText = someText.substring(0, 150) + "...";
  //
  // let testText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  // if(testText.length > 30) testText = testText.substring(0, 30) + "...";


  const [postTitle, setPostTitle] = useState(props.singlePost.post_title);
  const [postDescription, setPostDescription] = useState(props.singlePost.post_description);
  const [postDate, setPostDate] = useState(props.singlePost.post_date);
  const [postImageUrl, setPostImageUrl] = useState(props.singlePost.post_image_url);

  useEffect(() => {

    if (postTitle.length > 30) {
      let testText = postTitle.substring(0, 30) + "...";
      setPostTitle(testText);
    }
    if (postTitle.length < 30) {
      let testText = postTitle.padEnd(30);
      console.log(testText.length);
      setPostTitle(testText);
    }

    if (postDescription.length > 150) {
      let someText = postDescription.substring(0, 150) + "...";
      setPostDescription(someText);
    }
    if (postDescription.length < 150) {
      let someText = postDescription.padEnd(150);
      console.log(someText.length);
      setPostDescription(someText);
    }

    // console.log(props.singlePost.post_type);

  }, []);

  return (
    <>
      <View>
        <User avatar_url={props.singlePost.avatar_url}
              firstname={props.singlePost.firstname}
              lastname={props.singlePost.lastname}
              post_type={props.singlePost.post_type}
        />
      </View>


      <View style={styles.postView}>
        {/* View for post options */}
        <TouchableOpacity onPress={() => {
          props.navigation.navigate("Post Options");
        }}>
          <View style={styles.optionsIconView}>
            <Icon name="ellipsis-h" size={30} color="gray" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (props.fromLocation === "Generic") {
              props.navigation.navigate("Generic Post", {
                postInfo: props.singlePost,
              });
            }
            if (props.fromLocation === "Tenancy") {
              props.navigation.navigate("Tenancy Details Screen");
            }

          }}>
          {/* View for the image */}
          <View style={styles.postImageView}>
            <Image source={{
              uri: ApiUrl + postImageUrl,
            }} resizeMode="cover" style={styles.postImage} />
          </View>
          {/* Type of Post and Date / Time View */}
          <View style={styles.postInfoView}>
            {/* View for the type of post */}
            <View style={styles.postTypeView}>
              <Text></Text>
            </View>
            {/* View for the date / time  */}
            <View style={styles.postDateTimeView}>
              <Text style={styles.postDateTimeText}> {moment(postDate).calendar()}</Text>
            </View>
          </View>
          {/* View for the post text */}
          <View style={styles.postHeadingView}>
            <Text style={styles.postHeadingText}>{postTitle}</Text>
          </View>


          <View style={styles.postTextView}>
            <Text>
              {postDescription}
            </Text>
          </View>

        </TouchableOpacity>
        {/* View for the postRelatedIcons */}
      </View>
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
    </>
  );
}

export default Post;
const styles = StyleSheet.create({
  postView: {
    // marginBottom: 20,
    width: (windowWidth * 0.80),
    height: (windowHeight * 0.50),
    backgroundColor: "white",
    // backgroundColor: 'pink',

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
    width: (windowWidth * 0.80),
    paddingRight: "5%",
    paddingTop: "5%",
    paddingBottom: "3%",
    flexDirection: "row",
    backgroundColor: 'white',
    justifyContent: "flex-end",
    alignContent: "flex-end",
    // alignItems: "stretch",
    // marginTop: "2%",
  },
  postHeadingView: {
    width: "80%",
    alignSelf: "center",
    // backgroundColor: 'pink'
  },
  postHeadingText: {
    fontWeight: "bold",
  },
});
