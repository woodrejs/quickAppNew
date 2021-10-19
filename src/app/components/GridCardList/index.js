import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
//components
import GridListItem from "./GridListItem";

const GridCardList = ({ navigation }) => {
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);

  return (
    <View style={style.container}>
      {favorites.map((item) => (
        <GridListItem key={item.id} data={item} navigation={navigation} />
      ))}
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
