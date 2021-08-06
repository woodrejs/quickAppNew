import React from "react";
import { View, StyleSheet } from "react-native";

import ListItem from "./ListItem";

const VerticalList = () => {
  return (
    <View style={style.container}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </View>
  );
};

export default VerticalList;

const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 20,
  },
});
