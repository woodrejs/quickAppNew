import React from "react";
import { View, StyleSheet } from "react-native";

import SortSectionButton from "./SortSectionButton";

const SortButtonsSection = () => {
  return (
    <View style={style.container}>
      <SortSectionButton title="najbliższy" />
      <SortSectionButton title="alfabetycznie" />
      <SortSectionButton title="termin" />
    </View>
  );
};

export default SortButtonsSection;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 20,
  },
});
