import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import GridListItem from "./GridListItem";

import { setFavorites } from "../../redux/user.slice";
import { findFavorites } from "../../utils/strapi";

const GridCardList = () => {
  const dispatch = useDispatch();
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);
  const userIsLogged = useSelector(({ userSlice }) => userSlice.logged);
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);

  return userIsLogged ? (
    <View style={style.container}>
      {favorites.map((item) => (
        <GridListItem key={item.id} data={item} />
      ))}
    </View>
  ) : (
    <View>
      <Text>Musisz być zalogowany.</Text>
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
