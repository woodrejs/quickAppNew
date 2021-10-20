import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { COLORS } from "../../../style/colors";

const WeekSliderButton = ({ title }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default WeekSliderButton;

const style = StyleSheet.create({
  container: {
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.grey,
    fontSize: 14,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
