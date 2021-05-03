import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import ScreenHeading from "../../../components/ScreenHeading";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";
import { AuthContext } from "../../../navigation/AuthContext";
import HorizontalRule from "../../../components/HorizontalRule";
import { Picker } from "@react-native-picker/picker";
import {ApiUrl} from "../../../utils/BackendApi";

function TenancyPostCreationScreen(props) {

  const { authState } = useContext(AuthContext);
  const [photoData, setPhotoData] = useState({
    uri: "",
    type: "",
    name: "",
    imgWidth: null,
    imgHeight: null,
  });

  const [postTitle, setPostTitle] = useState("");
  const [postDesc, setPostDesc] = useState("");
  const [property, setProperty] = useState("Property");
  const [location, setLocation] = useState("Location");
  const [price, setPrice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Payment Type");

  let initialPostTitle;
  let initialPostDesc;
  let initialProperty;
  let initialLocation;
  let initialPrice;
  let initialPaymentMethod;

  useEffect(() => {
    initialPostTitle = postTitle;
    initialPostDesc = postDesc;
    initialProperty = property;
    initialLocation = location;
    initialPrice = price;
    initialPaymentMethod = paymentMethod;
  }, []);

  const resetState = () => {
    setPhotoData({
      uri: "",
      type: "",
      name: "",
      imgWidth: null,
      imgHeight: null,
    });
    setPostTitle(initialPostTitle);
    setPostDesc(initialPostDesc);
    setProperty(initialProperty);
    setLocation(initialLocation);
    setPrice(initialPrice);
    setPaymentMethod(initialPaymentMethod);
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <NuniteLogoTop />
        <View style={styles.headerView}>
          <ScreenHeading headingVal="Create a Tenancy Post" />
        </View>
        <View style={styles.tenancyInfoView}>
          <Text style={styles.textWhiteSmall}>
            Select the options that best fit your tenancy post
            so other users can find your post easier
          </Text>
        </View>
        <HorizontalRule />
        <View style={styles.tenancyInfoView}>
          <Text style={[styles.textWhite, { textDecorationLine: "underline", fontSize: 20 }]}>
            Options
          </Text>
        </View>
        {/* Options on first line */}
        <View style={styles.optionsLineOne}>
          <View style={styles.optionLineOneChild}>
            <Picker
              selectedValue={property}
              onValueChange={(itemValue, itemIndex) =>
                setProperty(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item label="Property" value="Property"
                           enabled={false} color="gray" />
              <Picker.Item label="Studio" value="Studio" />
              <Picker.Item label="Flat" value="Flat" />
            </Picker>
          </View>
          <View style={styles.optionLineOneChild}>
            <Picker
              selectedValue={location}
              onValueChange={(itemValue, itemIndex) =>
                setLocation(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item label="Location" value="Location"
                           enabled={false} color="gray" />
              <Picker.Item label="Jesmond" value="Jesmond" />
              <Picker.Item label="Durham" value="Durham" />
            </Picker>
          </View>
        </View>
        {/* Options on Second line */}
        <View style={styles.optionsLineOne}>
          <View style={styles.optionLineOneChild}>
            <TextInput
              style={styles.inputModified}
              placeholder="Enter Price ..."
              value={price}
              onChangeText={setPrice}
            />
          </View>
          <View style={styles.optionLineOneChild}>
            <Picker
              selectedValue={paymentMethod}
              onValueChange={(itemValue, itemIndex) =>
                setPaymentMethod(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item label="PaymentType" value="PaymentType"
                           enabled={false} color="gray" />
              <Picker.Item label="Monthly" value="Monthly" />
              <Picker.Item label="Weekly" value="Weekly" />
            </Picker>
          </View>
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
              imgHeight: response.height,
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
            style={[styles.input, { height: (windowHeight * 0.20) }]}
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

              if (postTitle === null || postDesc === null
                || photoData.uri === null || property === null
                || location === null || price === null
                || paymentMethod === null
              ) return;
              if (postTitle === "" || postDesc === "" ||
                photoData.uri === "" || property === "Property"
                || location === "Location" || price === ""
                || paymentMethod === "Payment Type"
              ) return;


              const formData = new FormData();
              formData.append('property_type', property);
              formData.append('location', location);
              formData.append('price', price);
              formData.append('payment_type', paymentMethod);
              formData.append("post_title", postTitle);
              formData.append("post_description", postDesc);
              formData.append("post_user_id", authState.userId);
              formData.append("postimage", photoData);

              try {
                let reqRes = await axios.post(ApiUrl + "api/create_tenancy_posts",
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

            }}>
              <Text style={styles.text_black}>POST</Text>
            </TouchableOpacity>


          </View>

        </View>

      </View>
    </ScrollView>

  );
}

export default TenancyPostCreationScreen;
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
  textWhiteSmall: {
    color: "white",
    fontSize: 12,
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
    backgroundColor: "white",
    width: (windowWidth * 0.85),
  },
  inputModified: {
    height: 50,
    // margin: 12,
    borderWidth: 1,
    backgroundColor: "white",
    width: "100%",
  },
  tenancyInfoView: {
    width: (windowWidth * 0.85),
  },
  optionsLineOne: {
    width: (windowWidth * 0.85),
    flexDirection: "row",
    alignContent: "space-between",
    marginTop: (windowHeight * 0.02),
  },
  optionLineOneChild: {
    width: "45%",
    backgroundColor: "white",
    marginRight: "10%",
  },

});
