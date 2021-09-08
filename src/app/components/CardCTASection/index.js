import React from "react";
import { View, StyleSheet } from "react-native";

import CardSectionButton from "./CardSectionButton";

const CardCTASection = () => {
  return (
    <View style={style.container}>
      <CardSectionButton type="favorite" />
      <CardSectionButton type="schedule" />
    </View>
  );
};

export default CardCTASection;

const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
