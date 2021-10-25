import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import VerticalListCard from "./VerticalListCard";

export default React.memo(function VerticalCardList({ list }) {
  //hooks
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);

  if (!list.length) return null;

  return <View style={style.container} children={isInArray(list, favorites)} />;
});

const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 20,
  },
});

//!!!important!!!
function isInArray(arr1, arr2) {
  let counter = {};

  arr2.forEach((item) => {
    counter[item.id] = true;
  });

  return arr1.map((item) => (
    <VerticalListCard data={item} key={item.id} inFavorite={counter[item.id] ?? false} />
  ));
}
