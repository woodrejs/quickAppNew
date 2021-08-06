import React from "react";
import { View, StyleSheet } from "react-native";

import SectionItem from "./SectionItem";

const FilterSection = () => {
  return (
    <View style={style.container}>
      <SectionItem title="najbliższy" />
      <SectionItem title="alfabetycznie" />
      <SectionItem title="termin" />
    </View>
  );
};

export default FilterSection;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 20,
  },
});
