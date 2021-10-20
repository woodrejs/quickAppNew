import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
//components
import Badge from "../Badge";
//styles & utils
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import useFilters from "../../../hooks/useFilters";
import { stacksNames } from "../../../utils/stacksNames";

export default function HorizontalSquareList({ data, navigation }) {
  return (
    <ScrollView horizontal>
      {data.map((square) => (
        <Square key={square.id} data={square} navigation={navigation} />
      ))}
    </ScrollView>
  );
}
function Square({ data, navigation }) {
  const { url, title, variant, filters } = data;
  const [setFilters] = useFilters(variant, filters);

  const handler = () => {
    setFilters();
    navigation.navigate(stacksNames[variant]);
  };

  return (
    <TouchableOpacity style={style.squareContainer} onPress={handler}>
      <ImageBackground
        style={style.squareBox}
        imageStyle={style.squareImage}
        source={url}
      >
        <Badge name="eye" styles={style.badge} />
      </ImageBackground>
      <Text style={style.squareTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  squareContainer: { marginRight: 5, paddingBottom: 5 },
  squareBox: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    position: "relative",
    ...STYLES.shadow,
  },
  squareImage: { borderRadius: 10, opacity: 0.7 },
  squareTitle: {
    ...STYLES.fonts.bold,
    color: COLORS.dark,
    fontSize: 12,
    textAlign: "center",
    paddingTop: 15,
  },
  badge: { top: 5, right: 5 },
});
