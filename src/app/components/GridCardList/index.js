import React from "react";
import { View, StyleSheet } from "react-native";

import GridListItem from "./GridListItem";

const GridCardList = () => {
  return (
    <View style={style.container}>
      <GridListItem />
      <GridListItem />
      <GridListItem />
      <GridListItem />
      <GridListItem />
    </View>
  );
};

export default GridCardList;

const style = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
