import React from "react";
import {View, Text, StyleSheet} from "react-native";
import RadioInput from "../../../components/radioInput";


function ProfileSettingsScreen(props) {
  // const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
      <RadioInput />
    </View>
  );
}

export default ProfileSettingsScreen;
const styles = StyleSheet.create({
  container: {

  }

});
