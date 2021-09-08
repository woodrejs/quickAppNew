import React from "react";
import { View, StyleSheet } from "react-native";

import VerticalListCard from "./VerticalListCard";

const VerticalCardList = () => {
  return (
    <View style={style.container}>
      <VerticalListCard />
      <VerticalListCard />
      <VerticalListCard />
      <VerticalListCard />
      <VerticalListCard />
    </View>
  );
};

export default VerticalCardList;

const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 20,
  },
});
