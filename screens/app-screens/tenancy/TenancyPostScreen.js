import React, {useEffect, useState, useContext } from "react";
import {View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import NuniteLogoTop from "../../../components/NuniteLogoTop";
import ScreenHeading from "../../../components/ScreenHeading";
import {windowWidth, windowHeight} from "../../../utils/DeviceDimensions";
import HorizontalRule from "../../../components/HorizontalRule";
import axios from "axios";
import {ApiUrl} from "../../../utils/BackendApi";
import {AuthContext} from "../../../navigation/AuthContext";
import { useFocusEffect } from "@react-navigation/native";
import Post from "../../../components/post";


function TenancyPostScreen(props) {
  const [randomPosts, setRandomPosts] = useState([]);
  const {authState} = useContext(AuthContext);
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        let data = {
          user_id: authState.userId
        }
        let resRq = await axios.post( ApiUrl + "api/random_tenancy_posts", data);
        console.log(resRq.data);
        setRandomPosts(resRq.data.data);
        console.log(randomPosts);
      }

      fetchData();

    }, [])
  );
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <NuniteLogoTop />
      <View style={styles.headerView}>
        <ScreenHeading headingVal="Tenancy Posts by Other Users" />
      </View>
      <View>
        {/*  Post  */}
        {
          randomPosts.length === 0 ? (
            <Text style={styles.textWhite}>Loading</Text>
          ): (
            randomPosts.map((post, i ) =>
              (
                <Post navigation={props.navigation} singlePost={post} key={i}
                      fromLocation="Tenancy" />
              )
            )
          )
        }
      </View>

    </View>
    </ScrollView>
  );
}
export default TenancyPostScreen;
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
  textWhite: {
    color: 'white',
    fontSize: 18
  }
});
