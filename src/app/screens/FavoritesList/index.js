import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
//components
import TitleSection from "./TitleSection";
import GridCardList from "../../components/GridCardList";
//styles & utils
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default React.memo(function FavoritesList() {
  //hooks
  const { favorites, logged } = useSelector(({ userSlice }) => userSlice);

  return (
    <ScrollView style={style.container}>
      <TitleSection
        styles={style.titleBox}
        title="Twoje ulubione wydarzenia i miejsca"
        text="Twórz listę interesujących Cię wydarzeń i miejsc. Trzymaj je w jednym miejscu i nie przegap żądnego. "
      />

      {!favorites.length && (
        <View style={style.box}>
          {logged && <Text style={style.text}>Brak wydarzeń.</Text>}
          {!logged && <Text style={style.text}>Zaloguj się, żeby dodawać ulubione.</Text>}
        </View>
      )}

      <GridCardList list={favorites} />
    </ScrollView>
  );
});

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.extraLight,
  },
  box: {
    backgroundColor: COLORS.extraLighter,
    borderRadius: 10,
    minHeight: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    ...STYLES.fonts.bold,
    fontSize: 16,
    textAlign: "center",
    maxWidth: 300,
    opacity: 0.5,
  },
  titleBox: { paddingVertical: 40 },
});
