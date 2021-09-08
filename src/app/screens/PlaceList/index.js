import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import ScreenTitleSection from "../../components/ScreenTitleSection";
import SortButtonsSection from "../../components/SortButtonsSection";
import VerticalCardList from "../../components/VerticalCardList";

const PlaceList = () => {
  return (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Odkryj najciekawsze miejsca"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <SortButtonsSection />
      <VerticalCardList />
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
