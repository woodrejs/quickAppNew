import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { COLORS } from "../../../style/colors";

const SectionItem = ({ title }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default SectionItem;

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.black,
    fontSize: 10,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
