import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import VerticalListCard from "./VerticalListCard";

const VerticalCardList = ({ list, navigation }) => {
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);

  return (
    <View style={style.container} children={isInArray(list, favorites, navigation)} />
  );
};

export default VerticalCardList;

const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 20,
  },
});

function isInArray(arr1, arr2, navigation) {
  let counter = {};

  arr2.forEach((item) => {
    counter[item.id] = true;
  });

  return arr1.map((item) => (
    <VerticalListCard
      data={item}
      key={item.id}
      navigation={navigation}
      inFavorite={counter[item.id] ?? false}
    />
  ));
}
