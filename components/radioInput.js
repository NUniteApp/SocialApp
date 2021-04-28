import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";


function RadioInput(props) {

  const [checked, setChecked] = React.useState("");
  return (
    <View>

      {/* Start Two Col Container */}
      <View style={styles.twoColContainer}>
        {/* Start Col Container View*/}
        <View style={styles.colContainer}>
          {/*separator 1*/}
          <View style={styles.radioBtnView}>
            <Text style={styles.radioTextStyle}>
              Nudity
            </Text>
            <RadioButton
              uncheckedColor="white"
              color="lightgreen"
              value="nudity"
              status={checked === "nudity" ? "checked" : "unchecked"}
              onPress={() => setChecked("nudity")}
            />
          </View>
          {/* End separator 1 */}

          {/* separator 2*/}
          <View style={styles.radioBtnView}>
            <Text style={styles.radioTextStyle}>
              Harassment
            </Text>
            <RadioButton
              uncheckedColor="white"
              color="lightgreen"
              value="harassment"
              status={checked === "harassment" ? "checked" : "unchecked"}
              onPress={() => setChecked("harassment")}
            />
          </View>
          {/* End separator 2 */}

          {/* separator 3*/}
          <View style={styles.radioBtnView}>
            <Text style={styles.radioTextStyle}>
              Violence
            </Text>
            <RadioButton
              uncheckedColor="white"
              color="lightgreen"
              value="violence"
              status={checked === "violence" ? "checked" : "unchecked"}
              onPress={() => setChecked("violence")}
            />
          </View>
          {/* End separator 3 */}

          {/* separator 4*/}
          <View style={styles.radioBtnView}>
            <Text style={styles.radioTextStyle}>
              Self-Injury
            </Text>
            <RadioButton
              uncheckedColor="white"
              color="lightgreen"
              value="self-injury"
              status={checked === "self-injury" ? "checked" : "unchecked"}
              onPress={() => setChecked("self-injury")}
            />
          </View>
          {/* End separator 4 */}
        </View>
        {/* End Col Container View*/}

        {/* -------------------------------------------------------- */}

        {/* Start Col Container View*/}
        <View style={styles.colContainer}>
          {/* separator 5*/}
          <View style={styles.radioBtnView}>
            <Text style={styles.radioTextStyle}>
              False Info
            </Text>
            <RadioButton
              uncheckedColor="white"
              color="lightgreen"
              value="false-info"
              status={checked === "false-info" ? "checked" : "unchecked"}
              onPress={() => setChecked("false-info")}
            />
          </View>
          {/* End separator 5 */}

          {/* separator 6*/}
          <View style={styles.radioBtnView}>
            <Text style={styles.radioTextStyle}>
              Spam
            </Text>
            <RadioButton
              uncheckedColor="white"
              color="lightgreen"
              value="spam"
              status={checked === "spam" ? "checked" : "unchecked"}
              onPress={() => setChecked("spam")}
            />
          </View>
          {/* End separator 6 */}

          {/* separator 7*/}
          <View style={styles.radioBtnView}>
            <Text style={styles.radioTextStyle}>
              Terrorism
            </Text>
            <RadioButton
              uncheckedColor="white"
              color="lightgreen"
              value="terrorism"
              status={checked === "terrorism" ? "checked" : "unchecked"}
              onPress={() => setChecked("terrorism")}
            />
          </View>
          {/* End separator 7 */}


          {/* separator 8*/}
          <View style={styles.radioBtnView}>
            <Text style={styles.radioTextStyle}>
              Something Else
            </Text>
            <RadioButton
              uncheckedColor="white"
              color="lightgreen"
              value="something-else"
              status={checked === "something-else" ? "checked" : "unchecked"}
              onPress={() => setChecked("something-else")}
            />
          </View>
          {/* End separator 8 */}
        </View>
        {/* End Col Container View*/}
      </View>
      {/*  End Two Container View*/}


    </View>
  );
}

export default RadioInput;
const styles = StyleSheet.create({
  radioTextStyle: {
    color: "white",
    paddingTop: 6,
  },
  radioBtnView: {
    flexDirection: "row",
    justifyContent: 'space-between'

  },
  twoColContainer: {
    flexDirection: 'row'
  },
  colContainer: {
    margin: '5%'
  }
});
