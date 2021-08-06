import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import TitleSection from "../../components/TitleSection";
import FilterSection from "../../components/FilterSection";
import VerticalList from "../../components/VerticalList";

const PlaceList = () => {
  return (
    <ScrollView style={style.container}>
      <TitleSection
        title="Odkryj najciekawsze miejsca"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FilterSection />
      <VerticalList />
    </ScrollView>
  );
};
export default PlaceList;

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
});
