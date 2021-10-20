import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
//components
import ProgressSection from "../ProgressSection";
//utils & styles
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

//!!!important!!! add mechanic
export default function LoadingSection() {
  const handler = () => console.log("close");
  return (
    <TouchableWithoutFeedback onPress={handler}>
      <View style={style.container}>
        <View style={style.mask} />
        <View>
          <ProgressSection progress={0.5} styles={style.box} />
          <Text style={style.text}>Quick Week</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  mask: {
    backgroundColor: COLORS.extra,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.9,
  },
  box: { position: "relative", bottom: 0 },
  text: {
    marginTop: 15,
    ...STYLES.fonts.bold,
    color: COLORS.lightnest,
    textAlign: "center",
  },
});
