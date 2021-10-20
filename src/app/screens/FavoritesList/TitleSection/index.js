import React from "react";
import { View, Text, StyleSheet } from "react-native";
//utils
import { STYLES } from "../../../style/styles";

export default function TitleSection({ title, text = "", styles = {} }) {
  return (
    <View style={[style.container, styles]}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.text}>{text}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: { width: "90%" },
  title: {
    fontSize: 30,
    ...STYLES.fonts.bold,
    paddingTop: 5,
  },
  text: {
    paddingTop: 15,
    fontSize: 12,
    lineHeight: 18,
    ...STYLES.fonts.regular,
  },
});
