import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, StyleSheet } from "react-native";
//components
import SearchSection from "../../components/SearchSection";
import VerticalList from "../../components/VerticalList";

export default function Search() {
  const list = useSelector(({ listSlice }) => listSlice.search.list);

  return (
    <ScrollView style={style.container}>
      <SearchSection />
      <VerticalList list={list} styles={style.list} />
    </ScrollView>
  );
}
const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
  list: {
    marginTop: 20,
  },
});
