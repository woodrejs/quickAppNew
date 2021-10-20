import React from "react";
import { View, StyleSheet, Image } from "react-native";
//components
import ProgressSection from "../../components/ProgressSection";
//utils
import { COLORS } from "../../style/colors";

export default function Intro({ progress }) {
  return (
    <View style={style.container}>
      <Image style={style.box} source={require("./tower.jpg")} />
      <Image style={style.logo} source={require("./logo.png")} />
      <ProgressSection progress={progress} />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.extra,
    position: "relative",
  },
  title: {
    textTransform: "uppercase",
  },
  box: { height: "100%", width: "100%", opacity: 0.2 },
  logo: { position: "absolute", top: 50, left: 30 },
});
