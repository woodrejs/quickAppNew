import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import TitleSection from "../../components/TitleSection";
import FilterSection from "../../components/FilterSection";
import GridList from "../../components/GridList";

const FavoritesList = () => {
  return (
    <ScrollView style={style.container}>
      <TitleSection
        title="Twoje ulubione wydarzenia i miejsca"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FilterSection />
      <GridList />
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
