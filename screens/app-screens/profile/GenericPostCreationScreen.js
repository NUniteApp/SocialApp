import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput} from "react-native";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import ScreenHeading from "../../../components/ScreenHeading";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";
import {AuthContext} from "../../../navigation/AuthContext";


function GenericPostCreationScreen(props) {

  const {authState } = useContext(AuthContext);
  const [photoData, setPhotoData] = useState({
    uri: "",
    type: "",
    name: "",
    imgWidth: null ,
    imgHeight: null
  });

  const [postTitle, setPostTitle] = useState("");
  const [postDesc, setPostDesc] = useState("");

  let initialPostTitle;
  let initialPostDesc;

  useEffect(() => {
    initialPostTitle = postTitle;
    initialPostDesc = postDesc;
  }, [])

  const resetState = () => {
    setPhotoData({
      uri: "",
      type: "",
      name: "",
      imgWidth: null ,
      imgHeight: null
    });
    setPostTitle(initialPostTitle);
    setPostDesc(initialPostDesc);
  }

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <NuniteLogoTop />
        <View style={styles.headerView}>
          <ScreenHeading headingVal="Create a Generic Post" />
        </View>

        <TouchableOpacity onPress={() => {
          launchImageLibrary({
            mediaType: "photo",
          }, (response) => {
            console.log(response.fileName);
            console.log(response.uri);
            console.log(response.base64);
            console.log(response.type);
            console.log(response.fileSize);
            console.log(response.width);
            console.log(response.height);
            setPhotoData({
              uri: response.uri,
              type: response.type,
              name: response.fileName,
              imgWidth: response.width,
              imgHeight: response.height
            });
            // setPhotoURI(response.uri);

          });
        }}>
          <View style={styles.createPostBtnStyle}>
            <Text style={styles.addPhotoTextStyle}>Add a photo </Text>
            <Icon name="plus" size={40} color="black" />
          </View>
        </TouchableOpacity>

        <View style={styles.imageHolder}>
          {photoData.uri ? (

            <Image style={{
              width: (windowWidth * 0.85), height: (windowHeight * 0.20),
              resizeMode: "contain", borderWidth: 1, borderColor: "red",
            }}
                   source={{ uri: photoData.uri }} />
          ) : (
            <Text style={styles.textWhite}>No Photo Selected</Text>
          )}

        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Post Title ..."
            value={postTitle}
            onChangeText={setPostTitle}

          />
          <TextInput
            style={[styles.input, {height: (windowHeight * 0.20)}]}
            placeholder="Type something about your post here..."
            numberOfLines={10}
            multiline={true}
            editable
            textAlignVertical="top"
            value={postDesc}
            onChangeText={setPostDesc}
          />
        </View>

        <View>
          <View>
            <TouchableOpacity style={styles.button} onPress={async () => {

              if(postTitle === null || postDesc === null
              || photoData.uri === null
              ) return
              if(postTitle === "" || postDesc === "" ||
                photoData.uri === ""
              ) return

              let forSubmitPostTitle = postTitle.trim(postTitle);
              let forSubmitPostDesc = postDesc.trim(postDesc);




              const formData = new FormData();
              formData.append("post_title", postTitle);
              formData.append("post_description", postDesc);
              formData.append("post_user_id", authState.userId);
              // formData.append("post_type", "generic");
              formData.append("postimage", photoData);
              // let reqRes = await axios.post({
              //   url: "http://localhost/NUnite-Backend/kf6002/nunite_api/api/create_posts",
              //   method: 'POST',
              //   data: formData
              // });
              try {
                let reqRes = await axios.post("https://nunite.xyz/assessment-backend/api/create_posts",
                  formData, {
                    headers: {
                      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                    },
                  });
                if (reqRes) {
                  console.log(reqRes);
                  resetState();
                }
              } catch (error) {
                console.log(error);
              }

              // let reqRes = axios.get("http://localhost/NUnite-Backend/kf6002/nunite_api/api/");
              // console.log(reqRes);
            }}>
              <Text style={styles.text_black}>POST</Text>
            </TouchableOpacity>


          </View>

        </View>

      </View>
    </ScrollView>

  );
}

export default GenericPostCreationScreen;
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
  createPostBtnStyle: {
    marginTop: (windowHeight * 0.05),
    backgroundColor: "white",
    width: (windowWidth * 0.85),
    alignItems: "center",
    padding: (windowWidth * 0.1),
  },
  addPhotoTextStyle: {
    fontSize: 28,
    marginBottom: (windowHeight * 0.05),
  },
  textWhite: {
    color: "white",
    fontSize: 16,
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
  imageHolder: {
    alignItems: "center",

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    width: (windowWidth * 0.85)
  },

});
