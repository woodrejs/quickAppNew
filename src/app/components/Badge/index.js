import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import Icon from "../Icon";

export default function Badge({ name, styles }) {
  return (
    <View style={[style.container, styles]}>
      <Icon name={name} size={15} color={COLORS.lightnest} />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.extra,
    ...STYLES.shadow,
    borderRadius: 50,
    padding: 3,
    position: "absolute",
  },
});
