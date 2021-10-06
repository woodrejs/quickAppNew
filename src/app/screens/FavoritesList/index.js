import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ScreenTitleSection from "../../components/ScreenTitleSection";
import GridCardList from "../../components/GridCardList";
import { findFavorites } from "../../utils/strapi";
import { setFavorites } from "../../redux/user.slice";
import LoadingSection from "../../components/LoadingSection";
import { setError } from "../../redux/app.slice";

const FavoritesList = () => {
  const jwt = useSelector(({ userSlice }) => userSlice.jwt);
  const favorites = useSelector(({ userSlice }) => userSlice.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      try {
        const data = await findFavorites(jwt);
        dispatch(setFavorites(data));
      } catch (error) {
        dispatch(setError([true, "Błąd podczas pobierania danych."]));
      }
    }
    console.log("tutaj");
    jwt && init();
  }, [jwt]);

  return favorites.lenght ? (
    <LoadingSection />
  ) : (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Twoje ulubione wydarzenia i miejsca"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <GridCardList />
    </ScrollView>
  );
};
export default FavoritesList;

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
});
