import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import ScreenTitleSection from "../../components/ScreenTitleSection";
import SortButtonsSection from "../../components/SortButtonsSection";
import VerticalCardList from "../../components/VerticalCardList";
import ListPaginationButton from "../../components/ListPaginationButton";

const EventList = () => {
  return (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Zobacz najnowsze wydarzenia"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <SortButtonsSection />
      <VerticalCardList />
      <ListPaginationButton />
    </ScrollView>
  );
};
export default EventList;

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
});
