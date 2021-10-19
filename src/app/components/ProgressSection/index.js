import React from "react";
import { StyleSheet, View } from "react-native";
//style & utils
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default function ProgressSection({ progress, styles }) {
  return (
    <View style={[style.container, styles]}>
      <View style={style.row}>
        <Sphere active={isActive(progress, 0.2)} />
        <Sphere active={isActive(progress, 0.6)} />
        <Sphere active={isActive(progress, 0.8)} />
      </View>
      <View style={style.row}>
        <Sphere active={isActive(progress, 0.3)} />
        <Sphere active={isActive(progress, 0.9)} />
        <Sphere active={isActive(progress, 0.4)} />
      </View>
    </View>
  );
}
function Sphere({ active = false }) {
  return <View style={style.sphereLg}>{active && <View style={style.sphereSm} />}</View>;
}
function isActive(progress, val) {
  return val <= progress ? true : false;
}
const style = StyleSheet.create({
  container: {
    position: "absolute",
    height: 45,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 50,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 75,
  },
  sphereLg: {
    backgroundColor: COLORS.lightnest,
    height: 20,
    width: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    ...STYLES.shadow,
  },
  sphereSm: {
    borderRadius: 50,
    backgroundColor: COLORS.extra,
    height: 15,
    width: 15,
  },
});
