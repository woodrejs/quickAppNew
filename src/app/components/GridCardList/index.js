import React from "react";
import { View, StyleSheet } from "react-native";
//components
import GridListItem from "./GridListItem";

export default React.memo(function GridCardList({ list }) {
  return (
    <View style={style.container}>
      {list.map((item) => (
        <GridListItem key={item.id} data={item} />
      ))}
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
