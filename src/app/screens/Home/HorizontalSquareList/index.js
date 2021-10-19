import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import Badge from "../Badge";

export default function HorizontalSquareList({ data }) {
  return (
    <ScrollView horizontal>
      {data.map((square) => (
        <Square key={square.id} data={square} />
      ))}
    </ScrollView>
  );
}
function Square({ data: { url, title } }) {
  const handler = () => console.log("handler");
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
    color: COLORS.grey,
    fontSize: 12,
    textAlign: "center",
    paddingTop: 15,
  },
  badge: { top: 5, right: 5 },
});
