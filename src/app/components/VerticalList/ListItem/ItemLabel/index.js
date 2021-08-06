import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { COLORS } from "../../../../style/colors";

const ItemLabel = ({ title }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default ItemLabel;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: "25%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    color: COLORS.black,
  },
});
