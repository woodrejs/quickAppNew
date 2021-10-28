import React from "react";
import * as Animatable from "react-native-animatable";
import { StyleSheet } from "react-native";
//utils
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default function ErrorText({ error }) {
  if (!error) return null;

  return (
    <Animatable.Text
      style={style.error}
      children={error}
      animation="fadeIn"
      duration={300}
      useNativeDriver
    />
  );
}

const style = StyleSheet.create({
  error: {
    ...STYLES.fonts.bold,
    fontSize: 11,
    color: COLORS.warning,
    position: "absolute",
    bottom: -20,
  },
});
