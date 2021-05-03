import React, {useContext} from "react";
import {View, Text, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowWidth } from "../utils/DeviceDimensions";
import {AuthContext} from "../navigation/AuthContext";


function OptionsComp(props) {
  const {signOut} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => {
      if(props.navToScreenName) {
        props.navigation.navigate(props.navToScreenName);
      } else {
        signOut();
      }

    }}>
      <View style={styles.optionCompStyle}>
        {/* for the icon */}
        <View style={styles.iconStyle}>
          <Icon name={props.iconName} size={30} color="white"/>
        </View>
        {/* for the title and description */}
        <View style={styles.titleDescStyle}>
          <Text style={styles.title}>{props.titleVal}</Text>
          {props.descriptionVal === null ? (
            <View></View>
          ) : (
            <Text style={styles.description}>{props.descriptionVal}</Text>
          )}

        </View>
      </View>
    </TouchableOpacity>

  );
}

export default OptionsComp;
const styles = StyleSheet.create({
  optionCompStyle: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
    width: (windowWidth * 0.95),
    padding: '2%',
    borderColor: 'white',
    borderWidth: 1
  },
  titleDescStyle: {
    flexDirection: 'column'
  },
  title:{
    color: 'white',
    fontSize: 16
  },
  description:{
    color: 'white',
    fontSize: 12
  },
  iconStyle: {
    paddingTop: 5,
    paddingRight: 10
  }
})
