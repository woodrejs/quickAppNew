import React from "react";
import { View, Text } from "react-native";
import { style } from "./index.style";
import { useSelector } from "react-redux";
import ProgressBarCircle from "../../components/ProgressBarCircle";

const Intro = () => {
  const moviesLoadingProgres = useSelector(({ homeSlice }) => homeSlice.movies.loaded)
    ? 1 / 6
    : 0;
  const playsLoadingProgres = useSelector(({ homeSlice }) => homeSlice.plays.loaded)
    ? 1 / 6
    : 0;
  const booksLoadingProgres = useSelector(({ homeSlice }) => homeSlice.books.loaded)
    ? 1 / 6
    : 0;
  const sportLoadingProgres = useSelector(({ homeSlice }) => homeSlice.sport.loaded)
    ? 1 / 6
    : 0;
  const placesLoadingProgres = useSelector(({ homeSlice }) => homeSlice.places.loaded)
    ? 1 / 6
    : 0;
  const mainLoadingProgres = useSelector(({ homeSlice }) => homeSlice.main.loaded)
    ? 1 / 6
    : 0;

  return (
    <View style={style.container}>
      <Text style={style.title}>quick week</Text>
      <ProgressBarCircle
        progress={
          moviesLoadingProgres +
          playsLoadingProgres +
          booksLoadingProgres +
          sportLoadingProgres +
          placesLoadingProgres +
          mainLoadingProgres
        }
        size={100}
      />
    </View>
  );
};
export default Intro;
