import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import ScreenTitleSection from "../../components/ScreenTitleSection";
import SortButtonsSection from "../../components/SortButtonsSection";
import GridCardList from "../../components/GridCardList";

const FavoritesList = () => {
  return (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Twoje ulubione wydarzenia i miejsca"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <SortButtonsSection />
      <GridCardList />
    </ScrollView>
  );
};
export default FavoritesList;

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
});
