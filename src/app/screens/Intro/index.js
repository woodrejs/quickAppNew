import React from "react";
import { View, StyleSheet } from "react-native";
//components
import Logo from "./Logo";
//utils
import { STYLES } from "../../style/styles";
import { COLORS } from "../../style/colors";

export default React.memo(function Intro() {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <Logo />
      </View>
    </View>
  );
});

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
  box: {
    ...STYLES.shadow,
    borderRadius: 100,
    backgroundColor: COLORS.extra,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 85,
    width: 85,
  },
});
