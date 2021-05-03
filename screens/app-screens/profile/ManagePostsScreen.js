import React, { useState, useEffect, useContext } from "react";
import { RefreshControl, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import { windowHeight, windowWidth } from "../../../utils/DeviceDimensions";
import Icon from "react-native-vector-icons/FontAwesome";
import Post from "../../../components/post";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { AuthContext } from "../../../navigation/AuthContext";
import { ApiUrl } from "../../../utils/BackendApi";
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import ScreenHeading from "../../../components/ScreenHeading";


function ManagePostsScreen(props) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [myPosts, setMyPosts] = useState([]);
  const { authState } = useContext(AuthContext);
  const [makeEffect, setMakeEffect] = useState("initial");

  useEffect(() => {
    const fetchData = async () => {
      let data = {
        user_id: authState.userId,
      };
      let resRq = await axios.post(ApiUrl + "api/retrieve_user_posts", data);
      console.log(resRq.data);
      setMyPosts(resRq.data.data);
      console.log(myPosts);
    };

    fetchData();

  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setMyPosts([]);
    try {
      let data = {
        user_id: authState.userId,
      };
      let response = await axios.post(ApiUrl + "api/retrieve_user_posts", data);
      console.log(response.data);
      setMyPosts(response.data.data);
      let r = Math.random().toString(36).substring(7);
      setMakeEffect(r);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }

  }, [refreshing]);


  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
    >
      <View style={styles.container}>
        <NuniteLogoTop />
        <View style={styles.headerView}>
          <ScreenHeading headingVal="My Posts" />
        </View>
        {/*  View for My Posts */}
        {/*  Post  */}
        {
          myPosts.length === 0 ? (
            <Text style={styles.textWhite}>Loading</Text>
          ) : (
            myPosts.map((post, i) =>
              (
                <View key={i}>
                  <Post navigation={props.navigation} singlePost={post}
                        fromLocation="My Post" />
                </View>

              ),
            )
          )
        }

      </View>
    </ScrollView>
  );
}

export default ManagePostsScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  headerView: {
    alignSelf: "flex-start",
    marginTop: (windowHeight * 0.02),
    marginLeft: (windowWidth * 0.03),
  },
});
