import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
//components
import TitleSection from "./TitleSection";
import GridCardList from "../../components/GridCardList";
//styles & utils
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default function FavoritesList({ navigation }) {
  resp

  if (!logged)
    return (
      <View style={style.box}>
        <Text style={style.text}>Żeby dodawać do ulubionych, musisz być zalogowany.</Text>
      </View>
    );

  return (
    <ScrollView style={style.container}>
      <TitleSection
        styles={style.titleBox}
        title="Twoje ulubione wydarzenia i miejsca"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      <GridCardList navigation={navigation} />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.extra,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    ...STYLES.fonts.bold,
    fontSize: 16,
    textAlign: "center",
    maxWidth: 300,
    opacity: 0.5
  },
  titleBox: { paddingVertical: 40 },
});
