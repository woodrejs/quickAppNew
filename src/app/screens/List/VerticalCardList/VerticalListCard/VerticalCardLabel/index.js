import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { COLORS } from "../../../../../style/colors";
import { STYLES } from "../../../../../style/styles";

const VerticalCardLabel = ({ title }) => {
  return (
    <View style={style.container}>
      <Text numberOfLines={1} style={style.title}>
        {title}
      </Text>
    </View>
  );
};

export default VerticalCardLabel;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: "30%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 18,
    ...STYLES.fonts.bold,
    color: COLORS.black,
  },
});
