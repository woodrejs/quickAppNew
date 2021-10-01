import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import VerticalListCard from "./VerticalListCard";

const VerticalCardList = ({ list, navigation }) => {
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);

  return (
    <View style={style.container}>{list && isInArray(list, favorites, navigation)}</View>
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
    counter[item.uid] = true;
  });

  return arr1.map((item) =>
    counter[item.id] ? (
      <VerticalListCard data={item} key={item.id} navigation={navigation} inFavorite />
    ) : (
      <VerticalListCard data={item} key={item.id} navigation={navigation} />
    )
  );
}
