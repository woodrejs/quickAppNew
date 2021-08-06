import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import TitleSection from "../../components/TitleSection";
import FilterSection from "../../components/FilterSection";
import VerticalList from "../../components/VerticalList";

const EventList = () => {
  return (
    <ScrollView style={style.container}>
      <TitleSection
        title="Zobacz najnowsze wydarzenia"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FilterSection />
      <VerticalList />
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
