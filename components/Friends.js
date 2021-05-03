import React, {useEffect } from "react";
import {View, Text, StyleSheet, FlatList, SafeAreaView, LogBox} from "react-native";
import { windowHeight, windowWidth } from "../utils/DeviceDimensions";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfilePicture from "react-native-profile-picture";


function Friends(props) {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  const DATA = [
    {
      id: '1',
      title: 'Some Friend',
    },
    {
      id: '2',
      title: 'Some Friend',
    },
    {
      id: '3',
      title: 'Some Friend',
    },
    {
      id: '4',
      title: 'Some Friend',
    },
    {
      id: '5',
      title: 'Some Friend',
    },
    {
      id: '6',
      title: 'Some Friend',
    },
    {
      id: '7',
      title: 'Some Friend',
    },
    {
      id: '8',
      title: 'Some Friend',
    },
  ]


  // const renderItem = ({ item }) => (
  //
  //
  //
  // );

  return (
    <View style={styles.friendsViewStyle} >
      <View style={styles.friendInfoAndOptionsView}>
        <View>
          <Text style={styles.textStyleFriends}>Friends </Text>
          <Text style={styles.textStyle}>50 friends </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.gapStyle} >
            <Text style={styles.textStyleUnderLine}>See all existing friends</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textStyleUnderLine}>See friend suggestions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Friends;
const styles = StyleSheet.create({
  friendsViewStyle: {
    flexDirection: 'column',
    // flex: 1,
    marginTop: (windowHeight * 0.02),
    // backgroundColor: 'pink',
    width: '85%',
  },
  textStyle: {
    color: 'white'
  },
  textStyleUnderLine: {
    color: 'white',
    textDecorationLine: 'underline'
  },
  textStyleFriends: {
    color: 'white',
    fontSize: 20
  },
  friendInfoAndOptionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  gapStyle: {
    marginBottom: '5%'
  },

})
