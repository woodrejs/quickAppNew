import React from "react";
import { View, StyleSheet } from "react-native";

import SectionButton from "./SectionButton";

const ListButtonsSection = () => {
  return (
    <View style={style.container}>
      <SectionButton type="favorite" />
      <SectionButton type="schedule" />
    </View>
  );
};

export default ListButtonsSection;

const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
